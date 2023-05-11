import { useEffect, useState } from "react";
import axios from "axios";
import NotesUploadPage from "./NotesUploadPage";
import NotesUpload from "./NotesUpload";

function NotesTestPage() {
  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8009/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);

  return (
    <div className="App">
      <NotesUploadPage photos={photos} />
      <NotesUpload setUpdateUI={setUpdateUI} />
    </div>
  );
}

export default NotesTestPage;