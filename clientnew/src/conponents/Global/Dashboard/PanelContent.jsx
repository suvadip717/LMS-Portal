import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../ContextProvider/Context';

function PanelContent() {


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
    <div className="bio">
          <div className="bio-list">
            <div className="bio-item">
              {/* <div className="bio-name">Roll no:</div> */}
              <div className="bio-data">{logindata.regno}</div>
            </div>
            <div className="bio-item">
              <div className="bio-name">Student ID:</div>
              <div className="bio-data">{logindata.studentid}</div>
            </div>
            <div className="bio-item">
              <div className="bio-name">Session:</div>
              <div className="bio-data">2019-2023</div>
            </div>
            <div className="bio-item">
              <div className="bio-name">Mail:</div>
              <div className="bio-data">{logindata.email}</div>
            </div>
          </div>
          <button className="bio-editor btn"> Edit</button>
        </div>
    </>
  )
}

export default PanelContent