import React from "react";

import "./FacultyNew.style.css";
import Fimagehod from "../FacultyImage/Beas_Bhadra.jpeg";
import Fimageas from "../FacultyImage/Arijit_sir.jpeg";
import Fimageps from "../FacultyImage/priyanjan.jpg";
import Fimageks from "../FacultyImage/kesevsir.jpg";

function FacultyNew() {
  return (
    <>
      <div className="container-main-faculty">
        <div className="faculty-page-title">Faculty of CSE</div>

        <div className="container-faculty-main">
          <div className="faculty-type-title">Head of the Department</div>
          <div className="faculty-type">
            <div className="faculty-info">
              <div className="faculty-image-container">
                <div className="faculty-image">
                  <img src={Fimagehod} alt="" />
                  <div className="gradient-bg"></div>
                </div>
              </div>
              <div className="faculty-description">
                <div className="faculty-name">Beas Bhadra</div>
                <div className="designation">Professor And Head</div>
                <div className="about-facutly">Qualification - M.Tech</div>
                <div className="about-facutly">Professional Experience - 6 Years</div>
                <div className="about-facutly">Area of Interest - DSA, IOT</div>
                {/* <div className="about-facutly">Education -</div> */}
                <div className="about-facutly">Recently taught courses - Computer Graphics</div>
              </div>
            </div>
          </div>

          <div className="faculty-type">
            <div className="faculty-type-title">Faculty Members</div>

            <div className="faculty-info">
              <div className="faculty-image-container">
                <div className="faculty-image">
                  <img src={Fimageas} alt="" />
                  <div className="gradient-bg"></div>
                </div>
              </div>
              <div className="faculty-description">
                <div className="faculty-name">Arijit Datta</div>
                <div className="designation">Assistant Professor</div>
                <div className="about-facutly">Qualification - M.Tech</div>
                <div className="about-facutly">
                  Professional Experience - 3 Years 9 Month
                </div>
                <div className="about-facutly">
                  Area of Interest - Machine Learning, Data Science
                </div>
                {/* <div className="about-facutly">Education -</div> */}
                <div className="about-facutly">
                  Recently taught courses - Machine Learning, Data Science
                </div>
              </div>
            </div>

            <div className="faculty-info">
              <div className="faculty-image-container">
                <div className="faculty-image">
                  <img src={Fimageps} alt="" />
                  <div className="gradient-bg"></div>
                </div>
              </div>
              <div className="faculty-description">
                <div className="faculty-name">Priyaranjan Satapathi</div>
                <div className="designation">Assistant Professor</div>
                <div className="about-facutly">Qualification - M.Tech, B.Tech(Electronics)</div>
                <div className="about-facutly">Professional Experience - 12 Years</div>
                <div className="about-facutly">Area of Interest - AI, Robotics</div>
                {/* <div className="about-facutly">Education -</div> */}
                <div className="about-facutly">Recently taught courses - Digital Image Processing, Internet Of Things</div>
              </div>
            </div>

            <div className="faculty-info">
              <div className="faculty-image-container">
                <div className="faculty-image">
                  <img src={Fimageks} alt="" />
                  <div className="gradient-bg"></div>
                </div>
              </div>
              <div className="faculty-description">
                <div className="faculty-name">Keshab Chatterjee</div>
                <div className="designation">Assistant Professor</div>
                <div className="about-facutly">Qualification - M.Tech, B.Tech</div>
                <div className="about-facutly">Professional Experience - 12 Years</div>
                <div className="about-facutly">Area of Interest - Data Science</div>
                {/* <div className="about-facutly">Education -</div> */}
                <div className="about-facutly">Recently taught courses - Networking, OS, C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacultyNew;
