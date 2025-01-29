import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, styled, Typography} from '@mui/material';

// StyledTypography component with proper type annotation
const StyledTypography = styled(Typography)<{ 
  component?: React.ElementType 
}>({
  margin: '0 16px',
  color: 'white',
  '&:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '10px',
    textDecorationThickness: '3px',
    color: '#ffcc80',
    transition: 'all 1s ease-out',
  },
});

const MenuLink = styled('a')(({
  textAlign: 'center',
  color: 'white',
  transition: 'all 1s ease-in-out',
  '&:hover': {
    color: '#ffcc80', // Change hover color if needed
  },
}));

const Navbar: React.FC = () => (
  <AppBar position="static" color="secondary" sx={{height: '75px', boxShadow:'none'}} >
    <Toolbar>
      <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} color="white">
        mh
      </Typography>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <StyledTypography sx={{ mx: 2 }}><MenuLink href="#home">home</MenuLink></StyledTypography>
        <StyledTypography sx={{ mx: 2 }}><MenuLink href="#about">about</MenuLink></StyledTypography>
        <StyledTypography sx={{ mx: 2 }}><MenuLink href="#project">projects</MenuLink></StyledTypography>
        <StyledTypography sx={{ mx: 2 }}><MenuLink href="#contact">contact</MenuLink></StyledTypography>
      </Box>
      <IconButton edge="end" color="inherit" aria-label="menu" sx={{ display: { md: 'none' } }}>
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Navbar;
