import React, { useState } from 'react';
import { Box, Card,  Typography, Stack, Link, useMediaQuery, Tabs, Tab} from '@mui/material';
import GymSocial from '../assets/gym social.png';
import Fraud from '../assets/fraud.png';
import TrailYelp from '../assets/trail-pic.png';
import MembersOnly from '../assets/membersonly-pic.png';
import Library from "../assets/library-pic.png";
import Memory from "../assets/memory-pic.png";
import Modura from "../assets/modura-pic.png";
import Claritea from "../assets/claritea.png";
import Debug from "../assets/debugger.png";
import Hackathon from "../assets/hackathon.png";

import NBA from "../assets/nba.png";
import { useTheme } from '@mui/material/styles';

type ProjectCategory = 'all' | 'web' | 'data' | 'hackathon';

const Projects: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
     const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

    const projects = [
        {
            title: 'Claritea',
            img: Claritea,
            // github: 'https://github.com/meifhuang/Memory-Card-Game',
            live: 'https://beta.claritea.fyi/',
            description: 'A content creator review platform for pay transparency',
            skills: ['typescript', 'react', 'mui', 'postgressql'],
            category: 'web'

          },
          {
            title: 'Debugging Co-Pilot',
            img: Debug,
            github: 'https://github.com/meifhuang/Debugger',
            // live: 'https://beta.claritea.fyi/',
            description: 'An AI debugging assistant using Python, LangChain, OpenAI API, and ChromaDB, with a Retrieval-Augmented Generation (RAG) pipeline and Streamlit interface that provides contextual hints from lecture material',
            skills: ['python', 'LangChain', 'OpenAI API', 'ChromaDB', 'Streamlit'],
            category: 'data'
          },
          {
            title: 'Sprouts',
            img: Hackathon,
            github: 'https://github.com/vchu22/bloomberg-hackathon',
            description: `A web application that generates nutritious meal recommendations for children`,
            skills: ['python', 'fastapi', 'html', 'css', 'javascript'],
            category: 'hackathon'

          },
           {
            title: 'NBA Performance Analysis',
            img: NBA,
            github: 'https://github.com/meifhuang/NBA_Data_Analysis',
            description: `Data Analysis on Jalen Brunson's performance during the 2024-2025 NBA Regular Season`,
            skills: ['python', 'pandas', 'numpy', 'matplotlib', 'seaborn'],
            category: 'data'

          },
          {
            title: 'Fraud Detection',
            img: Fraud,
            github: 'https://github.com/meifhuang/fraud_detection',
            description: 'A machine learning pipeline on 1M+ bank transactions that detects fraudulent activity, addressing severe class imbalance with resampling and class-weighting to achieve meaningful precision and recall',
            skills: ['python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'sklearn'],
            category: 'data'

          },
        {
          title: 'Gym Social',
          img: GymSocial,
          github: 'https://github.com/meifhuang/Gym-Social',
          live: 'https://gym-social.onrender.com/',
          description: 'A full stack social media workout application',
          skills: ['react', 'express', 'nodeJS', 'mongoDB', 'styledcomponents'],
          category: 'web'
        },
        {
          title: 'Trail Yelp',
          img: TrailYelp,
          github: 'https://github.com/meifhuang/Yelp-Trails',
          live: 'https://yelp-trails.onrender.com/',
          description: 'A full stack hiking trails reviews application', 
          skills: ['ejs', 'express', 'nodejs', 'mongoDB', 'bootstrap'],
          category: 'web'

        },
        {
          title: 'Members Only',
          img: MembersOnly,
          github: 'https://github.com/meifhuang/Members-Only',
          live: 'https://members-only-nsuw.onrender.com/',
          description: 'An exclusive message board for members', 
          skills: ['node', 'express', 'mongoDB'],
          category: 'web'

        },
        {
            title: 'Modura',
            img: Modura,
            github: 'https://github.com/meifhuang/Modura',
            live: 'https://modura.onrender.com/',
            description: 'A shopping cart application',
            skills: ['react', 'redux', 'styledcomponents'],
          category: 'web'

          },
        {
          title: 'Library',
          img: Library,
          github: 'https://github.com/meifhuang/Library',
          live: 'https://library-d876a.web.app/',
          description: 'A library application to track books read',
          skills: ['html', 'css', 'javascript', 'firebase'],
          category: 'web'

        },
          {
            title: 'Memory Card Game',
            img: Memory,
            github: 'https://github.com/meifhuang/Memory-Card-Game',
            live: 'https://memory-card-game-pyv0.onrender.com/',
            description: 'A Pokemon memory card game',
            skills: ['react'],
          category: 'web'

          },
        
      ];
      
    const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: ProjectCategory) => {
    setSelectedCategory(newValue);
  };

  return (
    <Stack sx={{ marginY: 10, minHeight: '85vh' }} id="projects">
      {/* <Box id="projects" display="flex" alignItems="center" position="relative" > */}
        <Typography variant="h2" gutterBottom textAlign="center" marginBottom={5} position='relative'>
          PROJECTS
        </Typography>
        {/* <Box sx={{ flexGrow: 1, height: "2px", backgroundColor: "black", mb: 4, mx: 5 }}></Box> */}
      {/* </Box> */}

      {/* Filter Tabs */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"        // shows scroll buttons when needed
      allowScrollButtonsMobile 
          sx={{
            '& .MuiTab-root': {
              fontSize: '1rem',
              fontWeight: 500,
              textTransform: 'none',
              // minWidth: 120,
              color: 'text.secondary',
              '&.Mui-selected': {
                color: theme.palette.secondary.main,
              }
            },
            '& .MuiTabs-indicator': {
              backgroundColor: theme.palette.secondary.main,
              height: 3,
            }
          }}
        >
          <Tab label="All Projects" value="all" />
          <Tab label="Data Science" value="data" />
          <Tab label="Web Development" value="web" />
          <Tab label="Hackathon" value="hackathon" />
        </Tabs>
      </Box>

      {/* Projects Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? '1fr' 
            : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 4,
          px: isMobile ? 2 : 6,
          maxWidth: '1400px',
          mx: 'auto',
          width: '100%',
          // // Staggered effect with nth-child
          // '& > *:nth-of-type(3n+1)': {
          //   marginTop: 0
          // },
          // '& > *:nth-of-type(3n+2)': {
          //   marginTop: isMobile ? 0 : 3
          // },
          // '& > *:nth-of-type(3n+3)': {
          //   marginTop: isMobile ? 0 : 6
          // }
        }}
      >
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            sx={{
              height: '320px',
              borderRadius: 3,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)'
              }
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                '&:hover .image-layer': {
                  transform: 'scale(1.1)',
                  opacity: 0,
                },
                '&:hover .text-layer': {
                  opacity: 1,
                }
              }}
            >
              {/* Image Layer */}
              <Box
                className="image-layer"
                component="img"
                src={project.img}
                alt={project.title}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                  transition: "transform 0.8s ease, opacity 0.8s ease",
                }}
              />

              {/* Text Overlay Layer */}
              <Box
                className="text-layer"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: project.category === 'data' 
                    ? theme.palette.warning.main 
                    : theme.palette.secondary.main,
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transition: "opacity 1s ease",
                  transformOrigin: "center",
                  zIndex: 2,
                  px: 3,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 600 }}>
                  {project.title}
                </Typography>

                <Typography variant="body1" sx={{ textAlign: "center", mt: 2, textWrap: "wrap" }}>
                  {project.description}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    textWrap: 'wrap',
                    mt: 2,
                    fontStyle: "italic",
                    fontSize: "0.85rem",
                    color: "rgba(255, 255, 255, 0.85)",
                  }}
                >
                  <strong>Technologies:</strong> {project?.skills?.join(", ")}
                </Typography>

                {/* Links */}
                <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        padding: "8px 16px",
                        background: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "6px",
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        "&:hover": {
                          transform: 'scale(1.05)',
                          background: "rgba(255, 255, 255, 0.3)",
                        }
                      }}
                    >
                      Visit Website
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        padding: "8px 16px",
                        background: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "6px",
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                        "&:hover": {
                          transform: 'scale(1.05)',
                          background: "rgba(255, 255, 255, 0.3)",
                        }
                      }}
                    >
                      GitHub
                    </Link>
                  )}
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No projects here yet.
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default Projects;