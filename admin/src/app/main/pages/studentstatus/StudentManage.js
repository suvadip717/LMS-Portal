import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentManage = () => {

  const navigate = useNavigate();


  const [getuserdata, setGetUserData] = useState ([]);
// console.log(getnotesdata);

const getuser = async(e) =>{
  const res = await fetch("/allusers",{
      method:"GET",
      headers:{
          "Content-Type":"application/json"
      }
  });

  const data = await res.json();
  console.log(data);

  if(res.status === 422 || !data){
      // alert("error");
      console.log("error");
  }else{
    setGetUserData(data)
      // alert("data added");
      console.log("Data Fetched!");
  }
}


useEffect(()=>{
  getuser();
},[])

const editstudent = (id) =>{
  const cofermation = confirm("Are you sure want to Edit?");
  if (cofermation){
      navigate(`/pages/students/${id}`);
  }
}





  return (
    <>
    <div className="payment-main m-10">
      <h1 className=' my-40 '>Student</h1>
      <div className="paymentbox bg-white p-36 rounded m-10">
        <h2 className="text-center pb-20 ">Student Details</h2>
            <div className="tablecatecory my-5"><h3 className='my-10'>Users with Active Status</h3>
        <table className="table-auto text-start w-full  ">
          <thead>
            <tr className='text-start h-40 border '>
              <th className='text-start px-10 '>Student Name</th>
              <th className='text-start px-10 '>Stuent ID</th>
              <th className='text-start px-10 '>Email</th>
              <th className='text-start px-10 '>Status</th>
              <th className='text-start px-10 '>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              getuserdata.map((element, id)=>{
                if(element.userStatus === "Active"){
                return(
                  <tr className='h-32 border-spacing-4 border ' key={id} >
                    <td className='px-10'>{element.firstName} {element.lastName}</td>
                    <td className='px-10'>{element.studentid}</td>
                    <td className='px-10'>{element.email}</td>
                    <td className='px-10'>{element.userStatus}</td>
                    {/* <td className='px-10'><a className=' p-5 rounded ' target='_blank' href={element.link}>Payment Proof Link</a></td> */}
                    <td className='px-10'><button className='p-5 rounded ' onClick={()=>editstudent(element._id)}  ><FuseSvgIcon className="text-48" size={24} color="action">heroicons-outline:pencil-alt</FuseSvgIcon></button></td>
                  </tr>
                )}
              })
            }
          </tbody>
        </table>
        </div>
        <div className="tablecatecory mt-40 "><h3 className='my-10'>Users with Pending Status</h3>
        <table className="table-auto text-start w-full  ">
          <thead>
            <tr className='text-start h-40 border '>
              <th className='text-start px-10 '>Student Name</th>
              <th className='text-start px-10 '>Stuent ID</th>
              <th className='text-start px-10 '>Email</th>
              <th className='text-start px-10 '>Status</th>
              <th className='text-start px-10 '>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              getuserdata.map((element, id)=>{
                if(element.userStatus === "Pending"){
                return(
                  <tr className='h-32 border-spacing-4 border ' key={id} >
                    <td className='px-10'>{element.firstName} {element.lastName}</td>
                    <td className='px-10'>{element.studentid}</td>
                    <td className='px-10'>{element.email}</td>
                    <td className='px-10'>{element.userStatus}</td>
                    {/* <td className='px-10'><a className=' p-5 rounded ' target='_blank' href={element.link}>Payment Proof Link</a></td> */}
                    <td className='px-10'><button className='p-5 rounded ' onClick={()=>editstudent(element._id)}  ><FuseSvgIcon className="text-48" size={24} color="action">heroicons-outline:pencil-alt</FuseSvgIcon></button></td>
                  </tr>
                )}
              })
            }
          </tbody>
        </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default StudentManage