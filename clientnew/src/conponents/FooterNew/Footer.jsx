import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import fooimage from "./imageFooter/cse-logo.png";

import "./Footer.style.css";
function Footer() {
  return (
    <>
      <div className="outer-container-footer">
        <div className="container-main-footer">
          <div className="footer-item">
            <div className="footer-item-image">
              <img src={fooimage} alt="" />
            </div>
            <div className="footer-item-subheading">
              <i class="fa-solid fa-location-dot"></i>Office Address
            </div>
            <div className="footer-item-description">
              FQ8Q+JR2, Engineering College Kelendi, Jhinkpani, Chaibasa,
              Jharkhand 833215
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-item-heading">Contacts</div>
            <div className="footer-item-subheading">
              <i class="fa-solid fa-phone"></i>Phone
            </div>
            <div className="footer-item-description">
              +91 7980133127
              <br />
              +91 8274855706
            </div>
            <div className="footer-item-subheading">
              <i class="fa-solid fa-envelope"></i>Email
            </div>
            <div className="footer-item-description">
              <a href="mailto: cec.estd.govt@gmail.com">
                ceccsedatabase@gmail.com
              </a>
              <br />
              <a href="mailto: beasbhadra@gmail.com">
                beasbhadra@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-item-heading">Socials</div>
            <div className="footer-item-subheading">
              <a href="https://www.linkedin.com/company/cse-of-cec/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>linked.in
              </a>
            </div>
            <div className="footer-item-subheading">
              <a href="https://www.facebook.com/profile.php?id=100057156681850" target="_blank">
                <i class="fa-brands fa-facebook"></i>Facebook
              </a>
            </div>
            <div className="footer-item-subheading">
              <a href="https://www.youtube.com/@departmentofcsechaibasaeng1765" target="_blank">
              <i class="fa-brands fa-youtube"></i>Youtube
              </a>
            </div>
            {/* <div className="footer-item-subheading">
              <a href="https://twitter.com/" target="blank">
                <i class="fa-brands fa-twitter"></i>Twitter
              </a>
            </div>
            <div className="footer-item-subheading">
              <a href="https://www.instagram.com/" target="blank">
                <i class="fa-brands fa-instagram"></i>Instagram
              </a>
            </div> */}
          </div>
          <div className="footer-item">
            <div className="footer-item-heading">Quick Links</div>
            <ul>
              <li className="footer-links">
                <a href="https://chaibasaengg.edu.in/" target="blank">
                  College Website
                </a>
              </li>
              <li className="footer-links">
                <a href="https://www.aicte-india.org/" target="blank">
                  AICTE
                </a>
              </li>
              <li className="footer-links">
                <a href="https://jutranchi.ac.in/" target="blank">
                  JUT
                </a>
              </li>
              <li className="footer-links">
                <a href="https://jutgyanjyoti.jharkhand.gov.in/" target="blank">
                  Gyan Jyoti
                </a>
              </li>
              <li className="footer-links">
                <a href="https://www.chaibasaengg.edu.in/Admission_Form/admission_view" target="blank">
                  Apply for Admission
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-home-row">
          <div>
            <div className="footer-content">
              <div className="footer-content-inner">
                <p>
                  Copyright @ 2023 | Computer Science & Engineering Department,
                  Chaibasa Engineering College{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
