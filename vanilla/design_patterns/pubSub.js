function Events() {
  this.subscriptionList = new Map();
  this.subscriptionListOnce = new Map();
  this.subscriptionListAsync = new Map();

  this.subscribe = (name, callback) => {
    if (!this.subscriptionList.has(name)) {
      this.subscriptionList.set(name, [callback]);
    } else {
      const callbackList = this.subscriptionList.get(name);
      this.subscriptionList.set(name, [...callbackList, callback]);
    }

    return {
      remove: () => {
        // this, callback, name are accessed in the returned fn due to the closure
        const callbackList = this.subscriptionList.get(name);
        const filteredList = callbackList.filter((cb) => cb !== callback);

        this.subscriptionList.set(name, filteredList);
      },
    };
  };

  // Upon execution of callback, the callback will be removed from the array associated with the event
  this.subscribeOnce = (name, callback) => {
    if (!this.subscriptionListOnce.has(name)) {
      this.subscriptionListOnce.set(name, [callback]);
    } else {
      const callbackList = this.subscriptionListOnce.get(name);
      this.subscriptionListOnce.set(name, [...callbackList, callback]);
    }
  };

  // To execute the callbacks asynchronously stored agaist the registered events
  this.subscribeAsync = async (name) => {
    return new Promise((resolve, reject) => {
      if (!this.subscriptionListAsync.has(name)) {
        this.subscriptionListAsync.set(name, [resolve]);
      } else {
        const callbackList = this.subscriptionListAsync.get(name);
        this.subscriptionListAsync.set(name, [...callbackList, resolve]);
      }
    });
  };

  this.publish = (name, data) => {
    if (this.subscriptionList.has(name)) {
      const callbackList = this.subscriptionList.get(name);
      callbackList.forEach((callback) => {
        callback(data);
      });
    }

    if (this.subscriptionListOnce.has(name)) {
      const callbackListOnce = this.subscriptionListOnce.get(name);
      callbackListOnce.forEach((callback) => {
        callback(data);
      });

      this.subscriptionListOnce.set(name, []);
    }

    if (this.subscriptionListAsync.has(name)) {
      const callbackListOnce = this.subscriptionListAsync.get(name);
      callbackListOnce.forEach((callback) => {
        callback(data);
      });

      this.subscriptionListAsync.set(name, []);
    }
  };

  this.publishAll = (data) => {
    const entries = this.subscriptionList.entries();

    for (let [key, value] of entries) {
      value.forEach((callback) => {
        callback(data);
      });
    }
  };
}

const pubSubEvents = new Events();

pubSubEvents.subscribe("test-one", (value) => {
  console.log("1st" + " " + value);
});

pubSubEvents.subscribe("test-one", (value) => {
  console.log("2nd" + " " + value);
});
pubSubEvents.subscribe("test-two", (value) => {
  console.log("3rd" + " " + value);
});
pubSubEvents.subscribe("test-three", (value) => {
  console.log("4th" + " " + value);
});

pubSubEvents.subscribeOnce("test-five", (value) => {
  console.log("5th" + " " + value);
});

// secondSubs.remove();

// pubSubEvents.publish("test-five", "Subhro Mond 007");
// pubSubEvents.publishAll("Subhro Mond SSJ");
pubSubEvents.subscribeAsync("promise-test").then((value) => {
  console.log("Promise Value 1" + " " + value);
});
pubSubEvents.subscribeAsync("promise-test").then((value) => {
  console.log("Promise Value 2" + " " + value);
});

pubSubEvents.publish("promise-test", "Subhro Mond Promise");
