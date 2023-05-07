import { useIndexedDB } from 'react-indexed-db';
import React, {useState} from 'react';

const Sidebar=()=>{
  
  const { add } = useIndexedDB('notes');
  const [note, setNote] = useState();
 
  const addNewNote = () => {
    add({textNote: 'textNote', keypath: 'textNote'}).then(
      event => {
        console.log('ID Generated: ', event.target.result);
      },
      error => {
        console.log(error);
      }
    );
  };
 
  
    return(
        <>
        <div>
        <button onClick={addNewNote}>Add note</button>
          <button>Basket</button>
          <button>Change</button>
        </div>
        </>
    )
}
export default Sidebar;