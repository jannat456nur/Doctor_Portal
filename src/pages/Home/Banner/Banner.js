import React from 'react'
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const bannerBg ={
    background :`(${bg})`,
 
}
const verticleCenter={
    display:'flex', 
      height:450,
    alignItems:'center'
}

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} style={{...verticleCenter, textAlign:'left'}}>
     
          <Box>
          <Typography variant="h3" gutterBottom component="div">
        Your New Smile Start Here
      </Typography>
      <Typography variant="h6" gutterBottom component="div" style={{fontSize:14,fontSize:14,fontWeight:500,color:'gray'}}>
      holder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
      </Typography>
      <Button varient="contained" style={{backgroundColor:'#2DE1F0',color:'white'}}>Get Appointment</Button>
          </Box>
        </Grid>
       
        <Grid item xs={12} md={7} style={verticleCenter}>
           <img style={{width:400}} src={chair}></img>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Banner