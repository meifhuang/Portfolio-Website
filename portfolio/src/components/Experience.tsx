import React from 'react';
import { 
  Box,  
  Typography, 
  Stack,
  useMediaQuery
} from '@mui/material';
import BazarLogo from "../assets/bazarlogo.png";
import { useTheme } from '@mui/material/styles';
import bazarLeft from "../assets/bazarleft.svg";
import bazarRight from "../assets/bazarright.svg"; 

type Experience = {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  link: string;
  technologies: string[];
};

const experiences: Experience[] = [
  {
    company: 'Bazar',
    logo: BazarLogo,
    role: 'Product Engineer',
    period: 'Oct 2024 - Present',
    description: `Bazar is a platform that provides users with price tracking, price history charts, and sustainability insights for Amazon products. I designed and implemented the responsive landing page, developed core features like sorting and pagination, and the AI-powered sustainability insights. Additionally, I integrated the Google Autocomplete API to enhance address input accuracy and speed. Technologies I used include TypeScript, React, Postgres and TailwindCSS`,
   link: 'https://bazar-prime.com/', 
    technologies: ['typescript ', 'react ', 'postgres ', 'tailwind ']
  }]

const ExperienceSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Stack minHeight='85vh'>
       <Typography variant="h2" gutterBottom textAlign="center" marginBottom={10}>
                EXPERIENCE  
        </Typography>
      {experiences.map((experience, index) => (
        <Stack key={index} flexDirection='row' alignItems='center' justifyContent='center' gap={1} >
          <Box> 
          {/* <Typography fontSize="12rem" mb={15} > &lt; </Typography> */}
          {!isMobile && <Box component='img' src={bazarLeft} width="9rem" mb={15} />}
          </Box>
          <Stack> 
            <Box component="a" href={experience.link} target="_blank" rel="noopener noreferrer">
              <Box component="img" src={experience.logo}
                sx={{
                  minWidth: '280px',
                  height: '200px',
                  objectFit: 'cover',
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
            <Typography fontSize="1.2rem" textAlign='right' padding={2}  > Software Engineer Intern </Typography>
          </Stack>
          {!isMobile && <Box component='img' src={bazarRight} width="9rem" mb={1}/>}
          </Stack>
           ))}
        </Stack>
  );
};

export default ExperienceSection;
