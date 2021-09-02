import React, { useEffect, useState } from "react";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // Always take function and useEffect always run after render method.
//   useEffect(() => {
//     alert("I am clicked");
//   });

// Only works with first time render
// useEffect(() => {
//      alert("I am clicked");
//    }, []);

// Only works when num1 is clicked
useEffect(() => {
    document.title = `I am clicked ${num1} times`
    
    
}, [num1]);
   

  return (
    <>
      <button
        onClick={() => {
          setNum1(num1 + 1);
          
        }}
      >
        click me {num1}
      </button>
      <br />
      <br/>
      <button
        onClick={() => {
          setNum2(num2 + 1);
        }}
      >
        click me {num2}
      </button>
    </>
  );
};

export default App;
