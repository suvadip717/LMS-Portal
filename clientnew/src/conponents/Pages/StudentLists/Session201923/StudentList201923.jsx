import React, { useEffect, useState } from 'react';
import '../StudentList.style.css'

function StudentList201923() {

    const [getstudents, setGetStudents] = useState([]);
    // console.log(getstudents);
    
    const getstudent = async(e) =>{
      const res = await fetch("/allstudents",{
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
        setGetStudents(data)
          // alert("data added");
          console.log("Data Fetched!");
      }
  }
  
  
  useEffect(()=>{
    getstudent();
  },[])


  return (
  <>
  <div className="outer-container">
    <div className="page-title-sl">&lt; Students of CSE &gt;</div>
    <div className="container-main-sl">
        <div className="sl-container">
            <div className="sl-year-batch"> Session: 2019-23 </div>
            {
                getstudents.map((element, id)=>{
                    return(
                        <div key={id} className="sname">{element.name}</div>
                    )
                })
            }
            {/* <div className="sname">name</div>
            <div className="sname">name</div>
            <div className="sname">name</div>
            <div className="sname">name</div>
            <div className="sname">name</div>
            <div className="sname">name</div>
            <div className="sname">name</div>
            <div className="sname">name</div>
            <div className="sname">name</div>
            <div className="sname">name</div>
            <div className="sname">name</div>
            <div className="sname">name</div> */}
        </div>
    </div>
  </div>
  </>
  )
}

export default StudentList201923