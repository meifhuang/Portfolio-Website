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
  <Container id="about" 
        sx={{
            height:'100vh'
        }}>
        <Stack 
            height='100%'            
            direction='column'
            alignItems="center"
            justifyContent= {isMobile ? "center" : "start"}       
        >    
        <Stack>
            <Box sx={{
                display: 'flex', 
                flexDirection:'column',
                justifyContent: 'center', 
                alignItems: 'start',
                maxWidth: '35rem',
                marginTop: isMobile ? 0 : 15,
                marginBottom: isMobile ? 30: 0,
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
                aspectRatio: '1',
            }}>
        
        <Animation className="svg-animate"/>

    {/* <DotLottieReact
      src="https://lottie.host/0404b2cf-3a04-49af-82e7-4dbe34915956/3ZI9PYL6Qe.lottie"
      loop
      autoplay
    /> */}
  {/* );
};
  
    <DotLottieReact
      src="/assets/GirlCouch.json"
      loop
      autoplay
    />  */}
        </Box>
   
        </Stack>
  </Container>
);
}
export default Home;
