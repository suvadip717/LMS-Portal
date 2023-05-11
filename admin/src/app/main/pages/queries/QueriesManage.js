import FuseSvgIcon from '@fuse/core/FuseSvgIcon/FuseSvgIcon';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QueriesManage = () => {


    const navigate = useNavigate();


    const [getqueriesdata, setQueriesData] = useState ([]);
  // console.log(getnotesdata);
  
  const getuser = async(e) =>{
    const res = await fetch("/allquery",{
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
      setQueriesData(data)
        // alert("data added");
        console.log("Data Fetched!");
    }
  }
  
  
  useEffect(()=>{
    getuser();
  },[])
  
  const viewdetails = (id) =>{
    // const cofermation = confirm("Are you sure want to Edit?");
    // if (cofermation){
        navigate(`/pages/queries/${id}`);
    // }
  }


  return (
    <>
    <div className="payment-main m-10">
      <h1 className=' my-40 '>Student</h1>
      <div className="paymentbox bg-white p-36 rounded m-10">
        <h2 className="text-center pb-20 ">Student Details</h2>
        <div className="tablecatecory mt-40 "><h3 className='my-10'>Un Resolved Complaints</h3>
        <table className="table-auto text-start w-full  ">
          <thead>
            <tr className='text-start h-40 border '>
              <th className='text-start px-10 '>Student Name</th>
              <th className='text-start px-10 '>Stuent ID</th>
              <th className='text-start px-10 '>Title</th>
              <th className='text-start px-10 '>Status</th>
              <th className='text-start px-10 '>Check Details</th>
            </tr>
          </thead>
          <tbody>
            {
              getqueriesdata.map((element, id)=>{
                const check = (element.queryStatus === "Resolved")
                // console.log(check)
                if(!check){
                return(
                  <tr className='h-32 border-spacing-4 border ' key={id} >
                    <td className='px-10'>{element.name}</td>
                    <td className='px-10'>{element.studentid}</td>
                    <td className='px-10'>{element.title}</td>
                    <td className='px-10'>{element.queryStatus}</td>
                    {/* <td className='px-10'><a className=' p-5 rounded ' target='_blank' href={element.link}>Payment Proof Link</a></td> */}
                    <td className='px-10'><button className='p-5 rounded ' onClick={()=>viewdetails(element._id)}  ><FuseSvgIcon className="text-48" size={24} color="action">heroicons-outline:eye</FuseSvgIcon></button></td>
                  </tr>
                )}
              })
            }
          </tbody>
        </table>
        </div>
            <div className="tablecatecory my-20"><h3 className='my-10'>Resolved Complaints</h3>
        <table className="table-auto text-start w-full  ">
          <thead>
            <tr className='text-start h-40 border '>
              <th className='text-start px-10 '>Student Name</th>
              <th className='text-start px-10 '>Stuent ID</th>
              <th className='text-start px-10 '>Title</th>
              <th className='text-start px-10 '>Status</th>
              <th className='text-start px-10 '>Check Details</th>
            </tr>
          </thead>
          <tbody>
            {
              getqueriesdata.map((element, id)=>{
                if(element.queryStatus === "Resolved"){
                return(
                  <tr className='h-32 border-spacing-4 border ' key={id} >
                    <td className='px-10'>{element.name}</td>
                    <td className='px-10'>{element.studentid}</td>
                    <td className='px-10'>{element.title}</td>
                    <td className='px-10'>{element.queryStatus}</td>
                    {/* <td className='px-10'><a className=' p-5 rounded ' target='_blank' href={element.link}>Payment Proof Link</a></td> */}
                    <td className='px-10'><button className='p-5 rounded ' onClick={()=>viewdetails(element._id)}  ><FuseSvgIcon className="text-48" size={24} color="action">heroicons-outline:eye</FuseSvgIcon></button></td>
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

export default QueriesManage