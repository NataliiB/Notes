import React from "react";
import "./App.css";
import SearchBox from "./SearchBox/SearchBox";
import Sidebar from "./Sidebar/Sidebar";
import ListItem from "./ListItem/ListItem";
import Workspace from "./Workspace/Workspace";

import { initDB } from "react-indexed-db";
import { IndexedDB } from "react-indexed-db";
import { indexedDBSupport } from "react-indexed-db";
import { DBConfig } from "./DBConfig";
initDB(DBConfig);
const indexedDB = window.indexedDB;
const request = indexedDB.open("notesData", 10);
let db;

request.onupgradeneeded = (e) => {
  db = e.target.result;
  const store = db.createObjectStore("notes", { keyPath: "id" });

  store.createIndex("textNote", ["textNote"], { unique: false });
  store.createIndex("date", ["date"], { unique: false });
  
  //...
};

request.onsuccess = function (event) {
  db = request.result;
  const transaction = db.transaction(["notes"], "readwrite");
  const store = transaction.objectStore("notes");

  const textNote = store.index("textNote");
  const date = store.index("date");
  store.put({ id: 0, textNote: "ftykghsdrjkflgh", date: new Date() });
  store.put({ id: 1, textNote: "hczsjkcozsd", date: new Date() });
  store.put({ id: 2, textNote: "!!!FTHJ", date: new Date() }); 

}
function getAllNotes() {
  request.onsuccess=()=>{
      
  console.log("!!!!!!!!!!!!!!")
  db = request.result;
  const tx = db.transaction(["notes"], "readonly");
  const notesStore = tx.objectStore("notes");
  console.log(notesStore);
  return notesStore.getAll()


  }

}
getAllNotes();
function addNote(note) {
  request.onsuccess = function () {
    db = request.result;
    const transaction = db.transaction(["notes"], "readwrite");
    const store = transaction.objectStore("notes");
    store.add({ id: 14, textNote: note, date: new Date() });
  };
}

const App = () => {
  return (
    <>
      <div className="App">
        <div className="navbar">
          <Sidebar addNote={addNote} />
          <SearchBox />
        </div>
        <div className="container">
          <ListItem />
          <Workspace />
        </div>
      </div>
    </>
  );
};
export default App;
