import React, { useState } from "react";
import { NotesContext } from "../App";
import "./ListItem.css"



const ListItem = (props) => {
  const value=React.useContext(NotesContext);
    console.log(props)
  return (
    <>
    <div>
    <button onClick={(e) => {
          props.noteToDelete(props.note)
          
          
        }}
      >
      <div>{props.note.note}</div>
      </button>
      </div>
    </>
  );
};
export default ListItem;
