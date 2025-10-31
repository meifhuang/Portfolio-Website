import React from 'react';
// import Animation from './Animation';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { 
    Box, 
    Typography,
    Container,
    Stack, 
    // Button, 
    IconButton,
    // useMediaQuery,
 } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import '../styles.css';
import Scroll from './Scroll';

const Home: React.FC = () => { 
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

    //  const handleScroll = (event: React.MouseEvent<HTMLElement>, id: string) => {
    //     event.preventDefault();
    //     const element = document.getElementById(id);
    //     if (element) {
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };

return (
  <Container id="home" 
        sx={{
            minHeight:'100vh',
            minWidth: '100vw',
        }}>
        {/* <Stack 
            height='100%'            
            direction='column'
            alignItems="start"
            justifyContent= "center"  
            // border='1px solid red'
        >    
        <Stack> */}
            <Box sx={{
                display: 'flex', 
                flexDirection:'column',
                justifyContent: 'center', 
                alignItems: 'center',
                height: "83vh",
                // maxWidth: '36rem',
                // marginTop: isMobile ? 0 : 20,
                // marginBottom: isMobile ? 35: 30,
              }}>
               <Typography variant='h3'>
                  <span className="typing-animation">Hi, I'm Mei.</span>
                </Typography>
                <Typography sx={{marginY:1.25, fontSize: '20px', textAlign: 'center'}}> <span className="fade-in">
                  A data engineer who loves making sense of messy data  <br/> 
                  and building pipelines that drive insight and impact.
                   </span>
                   </Typography>
  

          <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
            <IconButton
              component="a"
              href="https://github.com/meifhuang"
              target="_blank"
              rel="noopener noreferrer"
              className="button-appear"
              sx={{
                backgroundColor: 'transparent',
                "&:hover": { color: "#99B2F5" },
              }}
            >
              <GitHubIcon fontSize="large" sx={{color:"#99B2F5"}}/>
            </IconButton>

            <IconButton
              component="a"
              className="button-appear"
              href="https://www.linkedin.com/in/meifhuang5"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: 'transparent',
                "&:hover": { color: "#99B2F5" },
              }}
            >
              <LinkedInIcon fontSize="large" sx={{color:"#99B2F5"}}/>
            </IconButton>

            <IconButton
              component="a"
              className="button-appear"
              href="mailto:meifhuang5@gmail.com"
              sx={{
                backgroundColor: 'transparent',
                "&:hover": { color: "#99B2F5"},
              }}
              >
              <EmailIcon fontSize="large" sx={{color:"#99B2F5"}}/>
            </IconButton>
        </Stack>

        
      </Box>
     <Scroll section="about"/>
    </Container>
    );
}
                {/* <Box>
                // <Button 
                //     variant='contained' 
                //     className="button-appear" 
                //     color="secondary" 
                //     onClick={(e)=>handleScroll(e,'projects')}
                //     sx={{
                //       borderRadius: 5,
                //       height: '2.5rem',
                //       color: 'white',
                //       mt: 1,
                //       }}   
                // >
                //   View my projects
                // </Button>
                
                <Button 
                    variant='contained' 
                    className="button-appear" 
                    color="secondary" 
                    onClick={(e)=>handleScroll(e,'contact')}
                    sx={{
                      borderRadius: 5,
                      height: '2.5rem',
                      color: 'white',
                      mt: 1,
                      }}   
                >
                  Contact Me 
                </Button>
                </Box> */}
        {/* </Stack> */}
        {/* <Box sx={{
          position: 'absolute',
          width: '100%',
          maxWidth: '700px',
          height: 'auto', 
          alignSelf: 'end'  
        }}>
        {/* <Animation className="svg-animate" /> */}
        {/* </Box> */}

        {/* </Stack> */}

       


export default Home;
