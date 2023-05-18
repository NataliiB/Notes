import { NotesContext } from "../App";
import "./SearchBox.css";
import React from "react";


const SearchBox = (props) => {
  let value=React.useContext(NotesContext);
  let filteredNotes = [];
  
 
  return (
    <>
      <div className="searchBox">
        <div>
          <input type="text" placeholder="Search" onChange={(e)=>props.toSearch(e.target.value)}/>
        </div>
      </div>
    </>
  );
};
export default SearchBox;
