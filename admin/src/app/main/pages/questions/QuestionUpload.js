import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import "./question.css";
import { useNavigate } from 'react-router-dom';

const QuestionUpload = () => {

  const navigate = useNavigate();

    const [questionname, setQuestionName] = useState({
        name:"", subject:"", year:"", link:"" 
      });
      let name, value;
      const handleInputs = (e) =>{
        console.log(e)
        name = e.target.name;
        value = e.target.value;
    
        setQuestionName({...questionname,[name]:value});
    }
    const PostData = async (e) => {
      e.preventDefault();
    
      const {name, subject, year, link } = questionname;
      const res = await fetch('/addquestion', {
          method:"POST",
          headers:{
              "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            name, subject, year, link
          })
      });
      const data = await res.json();
      if(data.status === 422 || !data){
          window.alert("Invalid Input");
          console.log("Invalid Input");
      }else{
          window.alert("New Question File Added Sucessfully!!");
          console.log("Input Sucessful");
    
          navigate("/pages/question/manage");
      }
    
    }



  return (
    <>
      <div className="questions-upload my-5">
          <form className='questions-upload-form p-3 rounded' method="post">
                    <div className="questions-upload-head my-3">
                        <h3>Question Upload</h3>
                    </div>
                    <table className="table w-full questions-upload-sec">
                      <tbody className='questions-upload-box'>
                        <tr className="sec-one">
                          <td className="sec-one-inner"><TextField className='w-full' variant="outlined" type="text" name="name" id="outlined-basic" label="Question Name" value={questionname.name} onChange={handleInputs} /></td>
                          <td className="sec-one-inner"><TextField className='w-full' variant="outlined" type="text" name="subject" id="outlined-basic" label="Subject" value={questionname.subject} onChange={handleInputs} /></td>
                          <td className="sec-one-inner"><TextField className='w-full' variant="outlined" type="text" name="year" id="outlined-basic" label="Year" value={questionname.year} onChange={handleInputs} /></td>
                        </tr>
                        <tr className="sec-two">
                          <td colSpan="2"><TextField className='w-full' variant="outlined" type="text" name="link" id="outlined-basic" label="Link" value={questionname.link} onChange={handleInputs} /></td>
                          <td><input className='px-5 w-full rounded-md hover:text-white bg-blue-500 text-white border-radius: 0.2rem' id='questions-form-button' type="submit" value="Submit" onClick={PostData}></input></td>
                        </tr>
                      </tbody>
                    </table>   
          </form>
      </div>
    </>
  )
}

export default QuestionUpload