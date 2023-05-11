import React from 'react'
import NotesUpload from '../Notes/NotesUpload'
import QuestionUpload from '../Questions/QuestionUpload'

const DashboardMain = () => {
  return (
    <>
    <div className="container">
        <div className="raw w-100">
            {/* Notes Upload */}
            {/* <div className="notes-upload my-5">
                <form className='notes-upload-form' method="post">
                    <div className="notes-upload-head my-3">
                        <h3>Notes Upload</h3>
                    </div>
                    <div className="sec-one my-5 d-flex justify-content-between">
                        <div className="sec-one-inner">
                            <label htmlFor="notes">Name:-</label>
                            <input className='mx-2' type="text" name="" id="" />
                        </div>
                        <div className="sec-one-inner mx-5">
                            <label htmlFor="notes">Subject:-</label>
                            <input className='mx-2' type="text" name="" id="" />
                        </div>
                        <div className="sec-one-inner">
                            <label htmlFor="notes">Year:-</label>
                            <input className='mx-2' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="sec-two ">
                        <div className="sec-two-inner d-flex bd-highlight">
                        <label htmlFor="notes">Link:-</label>
                        <input className='flex-grow-1 ms-4 me-2' type="url" name="" id="" />
                        </div>
                    </div>
                </form>
            </div> */}
            <NotesUpload/>
            <QuestionUpload />
            {/* Questions Upload */}
            {/* <div className="questions-upload my-5">
                <form className='questions-upload-form' method="post">
                    <div className="questions-upload-head my-3">
                        <h3>Questions Upload</h3>
                    </div>
                    <div className="sec-one my-5 d-flex justify-content-between">
                        <div className="sec-one-inner">
                            <label htmlFor="questions">Name:-</label>
                            <input className='mx-2' type="text" name="" id="" />
                        </div>
                        <div className="sec-one-inner mx-5">
                            <label htmlFor="questions">Subject:-</label>
                            <input className='mx-2' type="text" name="" id="" />
                        </div>
                        <div className="sec-one-inner">
                            <label htmlFor="questions">Year:-</label>
                            <input className='mx-2' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="sec-two ">
                        <div className="sec-two-inner d-flex bd-highlight">
                        <label htmlFor="questions">Link:-</label>
                        <input className='flex-grow-1 ms-4  me-2' type="url" name="" id="" />
                        </div>
                    </div>
                </form>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default DashboardMain