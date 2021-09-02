import React, {useState} from "react";


function App() {
  
  const [Contact, setContact] = useState({
    fName: "",
    lName:"",
    email:""
  });

  const [heading, setHeading] = useState("Hello");

  function handleOnChange(event) {
    const {value, name} = event.target;
    setContact(prevValue => ({...prevValue, [name]: value}))
 }

  function handleClick(event) {
    event.preventDefault();
    setHeading(heading + " " + Contact.fName + " " + Contact.lName);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <p>{Contact.email}</p>
      <form>
        <input onChange={handleOnChange} value={Contact.fName} type="text" name="fName" placeholder="First Name" />
        <input onChange={handleOnChange} value={Contact.lName} type="text" name="lName" placeholder="Last Name" />
        <input onChange={handleOnChange} value={Contact.email} type="text" name="email" placeholder="Email" />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
