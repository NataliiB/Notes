import Workspace from "./Workspace/Workspace";
import Sidebar from "./Sidebar/Sidebar.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import { db } from "./db";
import { useLiveQuery } from "dexie-react-hooks";
import NotesList from "./NotesList/NotesList";
import { createContext, useState } from "react";

export const NotesContext = createContext({});

const App = (props) => {
  const [activeNote, getActiveNote] = useState("");
  const [isActive, changeIsActive ] = useState(false);
  
  console.log(props);
  let isFinished = false;
  async function addNote(note) {
    try {
      const id = await db.notes.add({
        note,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log(`Failed to add note ${error}`);
    }
  }
  const notesList = useLiveQuery(() => db.notes.toArray());

  let noteToDel = " ";

  function giveNoteToDelete(note) {
    console.log(note);
    noteToDel = note;
    console.log(noteToDel);
    getActiveNote(noteToDel);
    return noteToDel;
  }

  function deleteNote() {
    let confirming = window.confirm("Delete note?");
    if (confirming) {
      db.notes.where("id").equals(noteToDel.id).delete();
      changeNote();
    }
  }
  

  async function toSearch(searchText) {
    console.log(db.notes);

    const result = db.notes
      .filter(function (note) {
        return /dd/.test(note);
      })
      .toArray();
    console.log(result);
  }
  
  function changeNote() {
    changeIsActive(true);
  }
  async function update(note) {
   db.notes.update(activeNote.id,{note:note, createdAt:new Date})
   console.log(activeNote)
  }

  return (
    <>
      <NotesContext.Provider
        value={{
          deleteNote,
          addNote,
          notesList,
          giveNoteToDelete,
          noteToDel,
          activeNote,
          changeNote,
          isActive,
          update
        }}
      >
        <div className="App">
          <div className="navbar">
            <Sidebar addNote={addNote} deleteNote={deleteNote} />
            <SearchBox notesList={notesList} toSearch={toSearch} />
          </div>
          <div className="container">
            <NotesList
              notesList={notesList}
              isFinished={isFinished}
              noteToDelete={giveNoteToDelete}
            />
            <Workspace activeNote={activeNote} />
          </div>
        </div>
      </NotesContext.Provider>
    </>
  );
};
export default App;
