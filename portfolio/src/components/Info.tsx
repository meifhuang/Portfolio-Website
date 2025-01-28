import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const AboutAndSkills: React.FC = () => {


  return (
    <Container sx={{borderRadius: 10, backgroundColor: 'primary.main'}}> 
    <Box sx={{ padding: '40px 20px' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        About Me
      </Typography>

     

    </Box>
    </Container>
  )}

export default AboutAndSkills;
