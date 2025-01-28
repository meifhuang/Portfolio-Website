import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact: React.FC = () => {
  return (
    <Box id="contact" sx={{ padding: '40px 20px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: 3 }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Get in Touch
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: '40px' }}>
        Contact Me
      </Typography>

      <Grid container spacing={4}>
        {/* Email Contact */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              boxShadow: 2,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <IconButton
              sx={{ marginRight: '15px', color: '#F44336', fontSize: '36px' }}
              href="mailto:meifhuang5@gmail.com"
            >
              <EmailIcon />
            </IconButton>
            <Typography variant="h6">
              <a href="mailto:meifhuang5@gmail.com" style={{ textDecoration: 'none', color: '#333' }}>
                Email
              </a>
            </Typography>
          </Box>
        </Grid>

        {/* LinkedIn Contact */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              boxShadow: 2,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <IconButton
              sx={{ marginRight: '15px', color: '#0077b5', fontSize: '36px' }}
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <Typography variant="h6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#333' }}
              >
                LinkedIn
              </a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
