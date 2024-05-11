/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import "./styles/App.css";
import CreateNote from "./Components/CreateNotes";
import Notes from "./Components/Notes";

function App() {
  const [noteBtnClick, setNoteBtnClick] = useState(false);
  const [noteGroups, setNoteGroups] = useState(
    localStorage.getItem("noteGroups")
      ? JSON.parse(localStorage.getItem("noteGroups"))
      : []
  );
  const [newNoteGroup, setNewNoteGroup] = useState({
    id: "",
    name: "",
    notes: [],
    color: "",
  });
  const [selectedNote, setSelectedNote] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      <div className=" App flex flex-row">
        <Sidebar
          display={display}
          setDisplay={setDisplay}
          setNoteBtnClick={setNoteBtnClick}
          noteGroups={noteGroups}
          setSelectedNote={setSelectedNote}
          selectedNote={selectedNote}
          isMobile={isMobile}
        />

      {/* View The Notes  */}
  
        <Notes
          display={display}
          setDisplay={setDisplay}
          selectedNote={selectedNote}
          isMobile={isMobile}
          noteBtnClick={noteBtnClick}
        />
      </div>

      {/* New Note Group */}

      <CreateNote
        noteBtnClick={noteBtnClick}
        setNoteBtnClick={setNoteBtnClick}
        noteGroups={noteGroups}
        setNewNoteGroup={setNewNoteGroup}
        setNoteGroups={setNoteGroups}
      />
    </React.Fragment>
  );
}

export default App;
