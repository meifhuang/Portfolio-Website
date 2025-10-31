import { Box, Typography, Container, Grid } from '@mui/material';
import HTML from '../assets/skills/HTML5.png';
import CSS from '../assets/skills/CSS3.png';
import JS from '../assets/skills/JavaScript.png';
import Python from '../assets/skills/python.png';
import TS from '../assets/skills/typescript.png';
import React from '../assets/skills/React.png';
import Node from '../assets/skills/Node.js.png';
import Express from '../assets/skills/express.png';
import Git from '../assets/skills/Git.png';
// import Firebase from '../assets/skills/Firebase.png'
import MongoDB from '../assets/skills/mongo.png';
import Bootstrap from '../assets/skills/bootstrap.png';
import TailwindCSS from '../assets/skills/tailwind.png';
import MaterialUI from '../assets/skills/materialUI.png';
import PostgresSQL from '../assets/skills/postgres.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import SkillBox from './SkillBox';
import Pandas from '../assets/skills/pandas.png';
import NumPy from "../assets/skills/numpy.png";
import Matplotlib from "../assets/skills/matplotlib.png";
import scikit from "../assets/skills/scikit-learn.png";


// Sample skills data
const skills = [
  { name: 'Pandas', image: Pandas},
  { name: 'NumPy', image: NumPy},
  { name: 'Matplotlib', image: Matplotlib},
  { name: 'sklearn', image: scikit},
  { name: 'Python', image: Python },
  { name: 'PostgresSQL', image: PostgresSQL },
  { name: 'MongoDB', image: MongoDB },
  { name: 'Git', image: Git },
  { name: 'HTML', image: HTML },
  { name: 'CSS', image: CSS },
  { name: 'JavaScript', image: JS },
  { name: 'TypeScript', image: TS },
  { name: 'React', image: React },
  { name: 'Node.js', image: Node },
  { name: 'Express', image: Express },
  { name: 'Bootstrap', image: Bootstrap },
  { name: 'MaterialUI', image: MaterialUI },
  { name: 'TailwindCSS', image: TailwindCSS },
  // { name: 'Firebase', image: Firebase},
];
import { useTheme } from '@mui/material/styles';


export default function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container disableGutters 
      sx={{ 
        minWidth:'100%', 
        minHeight: '100vh', 
        alignItems: 'center', 
        justifyContent: 'center', 
        display: 'flex', 
         position: 'relative',

      }}> 
      <Box sx={{ 
            display: 'flex', 
            width: '100%',
            flexDirection: isMobile ? 'column' : 'row', 
            alignItems: 'center', 
            justifyContent:'space-around',
            padding: '20px', 
            mb:15,
          }}>
        <Box>
          <Typography variant="h2" sx={{ marginBottom: '20px'}}>
            SKILLS
          </Typography>
          <Box sx={{ flexGrow: 1, height: "3px", backgroundColor: "black", mb: 4, mx:5}} ></Box>
        </Box>   
   {isMobile ? 
      <Grid container spacing={1} marginX='auto' justifyContent="center">
      {skills.map((skill, index) => (
        <Grid item sm={3} key={index} mb={2}>
          <SkillBox name={skill.name} image={skill.image} />
        </Grid>
      ))}
    </Grid> 
      : 
        <Box sx={{ display: 'flex', gap: '30px'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px',mt:6}}>
            {skills.slice(0, 4).map((skill, index) => (
              <SkillBox key={index} name={skill.name} image={skill.image}/>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt:-2}}>
            {skills.slice(4, 8).map((skill, index) => (
              <SkillBox key={index} name={skill.name} image={skill.image}/>
            ))}
          </Box>
      
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt:8}}>
            {skills.slice(8, 12).map((skill, index) => (
               <SkillBox key={index} name={skill.name} image={skill.image}/>
              ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt:4}}>
            {skills.slice(12, 15).map((skill, index) => (
               <SkillBox key={index} name={skill.name} image={skill.image}/>
              ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt:15}}>
            {skills.slice(15, 18).map((skill, index) => (
               <SkillBox key={index} name={skill.name} image={skill.image}/>
              ))}
          </Box>
      </Box>
}  
  </Box>
  </Container>
  )
}
