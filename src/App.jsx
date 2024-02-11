import React, { useReducer, useState } from "react";
import "./App.css";
import NoteSubmit from "./Components/NoteSubmit/NoteSubmit";
import NoteList from "./Components/NoteList/NoteList";
import NoteStatue from "./Components/NoteStatue/NoteStatue";
import NoteHeader from "./Components/NoteHeader/NoteHeader";
import { NoteProvider } from "./Components/Contex/NoteContex";

function App() {
  const [sortBy, setSortBy] = useState("latest");

  // const handelAddNotes = (newNote) => {
  //   dispatch({ type: "addNotes", payload: newNote });
  // };

  // const handelDeleteNote = (id) => {
  //   dispatch({ type: "deleteNotes", payload: id });
  // };

  // const handelComplete = (noteId) => {
  //   dispatch({ type: "completeNotes", payload: noteId });
  // };

  return (
    <NoteProvider>
      <div className="container">
        <div className="note_header">
          <NoteHeader
            sortBy={sortBy}
            onSort={(e) => setSortBy(e.target.value)}
          />
        </div>
        <div className="note_app">
          <NoteSubmit />
          <div>
            <NoteStatue />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NoteProvider>
  );
}

export default App;
