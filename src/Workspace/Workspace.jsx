import "./Workspace.css";
import React, { useState } from "react";
import { NotesContext } from "../App";



const Workspace =(props)=>{
    const value=React.useContext(NotesContext);
    
    let [updatedNote,setUpdatedNote] = useState(props.activeNote);
    
   
      

    return(<>
    <div>Workspace</div>

    <textarea className="workspace" defaultValue={value.activeNote.note} onChange={(e)=>setUpdatedNote(e.target.value)}/>
    
    <button onClick={()=>value.update(updatedNote)}>Save</button>
    </>)
}
export default Workspace;