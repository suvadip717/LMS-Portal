import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import "./notice.css";
import { useNavigate } from 'react-router-dom';

const NoticeUpload = () => {

    const navigate = useNavigate();

    const [noticename, setNoticeName] = useState({
        name:"", date:"", year:"", link:"" 
      });
      let name, value;
      const handleInputs = (e) =>{
        console.log(e)
        name = e.target.name;
        value = e.target.value;
    
        setNoticeName({...noticename,[name]:value});
    }
    const PostData = async (e) => {
      e.preventDefault();
    
      const {name, date, year, link } = noticename;
      const res = await fetch('/addnotice', {
          method:"POST",
          headers:{
              "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            name, date, year, link
          })
      });

      const data = await res.json();
      console.log(data.status)
        if(data.status === 422 || !data){
            window.alert("Invalid Input");
            console.log("Invalid Input");
        }else{
            console.log("Input Sucessful");
            window.alert("Input Sucessfull");

            navigate("/pages/notice/manage");
        }
    
    }



  return (
    <>
      <div className="notice-upload my-5">
          <form className='notice-upload-form p-3 rounded' method="post">
                    <div className="notice-upload-head my-3">
                        <h3>Notice Upload</h3>
                    </div>
                    <table className="table w-full notice-upload-sec">
                      <tbody className='notice-upload-box'>
                        <tr className="sec-one">
                          <td className="sec-one-inner"><TextField className='w-full' variant="outlined" type="text" name="name" id="outlined-basic" label="Notice Title" value={noticename.name} onChange={handleInputs} /></td>
                          <td className="sec-one-inner"><TextField className='w-full' variant="outlined" type="date" name="date" id="outlined-basic" label="" value={noticename.date} onChange={handleInputs} /></td>
                          <td className="sec-one-inner"><TextField className='w-full' variant="outlined" type="text" name="year" id="outlined-basic" label="Year" value={noticename.year} onChange={handleInputs} /></td>
                        </tr>
                        <tr className="sec-two">
                          <td colSpan="2"><TextField className='w-full' variant="outlined" type="text" name="link" id="outlined-basic" label="Link" value={noticename.link} onChange={handleInputs} /></td>
                          <td><input className='px-5 w-full rounded-md hover:text-white bg-blue-500 text-white border-radius: 0.2rem' id='notice-form-button' type="submit" value="Submit" onClick={PostData}></input></td>
                        </tr>
                      </tbody>
                    </table>   
          </form>
      </div>
    </>
  )
}

export default NoticeUpload