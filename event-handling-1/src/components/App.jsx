import React, {useState} from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  
  function handleClick(event) {
    // setHeadingText('Submitted');
       setHeadingText("Hello " + name);
       event.preventDefault();
       
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleOnChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleClick}>
      <input onChange={handleOnChange} type="text" placeholder="What's your name?" value={name} />
      <button type="submit"
       onMouseOver={handleMouseOver}
       onMouseOut={handleMouseOut}
       style={{backgroundColor : isMouseOver ? 'black': 'white'}}
       >Submit</button>
       </form>
    </div>
  );
}

export default App;

/* <input onChange={handleOnChange} type="text" placeholder="What's your name? value={name}" /> */