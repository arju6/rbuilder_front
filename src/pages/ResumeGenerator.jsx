import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from 'react-router-dom';
function ResumeGenerator() {
  return (
    <div className='container-fluid'>
      <h2 className='text-center ' style={{marginTop:'90px'}}>Create a job winning resume</h2>
      <div style={{height:'80vh'}} className='row align-item-center justify-content-center'>
        <div className='col-4 border shadow p-5 text-center  ' style={{height:'250px'}}>
          <IoDocumentText className='fs-1 text-primary' />
          <h4>Add your Information</h4>
          <p>Add pre-written examples to each section</p>
          <h5>Step 1</h5>
          </div>
          <div className='col-1'></div>
          <div className='col-4 border shadow p-5 text-center' style={{height:'250px'}}>
            <MdOutlineFileDownload className='fs-1 text-danger' />
            <h4>Download your Resume</h4>
            <p>Download and start applying</p>
            <h5>Step 2</h5>
          </div>
          
      </div>
     <div className='text-center mb-5'> <Link to={'/form'} className='btn btn-dark'>Let's Start</Link></div>
    </div>
  )
}

export default ResumeGenerator