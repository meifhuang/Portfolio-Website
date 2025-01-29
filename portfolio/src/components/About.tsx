import React from 'react';
import { Stack, Box, Container, Typography, Stepper, Step, StepLabel } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalculateIcon from '@mui/icons-material/Calculate';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';

const About: React.FC = () => {

  const timeline = [
    { 'icon': <SchoolIcon fontSize='large'/>,
      'text': 'I graduated from Stony Brook University with an Information Systems degree specializing in Health Informatics.',
    },
    { 'icon': <CalculateIcon fontSize='large'/>,
      'text':'After graduating, I decided to combine my passion for technology and learning by pursuing teaching. I tutored STEM subjects and some intro to CS course',
    },
    { 'icon': <WebIcon fontSize='large'/>,
      'text': 'As I did more tutoring in CS subjects, I realized I really enjoyed the problem-solving and creative aspect of it and decided to learn full-stack web development in my free time',
    },
    { 'icon': <CodeIcon fontSize='large'/>,
      'text': 'As my passion for CS grew, I started seeking ventures and currently a product engineer at Bazar.'

    },
  ]

  return (
    <Stack sx={{height: '90vh'}}>
    {/* // <Container sx={{borderRadius: 10, backgroundColor: 'primary.main'}}>  */}
      <Typography variant="h3" gutterBottom textAlign="center" p={5}>
        ABOUT ME 
      </Typography>
      <Box sx={{p: 3}}>
      <Stepper alternativeLabel >
        {timeline.map((step, index) => (
          <Step key={index}>
            <StepLabel icon={step.icon} sx={{mx:4}} >
              <Typography variant="caption" color="textSecondary">
                {step.text}
              </Typography>
              
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>


      {/* <Stack flexDirection='row' justifyContent="center" gap={7}> 

            {timeline.map(each => (  
              <>
                <Stack alignItems='center' spacing={3}  width='200px' height='300px' border={2}> 
                    {each.icon}
                  <Typography textAlign="center"> {each.text} </Typography>
                </Stack> 
            
              </>
              ))
            }
          </Stack> */}
    {/* // </Container> */}
    </Stack>
  )}

export default About;
