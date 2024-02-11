import React, { useState } from "react";
import "../../App.css";
import "../NoteList/NoteList.css";
import { useNote, useNoteDispatch } from "../Contex/NoteContex";

function NoteList({ sortBy }) {
  const notes = useNote();
  let sortedNotes = notes;

  if (sortBy == "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

  if (sortBy == "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

  if (sortBy == "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(b.completed) - Number(a.completed)
    );
  return (
    <div>
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const dispatch = useNoteDispatch();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`list_notes ${note.completed ? "completed" : ""}`}>
      <div className="header">
        <div className="left_header">
          <h3 className="header_title">{note.title}</h3>
          <p className="header_description">{note.description}</p>
        </div>
        <div className="right_header">
          <button
            onClick={() => dispatch({ type: "deleteNotes", payload: note.id })}
          >
            ❌
          </button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "completeNotes", payload: noteId });
            }}
          />
        </div>
      </div>
      <div className="footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
