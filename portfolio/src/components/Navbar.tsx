import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, styled, Typography, useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

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
    transition: 'all .5s ease-out',
  },
});


const MenuLink = styled('a')(({
  textAlign: 'center',
  color: 'white',
  transition: 'all .5s ease-in-out',
  '&:hover': {
    color: '#ffcc80',
  },
}));

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu();
  };


  const menuList = (
    <Box
      sx={{
        position: 'absolute',
        top: '75px',
        left: 0,
        width: '100%',
        backgroundColor: 'secondary.main',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 0',
      }}
    >
      {['home', 'about', 'projects', 'contact'].map((text) => (
        <StyledTypography sx={{ mx: 2 , my: 1}}><MenuLink onClick={(e)=> handleMenuClick(e,text)} href={`#${text}`}>{text}</MenuLink></StyledTypography>
      ))}
    </Box>
  );


return ( 
  <AppBar position="static" color="secondary" sx={{height: '75px', boxShadow:'none'}} >
    <Toolbar>
      <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} color="white">
        mh
      </Typography>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <StyledTypography sx={{ mx: 2 }}><MenuLink href="#home">home</MenuLink></StyledTypography>
        <StyledTypography sx={{ mx: 2 }}><MenuLink href="#about">about</MenuLink></StyledTypography>
        <StyledTypography sx={{ mx: 2 }}><MenuLink href="#projects">projects</MenuLink></StyledTypography>
        <StyledTypography sx={{ mx: 2 }}><MenuLink href="#contact">contact</MenuLink></StyledTypography>
      </Box>
      <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
          sx={{
            display: { md: 'none' },
            transition: 'transform 0.7s ease-in-out',
            transform: menuOpen ? 'rotate(90deg)' : 'rotate(00deg)',
          }}
        >
      {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      {isMobile && menuOpen && menuList}
    </Toolbar>
  </AppBar>
);
}
export default Navbar;
