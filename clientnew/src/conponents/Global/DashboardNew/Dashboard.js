import React from "react";

import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="profile-heading">
        <div className="profile-name">Sandeep Murmu</div>
        <div className="profile-description">Student of CEC 4th year</div>
      </div>
      <div className="profile-container">
        <div className="profile-container-info">
          <div className="profile-info-title">Your Info</div>
          <div className="profile-info">
            <div className="profile-id">
              <span className="pi-title profile-id-title">Student ID:</span>
              <span className="profile-id-data"> 199001001009</span>
            </div>
            
          </div><div className="profile-info">
            <div className="profile-roll">
              <span className="pi-title profile-roll-title">University Roll no:</span>
              <span className="profile-roll-data"> 19011440018</span>
            </div>
            
          </div>
          <div className="profile-info">
            <div className="profile-session">
              <span className="pi-title profile-session-title">Session:</span>
              <span className="profile-session-data"> 2019 - 2023</span>
            </div>
          </div>
          <div className="profile-info">
            <div className="profile-email">
              <span className="pi-title profile-email-title">Email:</span>
              <span className="profile-email-data">
                {" "}
                Sandeepmurmu99@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className="profile-container-about">
          <div className="profile-about-title">About You</div>
          <div className="profile-about">
            loremLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </div>
        </div>

        <div className="profile-container-links">
          <div className="profile-link-title">Go To</div>
          <div className="profile-link">
            <a href="/" target="blank">
              Syllabus
            </a>
          </div>
          <div className="profile-link">
            <a href="/allnotes" target="blank">
              Notes
            </a>
          </div>
          <div className="profile-link">
            <a href="/allquestions" target="blank">
              Question
            </a>
          </div>
          <div className="profile-link">
            <a href="/payment" target="blank">
              Payments
            </a>
          </div>
          <div className="profile-link">
            <a href="/contact" target="blank">
              contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
