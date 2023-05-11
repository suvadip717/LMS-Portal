import React, { useEffect, useState } from 'react';
import FuseSvgIcon from "@fuse/core/FuseSvgIcon/FuseSvgIcon";
import './question.css';
import { useNavigate } from 'react-router-dom';

const QuestionManage = () => {

  const navigate = useNavigate();
  const [getquestiondata, setGetQuestionData] = useState([]);

  const getquestion = async(e) =>{
    const res = await fetch("/allquestions",{
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
      setGetQuestionData(data)
        // alert("data added");
        console.log("Data Fetched!");
    }
}


useEffect (()=>{
  getquestion();
},[])

const editquestion = (id) =>{
  const cofermation = confirm("Are you sure want to Edit?");
  if (cofermation){
      navigate(`/pages/question/${id}`);
  }
}

const deletequestions = async (id) =>{
  const cofermation = confirm("Are you sure you want to delete?");
  if (cofermation){
  const res2 = await fetch(`/deletequestions/${id}`, {
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    }
  });
  const deletedata = await res2.json();
  console.log(deletedata);

  if(res2.status === 422 || !deletedata){
    console.log("error");
  }else{
    console.log("Questions deleted");
    getquestion();
    window.alert("Question Deleted!")

  }
}
}


  return (
    <>
      <div className="outer-container">
        <div className="container-main">
          {
            getquestiondata.map((element, id)=>{
              return(
                <div key={id} className="questions-item">
                  <div className="questions-upper">
                    <div className="questions-year">{element.year}</div>
                    <div className="questions-heading">
                      <div className="questions-title">{element.name}</div>
                      <div className="questions-subject">{element.subject}</div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="questions-bottom">
                    <div className="questions-button">
                      <span className="questions-view-button">
                        <button ><a target='_blank' href={element.link}>
                          <FuseSvgIcon className="text-48" size={24} color="action">
                            heroicons-outline:eye
                          </FuseSvgIcon>
                          </a>
                        </button>
                      </span>
                      <span className="questions-view-edit">
                        <button onClick={()=>editquestion(element._id)}>
                          <FuseSvgIcon className="text-48" size={24} color="action">
                            heroicons-outline:pencil
                          </FuseSvgIcon>
                        </button>
                      </span>
                      <span className="questions-view-delete">
                        <button onClick={()=>deletequestions(element._id)}>
                          <FuseSvgIcon className="text-48" size={24} color="action">
                            heroicons-outline:trash
                          </FuseSvgIcon>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default QuestionManage