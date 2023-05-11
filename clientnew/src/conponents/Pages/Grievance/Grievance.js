import React, { useState } from "react";

import Textarea from "@mui/joy/Textarea";
import TextField from "@mui/material/TextField";

import "./Grievance.css";

function Grievance() {

  const [complaintdetails, setComplaintDetails] = useState({
    name: "",
    studentid: "",
    email: "",
    title: "",
    complaint: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setComplaintDetails({ ...complaintdetails, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {
      name,
      studentid,
      email,
      title,
      complaint,
    } = complaintdetails;
    const res = await fetch("/addcomplaint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      studentid,
      email,
      title,
      complaint,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Input");
      console.log("Invalid Input");
    }else {
      window.alert("Your complaint has been sent to Admin!");
      console.log("Input Sucessful");
      setComplaintDetails({...complaintdetails, name:"", studentid:"", email:"", title:"", complaint:""})
      

      // navigate("/pages/fuel-type/manage");
    }
  };



  return (
    <>
      <div className="outer-container-grievance">
        <div className="grievance-page-title">Girevance</div>

        <div className="container-form-complain my-5">
          <form className="complain-form p-3 rounded" method="post">
            <div className="complain-head my-3">
              <h3>Your Complain</h3>
            </div>
            <table className="table concact-sec">
              <tbody className="complain-upload-box">
                <tr className="sec-one">
                  <td className="sec-one-inner">
                    <TextField
                      className="w-100"
                      variant="outlined"
                      type="text"
                      name="name"
                      id="outlined-basic"
                      label="Your Name"
                        value={complaintdetails.name}
                        onChange={handleInputs}
                    />
                  </td>
                  <td className="sec-one-inner">
                    <TextField
                      className="w-100"
                      variant="outlined"
                      type="text"
                      name="studentid"
                      id="outlined-basic"
                      label="Student ID"
                        value={complaintdetails.studentid}
                        onChange={handleInputs}
                    />
                  </td>
                  <td className="sec-one-inner">
                    <TextField
                      className="w-100"
                      variant="outlined"
                      type="email"
                      name="email"
                      id="outlined-basic"
                      label="Email"
                        value={complaintdetails.email}
                        onChange={handleInputs}
                    />
                  </td>
                </tr>
                <tr className="sec-new">
                  <td colSpan={3} className="sec-one-inner">
                    <TextField
                      className="w-100"
                      variant="outlined"
                      type="text"
                      name="title"
                      id="outlined-basic"
                      label="Title"
                        value={complaintdetails.title}
                        onChange={handleInputs}
                    />
                  </td>
                </tr>
                <tr className="sec-two">
                  <td colSpan={2} className="sec-tow-inner">
                    <Textarea
                      className="message-area"
                      placeholder="Write your Complain"
                      minRows={4}
                      name="complaint"
                      value={complaintdetails.complaint}
                        onChange={handleInputs}
                    />
                  </td>
                  <td style={{ verticalAlign: "bottom" }}>
                    <input
                      className="px-5 w-100"
                      id="complain-form-button"
                      type="submit"
                      value="Submit"
                        onClick={PostData}
                    ></input>
                  </td>
                </tr>

                {/* <tr className="sec-three">
                  <td>
                    <input
                      className="px-5 w-100"
                      id="payment-form-button"
                      type="submit"
                      value="Submit"
                      //   onClick={PostData}
                    ></input>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default Grievance;
