import { Alert, CircularProgress, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import login from "../../../images/login.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { user, signInWithGoogle, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useNavigate();

  const handleOnChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    console.log(feild, value);
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    // alert('submit')
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 12 }}>
          <Typography variant="bosy1" gutterBottom component="div">
            Login
          </Typography>
          <form onClick={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your mail"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your password"
              name="password"
              variant="standard"
              onChange={handleOnChange}
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
              Login
            </Button>
            <NavLink to="/registration">
              <Button color="inherit">New In Doctors Portal</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
            <p>-------------------------</p>
            <Button onClick={handleGoogleSignIn} color="inherit">
              Sign in with Google
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} style={{ width: 400 }}></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
