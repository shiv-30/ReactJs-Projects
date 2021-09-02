import React, {useState} from 'react';
import Time from './Time';


function App() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count+1);
  }

  function decrease() {
    setCount(count-1);
  }

  function initialState() {
    setCount(0);
  }

  return (
    <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <button onClick={initialState}>0</button>
    <Time />
    </div>
  );
}

export default App;
