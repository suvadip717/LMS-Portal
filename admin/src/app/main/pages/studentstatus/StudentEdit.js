import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import './student.css';

const StudentEdit = () => {


    const navigate = useNavigate();
    const [userdata, setUserData] = useState({
        firstName:"", lastName: "", studentid: "", email: "", userStatus: ""
      })
      const handleInputs = (e) =>{
        console.log(e.target.value)
        const{name, value} = e.target;
        setUserData((preval) =>{
          return{
            ...preval,
            [name]:value
          }
        })
    }

    const {id} = useParams("");
    console.log(id);

    const GetData = async () =>{
        const res = await fetch(`/getuserdata/${id}`,{
            method:"GET",
            headers:{
                "Content-Type" : "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if(data.status === 422 || !data){
        // window.alert("Invalid Input");
        console.log("Invalid Input");
        }else{
          setUserData(data)
        // window.alert("City Updated");
        console.log("student Data Updated");

        // navigate("/car-price-details");
        }

    }
    useEffect(() => {
        GetData();
    },[]);


    const updateUserData = async(e) => {
        e.preventDefault();
    
        const{firstName, lastName, studentid, email, userStatus} = userdata;
    
        const res2 = await fetch (`/updateuserdata/${id}`,{
            method:"PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                firstName, lastName, studentid, email, userStatus
            })
        });
    
        const data2 = await res2.json();
        console.log(data2);
    
        if (res2.status === 422 || !data2){
            alert("fill the data ")
        }else{
            alert("Student Data Updated")
            navigate("/pages/students/manage");
        }
    }


  return (
    <>
      <div className="students-upload my-5">
          <form className='students-upload-form p-3 rounded' method="post">
                    <div className="students-upload-head my-3">
                        <h3>Question Upload</h3>
                    </div>
                    <table className="table w-full students-upload-sec">
                      <tbody className='students-upload-box'>
                        <tr className="sec-one">
                          <td className="sec-one-inner"><TextField className='w-full' variant="outlined" type="text" name="firstName" id="outlined-basic" label="First Name" value={userdata.firstName} onChange={handleInputs} /></td>
                          <td className="sec-one-inner"><TextField className='w-full' variant="outlined" type="text" name="lastName" id="outlined-basic" label="Last Name" value={userdata.lastName} onChange={handleInputs} /></td>
                          <td className="sec-one-inner"><TextField className='w-full' variant="outlined" type="text" name="studentid" id="outlined-basic" label="Student ID" value={userdata.studentid} onChange={handleInputs} /></td>
                        </tr>
                        <tr className="sec-two">
                          <td ><TextField className='w-full' variant="outlined" type="text" name="email" id="outlined-basic" label="Email" value={userdata.email} onChange={handleInputs} /></td>
                          <td ><TextField className='w-full' variant="outlined" type="text" name="userStatus" id="outlined-basic" label="Status" value={userdata.userStatus} onChange={handleInputs} /></td>
                          <td><input className='px-5 w-full rounded-md hover:text-white bg-blue-500 text-white border-radius: 0.2rem' id='students-form-button' type="submit" value="Submit" onClick={updateUserData}></input></td>
                        </tr>
                      </tbody>
                    </table>   
          </form>
      </div>
    </>
  )
}

export default StudentEdit