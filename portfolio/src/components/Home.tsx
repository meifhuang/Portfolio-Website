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

     const handleScroll = (event: React.MouseEvent<HTMLElement>, id: string) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

return (
  <Container id="home" 
        sx={{
            minHeight:'75vh',
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
                
                <Button variant='contained' className="button-appear" color="secondary" 
                onClick={(e)=>handleScroll(e,'contact')}
                sx={{borderRadius: 5}}
                >
                  Contact Me 
                </Button>
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
