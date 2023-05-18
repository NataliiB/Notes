import "./Workspace.css";
import React, { useState } from "react";
import { NotesContext } from "../App";


const Workspace =(props)=>{
    const value=React.useContext(NotesContext);
   
       console.log(props.activeNote)
    return(<>
    <div>Workspace</div>

    <input className="workspace" value={props.activeNote} ></input>
    </>)
}
export default Workspace;