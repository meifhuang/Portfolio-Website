import { Box, Typography } from '@mui/material';
import HTML from '../assets/skills/HTML5.png';
import CSS from '../assets/skills/CSS3.png';
import JS from '../assets/skills/JavaScript.png';
import Python from '../assets/skills/python.png';
import TS from '../assets/skills/typescript.png';
import React from '../assets/skills/React.png';
import Node from '../assets/skills/Node.js.png';
import Express from '../assets/skills/express.png';
import Git from '../assets/skills/Git.png';
import Firebase from '../assets/skills/Firebase.png'
import MongoDB from '../assets/skills/mongo.png';
import Bootstrap from '../assets/skills/bootstrap.png';
import TailwindCSS from '../assets/skills/tailwind.png';
import MaterialUI from '../assets/skills/materialUI.png';
import PostgresSQL from '../assets/skills/postgres.png';


import SkillBox from './SkillBox';


// Sample skills data
const skills = [
  { name: 'Bootstrap', image: Bootstrap },
  { name: 'MaterialUI', image: MaterialUI },
  { name: 'TailwindCSS', image: TailwindCSS },
  { name: 'HTML', image: HTML },
  { name: 'CSS', image: CSS },
  { name: 'JavaScript', image: JS },
  { name: 'TypeScript', image: TS },
  { name: 'Python', image: Python },
  { name: 'MongoDB', image: MongoDB },
  { name: 'PostgresSQL', image: PostgresSQL },
  { name: 'Git', image: Git },
  { name: 'Firebase', image: Firebase},
  { name: 'React', image: React },
  { name: 'Node.js', image: Node },
  { name: 'Express', image: Express },
];

export default function Skills() {

  return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-around', padding: '20px', mb:15}}>
        {/* Skills Title */}
        <Box sx={{ width: '150px', marginRight: '30px', textAlign: 'left' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            SKILLS
          </Typography>
          <Box sx={{ flexGrow: 1, height: "2px", backgroundColor: "black", mb: 4, mx:5}} ></Box>

        </Box>
  
        {/* Skills Columns */}
        <Box sx={{ display: 'flex', gap: '30px' }}>
        
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt:10}}>
            {skills.slice(0, 3).map((skill, index) => (
              <SkillBox key={index} name={skill.name} image={skill.image}/>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt:6}}>
            {skills.slice(3, 7).map((skill, index) => (
              <SkillBox key={index} name={skill.name} image={skill.image}/>
            ))}
          </Box>
      
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt:2}}>
            {skills.slice(8, 12).map((skill, index) => (
               <SkillBox key={index} name={skill.name} image={skill.image}/>
              ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt:10}}>
            {skills.slice(12, 16).map((skill, index) => (
               <SkillBox key={index} name={skill.name} image={skill.image}/>
              ))}
          </Box>
      </Box>
  </Box>
  )
}
