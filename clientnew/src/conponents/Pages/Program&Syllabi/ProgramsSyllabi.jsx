import React from "react";

import "./Programs-and-syllabi.css";

function ProgramsSyllabi() {
  return (
    <>
      <div className="outer-container-ps">
        <div className="ps-page-title">Syllabus and Materials</div>
        <div className="container-main-ps">
          <div className="annual-intake">Annual Intake</div>

          <table className="pandstable">
            <thead>
              <tr>
                <th scope="col">Name of Program</th>
                <th scope="col">Specilization</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Name of Program">B.Tech</td>
                <td data-label="Specilization">Computer Science & Engineering</td>
                <td data-label="Full Time">4 Years</td>
              </tr>
            </tbody>
          </table>

          {/* <div className="ai-container">
            <div className="ai-title">Name of Program</div>
            <div className="ai-title">Specilization</div>
            <div className="ai-title">Full Time</div>
          </div> */}

          <div className="Btech-program"> B.Tech Programme </div>

          <div className="batch-container">
            <div className="batch-year">
              <div className="batch-year-title">2nd year</div>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1az5bZoVNzv7EZKi091qwfDET7kf4E1iH/view?usp=share_link"
                  >
                    Click syllabus
                  </a>
                </li>
                <li>
                  <a href="/allquestions">Question Bank</a>
                </li>
                <li>
                  <a href="/allnotes">Books and resources</a>
                </li>
              </ul>
            </div>
            <div className="batch-year">
              <div className="batch-year-title">3rd year</div>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1mZWaUiakakR7eVd6-JXQ72VX0R6vbCs0/view?usp=share_link"
                  >
                    Click syllabus
                  </a>
                </li>
                <li>
                  <a href="/allquestions">Question Bank</a>
                </li>
                <li>
                  <a href="/allnotes">Books and resources</a>
                </li>
              </ul>
            </div>
            <div className="batch-year">
              <div className="batch-year-title">4th year</div>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1xA-ydJDbAiDbwFK-N8YWYPZiOKj3ODxn/view?usp=share_link"
                  >
                    Click syllabus
                  </a>
                </li>
                <li>
                  <a href="/allquestions">Question Bank</a>
                </li>
                <li>
                  <a href="/allnotes">Books and resources</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgramsSyllabi;
