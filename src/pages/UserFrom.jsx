import React, { useState } from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'




function UserFrom() {

  const [resumeData, setResumeData] = useState({
    fullName: "",
    job: "",
    location: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    degree: "",
    university: "",
    passout: "",
    skills: [],
    summary: ""
  });

  return (
    <div className='container-fluid mt-5'>
      <div className='row p-5'>

        <div className='col-lg-8'>
          <Steps setResumeData={setResumeData} resumeData={resumeData}/>
        </div>
        <div className='col-lg-4'>
          {
              resumeData.fullName && <Preview resumeData={resumeData}/>
          }
        </div>

      </div>

    </div>
  )
}

export default UserFrom