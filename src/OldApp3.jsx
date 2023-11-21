import "./style.css";
import { Note } from "./components/Note";
import { useEffect, useState } from "react";
import { createNote, getAllNotes } from "./services/notes/index";

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setnewNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   console.log("useEffect");
  //   setLoading(true);
  //   setTimeout(() => {
  //     fetch(baseUrl)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setNotes(data);
  //         setLoading(false);
  //       });
  //   }, 2000);
  // }, []);

  //w/axios
  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(baseUrl).then((response) => {
  //     const { data } = response;
  //     setNotes(data);
  //     setLoading(false);
  //   });
  // }, []);

  useEffect(() => {
    setLoading(true);
    getAllNotes().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });
  }, []);

  const handleSubmit = (e) => {
    console.log(newNote);
    e.preventDefault();
    const noteToAddToState = {
      id: crypto.randomUUID(),
      userId: crypto.randomUUID(),
      title: newNote,
      body: newNote,
    };
    setError("");
    createNote(noteToAddToState)
      .then((response) => {
        setNotes([...notes, response]);
      })
      .catch((error) => {
        setError("Hubo un error");
      });
    // axios.post(baseUrl, noteToAddToState).then((response) => {
    //   console.log(response);
    //   setNotes([...notes, response.data]);
    // });
    // console.log(noteToAddToState);
    // setNotes(notes.concat(noteToAddToState));
    // setNotes([...notes, noteToAddToState]);
    setnewNote("");
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setnewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      {loading ? <p>Loading...</p> : null}
      <ol>
        {notes.map((value) => (
          <Note key={value.id} {...value} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}></input>
        <button type="submit">Crear nota</button>
      </form>
      {error ? <p>Hubo un error</p> : null}
    </div>
  );
};

export default App;
/*
  const handleSubmit = (e) => {
    console.log(newNote);
    e.preventDefault();
    const noteToAddToState = {
      id: crypto.randomUUID(),
      title: newNote,
      body: new Date().toISOString(),
    };
    console.log(noteToAddToState);
    // setNotes(notes.concat(noteToAddToState));
    setNotes([...notes, noteToAddToState]);
    setnewNote("");
  };

  const [showAll, setShowAll] = useState(true);
  //const handleShowAll = () => {
  //  setShowAll(() => !showAll);
  //};
return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Solo mostrar importante" : "Show All"}
      </button>
      <ol>
        {notes
          .filter((note) => (showAll ? true : note.important))
            //   si showAll es true muestra todo, si no muestra solo los importantes
            //    Si showAll es true, se muestran todas las notas; de lo contrario, solo se muestran las notas con la propiedad important establecida en true
              
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
*/
