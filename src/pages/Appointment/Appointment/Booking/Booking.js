import { Grid } from '@mui/material'
import React from 'react'




const Booking = ({booking}) => {
    const {name,time,space } = booking;
  return (
        <Grid item xs={12} sm={6} md={3}>
          <h3>{ name}</h3>
        </Grid>
  )
}

export default Booking