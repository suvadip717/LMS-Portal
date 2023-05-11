import React from 'react';
import ErrorImage from "../../assets/error-image.gif"

const Error = () => {
  return (
    <>
      <div style={{textAlign: "center", marginTop:"10px"}} className='error-image'>
      <img src={ErrorImage} alt="error" />
      </div>
    </>
  )
}

export default Error
