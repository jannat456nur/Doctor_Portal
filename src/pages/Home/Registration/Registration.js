import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import login from '../../../images/login.png'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';



const Registration = () => {
  const [loginData,setLoginData] = useState({})
  const handleOnChange = e => {
    const feild = e.target.name;
    const value = e.target.value;
    console.log(feild, value)
    const newLoginData = { ...loginData }
    newLoginData[feild] = value;
    setLoginData(newLoginData);
}

  const handleLoginSubmit = e => {
    // alert('submit')
    e.preventDefault();
}
  return (
      <Container>
          <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{mt:12}}>
                   <Typography variant="bosy1" gutterBottom component="div">
                                Login
          </Typography>
          <form onClick={handleLoginSubmit}>

            <TextField
              sx={{width:'75%',m:1}}
              id="standard-basic"
              label="Your mail"
              name='email'
              onChange={handleOnChange}
              variant="standard" />
            <TextField
              sx={{width:'75%',m:1}}
              id="standard-basic"
              label="Your password"
              name='password'
              variant="standard"
              onChange={handleOnChange}
              type="password"  
            />
            <TextField
              sx={{width:'75%',m:1}}
              id="standard-basic"
              label="Retype password"
              name='password'
              variant="standard"
              onChange={handleOnChange}
              type="password"  
            />
            <Button
              sx={{ width: '75%', m: 1 }}
              varient="contained"
              type="submit"
              style={{
                backgroundColor: '#2DE1F0',
                color: 'white'
                }}>Login</Button>
            <NavLink to='/login'>
                <Button
                    sx={{ width: '75%', m: 1 }}
                    color="inherit">Already Have an Account</Button>
           </NavLink>
          </form>
        
             </Grid>
             <Grid item xs={12} md={6}>
                  <img src={login} style={{width:400}}></img>
             </Grid>
                
          </Grid>
    </Container>
  )
}

export default Registration