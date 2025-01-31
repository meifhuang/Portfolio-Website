import React from 'react';
import { 
    Box, 
    Typography,
    Container,
    Stack, 
    Button, 
 } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import image from "../assets/linked_propic.jpg"

const Home: React.FC = () => { 
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

return (

  <Container id="about" sx={{height:'100vh', alignItems:'center', justifyContent:'center', display: 'flex'}}>
        <Stack 
            direction="row" 
            alignItems="center" 
            justifyContent="center" 
            spacing={5}
        >    
        <Stack>
            <Box sx={{width: '460px'}}>
                <Typography variant='h3'> Hi, my name is Mei. </Typography>
                <Typography sx={{marginY:2}}> A full-stack software engineer driven by curiosity and a passion for building efficient and impactful solutions.  </Typography>
                <Button variant='contained' color="secondary" sx={{borderRadius:5}}> Contact </Button>
            </Box>                    
                    
            </Stack>
            <Box sx={{position: 'relative'}}>
                <Box sx={{
                        width: 100, 
                        height: 100, 
                        position: 'absolute', 
                        top: -10,
                        left: -10, 
                        zIndex: -10,
                        borderTop: 1, 
                        borderLeft: 1,
                        }}> 
                    </Box>
                <Box 
                    component="img" 
                    src={image} 
                    sx={{
                        width: 250, 
                        height: 250, 
                        marginRight: 1, 
                        // position:'relative'
                    }}> 
                </Box>
                <Box sx={{
                    width: 200, 
                    height: 200, 
                    position: 'absolute', 
                    border: 1, 
                    right: -20,
                    bottom: -30, 
                    zIndex: -10
                    }}> 
                </Box>
            </Box>
        </Stack>
  </Container>
);
}
export default Home;
