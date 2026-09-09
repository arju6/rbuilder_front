import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Edit from '../components/Edit'
import { FaFileDownload } from 'react-icons/fa'
import { LuHistory } from 'react-icons/lu'
import { TbPlayerTrackPrevFilled } from 'react-icons/tb'
import { Stack } from '@mui/material'
import Preview from '../components/Preview'
import { downloadResumeAPI, getSingleResumeAPI } from '../services/allAPI'
import html2canvas from 'html2canvas'
import jspdf from 'jspdf'

function ViewResume() {
    const [resumeData,setResumeData]=useState({skills:[]})
    console.log(resumeData);
    const previewRef=useRef() //{current}


    const {id}=useParams()
   // console.log(id);
   useEffect(()=>{
    getResumeDetails()
   },[])
    

  const downloadResume=async()=>{
    const previewTag=previewRef.current
    const canvas=await html2canvas(previewTag)
   
    //convert image url to short url
    canvas.toBlob (async(blob)=>{

    const formdata=new FormData()
    formdata.append("file",blob)
    formdata.append("upload_preset","my_preset")

   const res= await fetch('https://api.cloudinary.com/v1_1/cmbh66xo/image/upload',{
            method:"POST",
            body:formdata
        })

        console.log(res);
        const data=await res.json()
        const short_url=data.secure_url
        console.log(short_url);

        generatePDF(short_url)
        
        
        
    })
   
  }


    const getResumeDetails=async()=>{
        if(id){
            const response=await getSingleResumeAPI(id)
            //console.log(response);
            setResumeData(response.data)
        }
    }

    const generatePDF=async(resumeImg)=>{
        const today=new Date()
        console.log(today);
        const timeStamp=`${today.toLocaleDateString()},${today.toLocaleTimeString()}`
        console.log(timeStamp);
        const pdf=new jspdf()
        const imgWidth=pdf.internal.pageSize.getWidth()
        const imgHeight=pdf.internal.pageSize.getHeight()

        pdf.addImage(resumeImg,"PNG",0,0,imgWidth,imgHeight)
        const downloadDetails={
            timeStamp,
            resumeId:id,
            resumeImg,
            jobRole:resumeData.job,
        }
        const response= await downloadResumeAPI(downloadDetails)
        console.log(response);
        
        pdf.save('resume.pdf')
    }
    return (
        <div className='container' style={{marginTop:'80px'}}>
            <div className='row my-5'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '70px' }}>
                            {/* {downld} */}
                            <button onClick={downloadResume} className='btn fs-2 text-danger'><FaFileDownload /></button>
                            {/* edit */}
                            <Edit resumeData={resumeData} setResumeData={setResumeData}/>
                            {/* history */}
                            <Link to={'/history'} className='btn fs-1 ms-2 text-warning'><LuHistory /></Link>

                            {/* back */}
                            <Link to={'/form'} className='btn fs-1 ms-3 text-success'><TbPlayerTrackPrevFilled /></Link>


                        </Stack>
                        <div ref={previewRef}>
                            <Preview resumeData={resumeData}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewResume