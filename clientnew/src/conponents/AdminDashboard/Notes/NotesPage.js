import { useEffect, useState } from "react";
import axios from "axios";
// import NotesUpload from "./NotesUpload";
import NotesList from "./NotesList";
import NotesUploadold from "./NotesUploadold";

function NotesPage() {
  const [notes, setnotes] = useState([]);
  const [updateUI, setUpdateUI] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8009/api/getnotes")
      .then((res) => {
        console.log(res.data);
        setnotes(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);

  return (
    <div className="App">
      <NotesList notes={notes} />
      <NotesUploadold setUpdateUI={setUpdateUI} />
    </div>
  );
}

export default NotesPage;