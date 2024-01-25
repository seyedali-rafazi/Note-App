import React, { useState } from "react";
import "./App.css";
import NoteSubmit from "./Components/NoteSubmit/NoteSubmit";
import NoteList from "./Components/noteList/noteList";
import NoteStatue from "./Components/NoteStatue/NoteStatue";
import NoteHeader from "./Components/NoteHeader/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handelAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handelDeleteNote = (id) => {
    // const filterNotes = notes.filter((n) => n.id !== id)
    // setNotes(filterNotes)
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  const handelComplete = (noteId) => {
    setNotes(
      notes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
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
