import React, { useEffect, useState } from 'react';
// import notespreview from "../NotesImage/59536-OA7PQF-21.jpg";
import questionPreview from "./QuestionImages/104772-OMICGS-121.jpg";
import "./QuestionPaper.style.css";

const AllQuestions = () => {

  const [getquestionsdata, setQuestionsData] = useState([]);
    // console.log(getquestionsdata);
    
    const getnotes = async(e) =>{
      const res = await fetch("/allQuestions",{
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
        setQuestionsData(data)
          // alert("data added");
          console.log("Data Fetched!");
      }
  }
  
  
  useEffect(()=>{
    getnotes();
  },[])
    
  return (
    <>
      <div className="outer-container-question">
        <div className="page-title-question">All Question</div>
        <div className="container-main-notes">
          <div className="notes-container">
            {
              getquestionsdata.map((element, id)=>{
                return(
                  <div key={id} className="question-item">
                    <img src={questionPreview} alt="" />
                    <div className="overlay"></div>
                    <div className="view-button">
                      <a target='_blank' rel="noreferrer" href={element.link}>View</a>
                    </div>
                    <div id="sc-name1 " className='text-center'>{element.name}</div>
                    <div id="year1">{element.year}</div>
                    <div className="user-name">{element.subject}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default AllQuestions