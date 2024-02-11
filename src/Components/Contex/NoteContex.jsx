import { createContext, useContext, useReducer } from "react";

const NotesContex = createContext(null);
const NotesDispatchContex = createContext(null);

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

export function NoteProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContex.Provider value={notes}>
      <NotesDispatchContex.Provider value={dispatch}>
        {children}
      </NotesDispatchContex.Provider>
    </NotesContex.Provider>
  );
}

export function useNote() {
  return useContext(NotesContex);
}

export function useNoteDispatch() {
  return useContext(NotesDispatchContex);
}
