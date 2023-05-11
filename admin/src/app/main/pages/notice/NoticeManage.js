import React, { useEffect, useState } from 'react';
import FuseSvgIcon from "@fuse/core/FuseSvgIcon/FuseSvgIcon";
import './notice.css';
import { useNavigate } from 'react-router-dom';

const NoticeManage = () => {


  const navigate = useNavigate();


  const [getnoticedata, setGetNoticeData] = useState([]);

  const getnotice = async(e) =>{
    const res = await fetch("/allnotice",{
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
      setGetNoticeData(data)
        // alert("data added");
        console.log("Data Fetched!");
    }
}


useEffect(()=>{
  getnotice();
},[])

const editnotice = (id) =>{
  const cofermation = confirm("Are you sure want to Edit?");
  if (cofermation){
      navigate(`/pages/notice/${id}`);
  }
}

const deletenotice = async (id) =>{
  const cofermation = confirm("Are you sure you want to delete?");
  if (cofermation){
  const res2 = await fetch(`/deletenotice/${id}`, {
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
    getnotice();
    console.log("Notice deleted");
    window.alert("Notice Deleted!")

  }
}
}





  return (
    <>
    <div className="outer-container">
        <div className="container-main">
          {
            getnoticedata.map((element, id)=>{
              return(
                <div key={id} className="notice-item">
                  <div className="notice-upper">
                    <div className="notice-year">{element.year}</div>
                    <div className="notice-heading">
                      <div className="notice-title">{element.name}</div>
                      <div className="notice-subject">{element.date}</div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="notice-bottom">
                    <div className="notice-button">
                      <span className="notice-view-button">
                        <button ><a target='_blank' href={element.link}>
                          <FuseSvgIcon className="text-48" size={24} color="action">
                            heroicons-outline:eye
                          </FuseSvgIcon>
                          </a>
                        </button>
                      </span>
                      <span className="notice-view-edit">
                        <button onClick={()=>editnotice(element._id)}>
                          <FuseSvgIcon className="text-48" size={24} color="action">
                            heroicons-outline:pencil
                          </FuseSvgIcon>
                        </button>
                      </span>
                      <span className="notice-view-delete">
                        <button onClick={()=>deletenotice(element._id)}>
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

export default NoticeManage