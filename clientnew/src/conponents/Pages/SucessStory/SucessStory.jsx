import React from "react";

import "./SucessStory.style.css";
import SSpic from "./assets/ss_cse.png"

function SucessStory() {
  return (
    <>
      <div className="outer-container-ss">
        <div className="ss-page-title">Sucess Stories</div>

        <div className="container-ss">
          <div className="story-description">
            The sense of satiety arrives at the doors of the entire fraternity
            of Chaibasa Engineering College when each one of its well-groomed
            and bright scholars gets an opportunity into one of the top
            companies to serve the cause for which our faculties have
            hard-worked for days and nights! When we look at our budding
            talents, a feeling like never before clasps us to the wonder of our
            steady internal and external support to find those smiling faces
            filled with the immense energy and aura to attain the heights of
            excellence, and we ask our students for nothing but their success!
            But… our students respond to us with this enormous volume of
            gratitude for which we extend our heart’s earnest and soul’s fullest
            sense of gratification!
          </div>
          <div className="ss-pic">
            <img src={SSpic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SucessStory;
