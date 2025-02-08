import React from 'react';
import { 
  Box,  
  Typography, 
  Stack,
  useMediaQuery,
} from '@mui/material';
import BazarLogo from "../assets/bazar logo.jpeg";
import { useTheme } from '@mui/material/styles';


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
    description: `Bazar is a platform that provides users with price tracking, price history charts, and sustainability insights for Amazon products. I designed and implemented the responsive landing page, developed core features like sorting and pagination, and the AI-powered sustainability insights. Additionally, I integrated the Google Autocomplete API to enhance address input accuracy and speed. Technologies I used include TypeScript, React, Postgres and TailwindCSS`,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack marginY={13}>
      <Box display="flex" alignItems="center" justifyContent="flex-start" position="relative" marginLeft={10}> 
       <Typography variant="h3" gutterBottom textAlign="center" marginBottom={5} position='relative'>
                EXPERIENCE  
        </Typography>
        <Box sx={{ flexGrow: 1, height: "2px", backgroundColor: "black", mb: 4, mx:5}} ></Box> 
      </Box>
      
      {experiences.map((experience, index) => (
        <Stack key={index} mx={20} flexDirection={isMobile ? 'column-reverse' : 'row'} alignItems='center' justifyContent='space-between' gap={1}>
        
        <Box sx={{ width: '19.5rem', border: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }}>
      {!isMobile && (
        <>
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
            {experience.company}
          </Typography>
          <Box sx={{ height: '2px', width: '200px', backgroundColor: '#000', marginBottom: '20px' }}></Box>
        </>
      )}
      <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: '600px', lineHeight: '1.6'}}>
        {experience.description}
      </Typography>
    </Box>
          <Box> 
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Box component="a" href={experience.link} target="_blank" rel="noopener noreferrer">
              <Box component="img" src={experience.logo}
                sx={{
                  minWidth: '280px',
                  height: '200px',
                  border: 1,
                  borderRadius: '1rem',
                  backgroundColor: 'grey',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: `0px 0px 12px 12px ${theme.palette.primary.main}`,
                    scale: 1.01,
                  }
                }} />
            </Box>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default ExperienceSection;
