import React from 'react'
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import jobTypes from '../assets/jobRole.json'
import { useRef } from 'react';
import { editResumeAPI } from '../services/allAPI';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',

};

function Edit({ resumeData, setResumeData }) {



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const removeSkill = (skill) => {
        setResumeData({...resumeData, skills: resumeData?.skills?.filter(item => item!==skill)})
    }
    const skillRef = useRef()

    const addSkill = (skill) => {
        if(skill){
            if(resumeData?.skills?.map(item=>item.toLowerCase()).includes(skill.toLowerCase())){
                alert("Given skill is already there,add another one")
            }
            else{
              setResumeData({...resumeData,skills:[...resumeData?.skills,skill]})
            }
            skillRef.current.value=""
        }
        else{
            alert("Enter a valid skill")
        }
    }

    const editResume=async()=>{
        const {fullName,job,location,email,phone,linkedin,github,degree,university,passout,skills,summary}=resumeData
        if(fullName&&job&&location&&email&&phone&&linkedin&&github&&degree&&university&&passout&&skills?.length>0&&summary){
         const response=await editResumeAPI(resumeData?.id,resumeData)
         console.log(response);
         if(response.status==200){
          alert("resume updated succesfully")
          handleClose()
         }
        }
        else{
          alert("fill the fields completely")
        }
      }


    return (
        <div>
            <button onClick={handleOpen} className='btn fs-2 text-warning'><FaEdit /> </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='mt-3'>
                            <h3>Personal Details</h3>
                            <div className='mt-3'>
                                <div>
                                    <TextField value={resumeData.fullName} onChange={(e) => setResumeData({ ...resumeData, fullName: e.target.value })} id="standard-name" label="Full Name" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <FormControl variant="standard" className='w-100'>
                                        <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                                        <Select value={resumeData?.job} onChange={(e) => setResumeData({ ...resumeData, job: e.target.value })}
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"

                                        >
                                            {
                                                jobTypes.jobRoles.map(role => (
                                                    <MenuItem key={role} value={role}>{role}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <TextField value={resumeData.location} onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })} id="standard-loc" label="Location" variant="standard" className='w-100' />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <h3>Contact Details</h3>
                            <div className='mt-3'>
                                <div>
                                    <TextField value={resumeData.email} onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })} id="standard-email" label="Email" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField value={resumeData.phone} onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })} id="standard-phone" label="Phone" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField value={resumeData.github} onChange={(e) => setResumeData({ ...resumeData, github: e.target.value })} id="standard-github" label="Github Link" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField value={resumeData.linkedin} onChange={(e) => setResumeData({ ...resumeData, linkedin: e.target.value })} id="standard-linkedin" label="Linkedin Link" variant="standard" className='w-100' />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <h3>Education Details</h3>
                            <div className='mt-3'>
                                <div>
                                    <TextField value={resumeData.degree} onChange={(e) => setResumeData({ ...resumeData, degree: e.target.value })} id="standard-course" label="Bachelor's Degree" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField value={resumeData.university} onChange={(e) => setResumeData({ ...resumeData, university: e.target.value })} id="standard-clg" label="College/University" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField value={resumeData.passout} onChange={(e) => setResumeData({ ...resumeData, passout: e.target.value })} id="standard-year" label="Passout Year" variant="standard" className='w-100' />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <h3>Skills</h3>
                            <div className='mt-3 d-flex align-items-center'>
                                <input type='text' sx={{ width: '500px' }} id="outlined-skils" label="Add Skills" variant="outlined" ref={skillRef}/>
                                <Button variant="contained" className='ms-3' onClick={()=>addSkill(skillRef.current.value)}>Add</Button>
                            </div>
                            <h5>Added Skills:</h5>
                            <div className='d-flex my-3 flex-wrap'>
                                {
                                    resumeData?.skills?.map(skill => (
                                        <span key={skill} className='btn btn-dark m-1  d-flex align-items-center'>{skill} <button className='btn text-light' onClick={()=>removeSkill(skill)}>x</button></span>
                                    ))
                                }
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <h3>Professional Summary</h3>
                            <div className='mt-3'>
                                <div>
                                    <TextField value={resumeData?.summary} id="standard-summary" label="Write a short summary of yourself" variant="standard" className='w-100' multiline rows={4} onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })} />
                                </div>
                            </div>
                        </div>
                    </Typography>
                    <Button onClick={editResume}>Update</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default Edit