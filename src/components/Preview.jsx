import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button, Divider } from '@mui/material';
import Stack from '@mui/material/Stack';



function Preview({resumeData}) {

console.log(resumeData);


  return (
    <div>
      
      <Box component="section" style={{marginTop:'70px',marginLeft:'100px'}} >
        <Paper elevation={3}sx={{p:2,textAlign:'center'}}>
          <h2>{resumeData.fullName}</h2>
          <h6>{resumeData.job}</h6>
          <p><span>{resumeData.location}</span> | <span>{resumeData.email}</span> | <span>{resumeData.phone}</span></p>
          <p><Link>{resumeData.github}</Link> | <Link>{resumeData.linkedin}</Link></p>
         

          <Divider sx={{fontSize:'23px',fontWeight:'BOLD'}}>SUMMARY</Divider>
          <p>{resumeData.summary}</p>
          

          <Divider sx={{fontSize:'23px',fontWeight:'BOLD'}}>EDUCTAION</Divider>
          <h6>{resumeData.degree}</h6>
          <p><span>{resumeData.university}</span> | <span>{resumeData.passout}</span></p>
          
          <Divider sx={{fontSize:'23px',fontWeight:'BOLD',marginBottom:'10px'}}>SKILLS</Divider>
           <Stack direction="row" sx={{flexWrap:'wrap',gap:'10px'}}>
              {
                resumeData.skills.map(skills=>(
                  <Button variant='contained'>{skills}</Button>
                ))
              }
    
  </Stack>
          
           </Paper >
      </Box>
    </div>
  )
}

export default Preview