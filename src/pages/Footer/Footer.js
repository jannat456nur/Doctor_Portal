import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
   <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
            <h3>hdf</h3>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <h3>hdf</h3>
        </Grid>
        <Grid itemxs={12} sm={6} md={3}>
            <h3>hdf</h3>
        </Grid>
        <Grid itemxs={12} sm={6} md={3}>
            <h3>hdf</h3>
        </Grid>
       
      </Grid>
    </Box>
  )
}

export default Footer