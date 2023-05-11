import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProfilePage.css";
import { LoginContext } from '../../ContextProvider/Context';
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import FolderIcon from "@mui/icons-material/Folder";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ProfilePage() {
    const [data, setData] = useState(false);

  const {logindata, setLoginData} = useContext(LoginContext);
  const usenav = useNavigate();

  const DashboardValid = async() =>{
    let token = localStorage.getItem("usersdatatoken");
    // console.log(token);
    const res = await fetch("/validuser",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization":token
      }
    });

    const data = await res.json();
        console.log(data);

        if(data.status === 401 || !data){
          usenav("/login")

        }
        else{
          setLoginData(data)
        }

  }

  useEffect(()=>{
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    }, 2000)
  },[])

  return (

    
    <>
    {logindata ? <>
      <div className="profile-page-title">Your Profile</div>

      <div className="container-profile-main">
        <div className="profile-cover"></div>
        <div className="profile-icon">
            <h3>{logindata.firstName[0]}{logindata.lastName[0]}</h3>
        </div>

        <div className="container-profile-data">
          <div className="container-left">
            <div className="profile-name">
              <h2>{logindata.firstName} {logindata.lastName}</h2>
            </div>
            <div className="profile-info-container">
              <div className="profile-info-data">
                <span className="info">Student ID:</span> {logindata.studentid}
              </div>
              <div className="profile-info-data">
                <span className="info">Session:</span> {logindata.session? logindata.session :"2019-23"}
              </div>
              <div className="profile-info-data">
                <span className="info">Email:</span> {logindata.email}
              </div>
              <div className="profile-info-data">
                <span className="info">University Roll:</span> 19011440018
              </div>
            </div>

            <div className="button-container">
              {/* <button className="btn-edit">Edit Profile</button> */}
              <button className="btn-query">
                {" "}
                <a href="/contact" target="_blank">
                  <ContactSupportOutlinedIcon />
                </a>{" "}
              </button>
            </div>
          </div>

          <div className="container-right">
            <div className="goto-links-container">
              <div className="goto-heading">
                <h3> Go To</h3>
              </div>

              <div className="goto-link-container">
                <div className="goto-link-item item-left">
                  <div className="goto-link-hading">Notes</div>
                  <div className="goto-link">
                    <a href="/allnotes" target="_blank">
                      <FolderIcon />
                      All Notes
                    </a>
                    {/* <a href="/allnotes" target="_blank">
                      <FolderIcon />
                      3rd Year
                    </a>
                    <a href="/allnotes" target="_blank">
                      <FolderIcon />
                      4th Year
                    </a> */}
                  </div>
                </div>

                <div className="goto-link-item">
                  <div className="goto-link-hading">Questions</div>
                  <div className="goto-link">
                    <a href="/allquestions" target="_blank">
                      <FolderIcon />
                      All Questions
                    </a>
                    {/* <a href="/allquestion" target="_blank">
                      <FolderIcon />
                      3rd Year
                    </a>
                    <a href="/allquestion" target="_blank">
                      <FolderIcon />
                      4th Year
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </> : <Box sx={{ display: 'flex', justifyContent:"center", alignItems:"center", height:"100vh" }}>
                Loading...&nbsp;
                <CircularProgress />
            </Box>
}
    </>
  );
}

export default ProfilePage;
