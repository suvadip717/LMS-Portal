import React, { Component } from "react";
import "./HeaderStyle.css";
// import HeadLogo from "./ImgHeader/logo.png";

class HeaderNav extends Component {
  state = {
    isCollapsed: false,
  };

  render() {
    return (
      <>
        {/* <div className="heading-top">
          <img className="brand-logo" src={HeadLogo} alt="" />
        </div> */}
        <nav
          className={
            this.state.isCollapsed ? "nv-container active" : "nv-container"
          }
        >
          {/* for navigation bar lists */}
          <ul className="nv-list justify-content-center">
            <div className="close-btn">
              {/* closing button for navigation in small screen */}
              <i
                className="fa-solid fa-xmark"
                onClick={() =>
                  this.setState({ isCollapsed: !this.state.isCollapsed })
                }
              ></i>
            </div>
            <li className="nv-item">
              <a className="navbar-common" href="/">Home</a>
            </li>
            <li className="nv-item">
              <a className="navbar-common" href="faculty">Faculty</a>
            </li>
            <li className="nv-item">
              <a className="navbar-common" href="programs">Programs and Syllabi</a>
            </li>
            <li className="nv-item">
              <a className="navbar-common" href="/allnotes">Notes</a>
              <ul className="nv-list-extended">
                <li className="nv-item">
                  <a className="navbar-inner-common" href="notes2y">2nd Year</a>
                </li>
                <li className="nv-item">
                  <a className="navbar-inner-common"  href="notes3y">3rd Year</a>
                </li>
                <li className="nv-item">
                  <a className="navbar-inner-common"  href="notes4y">4th Year</a>
                </li>
                {/* <li className="nv-item">
                  <a href="">Labs</a>
                </li> */}
                {/* <li className="nv-item">
                  <a href="">Library</a>
                </li> */}
              </ul>
            </li>
            <li className="nv-item">
              <a className="navbar-common" href="allquestions">Question Bank</a>
              <ul className="nv-list-extended">
                <li className="nv-item">
                  <a className="navbar-inner-common"  href="question2y">2nd Year</a>
                </li>
                <li className="nv-item">
                  <a className="navbar-inner-common"  href="question3y">3rd Year</a>
                </li>
                <li className="nv-item">
                  <a className="navbar-inner-common"  href="question4y">4th Year</a>
                </li>
              </ul>
            </li>
            <li className="nv-item">
              <a className="navbar-common" href="students2y">Students</a>
              <ul className="nv-list-extended">
                <li className="nv-item">
                  <a className="navbar-inner-common"  href="students2y">2nd Year</a>
                </li>
                <li className="nv-item">
                  <a className="navbar-inner-common"  href="students3y">3rd Year</a>
                </li>
                <li className="nv-item">
                  <a className="navbar-inner-common"  href="students4y">4th Year</a>
                </li>
              </ul>
            </li>
            <li className="nv-item">
              {/* <a href="">People</a> */}
              <ul className="nv-list-extended">
                {/* <li className="nv-item">
                  <a href="faculty">Faculty</a>
                </li> */}
                {/* <li className="nv-item">
                  <a href="">Staff</a>
                </li> */}
                {/* <li className="nv-item">
                  <a href="">Students</a>
                </li> */}
                {/* <li className="nv-item">
                  <a href="">Alumni</a>
                </li> */}
              </ul>
            </li>
            {/* <li className="nv-item">
              <a href="">Activities</a>
              <ul className="nv-list-extended">
                <li className="nv-item">
                  <a href="">Blog</a>
                </li>
                <li className="nv-item">
                  <a href="">Events</a>
                </li>
                <li className="nv-item">
                  <a href="">Magzine</a>
                </li>
                <li className="nv-item">
                  <a href="">Clubs</a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nv-item">
              <a href="">Placements</a>
              <ul className="nv-list-extended">
                <li className="nv-item">
                  <a href="">Our Recruiters</a>
                </li>
                <li className="nv-item">
                  <a href="">Placement Statistics</a>
                </li>
                <li className="nv-item">
                  <a href="">Yearly Offers</a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nv-item">
              <a href="">Payments</a>
            </li>
            <li className="nv-item">
              <a href="">Suggestion & Grievance</a>
            </li>
            <li className="nv-item">
              <a href="">Contact Us</a>
            </li> */}
          </ul>
        </nav>
      </>
    );
  }
}

export default HeaderNav;
