import { Container, Grid } from '@mui/material'
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
      
      <h2>AvailableAppointment on {date.toDateString()}</h2>
      
      <Grid container spacing={2}> 
        {
          bookings.map(booking => <Booking
          
            key={booking.id}
            booking={booking}

          ></Booking>)
        }
      </Grid>
      
    </Container>
  )
}

export default AvailableAppointment