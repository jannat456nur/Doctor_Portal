import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Booking from '../Appointment/Booking/Booking'



const bookings=[
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
  }

]



const AvailableAppointment = ({date}) => {
  return (
  <Container>
      
      
      <Typography  variant="h5" gutterBottom component="div" sx={{color:' #2DE1F0',m:5}}>
                AvailableAppointment on {date.toDateString()}
       </Typography>
  
      <Grid container spacing={3}> 
        {
          bookings.map(booking => <Booking
          
            key={booking.id}
            booking={booking}
            date={date}
          ></Booking>)
        }
      </Grid>
      
  </Container>
  )
}

export default AvailableAppointment