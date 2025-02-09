import React from 'react';
import { Box, Card,  Typography, Stack, Link} from '@mui/material';
import GymSocial from '../assets/gym social.png';
import TrailYelp from '../assets/trail-pic.png';
import MembersOnly from '../assets/membersonly-pic.png';
import Library from "../assets/library-pic.png";
import Memory from "../assets/memory-pic.png";
import Modura from "../assets/modura-pic.png";
import { useTheme } from '@mui/material/styles';


const Projects: React.FC = () => {
    const theme = useTheme();

    const projects = [
        {
          title: 'Gym Social',
          img: GymSocial,
          github: 'https://github.com/meifhuang/Gym-Social',
          live: 'https://gym-social.onrender.com/',
          description: 'A full stack social media workout application',
          skills: ['react', 'express', 'nodeJS', 'mongoDB', 'styledcomponents']
        },
        {
          title: 'Trail Yelp',
          img: TrailYelp,
          github: 'https://github.com/meifhuang/Yelp-Trails',
          live: 'https://yelp-trails.onrender.com/',
          description: 'A full stack hiking trails reviews application', 
          skills: ['ejs', 'express', 'nodejs', 'mongoDB', 'bootstrap']
        },
        {
          title: 'Members Only',
          img: MembersOnly,
          github: 'https://github.com/meifhuang/Members-Only',
          live: 'https://members-only-nsuw.onrender.com/',
          description: 'An exclusive message board for members', 
          skills: ['node', 'express', 'mongoDB']
        },
        {
            title: 'Modura',
            img: Modura,
            github: 'https://github.com/meifhuang/Modura',
            live: 'https://modura.onrender.com/',
            description: 'A shopping cart application',
            skills: ['react', 'redux', 'styledcomponents']
          },
        {
          title: 'Library',
          img: Library,
          github: 'https://github.com/meifhuang/Library',
          live: 'https://library-d876a.web.app/',
          description: 'A library application to track books read',
          skills: ['html', 'css', 'javascript', 'firebase']
        },
          {
            title: 'Memory Card Game',
            img: Memory,
            github: 'https://github.com/meifhuang/Memory-Card-Game',
            live: 'https://memory-card-game-pyv0.onrender.com/',
            description: 'A Pokemon memory card game',
            skills: ['react']
          },
      ];
      
    return ( 
            <Stack  sx={{marginY: 5}}>
               <Box id="project" display="flex" alignItems="center" justifyContent="flex-start" position="relative" marginLeft={10}> 
                <Typography variant="h3" gutterBottom textAlign="center" marginBottom={5} position='relative'>
                           PROJECTS
                    </Typography>
                    <Box sx={{ flexGrow: 1, height: "2px", backgroundColor: "black", mb: 4, mx:5}} ></Box>
                </Box>
                <Box
                    sx={{
                        overflowX: "hidden", 
                        whiteSpace: "nowrap",
                        width: '100%',
                        position: 'relative',

                }} 
                >
                <Box
                    sx={{
                        display: 'inline-block',
                        animation: "scroll-left 90s linear infinite", 
                        animationPlayState: 'running', 
                        '&:hover' : {
                          animationPlayState: 'paused'
                        }
                    }}
                >
               {projects.concat(projects).concat(projects).concat(projects).map((project, index) => (
                    <Card sx={{
                        key: {index}, 
                        display:'inline-block', 
                        width: '400px', 
                        height: '300px', 
                        margin: '10px 30px', 
                        borderRadius: 10,
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                    }}>
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
                        <Box 
                            className="image-layer"
                            component="img" 
                            src={project.img} 
                            alt={project.title} 
                            sx={{
                                objectFit: "cover", 
                                width: "100%", 
                                height:"100%", 
                                zIndex: 1,
                                transition: "transform .8s ease, opacity .8s ease", 
                               
                            }}
                        >          
                        </Box> 

                        <Box
                            className="text-layer"
                            sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: theme.palette.secondary.main,
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0,
                            transition: "opacity 1s ease",
                            transformOrigin: "center",
                            zIndex: 2, 
                            }}
                        >
                        
                            <Typography variant="h5" sx={{ textAlign: "center", px: 2 }}>
                            {project.title}
                            </Typography>

                      
                            <Typography variant="body1" sx={{ textAlign: "center", px: 3, mt: 2 }}>
                            {project.description}
                            </Typography>

                            <Typography
                            variant="body2"
                            sx={{
                                textAlign: "center",
                                textWrap: 'wrap',
                                px: 3,
                                mt: 2,
                                fontStyle: "italic",
                                fontSize: "0.9rem",
                                color: "rgba(255, 255, 255, 0.7)",
                            }}
                            >
                            <strong>Technologies:</strong> {project?.skills?.join(", ")}
                            </Typography>

                      
                            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                            <Link
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                color: "white",
                                textDecoration: "none",
                                padding: "10px 15px",
                                background: "rgba(255, 255, 255, 0.2)",
                                borderRadius: "5px",
                                "&:hover": {
                                  transform: 'scale(1.05)' 
                              }
                            }}
                            >
                                Visit Website
                            </Link>
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                color: "white",
                                textDecoration: "none",
                                padding: "10px 15px",
                                background: "rgba(255, 255, 255, 0.2)",
                                borderRadius: "5px",
                                "&:hover": {
                                  transform: 'scale(1.05)' 
                                }
                                }}
                            >
                                GitHub
                            </Link>
                            </Box>
                        </Box>
                        </Box>
                    </Card>
                ))}
                
                    </Box>
                </Box>
                <style>
                    {`
                    @keyframes scroll-left {
                        0% {
                        transform: translateX(0%);
                        }
                        100% {
                        transform: translateX(-100%);
                        }
                    }
                      `
                  }
                </style>
              
            </Stack>

    )}

export default Projects;
