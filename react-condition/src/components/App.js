import React from "react";
import Form from './Form';

let isLogin = false;

let isDone = true;

const strikeThrough = {textDecoration: "line-through"};

function App() {
  return (
    <div className="container">
    {isLogin ? <h1 style={{color: "red"}}>Hello</h1> : <Form/>}
    <p style={isDone && strikeThrough}>Hello From other side</p>

    </div>
  );
}

export default App;
