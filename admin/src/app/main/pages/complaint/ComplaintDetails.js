import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const ComplaintDetails = () => {

   

    const navigate = useNavigate();
    const [complaintdata, setComplaintData] = useState({
        complaintStatus: ""
      })
      const handleInputs = (e) =>{
        console.log(e.target.value)
        const{name, value} = e.target;
        setComplaintData((preval) =>{
          return{
            ...preval,
            [name]:value
          }
        })
    }

    const {id} = useParams("");
    console.log(id);

    const GetData = async () =>{
        const res = await fetch(`/getcomplaintdetails/${id}`,{
            method:"GET",
            headers:{
                "Content-Type" : "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if(data.status === 422 || !data){
        // window.alert("Invalid Input");
        console.log("Complaint Details Not Found!");
        }else{
            setComplaintData(data)
        // window.alert("City Updated");
        console.log("Complaint Details Fetched!");

        // navigate("/car-price-details");
        }

    }
    useEffect(() => {
        GetData();
    },[]);

    const updateComplaintData = async(e) => {
        e.preventDefault();
    
        const{complaintStatus} = complaintdata;
    
        const res2 = await fetch (`/updatecomplaint/${id}`,{
            method:"PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                complaintStatus
            })
        });
    
        const data2 = await res2.json();
        console.log(data2);
    
        if (res2.status === 422 || !data2){
            alert("fill the data ")
        }else{
            alert("Complaint Status Updated")
            navigate("/pages/complaint/manage");
        }
    }


  return (
    <>
    <div className="complaintdetailssec m-10">
        <div className="complaintdetailbox ">
            <div className="complaintdetailsinnersec">
                <h1 className='my-40'>Complaint </h1>
                <div className="complaintdatasec bg-white p-36 m-10 ">
                    <h2 className='text-center pb-20 '> Complaint Details</h2>
                    <div className="complaindatabox">
                        <h3>Complaint by {complaintdata.name}</h3>
                        <h5>Student Id: {complaintdata.studentid}</h5>
                        <h5>Email: {complaintdata.email}</h5>
                        <h3 className=' text-center' >{complaintdata.title}</h3>
                        <div className="complaindiscbox border rounded p-20 my-20">
                            <div className="complaindisc">
                                <p>{complaintdata.complaint}</p>
                            </div>
                        </div>
                        <div className="statusbox">
                            <div className="statusinput text-end">
                            <TextField className='mx-10' variant="outlined" type="text" name="complaintStatus" id="outlined-basic" label="Update Status" 
                            value={complaintdata.complaintStatus} 
                            onChange={handleInputs} 
                            />
                            <input className='w-1/12 py-16 rounded-md cursor-pointer hover:text-white bg-blue-500 text-white border-radius: 0.2rem' id='students-form-button' type="submit" value="Submit" 
                            onClick={updateComplaintData}
                            ></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ComplaintDetails