import React, { useState } from 'react'
import { useEffect } from 'react';

const Payment = () => {


  const [getpaymentdata, setGetnPaymentData] = useState ([]);
// console.log(getnotesdata);

const getnotes = async(e) =>{
  const res = await fetch("/allpayment",{
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
    setGetnPaymentData(data)
      // alert("data added");
      console.log("Data Fetched!");
  }
}


useEffect(()=>{
getnotes();
},[])



  return (
    <>
    <div className="payment-main m-10">
      <h1 className=' my-40 '>Payment</h1>
      <div className="paymentbox bg-white p-36 rounded m-10">
        <h2 className="text-center pb-20 ">Payment Details</h2>
        <table className="table-auto text-start w-full  ">
          <thead>
            <tr className='text-start h-40 border '>
              <th className='text-start px-10 '>Student Name</th>
              <th className='text-start px-10 '>Stuent ID</th>
              <th className='text-start px-10 '>Semester</th>
              <th className='text-start px-10 '>Date</th>
              <th className='text-start px-10 '>UTR Number</th>
              <th className='text-start px-10 '>Category</th>
              <th className='text-start px-10 '>Ammount Paid</th>
              <th className='text-start px-10 '>Payment Proof</th>
            </tr>
          </thead>
          <tbody>
            {
              getpaymentdata.map((element, id)=>{
                return(
                  <tr className='h-32 border-spacing-4 border ' key={id} >
                    <td className='px-10'>{element.name}</td>
                    <td className='px-10'>{element.studentid}</td>
                    <td className='px-10'>{element.semester}</td>
                    <td className='px-10'>{element.date}</td>
                    <td className='px-10'>{element.utrnumber}</td>
                    <td className='px-10'>{element.category}</td>
                    <td className='px-10'>{element.ammount}</td>
                    <td className='px-10'><a className=' p-5 rounded ' target='_blank' href={element.link}>Payment Proof Link</a></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Payment