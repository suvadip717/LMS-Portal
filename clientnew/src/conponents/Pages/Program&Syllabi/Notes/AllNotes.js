import React, { useEffect, useState } from 'react';
// import notespreview from "../NotesImage/59536-OA7PQF-21.jpg";
import notespreview from "../Notes/NotesImage/59536-OA7PQF-21.jpg";
import "./notes.style.css";

const AllNotes = () => {

  const [getnotesdata, setGetnNotesData] = useState([]);
    // console.log(getnotesdata);
    
    const getnotes = async(e) =>{
      const res = await fetch("/allnotes",{
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
        setGetnNotesData(data)
          // alert("data added");
          console.log("Data Fetched!");
      }
  }
  
  
  useEffect(()=>{
    getnotes();
  },[])
    
  return (
    <>
      <div className="outer-container-notes">
        <div className="page-title-notes">All Books & Notes</div>
        <div className="container-main-notes">
          <div className="notes-container">
            {
              getnotesdata.map((element, id)=>{
                return(
                  <div key={id} className="notes-item">
                    <img src={notespreview} alt="" />
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

export default AllNotes