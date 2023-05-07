import React from "react";
import "./App.css";
import SearchBox from "./SearchBox/SearchBox";
import Sidebar from "./Sidebar/Sidebar";
import ListItem from "./ListItem/ListItem";
import Workspace from "./Workspace/Workspace";
import { DBConfig } from './DBConfig';
import { initDB } from 'react-indexed-db';
import { IndexedDB } from 'react-indexed-db';


  initDB(DBConfig);
 
const App = () => {

  
  return (
    <IndexedDB
    name= 'notesDB'
    version={1}
    objectStoresMeta= {[
      {
        store: 'notes',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { textNote: 'textNote', keypath: 'textNote', options: { unique: false } },
          { date: 'date', keypath: 'date', options: { unique: false } }
        ]
      }
    ]}>
    <div className="App">
      <div className="navbar">
        <Sidebar />
        <SearchBox />
      </div>
      <div className="container">
        <ListItem/>
        <Workspace/>
      </div>
    </div>
    </IndexedDB>
  );
  }
export default App;
