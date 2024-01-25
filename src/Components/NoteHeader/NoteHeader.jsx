import React, { useState } from "react";
import "../../App.css";
import "../NoteHeader/NoteHeader.css";

function NoteHeader({ notes, sortBy, onSort }) {
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
