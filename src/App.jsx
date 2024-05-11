import { useState, useEffect } from 'react'
import './styles/App.css';
import Sidebar from './Components/Sidebar'
import Notes from './Components/Notes'
import CreateNotes from './Components/CreateNotes'

function App() {
  const [newNoteGroup, setNewNoteGroup] = useState({
    id: "",
    name: "",
    notes: [],
    color: "",
  });
  const [noteBtnClick, setNoteBtnClick] = useState(false);
  const [noteGroups, setNoteGroups] = useState(
    localStorage.getItem("noteGroups")
      ? JSON.parse(localStorage.getItem("noteGroups"))
      : []
  );
  const [selectedNote, setSelectedNote] = useState({});
  const [display, setDisplay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
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
        <Notes
          display={display}
          setDisplay={setDisplay}
          selectedNote={selectedNote}
          isMobile={isMobile}
          noteBtnClick={noteBtnClick}
        />
      </div>
      <CreateNotes />
    </>
  )
}

export default App
