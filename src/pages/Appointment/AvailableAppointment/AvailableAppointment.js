import React from 'react'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';



const timeslot=[
           {
            id:1,
            name:'Theeth orthodonics',
            time:'08.00-09.00',
            space:10
           },
           {
            id:2,
            name:'Theeth orthodonics',
            time:'08.00-09.00',
            space:10
           },
           {
            id:3,
            name:'Theeth orthodonics',
            time:'08.00-09.00',
            space:10
           },
           {
            id:4,
            name:'Theeth orthodonics',
            time:'08.00-09.00',
            space:10
           },
           {
            id:5,
            name:'Theeth orthodonics',
            time:'08.00-09.00',
            space:10
           },
           {
            id:6,
            name:'Theeth orthodonics',
            time:'08.00-09.00',
            space:10
           },
           {
            id:7,
            name:'Theeth orthodonics',
            time:'08.00-09.00',
            space:10
           }
]



const AvailableAppointment = ({date}) => {
  return (
    <Container>
        <h2>AvailableAppointment {date.toDateString()}</h2>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
         
        </Grid>
      </Grid>
    </Container>
  )
}

export default AvailableAppointment