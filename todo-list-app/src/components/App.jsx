import React, {useState} from "react";
import TodoItems from "./TodoItems";

function App() {
  const [inputText, setInputText]=useState("");
  const [items, setItems] = useState([]);
  

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setItems(prevItems => {
      return [...prevItems, inputText]
    });
    setInputText("");
  }

  function deleteItem(id) {
    
    setItems(prevItems => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      )
    })
  }

  

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form>
        <input onChange={handleChange} value={inputText} type="text" />
        <button type="submit" onClick={handleClick}>
          <span>Add</span>
        </button>
       </form>
      </div>
      
      <div>
        <ul>
          {items.map((todoItem, index) => (
          <TodoItems
            key = {index}
            id={index} 
            text={todoItem}
            onChecked={deleteItem}
            />)
          )}

        </ul>
      </div>
    </div>
  );
}

export default App;

// uuid package for unique id generation