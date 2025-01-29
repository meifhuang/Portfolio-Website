import { Box, Typography } from '@mui/material';
import HTML from '../assets/skills/HTML5.png';
import CSS from '../assets/skills/CSS3.png';
import JS from '../assets/skills/JavaScript.png';
import Python from '../assets/skills/python.png';
import TS from '../assets/skills/typescript.png';
import SkillBox from './SkillBox';

// Sample skills data
const skills = [
  { name: 'HTML', image: HTML },
  { name: 'CSS', image: CSS },
  { name: 'JavaScript', image: JS },
  { name: 'TypeScript', image: TS },
  { name: 'Python', image: Python },
//   { name: 'Bootstrap', image: Boostrap },
//   { name: 'MaterialUI', image: MaterialUI },
//   { name: 'TailwindCSS', image: TailwindCSS },
  { name: 'React', image: '/path/to/react-icon.png' },
  { name: 'Node.js', image: '/path/to/nodejs-icon.png' },
  { name: 'Express', image: '/path/to/express-icon.png' },
  { name: 'MongoDB', image: '/path/to/mongodb-icon.png' },
  { name: 'PostgresSQL', image: '/path/to/mongodb-icon.png' },
  { name: 'Git', image: '/path/to/git-icon.png' },
  { name: 'Firebase', image: '/path/to/firebase-icon.png' },
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
          {/* First Column (3 Skills) */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt:6}}>
            {skills.slice(0, 3).map((skill, index) => (
              <SkillBox key={index} name={skill.name} image={skill.image}/>
            ))}
          </Box>
  
          {/* Second Column (4 Skills) */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {skills.slice(5, 9).map((skill, index) => (
              <SkillBox key={index} name={skill.name} image={skill.image}/>
            ))}
          </Box>
          
          {/* Third Column (3 Skills) */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt:6 }}>
            {skills.slice(8, 11).map((skill, index) => (
               <SkillBox key={index} name={skill.name} image={skill.image}/>
              ))}
          </Box>
      </Box>
  </Box>
  )
}
