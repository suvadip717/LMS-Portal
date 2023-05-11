import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./notice.css";

const NoticeEdit = () => {
  const navigate = useNavigate();
  const [noticename, setNoticeName] = useState({
    name: "",
    date: "",
    year: "",
    link: "",
  });

  const handleInputs = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setNoticeName((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  console.log(id);

  const GetData = async () => {
    const res = await fetch(`/getnoticedata/${id}`, {
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
      setNoticeName(data);
      // window.alert("City Updated");
      console.log("Notice Data Fetched");

      // navigate("/car-price-details");
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const updateUserData = async (e) => {
    e.preventDefault();

    const { name, date, year, link } = noticename;

    const res2 = await fetch(`/updatenotice/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        date,
        year,
        link,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data ");
    } else {
      alert("Notice Data Updated");
      navigate("/pages/notice/manage");
    }
  };

  return (
    <>
      <div className="notice-upload my-5">
        <form className="notice-upload-form p-3 rounded" method="post">
          <div className="notice-upload-head my-3">
            <h3>Notice Upload</h3>
          </div>
          <table className="table w-full notice-upload-sec">
            <tbody className="notice-upload-box">
              <tr className="sec-one">
                <td className="sec-one-inner">
                  <TextField
                    className="w-full"
                    variant="outlined"
                    type="text"
                    name="name"
                    id="outlined-basic"
                    label="Notice Title"
                    value={noticename.name}
                    onChange={handleInputs}
                  />
                </td>
                <td className="sec-one-inner">
                  <TextField
                    className="w-full"
                    variant="outlined"
                    type="date"
                    name="date"
                    id="outlined-basic"
                    // label="Subject"
                    value={noticename.date}
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
                    value={noticename.year}
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
                    value={noticename.link}
                    onChange={handleInputs}
                  />
                </td>
                <td>
                  <input
                    className="px-5 w-full rounded-md hover:text-white bg-blue-500 text-white border-radius: 0.2rem"
                    id="notice-form-button"
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

export default NoticeEdit;
