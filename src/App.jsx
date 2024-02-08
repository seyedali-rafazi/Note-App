import React, { useReducer, useState } from "react";
import "./App.css";
import NoteSubmit from "./Components/NoteSubmit/NoteSubmit";
import NoteList from "./Components/NoteList/NoteList";
import NoteStatue from "./Components/NoteStatue/NoteStatue";
import NoteHeader from "./Components/NoteHeader/NoteHeader";

function notesReducer(state, { type, payload }) {
  switch (type) {
    case "addNotes":
      return [...state, payload];
    case "deleteNotes":
      return state.filter((n) => n.id !== payload);
    case "completeNotes":
      return state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    default:
      throw new Error("unKnown :" + type);
  }
}

function App() {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [sortBy, setSortBy] = useState("latest");

  const handelAddNotes = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "addNotes", payload: newNote });
  };

  const handelDeleteNote = (id) => {
    // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    dispatch({ type: "deleteNotes", payload: id });
  };

  const handelComplete = (noteId) => {
    // setNotes(
    //   notes.map((note) =>
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );
    dispatch({ type: "completeNotes", payload: noteId });
  };

  return (
    <div className="container">
      <div className="note_header">
        <NoteHeader
          notes={notes}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
      </div>
      <div className="note_app">
        <NoteSubmit onAddNote={handelAddNotes} />
        <div>
          <NoteStatue notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handelDeleteNote}
            onComplete={handelComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
