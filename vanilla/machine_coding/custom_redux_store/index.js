function createStore(reducer) {
  let state; // To store the application State

  let subscriptionList = []; // To store the list of subscribes to be executed on the store state update

  const getState = () => state; // To get the store state

  // To subscribe callback to the redux store
  const subscribe = (subscriber) => {
    subscriptionList.push(subscriber);

    // To unsubscribe callback from the store
    return () => {
      subscriptionList = subscriptionList.filter(
        (value, idx) => value !== subscriber
      );
    };
  };

  // To dispatch actions against the reducer to update the store state
  const dispatch = (action) => {
    state = reducer(state, action);
    subscriptionList.forEach((subscriber, idx) => subscriber(state)); // Once store state is updated, the subscribers are executed to get the latest state
  };

  dispatch({ type: "@@" }); // To initialize the store with the initial State

  return { getState, subscribe, dispatch }; // Making the methods available to the developers
}

let initialState = {
  counter: 0,
};

// The reducer to update the store state
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default:
      state;
  }
}

const store = createStore(counterReducer); // Initializing the store

let unsubscribeCounter = store.subscribe((state) => console.log(state.counter));

// Defining the Action Creator's
function increment() {
  return { type: "INCREMENT" };
}

function decrement() {
  return { type: "DECREMENT" };
}

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

unsubscribeCounter();

store.dispatch(increment()); // No Logs due to the subscribe function being unsubscribed in the previous line
