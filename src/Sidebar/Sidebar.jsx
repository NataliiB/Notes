import { useIndexedDB } from "react-indexed-db";
import React, { useState } from "react";
import { NotesContext } from "../App";
import './Sidebar.css'

const Sidebar = (props) => {
  const value=React.useContext(NotesContext);
  const [inputText, setInputText] = useState("");

  
  return (
    <>
      <div>
        <button onClick={() => value.addNote(inputText)}>Add note</button>
        <input
          type="text"
          id="newNoteText"
          onChange={(event) => setInputText(event.target.value)}
        />
        <button onClick={() => props.deleteNote()}>Delete</button>
        <button onClick={()=>value.changeNote()}>Change</button>
      </div>
    </>
  );
};
export default Sidebar;
