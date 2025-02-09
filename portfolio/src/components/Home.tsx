import React from 'react';
import Animation from './Animation';
import { 
    Box, 
    Typography,
    Container,
    Stack, 
    Button, 
    useMediaQuery,
 } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import '../styles.css';

const Home: React.FC = () => { 
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

return (
  <Container id="home" 
        sx={{
            minHeight:'80vh',
            paddingTop: '5rem',
        }}>
        <Stack 
            height='100%'            
            direction='column'
            alignItems="start"
            justifyContent= "center"  
        >    
        <Stack>
            <Box sx={{
              display: 'flex', 
                flexDirection:'column',
                justifyContent: 'center', 
                alignItems: 'start',
                maxWidth: '27rem',
                marginTop: isMobile ? 0 : 10,
                marginBottom: isMobile ? 35: 30,
              }}>
               <Typography variant='h3'>
                  <span className="typing-animation">Hey, I'm Mei.</span>
                </Typography>
                <Typography sx={{marginY:2}}> <span className="fade-in">
                   A full-stack software engineer driven by curiosity and a passion for building efficient and impactful solutions.  
                   </span>
                   </Typography>
                <Button variant='contained' className="button-appear" color="secondary" sx={{borderRadius:5}}> Contact </Button>
            </Box>                               
        </Stack>
        <Box sx={{
          position: 'absolute',
          width: '100%',
          maxWidth: '700px',
          height: 'auto', 
          right: 0,
            
        }}>
        <Animation className="svg-animate" />
        </Box>
        </Stack>
  </Container>
);
}
export default Home;
