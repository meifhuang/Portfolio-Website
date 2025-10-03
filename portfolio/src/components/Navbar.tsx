import React, {useState, useEffect} from 'react';
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
  fontSize: '20px',
  fontWeight: 'bold',
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
  const [scrollOpacity, setScrollOpacity] = useState(0);
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

 useEffect(() => {
    const handleScroll = () => {
      // Calculate opacity based on scroll position (0 to 1)
      const maxScroll = 200; // pixels to scroll for maximum darkness
      const opacity = Math.min(window.scrollY / maxScroll, 1);
      setScrollOpacity(opacity);
    };

    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   const getBackgroundColor = () => {
    const baseColor = { r: 153, g: 178, b: 245 }; // #99B2F5
    const targetColor = { r: 199, g: 213, b: 249 }; // Darker purple-blue rgba(199, 213, 249, 1)
    
    // Interpolate between base and target based on scroll
    const r = Math.round(baseColor.r + (targetColor.r - baseColor.r) * scrollOpacity);
    const g = Math.round(baseColor.g + (targetColor.g - baseColor.g) * scrollOpacity);
    const b = Math.round(baseColor.b + (targetColor.b - baseColor.b) * scrollOpacity);
    
    return `rgb(${r}, ${g}, ${b})`;
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
  <AppBar position="sticky" color="secondary"  sx={{ 
        boxShadow: 'none',
        background: getBackgroundColor(),
        transition: 'background 0.1s ease-out'
      }} >
    <Toolbar sx={{height:"100px", mx: '2rem'}}>
      <Typography variant="h3" component="div" sx={{ flexGrow: 1, fontWeight: 'bold'}} color="white">
        mh.
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
