import React from "react";

import Fimage from "./FacultyImage/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import "./FacultyPage.style.css";
// import Hero from "./Hero.component";

function FactultyPage() {
  return (
    <>
    
      
      <div className="outer-container">
      <div className="hero-text-faculty">&lt; Faculty of CSE &gt;</div>
        <div className="container-main">
          {/* HOD  */}
          <div className="faculty-type">
            <div className="faculty-title HOD">Head of the Department</div>
            <div className="faculty-content conainer">
              <div className="row">
                <div className="faculty-image-container col-md-5">
                  <div className="faculty-image">
                    <div className="faculty-image-left-bg"></div>
                    <div className="faculty-image-left">
                      <img src={Fimage} alt="" />
                    </div>
                  </div>
                </div>
                <div className="faculty-description col-md-7">
                  <div className="faculty-name">Name of HOD</div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nesciunt reiciendis aliquam dolorem excepturi
                  pariatur quod ipsam laboriosam eius animi, voluptate at,
                  aspernatur veniam autem. Quasi mollitia qui amet aliquid!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia blanditiis fuga ea repellat dolorum ratione aut
                  inventore voluptates! Est odit impedit vel. Laboriosam quasi
                  nobis doloremque provident tenetur veniam odit!
                </div>
              </div>
            </div>
          </div>

          <div className="faculty-type">
            <div className="faculty-title faculty-starting-symbol">Our Faculty</div>
            <div className="faculty-content conainer">
              {/* faculty row 1  */}
              <div className="faculty-row">
                <div className="row">
                  <div className="faculty-image-container col-md-5">
                    <div className="faculty-image">
                      <div className="faculty-image-left-bg"></div>
                      <div className="faculty-image-left">
                        <img src={Fimage} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="faculty-description col-md-7">
                    <div className="faculty-name">Arijit Dutta</div>
                    <div className="faculty-designation">Assistant Professor</div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi nesciunt reiciendis aliquam dolorem excepturi
                    pariatur quod ipsam laboriosam eius animi, voluptate at,
                    aspernatur veniam autem. Quasi mollitia qui amet aliquid!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia blanditiis fuga ea repellat dolorum ratione aut
                    inventore voluptates! Est odit impedit vel. Laboriosam quasi
                    nobis doloremque provident tenetur veniam odit!
                  </div>
                </div>
              </div>

              <div className="faculty-row">
                <div className="row">
                  <div className="faculty-description col-md-7">
                    <div className="faculty-name">Faculty Name 2</div>
                    <div className="faculty-designation">Designation</div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi nesciunt reiciendis aliquam dolorem excepturi
                    pariatur quod ipsam laboriosam eius animi, voluptate at,
                    aspernatur veniam autem. Quasi mollitia qui amet aliquid!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia blanditiis fuga ea repellat dolorum ratione aut
                    inventore voluptates! Est odit impedit vel. Laboriosam quasi
                    nobis doloremque provident tenetur veniam odit!
                  </div>
                  <div className="faculty-image-container col-md-5">
                    <div className="faculty-image">
                      <div className="faculty-image-right-bg"></div>
                      <div className="faculty-image-right">
                        <img src={Fimage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* faculty row 2  */}

              <div className="faculty-row">
                <div className="row">
                  <div className="faculty-image-container col-md-5">
                    <div className="faculty-image">
                      <div className="faculty-image-left-bg"></div>
                      <div className="faculty-image-left">
                        <img src={Fimage} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="faculty-description col-md-7">
                    <div className="faculty-name">Faculty Name 3</div>
                    <div className="faculty-designation">Designation</div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi nesciunt reiciendis aliquam dolorem excepturi
                    pariatur quod ipsam laboriosam eius animi, voluptate at,
                    aspernatur veniam autem. Quasi mollitia qui amet aliquid!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia blanditiis fuga ea repellat dolorum ratione aut
                    inventore voluptates! Est odit impedit vel. Laboriosam quasi
                    nobis doloremque provident tenetur veniam odit!
                  </div>
                </div>
              </div>

              <div className="faculty-row">
                <div className="row">
                  <div className="faculty-description col-md-7">
                    <div className="faculty-name">Faculty Name 4</div>
                    <div className="faculty-designation">Designation</div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi nesciunt reiciendis aliquam dolorem excepturi
                    pariatur quod ipsam laboriosam eius animi, voluptate at,
                    aspernatur veniam autem. Quasi mollitia qui amet aliquid!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia blanditiis fuga ea repellat dolorum ratione aut
                    inventore voluptates! Est odit impedit vel. Laboriosam quasi
                    nobis doloremque provident tenetur veniam odit!
                  </div>
                  <div className="faculty-image-container col-md-5">
                    <div className="faculty-image">
                      <div className="faculty-image-right-bg"></div>
                      <div className="faculty-image-right">
                        <img src={Fimage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* faculty row 3  */}

              <div className="faculty-row">
                <div className="row">
                  <div className="faculty-image-container col-md-5">
                    <div className="faculty-image">
                      <div className="faculty-image-left-bg"></div>
                      <div className="faculty-image-left">
                        <img src={Fimage} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="faculty-description col-md-7">
                    <div className="faculty-name">Faculty Name 5</div>
                    <div className="faculty-designation">Designation</div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi nesciunt reiciendis aliquam dolorem excepturi
                    pariatur quod ipsam laboriosam eius animi, voluptate at,
                    aspernatur veniam autem. Quasi mollitia qui amet aliquid!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia blanditiis fuga ea repellat dolorum ratione aut
                    inventore voluptates! Est odit impedit vel. Laboriosam quasi
                    nobis doloremque provident tenetur veniam odit!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FactultyPage;
