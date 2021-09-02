const redux = require("redux");
const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// Reducer
// (previousState, action) => newState

const initialCakeState = {
  numofCakes: 10,
};

const initialIceCreamState = {
  numofIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubcribe = store.subscribe(() =>
  {}
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubcribe();
