import { Alert, CircularProgress, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import login from "../../../images/login.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Registration = () => {
  const { user, registerUser, isLoading, authError } = useAuth();

  const [loginData, setLoginData] = useState({});
  const history = useNavigate();

  const handleOnBlur = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    console.log(feild, value);
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    // alert('submit')
   if(loginData.password!==loginData.password2){
    alert('Your password did not match')
   }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 12 }}>
          <Typography variant="bosy1" gutterBottom component="div">
            Register Please
          </Typography>
          {
            <form onClick={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your name"
                name="name"
                onChange={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your mail"
                name="email"
                onChange={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your password"
                name="password"
                variant="standard"
                onChange={handleOnBlur}
                type="password"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Retype password"
                name="password"
                variant="standard"
                onChange={handleOnBlur}
                type="password"
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                varient="contained"
                type="submit"
                style={{
                  backgroundColor: "#2DE1F0",
                  color: "white",
                }}
              >
                Register
              </Button>
              <NavLink to="/login">
                <Button sx={{ width: "75%", m: 1 }} color="inherit">
                  Already Have an Account
                </Button>
              </NavLink>
            </form>
          }
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">Login successfully</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} style={{ width: 400 }}></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Registration;
