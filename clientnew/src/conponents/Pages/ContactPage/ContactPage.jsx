import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Textarea from "@mui/joy/Textarea";
import TextField from "@mui/material/TextField";

import "./ContactPage.style.css";
import { useState } from "react";
function ContactPage() {


  const [querydetails, setQueryDetails] = useState({
    name: "",
    studentid: "",
    email: "",
    title: "",
    query: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setQueryDetails({ ...querydetails, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {
      name,
      studentid,
      email,
      title,
      query,
    } = querydetails;
    const res = await fetch("/addquery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      studentid,
      email,
      title,
      query,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Input");
      console.log("Invalid Input");
    }else {
      window.alert("Your Query has been sent to Admin!");
      console.log("Input Sucessful");
      setQueryDetails({...querydetails, name:"", studentid:"", email:"", title:"", query:""})
      

      // navigate("/pages/fuel-type/manage");
    }
  };





  return (
    <>
      <div className="outer-container-contact">
        <div className="contact-page-title">Contact us</div>

        <div className="container-form-contact my-5">
          <form className="message-form p-3 rounded" method="post">
            <div className="message-head my-3">
              <h3>Leave Your Query</h3>
            </div>
            <table className="table concact-sec">
              <tbody className="message-upload-box">
                <tr className="sec-one">
                  <td className="sec-one-inner">
                    <TextField
                      className="w-100"
                      variant="outlined"
                      type="text"
                      name="name"
                      id="outlined-basic"
                      label="Your Name"
                        value={querydetails.name}
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
                        value={querydetails.studentid}
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
                        value={querydetails.email}
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
                        value={querydetails.title}
                        onChange={handleInputs}
                    />
                  </td>
                </tr>

                <tr className="sec-two">
                  <td colSpan={2} className="sec-tow-inner">
                    <Textarea
                      className="message-area"
                      name="query"
                      placeholder="Write your Query"
                      minRows={4}
                        value={querydetails.query}
                        onChange={handleInputs}
                    />
                  </td>
                  <td style={{verticalAlign: "bottom"}} >
                    <input
                      className="px-5 w-100"
                      id="message-form-button"
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

        <div className="container-contact-info">
          <div className="info-item">
            <div className="info-icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="info-title">Phone</div>
            <div className="info-description">9341912202, 9162336644</div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i class="fa-solid fa-envelope  "></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
            </div>
            <div className="info-title">Email</div>
            <div className="info-description">
              <a href="mailto: cec.estd.govt@gmail.com">
                cec.estd.govt@gmail.com
              </a>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i class="fa-solid fa-clock  "></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-clock" /> */}
            </div>
            <div className="info-title">Office Hour</div>
            <div className="info-description">
              Monday - Saturday
              <br />
              9:00 AM - 7:00 PM
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i class="fa-solid fa-location-dot  "></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */}
            </div>
            <div className="info-title">Address</div>
            <div className="info-description">
              FQ8Q+JR2, Engineering College Kelendi, Jhinkpani, Chaibasa,
              Jharkhand 833215
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
