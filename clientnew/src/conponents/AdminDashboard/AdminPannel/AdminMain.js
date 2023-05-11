import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../ContextProvider/Context';
// import Panel from '../Dashboard/Panel';
// import Sidebar from '../Dashboard/Sidebar';
// import './Dashboard.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import AdminTopbar from './AdminTopbar';
import AdminSidebar from './AdminSidebar';

const AdminMain = () => {

  const [data, setData] = useState(false);

  const {logindata, setLoginData} = useContext(LoginContext);
//   console.log(logindata);

  const usenav = useNavigate();

    const DashboardValid = async() =>{
        let token = localStorage.getItem("usersdatatoken");
        // console.log(token);
        const res = await fetch("/validadmin",{
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
          console.log("Error Page redirect");

        }else{
          // console.log("User Verified")
          setLoginData(data)
          usenav("/adminpannel")
        }

    }

    useEffect(()=>{
        DashboardValid();
    },[])

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

        <AdminTopbar className="admintopbar" />
        <AdminSidebar/>
      </div>
    </>
    :<Box sx={{ display: 'flex', justifyContent:"center", alignItems:"center", height:"100vh" }}>
      Loading...&nbsp;
    <CircularProgress />
  </Box>
}
    </>
  )
}



export default AdminMain