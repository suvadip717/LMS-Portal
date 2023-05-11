import React, {useState} from 'react';
import TextField from '@mui/material/TextField';

const QuestionUpload = () => {


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
          // window.alert("New Fuel Type Added");
          console.log("Input Sucessful");
    
          // navigate("/pages/fuel-type/manage");
      }
    
    }



  return (
    <>
      <div className="notes-upload my-5">
          <form className='notes-upload-form p-3 rounded' method="post">
                    <div className="notes-upload-head my-3">
                        <h3>Question Upload</h3>
                    </div>
                    <table className="table notes-upload-sec">
                      <tbody className='notes-upload-box'>
                        <tr className="sec-one">
                          <td className="sec-one-inner"><TextField className='w-100' variant="outlined" type="text" name="name" id="outlined-basic" label="Question Name" value={questionname.name} onChange={handleInputs} /></td>
                          <td className="sec-one-inner"><TextField className='w-100' variant="outlined" type="text" name="subject" id="outlined-basic" label="Subject" value={questionname.subject} onChange={handleInputs} /></td>
                          <td className="sec-one-inner"><TextField className='w-100' variant="outlined" type="text" name="year" id="outlined-basic" label="Year" value={questionname.year} onChange={handleInputs} /></td>
                        </tr>
                        <tr className="sec-two">
                          <td colSpan="2"><TextField className='w-100' variant="outlined" type="text" name="link" id="outlined-basic" label="Link" value={questionname.link} onChange={handleInputs} /></td>
                          <td><input className='px-5 w-100' id='notes-form-button' type="submit" value="Submit" onClick={PostData}></input></td>
                        </tr>
                      </tbody>
                    </table>   
          </form>
      </div>
    </>
  )
}

export default QuestionUpload