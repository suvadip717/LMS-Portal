import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../ContextProvider/Context";
import "./Dashboard.css";
import PanelContent from "./PanelContent";

function Panel() {

  const {logindata, setLoginData} = useContext(LoginContext);
  // console.log(logindata);

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
      usenav("/dashboard")
    }

}

useEffect(()=>{
    DashboardValid();
},[])




  return (
    <>
      <div className="panel">
        <div className="cover-image"></div>
        <div className="profile-image">
          <h3 className="profile-f-letter">{logindata ? logindata.firstName[0]:""}{ logindata ? logindata.lastName[0] :""}</h3>
          </div>
        <h1>{logindata.firstName} {logindata.lastName}</h1>
        <PanelContent/>
      </div>
      {/* <div className="d-block w-100 p-5">
        <div className="">
          <div className="d-flex">
            <div className="col-3 bg-black p-5 text-white">image</div>
            <div className="col-9 p-3">
              <div className="seconetitle d-flex justify-content-between">
                <div className="titlename">
                <h2>{logindata.firstName} {logindata.lastName}</h2>
                <p>Session: 2019-23</p>
                </div>
                <div className="titlebuttons">
                  <button className="bg-dark text-white py-2 px-3 rounded-pill mx-2">Edit Profile</button>
                  <button className="bg-dark text-white py-2 px-3 rounded-pill mx-2">Public View</button>
                </div>
                </div>
              <div className="seconeinfo"></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Panel;
