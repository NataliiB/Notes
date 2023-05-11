
import Workspace from "./Workspace/Workspace";
import Sidebar from "./Sidebar/Sidebar.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import { db } from "./db";
import { useLiveQuery } from "dexie-react-hooks";
import NotesList from "./NotesList/NotesList";
import { createContext } from 'react';

export const NotesContext = createContext({});

const App = (props) => {
  console.log(props)
  let isFinished = false;
  async function addNote(inputTextNote) {
    try {
      // Add the new friend!
      const id = await db.notes.add({
        inputTextNote,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log(`Failed to add note ${error}`);
    }
  }
  const notesList = useLiveQuery(() => db.notes.toArray());

  
  let noteToDel

function giveNoteToDelete(note){
  console.log(note)
  noteToDel=note;
  console.log(noteToDel)
  return noteToDel;
}
function deleteNote(){
    
  db.notes.where('id').equals(noteToDel.id).delete()

    }

  return (
    <>
    <NotesContext.Provider value={{deleteNote, addNote,notesList}}>
      <div className="App">
        <div className="navbar">
          <Sidebar addNote={addNote} deleteNote={deleteNote} />
          <SearchBox />
        </div>
        <div className="container">
          <NotesList notesList={notesList} isFinished={isFinished} noteToDelete={giveNoteToDelete}/>
          <Workspace />
        </div>
      </div>
      </NotesContext.Provider>
    </>
  );
};
export default App;
