import { useContext } from "react";
import ListItem from "./ListItem";
import React from "react";
import { NotesContext } from "../App";
const NotesList = (props) => {
 const value=React.useContext(NotesContext)
  console.log(value)
  return (
  <>
    {value.notesList?.map((note) => <ListItem note={note} isFinished={props.isFinished} noteToDelete={props.noteToDelete} />)}
  </>
 )
}
export default NotesList;
// {props.allNotes.map((n)=>(<div>{n}</div>))}