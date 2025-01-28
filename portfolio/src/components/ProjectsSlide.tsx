import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

// Sample project data
const projects = [
  {
    title: 'Gym Social',
    img: '/path/to/gym-social-image.png',
    github: 'https://github.com/meifhuang/Gym-Social',
    live: 'https://gym-social.onrender.com/',
    description: 'A full stack social media workout application',
    skills: ['React', 'TypeScript', 'Node.js'],
  },
  {
    title: 'Project 2',
    img: '/path/to/project2-image.png',
    github: 'https://github.com/meifhuang/project2',
    live: 'https://project2.onrender.com/',
    description: 'A project description goes here.',
    skills: ['React', 'MongoDB', 'Node.js'],
  },
  {
    title: 'Project 3',
    img: '/path/to/project3-image.png',
    github: 'https://github.com/meifhuang/project3',
    live: 'https://project3.onrender.com/',
    description: 'Another project description.',
    skills: ['React', 'JavaScript', 'Express'],
  },
  // Add more projects as needed
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box sx={{ position: 'relative', width: '80%', margin: 'auto', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * 318}px)`, // Adjust based on card width
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              width: '318px', // Width of each card
              marginRight: '20px', // Space between cards
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              width="100%"
              style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
            <Typography variant="h6" sx={{ padding: '10px', fontWeight: 'bold' }}>
              {project.title}
            </Typography>
            <Typography variant="body2" sx={{ padding: '0 10px', color: 'gray' }}>
              {project.description}
            </Typography>
            <Box sx={{ padding: '10px' }}>
              {project.skills.map((skill, index) => (
                <Typography key={index} variant="body2" sx={{ display: 'inline-block', marginRight: '5px' }}>
                  {skill}
                </Typography>
              ))}
            </Box>
            <Box sx={{ padding: '10px' }}>
              <Button variant="outlined" href={project.github} target="_blank" sx={{ marginRight: '10px' }}>
                GitHub
              </Button>
              <Button variant="contained" href={project.live} target="_blank">
                Live Demo
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Navigation Buttons */}
      <Button
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        &#8592; {/* Left Arrow */}
      </Button>
      <Button
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        &#8594; {/* Right Arrow */}
      </Button>
    </Box>
  );
}
