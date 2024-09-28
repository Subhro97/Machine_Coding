// Creating Instance of the promise

// Calling the then method multiple times

const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class CustomPromise {
  #successCbsArr = []; // To store list of consecutive then callbacks in multiple case
  #failureCbsArr = [];
  #value;
  #state = STATE.PENDING;
  #successCbBinded = this.#successCb.bind(this); // We bind the this as the Promise will be instantiated inside the class itself, hence, inorder for the this to behave properly
  #failureCbBinded = this.#failureCb.bind(this);

  constructor(cb) {
    try {
      cb(this.#successCbBinded, this.#failureCbBinded);
    } catch (err) {
      this.#failureCb(err);
    }
  }

  // To run all the then/catch cb's sequentially for multiples in next lines
  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#successCbsArr.forEach((callback) => {
        callback(this.#value);
      });

      this.#successCbsArr = []; // Reste the Array to clear previous callbacks. Suppose the file is changed where previous then cb's are removed, but if not reset then they will remain in the array
    }

    if (this.#state === STATE.REJECTED) {
      this.#failureCbsArr.forEach((callback) => {
        callback(this.#value);
      });

      this.#failureCbsArr = [];
    }
  }

  // to call the resolve method
  #successCb(value) {
    // Since promises are Async, hence, we need to wait untill the GEC code is executed, after which we need to push it into the callstack at highest priority using the microtask queue
    queueMicrotask(() => {
      if (this.#state == STATE.FULFILLED) return; // To call the resolve method only once, i.e., the first time

      // If a promise is passed as value inside the resolve method
      if (value instanceof CustomPromise) {
        value.then(this.#successCbBinded, this.#failureCbBinded); // when the child promise is settled, we need to pass it's value to the original parent promise, hence we call the parent promises success/failure Cb's
        return;
      }

      this.#value = value;
      this.#state = STATE.FULFILLED;
      this.#runCallbacks();
    });
  }

  // To call the reject method
  #failureCb(value) {
    queueMicrotask(() => {
      if (this.#state == STATE.REJECTED) return; // To call the reject method only once, i.e., the first time

      // If a promise is passed as value inside the reject method
      if (value instanceof CustomPromise) {
        value.then(this.#successCbBinded, this.#failureCbBinded); // when the child promise is settled, we need to pass it's value to the original parent promise, hence we call the parent promises success/failure Cb's
        return;
      }

      if (this.#failureCbsArr.length === 0) {
        throw new UncaughtPromiseError(value);
      }

      this.#value = value;
      this.#state = STATE.REJECTED;
      this.#runCallbacks();
    });
  }

  then(fulfillmentCb, rejectionCb) {
    return new CustomPromise((resolve, reject) => {
      this.#successCbsArr.push((result) => {
        // for then(undefined, ()=>{})
        if (fulfillmentCb == null) {
          resolve(result);
          return;
        }

        try {
          resolve(fulfillmentCb(result));
        } catch (e) {
          reject(e);
        }
      });

      this.#failureCbsArr.push((result) => {
        // for then(()=>{}, undefined)
        if (rejectionCb == null) {
          reject(result);
          return;
        }

        try {
          resolve(rejectionCb(result));
        } catch (e) {
          reject(e);
        }
      });

      this.#runCallbacks();
    });
  }

  // We need to retrn the promise or the value for failed cases
  catch(rejectionCb) {
    return this.then(undefined, rejectionCb);
  }

  // If there is p.then().finally().then(); hence we return result in both cases
  finally(cb) {
    return this.then(
      (result) => {
        cb();
        return result;
      },
      (result) => {
        cb();
        throw result;
      }
    );
  }

  static resolve(value) {
    return new CustomPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new CustomPromise((resolve, reject) => reject(reason));
  }

  static all(promises) {
    let res = [];
    let completedPromises = 0;

    return new CustomPromise((resolve, reject) => {
      if (promises.length != 0) {
        for (let i = 0; i < promises.length; i++) {
          promises[i]
            .then((val) => {
              completedPromises++;
              res[i] = val;

              if (completedPromises === promises.length) {
                resolve(res);
              }
            })
            .catch(reject);
        }
      }
    });
  }

  static allSettled(promises) {
    let completedPromises = 0;

    return new CustomPromise((resolve, reject) => {
      if (promises.length != 0) {
        for (let i = 0; i < promises.length; i++) {
          promises[i]
            .then((val) => {
              res[i] = {
                state: "FULFILLED",
                value: val,
              };
            })
            .catch((err) => {
              res[i] = {
                state: "REJECTED",
                reason: err,
              };
            })
            .finally(() => {
              completedPromises++;
              if (completedPromises === promises.length) {
                resolve(val);
              }
            });
        }
      }
    });
  }

  static any(promises) {
    let errors = [];
    let rejectedPromises = 0;

    return new CustomPromise((resolve, reject) => {
      if (promises.length != 0) {
        for (let i = 0; i < promises.length; i++) {
          promises[i]
            .then((val) => {
              resolve(val);
            })
            .catch((err) => {
              rejectedPromises++;
              errors[i] = err;

              if (rejectedPromises === promises.length) {
                reject(
                  new AggregateError(errors, "All promises were rejected") // Aggregate Errors combines all the erros into an array and returns it to the promise objects reason. The errors in the array are in the order of the promises, irrespective of their completion time
                );
              }
            });
        }
      }
    });
  }

  static race(promises) {
    return new CustomPromise((resolve, reject) => {
      if (promises.length != 0) {
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(resolve).catch(reject);
        }
      }
    });
  }
}

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error);

    this.stack = `(in promise) ${error.stack}`;
  }
}

// const testPromise = new CustomPromise((resolve, reject) => {
//   // throw Error("Test"); To handle this type of error we used UncaughtPromiseError

//   // setTimeout(() => {
//   //   resolve("Worked");
//   // }, 2000);

//   resolve(
//     new CustomPromise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Worked Promise");
//       }, 2000);
//     })
//   );
// });

// // 1st then's private callback arrs are different from 2nd then's callback arrays as the 2nd then is attached to the 1st then's returned promise
// testPromise
//   .then((res) => {
//     console.log("then", res);
//     return "42";
//   })
//   .catch((newVal) => {
//     console.log(newVal);
//   });

const p1 = CustomPromise.reject("E1");
const p2 = CustomPromise.resolve("E2");

CustomPromise.race([p1, p2])
  .then((values) => {
    console.log(values);
  })
  .catch((values) => {
    console.log(values);
  });
