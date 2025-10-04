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
    logo: ProLogo,     role: 'Pro Bono Data Scientist',
    period: 'Sep 2025 - Present',
    description: 'Prometheus provides technology and data services to nonprofit organizations by connecting them with student and professional volunteers. I am currently working with SA Youth, a nonprofit dedicated to empowering San Antonio’s youth through educational programming, where I conduct exploratory data analysis and data quality checks to evaluate program demographics, participation rates, and trends over time. I also develop standardized outcome measures for education attainment, economic mobility, and mental health to support data-driven decision-making and program improvement.',
    link: 'https://www.joinprometheus.org/',
    technologies: ['python', 'pandas', 'matplotlib', 'sql'],
  },
  {
    company: 'Bazar',
    logo: BazarLogo,
    role: 'Software Engineer Intern',
    period: 'Oct 2024 - April 2025',
    description: 'Bazar is a platform that provides users with price tracking, price history charts, and sustainability insights for Amazon products. I designed and implemented the responsive landing page, developed core features like sorting and pagination, and the AI-powered sustainability insights. Additionally, I integrated the Google Autocomplete API to enhance address input accuracy and speed.',
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

      <Stack sx={{ position: 'relative', maxWidth: '1100x', mx: isMobile ? 'auto': 38, px: 2, }}>
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
                alignItems: 'center'
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
                  width: isMobile ? '90%' : '40%',
                  minWidth: '32rem',
                  bgcolor: 'background.paper',
                  borderRadius: '16px',
                  // border: `2px solid ${theme.palette.main}`,
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                  mx: -5,
                  transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.01)'
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