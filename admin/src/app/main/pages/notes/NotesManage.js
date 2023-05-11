import React, { useEffect, useState } from 'react';
import "./Notes.css";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon/FuseSvgIcon";
import { useNavigate } from 'react-router-dom';

const NotesManage = () => {

  const navigate = useNavigate();
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

const editnotes = (id) =>{
  const cofermation = confirm("Are you sure want to Edit?");
  if (cofermation){
      navigate(`/pages/notes/${id}`);
  }
}


const deletenotes = async (id) =>{
  const cofermation = confirm("Are you sure you want to delete?");
  if (cofermation){
  const res2 = await fetch(`/deletenotes/${id}`, {
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
    console.log("Notes deleted");
    getnotes();
    window.alert("Note Deleted!")

  }
}
}




  return (
    <>
      <div className="outer-container">
        <div className="container-main">
          {
            getnotesdata.map((element, id)=>{
              return(
                <div key={id} className="notes-item">
                  <div className="notes-upper">
                    <div className="notes-year">{element.year}</div>
                    <div className="notes-heading">
                      <div className="notes-title">{element.name}</div>
                      <div className="notes-subject">{element.subject}</div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="notes-bottom">
                    <div className="notes-button">
                      <span className="notes-view-button">
                        <button ><a target='_blank' href={element.link}>
                          <FuseSvgIcon className="text-48" size={24} color="action">
                            heroicons-outline:eye
                          </FuseSvgIcon>
                          </a>
                        </button>
                      </span>
                      <span className="notes-view-edit">
                        <button onClick={()=>editnotes(element._id)}>
                          <FuseSvgIcon className="text-48" size={24} color="action">
                            heroicons-outline:pencil
                          </FuseSvgIcon>
                        </button>
                      </span>
                      <span className="notes-view-delete">
                        <button onClick={()=>deletenotes(element._id)}>
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
          {/* <div className="notes-item">
            <div className="notes-upper">
              <div className="notes-year">Year</div>
              <div className="notes-heading">
                <div className="notes-title">Notes Title</div>
                <div className="notes-subject">Subject</div>
              </div>
            </div>
            <hr></hr>
            <div className="notes-bottom">
              <div className="notes-button">
                <span className="notes-view-button">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:eye
                    </FuseSvgIcon>
                  </button>
                </span>
                <span className="notes-view-edit">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:pencil
                    </FuseSvgIcon>
                  </button>
                </span>
                <span className="notes-view-delete">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:trash
                    </FuseSvgIcon>
                  </button>
                </span>
              </div>
            </div>
          </div> */}
          {/* <div className="notes-item">
            <div className="notes-upper">
              <div className="notes-year">Year</div>
              <div className="notes-heading">
                <div className="notes-title">Notes Title</div>
                <div className="notes-subject">Subject</div>
              </div>
            </div>
            <hr></hr>
            <div className="notes-bottom">
              <div className="notes-button">
                <span className="notes-view-button">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:eye
                    </FuseSvgIcon>
                  </button>
                </span>
                <span className="notes-view-edit">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:pencil
                    </FuseSvgIcon>
                  </button>
                </span>
                <span className="notes-view-delete">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:trash
                    </FuseSvgIcon>
                  </button>
                </span>
              </div>
            </div>
          </div><div className="notes-item">
            <div className="notes-upper">
              <div className="notes-year">Year</div>
              <div className="notes-heading">
                <div className="notes-title">Notes Title</div>
                <div className="notes-subject">Subject</div>
              </div>
            </div>
            <hr></hr>
            <div className="notes-bottom">
              <div className="notes-button">
                <span className="notes-view-button">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:eye
                    </FuseSvgIcon>
                  </button>
                </span>
                <span className="notes-view-edit">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:pencil
                    </FuseSvgIcon>
                  </button>
                </span>
                <span className="notes-view-delete">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:trash
                    </FuseSvgIcon>
                  </button>
                </span>
              </div>
            </div>
          </div><div className="notes-item">
            <div className="notes-upper">
              <div className="notes-year">Year</div>
              <div className="notes-heading">
                <div className="notes-title">Notes Title</div>
                <div className="notes-subject">Subject</div>
              </div>
            </div>
            <hr></hr>
            <div className="notes-bottom">
              <div className="notes-button">
                <span className="notes-view-button">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:eye
                    </FuseSvgIcon>
                  </button>
                </span>
                <span className="notes-view-edit">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:pencil
                    </FuseSvgIcon>
                  </button>
                </span>
                <span className="notes-view-delete">
                  <button>
                    <FuseSvgIcon className="text-48" size={24} color="action">
                      heroicons-outline:trash
                    </FuseSvgIcon>
                  </button>
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NotesManage;