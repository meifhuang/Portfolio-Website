import React from 'react';
import { Box,  Typography, Stack, Link  } from '@mui/material';
import BazarLogo from "../assets/bazar logo.jpeg";

// Define a type for each internship or job experience
type Experience = {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  link: string;
  technologies: string[];
};

// Define the experience data
const experiences: Experience[] = [
  {
    company: 'Bazar',
    logo: BazarLogo,
    role: 'Product Engineer',
    period: 'Oct 2024 - Present',
    description: `Bazar is a platform that provides users with price tracking, price history charts, and sustainability insights for Amazon products. I designed and implemented the responsive landing page, developed core features like sorting and pagination, and the AI-powered sustainability insights. Additionally, I integrated the Google Autocomplete API to enhance address input accuracy and speed. Technologies I used include TypeScript, React, Postgres and TailwindCSS
`,
   link: 'https://bazar-prime.com/', 
    technologies: ['typescript ', 'react ', 'postgres ', 'tailwind ']
  },
//   {
//     company: 'Collaborates',
//     logo: '/assets/companyB-logo.png',
//     role: 'Cofounding Engineer',
//     period: 'May 2022 - August 2022',
//     description: 'Built interactive user interfaces with React and integrated APIs for seamless data fetching.',
//     link: 'https://companyB.com', 
//     technologies: ['typescript', 'react', 'postgres', 'tailwind', 'next.js']
//   },
];

const ExperienceSection: React.FC = () => {
  return (
    <Stack marginBottom={13}>
      <Box display="flex" alignItems="center" justifyContent="flex-start" position="relative" marginLeft={10}> 
       <Typography variant="h3" gutterBottom textAlign="center" marginBottom={5} position='relative'>
                EXPERIENCE  
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", backgroundColor: "black", mb: 4, mx:5}} ></Box>
      </Box>

      {experiences.map((experience, index) => (
        <Stack key={index} mx={20} flexDirection='row' alignItems='center' justifyContent='space-between' gap={1}>
          <Box sx={{width: '360px'}}>
            <Typography variant='h4'>
              {experience.company}
            </Typography>
            <Box sx={{height:'2px', width:'200px', border:1, ml: 5, my: 3}}> </Box>
            <Typography> {experience.description} </Typography>
          </Box>
          <Box> 
          </Box>
          <Box sx={{position: 'relative'}}> 
             <Box component="img" src={experience.logo} sx={{minWidth: '300px', height: '200px', border: 1, borderRadius: '1rem', backgroundColor: 'grey', position: 'relative'}} />
              <Box sx={{
                    height:'200px', 
                    width: '300px', 
                    backgroundColor:'grey', 
                    borderRadius:'1rem', 
                    position:'absolute', 
                    top:-20,
                    right:-20, 
                    zIndex: -10}}> 
                </Box>
          </Box> 
          
        </Stack>
      ))}

      {/* <Stack spacing={4} direction='row' alignItems='center' justifyContent='center'>
        {experiences.map((experience, index) => (
          <Stack>
            <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', border:1, width: '400px'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                
                <Avatar alt={experience.company} src={experience.logo} sx={{ width: 60, height: 60 }} />
                <Box>
                  <Typography variant="h6">{experience.company}</Typography>
                  <Typography variant="body2" color="textSecondary">{experience.role}</Typography>
                  <Typography variant="body2" color="textSecondary">{experience.period}</Typography>
                </Box>
              </Box>
             
              <Typography variant="body1" sx={{ marginTop: '10px' }}>
                {experience.description}
              </Typography>
              
              
              {experience.link && (
                <Box sx={{ marginTop: '10px' }}>
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#1976d2',
                      textDecoration: 'none',
                    }}
                  >
                    Visit Website 
                  </a>
                  <Box sx={{display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {experience.technologies.map((skill) => (
                            <Typography sx={{fontSize: '.8rem', marginRight: '5px'}}> #{skill} </Typography>
                    ))} 
                 </Box>
                </Box>
              )}
            </Paper>
          </Stack>
        ))}
      </Stack> */}
    </Stack>
  );
};

export default ExperienceSection;
