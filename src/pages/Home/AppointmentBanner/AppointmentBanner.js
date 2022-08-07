import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointment from '../../../images/appointment-bg.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';






const bg={
    background:`url(${appointment})`,
    backgroundColor:"rgba(45,58,74,0.8)",
    backgroundBlendMode:'darken,luminosity',
    marginTop:175
}






const AppointmentBanner = () => {
  return (
    <Box   style={bg} sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
       <img
       style={{width:"400px",marginTop:-150}}
       src={doctor}></img>
      </Grid>
      <Grid item xs={12} md={6}
      
      sx={{display:'flex',
          justifyContent:'flex-start',
          alignItems:'center',
          textAlign:'left'
      
      
      }}>
         <Box>
         <Typography sx={{mb:5}} variant="h6" gutterBottom component="div" style={{color:'#2DE1F0'}}>
      Appointment
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
      Make An Appointment Today
      </Typography>
      <Typography variant="h6"  style={{color:'white',fontSize:14}}>
      placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
      </Typography>
      <Button varient="contained" style={{backgroundColor:'#2DE1F0',color:'white'}}>Learn more</Button>

         </Box>

      </Grid>
     
    </Grid>
  </Box>
  )
}

export default AppointmentBanner