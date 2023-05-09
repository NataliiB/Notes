import { useIndexedDB } from 'react-indexed-db';
import React, {useState} from 'react';

const Sidebar=(props)=>{
 console.log(props)
 const [inputText, setInputText]= useState('');
 console.log(inputText)

  
 
  
    return(
        <>
        <div>
        <button onClick={props.addNote(inputText)}>Add note</button>
        <input type="text"  id="newNoteText"  onChange={(event)=>setInputText(inputText)}/>
          <button>Basket</button>
          <button>Change</button>
        </div>
        </>
    )
}
export default Sidebar;