import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./Notes.css";

const NotesEdit = () => {
  const navigate = useNavigate();
  const [notesname, setNotesName] = useState({
    name: "",
    subject: "",
    year: "",
    link: "",
  });
  const handleInputs = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setNotesName((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  console.log(id);

  const GetData = async () => {
    const res = await fetch(`/getnotesdata/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 422 || !data) {
      // window.alert("Invalid Input");
      console.log("Invalid Input");
    } else {
      setNotesName(data);
      // window.alert("City Updated");
      console.log("Notes Data Fetched");

      // navigate("/car-price-details");
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  const updateUserData = async (e) => {
    e.preventDefault();

    const { name, subject, year, link } = notesname;

    const res2 = await fetch(`/updatenotes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        subject,
        year,
        link,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data ");
    } else {
      alert("Note Data Updated");
      navigate("/pages/notes/manage");
    }
  };

  return (
    <>
      <div className="notes-upload my-5">
        <form className="notes-upload-form rounded" method="post">
          <div className="notes-upload-head my-3">
            <h2>Notes Upload</h2>
          </div>
          <table className="table w-full p-6 notes-upload-sec">
            <tbody className="notes-upload-box">
              <tr className="sec-one">
                <td className="sec-one-inner">
                  <TextField
                    className="w-full"
                    variant="outlined"
                    type="text"
                    name="name"
                    id="outlined-basic"
                    label="Notes Name"
                    value={notesname.name}
                    onChange={handleInputs}
                  />
                </td>
                <td className="sec-one-inner">
                  <TextField
                    className="w-full"
                    variant="outlined"
                    type="text"
                    name="subject"
                    id="outlined-basic"
                    label="Subject"
                    value={notesname.subject}
                    onChange={handleInputs}
                  />
                </td>
                <td className="sec-one-inner">
                  <TextField
                    className="w-full"
                    variant="outlined"
                    type="text"
                    name="year"
                    id="outlined-basic"
                    label="Year"
                    value={notesname.year}
                    onChange={handleInputs}
                  />
                </td>
              </tr>
              <tr className="sec-two">
                <td colSpan="2">
                  <TextField
                    className="w-full"
                    variant="outlined"
                    type="text"
                    name="link"
                    id="outlined-basic"
                    label="Link"
                    value={notesname.link}
                    onChange={handleInputs}
                  />
                </td>
                <td>
                  <input
                    className="w-full bg-blue-500 hover:text-white rounded-md text-white"
                    id="notes-form-button"
                    type="submit"
                    value="Submit"
                    onClick={updateUserData}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default NotesEdit;
