import { useIndexedDB } from "react-indexed-db";
import React, { useState } from "react";
import { useContext } from "react";
import { NotesContext } from "../App";

const Sidebar = (props) => {
  const value=React.useContext(NotesContext);
  
  console.log(value);
  const [inputText, setInputText] = useState("");
  console.log(inputText);
  
  return (
    <>
      <div>
        <button onClick={() => props.addNote(inputText)}>Add note</button>
        <input
          type="text"
          id="newNoteText"
          onChange={(event) => setInputText(event.target.value)}
        />
        <button onClick={() => props.deleteNote()}>Delete</button>
        <button>Change</button>
      </div>
    </>
  );
};
export default Sidebar;
