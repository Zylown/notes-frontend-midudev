import "./style.css";
import { Note } from "./components/Note";
import { useState } from "react";
//{ notes = [] }
const App = (props) => {
  // console.log(typeof notes);
  // console.table(notes);
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setnewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setnewNote(event.target.value);
  };

  const handleSubmit = (e) => {
    console.log(newNote);
    e.preventDefault();
    const noteToAddToState = {
      id: crypto.randomUUID(),
      content: newNote,
      date: new Date().toISOString(),
      important: Boolean(Math.round(Math.random())),
    };
    console.log(noteToAddToState);
    // setNotes(notes.concat(noteToAddToState));
    setNotes([...notes, noteToAddToState]);
    setnewNote("");
  };
  // console.log(Boolean(Math.round(Math.random())));
  // console.log(new Date().toISOString());

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Solo mostrar importante" : "Show All"}
      </button>
      <ol>
        {notes
          .filter((note) => (showAll ? true : note.important))
          /*
          si showAll es true muestra todo, si no muestra solo los importantes
           Si showAll es true, se muestran todas las notas; de lo contrario, solo se muestran las notas con la propiedad important establecida en true
          */
          .map((value) => (
            <Note key={value.id} {...value} />
          ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}></input>
        <button type="submit">Crear nota</button>
      </form>
    </div>
  );
};

export default App;
/*
//2
<ol>
      {notes.map((value) => (
        <Note note={value} key={value.id} />
      ))}
    </ol>
*/
/*
 <ol>
      {notes.map((value) => {
        // return <li key={value.id}>{value.content}</li>;
        return (
          <ul key={value.id}>
            <li>
              {console.log(value.id)}
              <p>{value.content}</p>
              <small>
                <time>{value.date}</time>
              </small>
            </li>
          </ul>
        );
      })}
    </ol>
*/
