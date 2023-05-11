import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../ContextProvider/Context';
import "./Dashboard.css";

function Sidebar() {

  const {logindata, setLoginData} = useContext(LoginContext);
  // console.log(logindata.ValidUserOne.);

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
    // console.log(data);

    if(data.status === 401 || !data){
      usenav("*")
      // console.log("Error Page redirect");

    }else{
      // console.log("User Verified")
      setLoginData(data)
    }

}

useEffect(()=>{
    DashboardValid();
},[])


  return (
    <>
    <div className="sidebar">
          <div className="inner-sidebar">
            <div className="nav-items">
              <div className="page-title">
                <h2>{logindata ? logindata.firstName:""} {logindata ? logindata.lastName:""}</h2>
                <p>User Dashboard</p>
              </div>
              <div className="nav-links">
                <a href="/dashboard">Profile</a>{" "}
              </div>
              <div className="nav-links">
                <a href="/editprofile">Edit Profile</a>{" "}
              </div>
              <div className="nav-links">
                <a href="/account">Manage Account</a>{" "}
              </div>
              <div className="nav-links">
                <a href="/account">Logout</a>{" "}
              </div>
              {/* <div className="nav-links">
                <a href="/"> My Posts</a>{" "}
              </div> */}
              {/* <div className="nav-links">
                <a href="/">Uploads</a>{" "}
              </div> */}
            </div>
          </div>
        </div></>
  )
}

export default Sidebar