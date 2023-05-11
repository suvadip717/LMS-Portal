import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import './Notes.css'

const NotesUpload = () => {

  // const navigate = useNavigate();


  const [notesname, setNotesname] = useState({
    name:"", subject:"", year:"", link:"" 
  });
  let name, value;
  const handleInputs = (e) =>{
    console.log(e)
    name = e.target.name;
    value = e.target.value;

    setNotesname({...notesname,[name]:value});
}
const PostData = async (e) => {
  e.preventDefault();

  const {name, subject, year, link } = notesname;
  const res = await fetch('/addnote', {
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
                        <h3>Notes Upload</h3>
                    </div>
                    <table className="table notes-upload-sec">
                      <tbody className='notes-upload-box'>
                        <tr className="sec-one">
                          <td className="sec-one-inner"><TextField className='w-100' variant="outlined" type="text" name="name" id="outlined-basic" label="Notes Name" value={notesname.name} onChange={handleInputs} /></td>
                          <td className="sec-one-inner"><TextField className='w-100' variant="outlined" type="text" name="subject" id="outlined-basic" label="Subject" value={notesname.subject} onChange={handleInputs} /></td>
                          <td className="sec-one-inner"><TextField className='w-100' variant="outlined" type="text" name="year" id="outlined-basic" label="Year" value={notesname.year} onChange={handleInputs} /></td>
                        </tr>
                        <tr className="sec-two">
                          <td colSpan="2"><TextField className='w-100' variant="outlined" type="text" name="link" id="outlined-basic" label="Link" value={notesname.link} onChange={handleInputs} /></td>
                          <td><input className='px-5 w-100' id='notes-form-button' type="submit" value="Submit" onClick={PostData}></input></td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <div className="sec-one my-5 d-flex justify-content-between">
                        <div className="sec-one-inner">
                            <label htmlFor="notes">Name:-</label>
                            <TextField className='mx-2' variant="outlined" type="url" name="link" id="outlined-basic" label="Name" value={notesname.link} onChange={handleInputs} />
                        </div>
                        <div className="sec-one-inner mx-5">
                            <label htmlFor="notes">Subject:-</label>
                            <input className='mx-2' type="text" name="subject" id="subject" value={notesname.subject} onChange={handleInputs}/>
                        </div>
                        <div className="sec-one-inner">
                            <label htmlFor="notes">Year:-</label>
                            <input className='mx-2' type="text" name="year" id="year" value={notesname.year} onChange={handleInputs}/>
                        </div>
                    </div>
                    <div className="sec-two ">
                        <div className="sec-two-inner d-flex bd-highlight">
                        <label htmlFor="notes">Link:-</label>
                        <input className='flex-grow-1 ms-4 me-2' type="url" name="link" id="link" value={notesname.link} onChange={handleInputs}/>
                        </div>
                    </div>
                    <div className="submit-form my-5">
                      <div className="submit-form-btn">
                        <div className="form-submit-button text-end"><input className='px-5' type="submit" value="Submit" onClick={PostData}></input></div>
                      </div>
                    </div> */}
          </form>
      </div>
    </>
  )
}

export default NotesUpload