import React, {useRef, useEffect} from 'react';
import { Box, Grid2, Card, CardContent, CardMedia, Typography, Button, Stack} from '@mui/material';
import GymSocial from '../assets/gym social.png';
import TrailYelp from '../assets/trail-pic.png';


const Projects: React.FC = () => {

    const projects = [
        {
          title: 'Gym Social',
          img: GymSocial,
          github: 'https://github.com/meifhuang/Gym-Social',
          live: 'https://gym-social.onrender.com/',
          description: 'A full stack social media workout application',
          skills: ['react', 'typescript', 'nodeJS']
        },
        {
          title: 'Trail Yelp',
          img: TrailYelp,
          github: 'https://github.com/meifhuang/Yelp-Trails',
          live: 'https://yelp-trails.onrender.com/',
        },
        {
          title: 'Trail Yelp',
          img: TrailYelp,
          github: 'https://github.com/meifhuang/Yelp-Trails',
          live: 'https://yelp-trails.onrender.com/',
        },
        {
          title: 'Trail Yelp',
          img: TrailYelp,
          github: 'https://github.com/meifhuang/Yelp-Trails',
          live: 'https://yelp-trails.onrender.com/',
        },
        {
            title: 'Trail Yelp',
            img: TrailYelp,
            github: 'https://github.com/meifhuang/Yelp-Trails',
            live: 'https://yelp-trails.onrender.com/',
          },
      ];
      
        // const scrollRef = useRef<HTMLDivElement>(null);
      
        // useEffect(() => {
        //   const interval = setInterval(() => {
        //     if (scrollRef.current) {
        //         scrollRef.current.scrollBy({left: 300, behavior: 'smooth'}); 
        //   }}, 3000);
        //   return () => clearInterval(interval)
        // }, []);

    
    return ( 
    
            <Stack id="projects" sx={{marginBottom: 5}}>
                <Typography variant="h4" gutterBottom textAlign="center">
                Projects
                </Typography>
                <Box
                    sx={{
                        overflowX: "hidden", 
                        whiteSpace: "nowrap",
                        width: '100%',
                        position: 'relative',
                        border: 5,  
                }} 
                  
                >
                <Box
                    sx={{
                        display: 'inline-block',
                        animation: "scroll-left 50s linear infinite", 
                    }}
                >
                {projects.map((project, index) => (
                    <Card sx={{
                        display:'inline-block', 
                        width: '400px', 
                        height: '300px', 
                        margin: '10px 30px', 
                        borderRadius: 10,
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer'
                    }}>
                        <Box 
                            className="image-layer" 
                            component="img" 
                            src={project.img} 
                            alt={project.title} 
                            sx={{
                                objectFit: "cover", 
                                width: "100%", 
                                height:"100%", 
                                transition: "transform 1s ease, opacity 0.5s ease", 
                                zIndex: 1,
                            }}
                        >          
                        </Box> 

                        {/* text layer */}
                        <Box
                            sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(199,213,249, 0.98)",
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0,
                            transition: "opacity 0.5s ease",
                            transformOrigin: "center",
                            zIndex: 2, 
                            }}
                            className="text-layer"
                        >
                            {/* Project Title */}
                            <Typography variant="h5" sx={{ textAlign: "center", px: 2 }}>
                            {project.title}
                            </Typography>

                            {/* Project Description */}
                            <Typography variant="body1" sx={{ textAlign: "center", px: 3, mt: 2 }}>
                            {project.description}
                            </Typography>

                            {/* Skills Used */}
                            <Typography
                            variant="body2"
                            sx={{
                                textAlign: "center",
                                px: 3,
                                mt: 2,
                                fontStyle: "italic",
                                fontSize: "0.9rem",
                                color: "rgba(255, 255, 255, 0.7)",
                            }}
                            >
                            <strong>Technologies:</strong> {project?.skills?.join(", ")}
                            </Typography>

                            {/* Links */}
                            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                color: "white",
                                textDecoration: "none",
                                padding: "10px 15px",
                                background: "rgba(255, 255, 255, 0.2)",
                                borderRadius: "5px",
                                }}
                            >
                                Visit Website
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                color: "white",
                                textDecoration: "none",
                                padding: "10px 15px",
                                background: "rgba(255, 255, 255, 0.2)",
                                borderRadius: "5px",
                                }}
                            >
                                GitHub
                            </a>
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
                        .image-layer:hover {
                          opacity: 0;
                          transform: scale(2);
                        }
                        .text-layer:hover {
                          opacity: 1;
                        }
                      `
                  }
                </style>
            </Stack>

    )}

export default Projects;
