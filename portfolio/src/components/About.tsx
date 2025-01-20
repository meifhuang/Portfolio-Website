import React from 'react';
import { 
    Box, 
    Typography,
    Container,
    Stack, 
    Button, 
    Link
 } from '@mui/material';

import image from "../assets/linked_propic.jpg"

const About: React.FC = () => (
  <Container id="about" sx={{border:1}}>
        <Stack 
            direction="row" 
            alignItems="center" 
            justifyContent="center" 
            spacing={5}
            sx={{marginY: 20}}
        >    
                <Box 
                    component="img" 
                    src={image} 
                    sx={{width: 250, height: 250, borderRadius: 50, marginRight: 1}}> 
                </Box>
                <Stack sx={{marginLeft: 5}}>
                    <Box >
                        <Typography> Hello! I'm </Typography>
                        <Typography> Mei Huang </Typography>
                        <Typography> Software Developer </Typography>
                    </Box>
                    <Box>
                        <Button variant='outlined' color="secondary" sx={{m:1}}> View Resume </Button>
                        <Button variant='contained' color="secondary" sx={{m:1}}> Contact Me </Button>
                    </Box>
            </Stack>
        </Stack>
        
        <Box>
            <Link> </Link>
            <Link> </Link>
        </Box>
  </Container>
);

export default About;
