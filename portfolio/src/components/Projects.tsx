import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const projects = [
  {
    title: 'Gym Social',
    img: '/assets/gym-social.png',
    github: 'https://github.com/meifhuang/Gym-Social',
    live: 'https://gym-social.onrender.com/',
  },
  {
    title: 'Trail Yelp',
    img: '/assets/trail-pic.png',
    github: 'https://github.com/meifhuang/Yelp-Trails',
    live: 'https://yelp-trails.onrender.com/',
  },
];

const Projects: React.FC = () => (
  <Box id="projects" sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom textAlign="center">
      Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia component="img" height="140" image={project.img} alt={project.title} />
            <CardContent>
              <Typography variant="h5" gutterBottom>{project.title}</Typography>
              <Button href={project.github} target="_blank" variant="contained" sx={{ mr: 2 }}>GitHub</Button>
              <Button href={project.live} target="_blank" variant="outlined">Live Demo</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
