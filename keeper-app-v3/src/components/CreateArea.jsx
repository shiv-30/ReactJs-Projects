import React, {useState} from "react";


function CreateArea(props) {

  const [note, setNote] = useState({
                                      title: "",
                                      content:""
                                  });

  function handleChange(event) {
    const {value, name} = event.target;
    setNote(prevValue => {
      return {
                ...prevValue, 
                [name]:value
      }});
  }

 
  

  return (
    <div>
      <form>
        <input onChange={handleChange}  name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="ContentTake a note..." rows="3" value={note.content} />
        <button onClick={(event) => {
          event.preventDefault();
          props.onAdd(note);
          setNote({
              title: "",
              content: "",
          });
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
