import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                  <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{mr:2}}>
                      <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz08v5vKWveMmS0dskhNr2wDik3Kum8LWebAbywMqJ_g&s=10"
                            alt=""
                            height={40}
                        />
                  </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'bold',fontSize:'28px' }}>
                        rBuilder
                    </Typography>

                    <Tooltip title='A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews.'>
                      <Button color="inherit" sx={{fontWeight:'bold'}}>ABOUT US</Button>
                    </Tooltip>
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
