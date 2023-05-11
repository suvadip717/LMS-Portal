import React from 'react';
import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from './assets/home_slide_7.jpg';
import slide2 from './assets/home_slide_6.jpg';
import slide3 from './assets/home_slide_5.jpg';
// import CollegeImage from "./assets/college_1_pic.jpg";
import CampusImage1 from "./assets/home_gallery_1.jpg";
import CampusImage2 from "./assets/home_gallery_2.jpg";
import CampusImage3 from "./assets/home_slide_4.jpg";
import Place1 from "./assets/671_TCS_Placed_Students.jpeg";
import Place2 from "./assets/849_LTI_2022 wEBSITE_SAMPLE_2.png";
import { useNavigate } from 'react-router-dom';




const HomePage = () => {


  const navigate = useNavigate();

const navFaculty=()=>{
  navigate("/facultynew");
}

  return (
    <>
      {/* <section>
        <div className="full-page">
          <div className="container">
            <div className="row">
              <div className="innerbox">
                <img className='globe-image' src={GlobeR} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section  className='landing-carousel'>
        <div className=''>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
        </div>
      </section>

      <section className='home-about'>
        <div className='about-row container-fluid row'>
          <div className='about-col-1 col-md-3 col-12'>
            <div className='about-head-1'>
              <h3>ABOUT DEPARTMENT</h3>
            </div>
          </div>
          <div className='about-col-2 col-md-9 col-12'>
            <div className='about-head-2'>
              <h4>EDUCATION IS NOT PREPARATION FOR LIFE; EDUCATION IS LIFE ITSELF</h4>
            </div>

            <div className='row row-about'>
              <div className='col-md-5 col-about'>
                <div className='mission-card'>
                  <div className='card-head'>
                    <h4>OUR MISSION</h4>
                  </div>
                  <div className='card-body'>
                    <p>To Impart Engineering Education with the help of Interactive teaching learning method by strengthening fundamentals of engineering. To provide additional exposure in the form of assignments, training, visits, projects besides curriculum to prepare students for future professional challenges. To create an academic atmosphere wherein students will be encouraged to solve real life problems of society by applying engineering knowledge & skill.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-5 col-about'>
                <div className='mission-card'>
                  <div className='card-head'>
                    <h4>OUR VISION</h4>
                  </div>
                  <div className='card-body'>
                    <p>To be a place where engineering education is driven by innovative teaching, learning method aiming to develop competent professional engineering graduates by imparting awareness on higher education and sense of responsiblity towards society.</p>
                    <br/><br/><br/><br/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className='home-about'>
        <div className='about-row container-fluid row'>
          <div className='about-col-1 col-md-3 col-12'>
            <div className='about-head-1'>
              <h3>FACULTY</h3>
            </div>
          </div>
          <div className='about-col-2 col-md-9 col-12'>
            <div className='about-head-2'>
              <h4>OUR SKILLED FACULTY HELPS STUDENTS IN MANY DISCIPLINES</h4>
            </div>
          </div>
        </div>
      </section>

      <section className='faculty-sec'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 col-12 faculty-col'>
              <div className='faculty-description-home'>
                <div className='faculty-des-fake-button'>
                  <p>BACHELOR'S OF TECHNOLOGY</p>
                </div>
                <div className='faculty-des-heading'>
                  <p>Faculty of Department of Computer Science & Engineering</p>
                </div>
                <div className='faculty-button'>
                  <button onClick={navFaculty} >See All Faculty</button>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-12 faculty-col-2'>
              <div className='faculty-image-homepage'>
                {/* <img src={CollegeImage} alt="" /> */}

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* section placements
       */}

      <section className='home-about'>
        <div className='about-row container-fluid row'>
          <div className='about-col-1 col-md-3 col-12'>
            <div className='about-head-1'>
              <h3>PLACEMENTS</h3>
            </div>
          </div>
          <div className='about-col-2 col-md-9 col-12'>
            <div className='about-head-2'>
              <h4>STUDENTS PROVING THEMSELVES IN DIFFERENT FIELDS</h4>
            </div>
          </div>
        </div>
      </section>
      <section className='placement-bg'>
        <div className='container'>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Place1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <div className='carousel-caption-box'>
                    <h3>Session 2019-23</h3>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Place2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <div className='carousel-caption-box'>
                    <h3>Session 2019-23</h3>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
        </div>
            
      </section>


      <section className='stats-sec'>
        <div className='container-fluid row'>
          <div className='col-md-4 col-12 stats-col'>
            <div className='stats-main'>
              <p><span className='big-text'>5K</span><span className='small-text'>Students</span></p>
            </div>
            <div className='stats-discription'>At Present, There Are Five Departments Within The Faculty.</div>
          </div>
          <div className='col-md-4 col-12 stats-col liner'>
            <div className='stats-main'>
              <p><span className='big-text'>200</span><span className='small-text'>Professors</span></p>
            </div>
            <div className='stats-discription'>At Present, There Are Five Departments Within The Faculty.</div>
          </div>
          <div className='col-md-4 col-12 stats-col'>
            <div className='stats-main'>
              <p><span className='big-text'>07</span><span className='small-text'>Faculty</span></p>
            </div>
            <div className='stats-discription'>At Present, There Are Five Departments Within The Faculty.</div>
          </div>
        </div>
      </section>

      <section className='home-about'>
        <div className='about-row container-fluid row'>
          <div className='about-col-1 col-md-3 col-12'>
            <div className='about-head-1'>
              <h3>CAMPUS LIFE</h3>
            </div>
          </div>
          <div className='about-col-2 col-md-9 col-12'>
            <div className='about-head-2'>
              <h4>UNIVERSITY IS THE
                BEST TIME OF YOUR
                LIFE.</h4>
            </div>
          </div>
        </div>
        <div className='container-fluid row cimage-row'>
          <div className='col-md-6 col-12 campus-col'>
            <div className='campus-image'>
              <img src={CampusImage1} alt="" /><br/><br/>
              <img src={CampusImage3} alt=""/>
            </div>
          </div>
          <div className='col-md-6 col-12 campus-col'>
            <div className='campus-image'>
              <img src={CampusImage2} alt="" />
            </div>
          </div>
        </div>

      </section>




      {/* <section className='login-button home-about'>
        <div className='button'>
          <a href='/'>Login Here</a>
        </div>
      </section> */}
      <div className="notice-outer">
        <div className="notice-sec container py-3">
          <div className="notice-box text-white">
            <h2>Notice Board</h2>
            <div className="notice-list">
              <div className="notice-list-item border-white">
                <ul className='d-flex justify-content-around'> 
                  <li>
                    <a href="/">Notice One 08/05/2023 Notice For 4th Year</a>
                  </li>
                  <li>
                    <a href="/">Notice Two</a>
                  </li>
                  <li>
                    <a href="/">Notice Three</a>
                  </li>
                  <li>
                    <a href="/">Notice Four</a>
                  </li>
                  <li>
                    <a href="/">Notice Five</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
















      {/* footer */}
      {/* <section className='footer-home'>
        <div className='container'>
          <div className='footer-home-row'>
            <div>
              <div className='footer-content'>
                <div className='footer-content-inner'>
                  <p>Copyright @ 2023 | Computer Science & Engineering Department, Chaibasa Engineering COllege </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


    </>
  )
}

export default HomePage