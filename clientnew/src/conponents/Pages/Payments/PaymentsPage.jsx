import React, { useState } from "react";
import qr from "./paymentsImage/bar-code.png";
import TextField from "@mui/material/TextField";
import "./PaymentsPage.css";

function PaymentsPage() {
  const [paymentname, setPaymentname] = useState({
    name: "",
    studentid: "",
    semester: "",
    date: "",
    utrnumber: "",
    category: "",
    ammount: "",
    link: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setPaymentname({ ...paymentname, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();

    const {
      name,
      studentid,
      semester,
      date,
      utrnumber,
      category,
      ammount,
      link,
    } = paymentname;
    const res = await fetch("/addpayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        studentid,
        semester,
        date,
        utrnumber,
        category,
        ammount,
        link,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Input");
      console.log("Invalid Input");
    } else {
      window.alert("Your Payment Details Added");
      console.log("Input Sucessful");

      // navigate("/pages/fuel-type/manage");
    }
  };

  return (
    <>
      <div className="outer-container-payment">
        <div className="payment-page-title">Payment</div>
        <div className="container-main-account">
          <div className="account-details-title">Account Details</div>
          <div className="account-details">
            <div className="clg-acc-detail">
              <div className="acc-holder">
                {" "}
                <span style={{ fontWeight: "bold" }}> A/C Holder : </span>
                Chaibasa Engineering College
              </div>
              <div className="acc-type">
                <span style={{ fontWeight: "bold" }}> A/C Type : </span>Current
                Account
              </div>
              <div className="acc-branch">
                <span style={{ fontWeight: "bold" }}> Branch Name : </span>Gen
                Next Br. Salt Lake
              </div>
              <div className="acc-no">
                <span style={{ fontWeight: "bold" }}> A/C Number : </span>
                32210200000213
              </div>
              <div className="acc-ifsc">
                <span style={{ fontWeight: "bold" }}> IFSC Code : </span>
                BARB0GENSAL
              </div>
            </div>
            <div className="or">
              <div className="or-content">or</div>
            </div>
            <div className="acc-qr">
              <div className="qr">
                <img src={qr} alt="qr-code" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-form-payment my-5">
          <form className="payment-upload-form p-3 rounded" method="post">
            <div className="payment-upload-head my-3">
              <h3>Payment Form</h3>
            </div>
            <table className="table payment-upload-sec">
              <tbody className="payment-upload-box">
                <tr className="sec-one">
                  <td className="sec-one-inner">
                    <TextField
                      className="w-100"
                      variant="outlined"
                      type="text"
                      name="name"
                      id="outlined-basic"
                      label="Your Name"
                      value={paymentname.name}
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
                      value={paymentname.studentid}
                      onChange={handleInputs}
                    />
                  </td>
                  <td className="sec-one-inner">
                    <TextField
                      className="w-100"
                      variant="outlined"
                      type="text"
                      name="semester"
                      id="outlined-basic"
                      label="Semester"
                      value={paymentname.semester}
                      onChange={handleInputs}
                    />
                  </td>
                </tr>
                <tr className="sec-tow">
                  <td className="sec-two-inner">
                    <TextField
                      className="w-100"
                      variant="outlined"
                      type="date"
                      name="date"
                      id="outlined-basic"
                      label=""
                      value={paymentname.date}
                      onChange={handleInputs}
                    />
                  </td>
                  <td className="sec-two-inner">
                    <TextField
                      className="w-100"
                      variant="outlined"
                      type="text"
                      name="utrnumber"
                      id="outlined-basic"
                      label="UTR No"
                      // value={paymentname.utrnumber}
                      onChange={handleInputs}
                    />
                  </td>
                  <td className="sec-two-inner">
                    <select
                      className="category-selector"
                      name="category"
                      // value={paymentname}
                      defaultValue="Select Category"
                      onChange={handleInputs}
                      placeholder="Category"
                      sx={{
                        width: "100%",
                        height: 50,
                      }}
                    >
                      <option value="">Select Category</option>
                      <option value="Free UR/EWS">Free UR/EWS</option>
                      <option value="Free SC">Free SC</option>
                      <option value="Free ST">Free ST</option>
                      <option value="Free BC_I/BC_II">Free BC_I/BC_II</option>
                      <option value="Payment Seat">Payment Seat</option>
                      <option value="IQ Seat">IQ Seat</option>
                      <option value="TFW">TFW</option>
                    </select>
                  </td>
                </tr>
                <tr className="sec-three">
                  <td className="sec-three-inner">
                    <TextField
                      className="w-100"
                      variant="outlined"
                      type="text"
                      name="ammount"
                      id="outlined-basic"
                      label="Amount"
                      value={paymentname.ammount}
                      onChange={handleInputs}
                    />
                  </td>
                  <td className="sec-three-inner">
                    <TextField
                      className="w-100"
                      variant="outlined"
                      type="link"
                      name="link"
                      id="outlined-basic"
                      label="Payment Proof Link"
                      value={paymentname.link}
                      onChange={handleInputs}
                    />
                  </td>
                  <td>
                    <input
                      className="px-5 w-100"
                      id="payment-form-button"
                      type="submit"
                      value="Submit"
                      onClick={PostData}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default PaymentsPage;
