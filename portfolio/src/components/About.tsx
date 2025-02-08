import React, { useState } from 'react';
import { 
  Stack, 
  Box, 
  Typography,
  Divider, 
  Container, 
  useMediaQuery,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';



const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const timeline = [
    { 'icon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#99B2F5" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>,
      'text': "I graduated from Stony Brook University with degree in Information Systems, specializing in Health Informatics.",
    },
    { 'icon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#99B2F5" d="M160 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-11.8-25.5-29.9-47.5-52.4-64l99.6 0 0-32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 64 0 0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-32zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/></svg>,
      'text':"After graduating, I combined my passion for technology and learning by tutoring STEM subjects, including introductory computer science courses."
    },
    { 'icon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#99B2F5" d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152l0 264-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427L0 224c0-17.7 14.3-32 32-32l30.3 0c63.6 0 125.6 19.6 177.7 56zm32 264l0-264c52.1-36.4 114.1-56 177.7-56l30.3 0c17.7 0 32 14.3 32 32l0 203c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"/></svg>, 
      'text': "Through tutoring, I developed a deeper appreciation for problem-solving and the creative aspects of programming. I started working through The Odin Project and built my own projects to apply what I learned.",
    },
    { 'icon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#99B2F5" d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>,
      'text': "As my interest in software engineering grew, I decided to transition fully into coding. I'm currently continuing to expand my knowledge as a Data Science Fellow at The Knowledge House program, while also interning as a product engineer at Bazar. "

    },
  ]
 
  return (
    <Container id="about" sx={{ minHeight: '90vh',alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
    <Stack sx={{ height: 'fit-content' }}>
      <Typography variant="h3" gutterBottom textAlign="center" p={6}>
        ABOUT ME
      </Typography>
      <Box sx={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%', margin: '20px 0'}}>
          {timeline.map((step, index) => (
            <Box key={index} className="timeline-icon" sx={{position: 'relative', zIndex: 1, margin: '5rem', cursor:'pointer', width: '100px'}} >
              {step.icon}
              <Box className="timeline-text">
                <Typography variant="body2">{step.text}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
    </Stack>
  </Container>
  )}

export default About;
