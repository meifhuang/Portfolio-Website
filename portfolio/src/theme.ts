import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C7D5F9',
    },
    secondary: {
      main: '#99B2F5',
    },
    warning: {
      main: '#ffcc80'
    }
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 780, 
      lg: 1024,
      xl: 1280,
    }}
});

export default theme;
