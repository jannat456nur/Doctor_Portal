import { Alert, CircularProgress, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import login from '../../../images/login.png'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Registration = () => {

  const {user,registerUser,isLoading,authError}=useAuth();

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
    registerUser(loginData.email,loginData.password)
}
  return (
      <Container>
          <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{mt:12}}>
                   <Typography variant="bosy1" gutterBottom component="div">
                                Login
          </Typography>
         { 
         !isLoading &&
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
          </form>}
        {isLoading && <CircularProgress/>}
        {user?.email &&  <Alert severity="success">This is a success alert — check it out!</Alert>}
        {authError &&     <Alert severity="error">{authError}</Alert>}
             </Grid>
             <Grid item xs={12} md={6}>
                  <img src={login} style={{width:400}}></img>
             </Grid>
                
          </Grid>
    </Container>
  )
}

export default Registration