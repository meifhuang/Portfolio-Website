import React from 'react';
import { Box, Typography, Stack, Link } from '@mui/material';
import Github from '../assets/githubcloud.svg';
import Email from '../assets/gmailcloud.svg';
import LinkedIn from '../assets/linkedcloud.svg';

const Contact: React.FC = () => {
  return (
    <Stack
        id="contact"
        minHeight='90vh'
        alignItems='center'
        justifyContent='center'
        spacing={2}
        sx={{ padding: '40px 20px', backgroundColor: 'primary.main', borderRadius: '10px', boxShadow: 3 }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Get in Touch
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
        <Stack alignItems={'center'} justifyContent={'center'} spacing={2}>
          <Link href="https://github.com/meifhuang" target="_blank" rel="noopener noreferrer">
            <Box component='img' src={Github} alt='GitHub' sx={{ width: '200px', height: '200px', borderRadius: '50%', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }} />
          </Link>
          <Typography variant='h6' sx={{ textAlign: 'center'}}>Explore My Projects</Typography>
        </Stack>
        <Stack alignItems={'center'} justifyContent={'center'} spacing={2}>
          <Link href="https://www.linkedin.com/in/meifhuang5" target="_blank" rel="noopener noreferrer">
            <Box component='img' src={LinkedIn} alt='LinkedIn' sx={{ width: '200px', height: '200px', borderRadius: '50%', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }} />
          </Link>
          <Typography variant='h6' sx={{ textAlign: 'center'}}>Connect with Me</Typography>
        </Stack>
        <Stack alignItems={'center'} justifyContent={'center'} spacing={2}>
          <Link href="mailto:meifhuang5@gmail.com">
            <Box component='img' src={Email} alt='Email' sx={{ width: '200px', height: '200px', borderRadius: '50%', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }} />
          </Link>
          <Typography variant='h6' sx={{ textAlign: 'center'}}>
          Chat with me
          </Typography>
        </Stack>
      </Box>
    </Stack> 
  );
};

export default Contact;
