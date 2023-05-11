import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../ContextProvider/Context';
import Panel from '../Dashboard/Panel';
import Sidebar from '../Dashboard/Sidebar';
import './Dashboard.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Dashboard = () => {

  const [data, setData] = useState(false);

  const {logindata, setLoginData} = useContext(LoginContext);
  console.log(logindata);

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
          usenav("/login")
          // console.log("Error Page redirect");

        }else{
          // console.log("User Verified")
          setLoginData(data)
          // usenav("/dashboard")
        }

    }

    // useEffect(()=>{
    //     DashboardValid();
    // },[])

    useEffect(()=>{
      setTimeout(()=>{
        DashboardValid();
        setData(true)
      }, 2000)
    },[])

  return (
    <>

    {
      data ?

      
      <>
      <div className="container-box d-flex">
        <div className="navbar-toggler"
          onClick={() => {
            document.getElementsByClassName("sidebar")[0].classList.toggle("active");
          }}>
        </div>

        <Sidebar/>
        <Panel/>
      </div>
    </>:<Box sx={{ display: 'flex', justifyContent:"center", alignItems:"center", height:"100vh" }}>
      Loading...&nbsp;
    <CircularProgress />
  </Box>
}
    </>
  )
}

export default Dashboard
