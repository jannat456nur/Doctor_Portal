import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export default function Navigation() {
  const {user,logOut}=useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#2DE1F0'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctor Portal
            
          </Typography>
          <Link to='/appointment'><Button color="inherit">Appointment</Button></Link>
          <NavLink to='/registration'>
              <Button color="inherit">Registration</Button>
          </NavLink>
            {

              user?.email?
  
              <Button color="inherit" onClick={logOut}>Logout</Button>

              :
                          <NavLink to='/login'>
                          <Button color="inherit">Login</Button>
                      </NavLink> 
            }
           
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
