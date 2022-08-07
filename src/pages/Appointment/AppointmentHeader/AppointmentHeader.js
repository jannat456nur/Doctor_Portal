import { Container, Grid } from '@mui/material'
import React from 'react'
import chair from '../../../images/chair.png'
import Calender from '../../shared/Calender/Calender'

const AppointmentHeader = ({date,setDate}) => {
   
  return (
  <Container>
    <Grid container spacing ={2}>
        <Grid item xs={12} md={6}>
             <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={6}>
        <img style={{width:500}} src={chair}></img>
        </Grid>
           
    </Grid>
  </Container>
  )
}

export default AppointmentHeader