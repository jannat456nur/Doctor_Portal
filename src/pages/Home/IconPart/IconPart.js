import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const IconPart = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Typography variant="h3" gutterBottom component="div">
        Your New Smile Start Here
      </Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h3" gutterBottom component="div">
        Your New Smile Start Here
      </Typography>
        </Grid>
       
      </Grid>
    </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default IconPart