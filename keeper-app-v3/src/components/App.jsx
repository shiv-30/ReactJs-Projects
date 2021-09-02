import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteObj) {
    setNotes(prevNotes =>  {
      return [...prevNotes, noteObj]
    });
  }

  function deleteNote(id) {

    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  } 

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteObj, index) => {
        return <Note 
          key={index}
          id={index}
          title={noteObj.title} 
          content={noteObj.content}
          onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
