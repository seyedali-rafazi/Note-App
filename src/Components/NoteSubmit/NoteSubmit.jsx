import React, { useState } from "react";
import "../../App.css";
import "./NoteSubmit.css";
import { useNoteDispatch } from "../Contex/NoteContex";

function NoteSubmit() {
  const dispatch = useNoteDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handelSubmit = (e) => {
    if (!title || !description) return null;

    e.preventDefault();

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    console.log(newNote);

    setTitle("");
    setDescription("");
    dispatch({ type: "addNotes", payload: newNote });
  };

  return (
    <div className="note_submit">
      <h2>Add New Note</h2>
      <form className="submit_form" onSubmit={handelSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text_field"
          placeholder="Note Title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text_field"
          placeholder="Note Description..."
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default NoteSubmit;
