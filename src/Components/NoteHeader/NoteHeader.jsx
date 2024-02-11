import React, { useState } from "react";
import "../../App.css";
import "../NoteHeader/NoteHeader.css";
import { useNote } from "../Contex/NoteContex";

function NoteHeader({ sortBy, onSort }) {
  const notes = useNote()
  return (
    <div className="noteHeader">
      <h1>My Notes({notes.length})</h1>
      <select name="" id="" value={sortBy} onChange={onSort}>
        <option value="latest">Sort based latest notes</option>
        <option value="earliest">Sort based earliest notes</option>
        <option value="completed">Sort based completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
