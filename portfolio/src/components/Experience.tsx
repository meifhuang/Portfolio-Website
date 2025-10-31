import React from 'react';
import { 
  Box,  
  Typography, 
  Stack,
  useMediaQuery,
  Link
} from '@mui/material';
import BazarLogo from "../assets/bazarlogo.png";
import ProLogo from "../assets/prometheus.webp";
import { useTheme } from '@mui/material/styles';
// import Scroll from './Scroll';

type Experience = {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  link: string;
  technologies: string[];
  achievements?: string[];
};

const experiences: Experience[] = [
  {
    company: 'Prometheus',
    logo: ProLogo,     role: 'Pro Bono Data Engineer',
    period: 'Sep 2025 - Present',
    description: 'Prometheus connects nonprofits with student and professional volunteers for technology and data services. I am currently working with SA Youth, a nonprofit dedicated to empowering San Antonio’s youth through educational programming. With other fellows, I conduct exploratory data analysis and data quality checks to evaluate program demographics, participation rates, and trends over time. I also built a Python-based ETL pipeline that extracts, cleans, and transforms nine disparate program data tables into four standardized analytics tables, turning messy data into organized datasets for outcome measurement and program evaluation.',
    link: 'https://www.joinprometheus.org/',
    technologies: ['python', 'pandas', 'matplotlib', 'sql'],
  },
  {
    company: 'Bazar',
    logo: BazarLogo,
    role: 'Software Engineer Intern',
    period: 'Oct 2024 - April 2025',
    description: 'Bazar is a platform that provides users with price tracking, price history charts, and sustainability insights for Amazon products. I designed and implemented the responsive landing page, developed core features including sorting and pagination, and built the AI-powered sustainability insights feature. I also integrated the Google Autocomplete API to enhance address input accuracy and user experience.',
    link: 'https://bazar-prime.com/',
    technologies: ['typescript', 'react', 'postgres', 'tailwind'],
  }
];
const ExperienceSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  // const isiPad = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Stack minHeight="85vh" sx={{ py: 6 }} id="experience">
      <Typography variant="h2" gutterBottom textAlign="center" sx={{ mb: 10 }} >
        EXPERIENCE
      </Typography>

      <Stack sx={{ position: 'relative',  maxWidth: isMobile ? '80%' : '72vw',
                // border: '1px solid red',

    mx: 'auto', px: 2, }}>
        {/* Timeline line */}
        {!isMobile && (
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: -50,
              bottom: -20,
              width: '4px',
              bgcolor: '#000',
              transform: 'translateX(-50%)',
              zIndex: 0,
              
            }}
          />
        )}

        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <Stack
              key={index}
              sx={{
                position: 'relative',
                mb: 8,
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: isMobile ? 'flex-start' : isLeft ? 'flex-start' : 'flex-end',
                alignItems: 'center',
              }}
            >
              {/* Timeline dot */}
              {!isMobile && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    bgcolor: '#000',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0,
                    border: `4px solid ${theme.palette.background.default}`
                  }}
                />
              )}

              {/* Experience card */}
              <Stack
              sx={{
                width: isMobile ? '100%' : '44%',
                minWidth: isMobile ? 'auto' : '0', 
                // minWidth: isMobile ? 'auto' : '32rem', // allow shrinking on mobile
                bgcolor: 'background.paper',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                mx: 0, // remove negative margin
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: isMobile ? 'none' : 'scale(1.01)',
                }
              }}
            >

                {/* Content */}
                <Stack sx={{ p: 4, pt: 5 }} spacing={2.5}>
                  {/* Header with logo */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      component="img"
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      sx={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid #e0e0e0'
                      }}
                    />
                    <Stack spacing={0.5}>
                      <Typography variant="h5" fontWeight={600}>
                        {experience.company}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" fontWeight={500}>
                        {experience.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {experience.period}
                      </Typography>
                    </Stack>
                  </Stack>

                  {/* Description */}
                  <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.7 }}>
                    {experience.description}
                  </Typography>

                  {/* Footer with link and technologies */}
                  <Stack spacing={1.5}>
                    <Link
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#4A90E2',
                        textDecoration: 'none',
                        fontWeight: 500,
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      Visit Website
                    </Link>
                    <Typography variant="body2" color="text.secondary">
                      {experience.technologies.map((tech, idx) => (
                        <span key={idx}>
                          #{tech}
                          {idx < experience.technologies.length - 1 ? ' ' : ''}
                        </span>
                      ))}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default ExperienceSection;