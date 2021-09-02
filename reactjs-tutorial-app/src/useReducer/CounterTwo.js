import React, { useReducer } from "react";

// useReducer with State & Objects
const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return  {...state, firstCounter: state.firstCounter+action.value};
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>firstCounter - {count.firstCounter}</div>
      <div>secondCounter - {count.secondCounter}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment By 1
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement By 1
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment By 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement By 5
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment Counter 2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement Counter 2
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default CounterTwo;
