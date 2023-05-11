import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const QueryDetails = () => {

    const navigate = useNavigate();
    const [querydata, setQueryData] = useState({
        queryStatus: ""
      })
      const handleInputs = (e) =>{
        console.log(e.target.value)
        const{name, value} = e.target;
        setQueryData((preval) =>{
          return{
            ...preval,
            [name]:value
          }
        })
    }

    const {id} = useParams("");
    console.log(id);


    const GetData = async () =>{
        const res = await fetch(`/getquerydata/${id}`,{
            method:"GET",
            headers:{
                "Content-Type" : "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if(data.status === 422 || !data){
        // window.alert("Invalid Input");
        console.log("Query Details Not Found!");
        }else{
            setQueryData(data)
        // window.alert("City Updated");
        console.log("Query Details Fetched!");

        // navigate("/car-price-details");
        }

    }
    useEffect(() => {
        GetData();
    },[]);

    const updateQueryData = async(e) => {
        e.preventDefault();
    
        const{queryStatus} = querydata;
        const res2 = await fetch (`/updatequery/${id}`,{
            method:"PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                queryStatus
            })
        });
    
        const data2 = await res2.json();
        console.log(data2);
    
        if (res2.status === 422 || !data2){
            alert("fill the data ")
        }else{
            alert("Query Status Updated")
            navigate("/pages/queries/manage");
        }
    }

  return (
    <>
    <div className="querydetailssec m-10">
        <div className="querydetailbox ">
            <div className="querydetailsinnersec">
                <h1 className='my-40'>Query </h1>
                <div className="querydatasec bg-white p-36 m-10 ">
                    <h2 className='text-center pb-20 '> Query Details</h2>
                    <div className="querydatabox">
                        <h3>Query by {querydata.name}</h3>
                        <h5>Student Id: {querydata.studentid}</h5>
                        <h5>Email: {querydata.email}</h5>
                        <h3 className=' text-center' >{querydata.title}</h3>
                        <div className="querydiscbox border rounded p-20 my-20">
                            <div className="querydisc">
                                <p>{querydata.query}</p>
                            </div>
                        </div>
                        <div className="statusbox">
                            <div className="statusinput text-end">
                            <TextField className='mx-10' variant="outlined" type="text" name="queryStatus" id="outlined-basic" label="Update Status" 
                            value={querydata.queryStatus} 
                            onChange={handleInputs} 
                            />
                            <input className='w-1/12 py-16 rounded-md hover:text-white bg-blue-500 text-white border-radius: 0.2rem' id='students-form-button' type="submit" value="Submit" 
                            onClick={updateQueryData}
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

export default QueryDetails