import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

const Navbar: React.FC = () => (
  <AppBar position="static" color="primary" sx={{height: '75px'}}>
    <Toolbar>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        MH 
      </Typography>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Typography sx={{ mx: 2 }}><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>home</a></Typography>
        <Typography sx={{ mx: 2 }}><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>about</a></Typography>
        <Typography sx={{ mx: 2 }}><a href="#project" style={{ color: '#fff', textDecoration: 'none' }}>projects</a></Typography>
        <Typography sx={{ mx: 2 }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>contact</a></Typography>
      </Box>
      <IconButton edge="end" color="inherit" aria-label="menu" sx={{ display: { md: 'none' } }}>
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Navbar;
