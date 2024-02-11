import React, { useState } from "react";
import "../NoteStatue/Notestatue.css";
import Message from "../Message/Message";
import { useNote } from "../Contex/NoteContex";

function NoteStatue() {
  const notes = useNote();
  const allNoteStatue = notes.length;
  const completeNoteStatue = notes.filter((n) => n.completed).length;
  const openNoteStatue = allNoteStatue - completeNoteStatue;

  if (!allNoteStatue)
    return (
      <Message>
        <h2 className="title_none">You have not note yet</h2>
      </Message>
    );

  return (
    <ul className="list_statue">
      <li>
        All <span>{allNoteStatue}</span>
      </li>
      <li>
        Completed <span>{completeNoteStatue}</span>
      </li>
      <li>
        Open <span>{openNoteStatue}</span>
      </li>
    </ul>
  );
}

export default NoteStatue;
