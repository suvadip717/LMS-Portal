import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";
import "./Notes.css";

const NotesUploadold = ({ setUpdateUI }) => {
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", e.target.files[0]);

    axios
      .post("http://localhost:8009/api/savenotes", formData)
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data._id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <label className="add-note-button position-fixed" htmlFor="file_picker"> Add Notes
      <AiFillPlusCircle />
      <input
        hidden
        type="file"
        name="file_picker"
        id="file_picker"
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
};

export default NotesUploadold;