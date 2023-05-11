import React from 'react';
import '../Dashboard.css';
import Sidebar from '../Sidebar';

const Account = () => {
  return (
    <>
    {/* <Sidebar/> */}
    <div className="fullsec">
        <Sidebar/>
        <div className="pannelsec">
        <div className="pageheading">
            <h2>Manage Account</h2>
        </div>
        <div className="edit margin-block-50">
            <div className="editemail width-50">
                <h3>Edit Email</h3>
                <input className='width-50 padding-10' type="text" name="email" id="email" value={"aryansingh879791@gmail.com"}/>
            </div>
            <div className="editpassword width-50">
                <h3>Change Password</h3>
                <input className='width-50 padding-10' type="password" name="password" id="password" value={"**********"}/>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Account