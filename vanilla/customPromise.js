const STATE = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

class CustomPromise {
  #state = STATE.PENDING;
  #value;

  #thenSubsciptions = [];
  #catchSubsciptions = [];

  #successCallbackHandler = this.#successCallback.bind(this);
  #failureCallbackHandler = this.#failureCallback.bind(this);

  constructor(cb) {
    try {
      cb(this.#successCallbackHandler, this.#failureCallbackHandler);
    } catch (e) {
      this.#failureCallback(e);
    }
  }

  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenSubsciptions.forEach((callback) => {
        // console.log(callback, this.#value);
        callback(this.#value);
      });
      this.#thenSubsciptions = [];
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchSubsciptions.forEach((callback) => {
        callback(this.#value);
      });
      this.#catchSubsciptions = [];
    }
  }

  #successCallback(successValue) {
    queueMicrotask(() => {
      if (this.#state === STATE.FULFILLED) return;

      if (successValue instanceof CustomPromise) {
        successValue.then(
          this.#successCallbackHandler,
          this.#failureCallbackHandler
        );
        return;
      }

      this.#state = STATE.FULFILLED;
      this.#value = successValue;
      this.#runCallbacks();
    });
  }

  #failureCallback(errorMsg) {
    queueMicrotask(() => {
      if (this.#state === STATE.REJECTED) return;

      if (errorMsg instanceof CustomPromise) {
        errorMsg.then(
          this.#successCallbackHandler,
          this.#failureCallbackHandler
        );
        return;
      }

      this.#state = STATE.REJECTED;
      this.#value = errorMsg;
      this.#runCallbacks();
    });
  }

  then(fulfillmentHandler, rejectionHandler) {
    return new CustomPromise((resolve, reject) => {
      this.#thenSubsciptions.push((result) => {
        if (fulfillmentHandler == null) {
          resolve(result);
          return;
        }
        try {
          resolve(fulfillmentHandler(result));
        } catch (e) {
          reject(e);
        }
      });
      this.#catchSubsciptions.push((result) => {
        if (rejectionHandler == null) {
          reject(result);
          return;
        }
        // console.log(rejectionHandler);
        try {
          reject(rejectionHandler(result));
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  catch(rejectionHandler) {
    // console.log(rejectionHandler, "Catch");
    return this.then(null, rejectionHandler);
  }

  finally(finallyCb) {
    return this.then(
      (result) => {
        try {
          finallyCb();
          return result;
        } catch (e) {
          throw Error(e);
        }
      },
      (result) => {
        try {
          finallyCb();
          return result;
        } catch (e) {
          throw Error(e);
        }
      }
    );
  }

  static resolve(value) {
    return new CustomPromise((resolve, reject) => resolve(value));
  }
  static reject(message) {
    return new CustomPromise((resolve, reject) => reject(message));
  }

  static all(promiseList) {
    let results = [];
    let completedPromises = 0;

    if (promiseList.length === 0) return;

    return new CustomPromise((resolve, reject) => {
      for (let i = 0; i < promiseList.length; i++) {
        promiseList[i]
          .then((val) => {
            results[i] = val;
            completedPromises++;

            if (completedPromises === promiseList.length) resolve(results);
          })
          .catch((e) => reject(e));
      }
    });
  }

  static allSettled(promiseList) {
    let results = [];
    let completedPromises = 0;

    if (promiseList.length === 0) return;

    return new CustomPromise((resolve, reject) => {
      for (let i = 0; i < promiseList.length; i++) {
        promiseList[i]
          .then((val) => {
            results[i] = val;
            completedPromises++;

            if (completedPromises === promiseList.length) resolve(results);
          })
          .catch((e) => {
            results[i] = e;
            completedPromises++;

            if (completedPromises === promiseList.length) resolve(results);
          });
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

  static any(promiseList) {
    let errors = [];
    let rejectedPromises = 0;

    if (promiseList.length === 0) return;

    return new CustomPromise((resolve, reject) => {
      for (let i = 0; i < promiseList.length; i++) {
        promiseList[i]
          .then((val) => resolve(val))
          .catch((e) => {
            errors[i] = e;
            rejectedPromises++;

            if (rejectedPromises === promiseList.length)
              reject(new AggregateError(errors, "All Promises Rejected!"));
          });
      }
    });
  }
}

// const test = new CustomPromise((resolve, reject) => {
//   resolve("1");
//   reject("Error!");
// });

const p3 = CustomPromise.reject("Resolve 3");
const p2 = CustomPromise.resolve("Resolve 2");
const p4 = CustomPromise.resolve("Resolve 4");

// p2.catch((err) => console.log(err));
// CustomPromise.race([p3, p2, p4]).catch((values) => console.log(values));
CustomPromise.race([p3, p2, p4])
  .then((values) => console.log(values))
  .catch((err) => console.log(err));

// test
//   .finally(() => {
//     throw Error("Finally");
//   })
//   .then((value) => console.log(value));

// p2.then((value) => console.log(value));
// const p = new Promise((resolve, reject) => {
//   reject("Error!");
//   resolve("1");
// }); //{ status: 'PENDING', data: undefined }

// p.finally(() => {
//   console.log("Finally");
//   throw Error("finally");
// }).then((value) => console.log(value));
// .catch((err) => console.log(err));

// After resolve has been called => { status: 'FULFILLED', data: returned data}
// After reject has been called => { status: 'REJECTED', data: error message }

// Accept the callback
// Call the promise consumers
