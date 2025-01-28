import { Box, Typography } from '@mui/material';
import HTML from '../assets/skills/HTML5.png';
import CSS from '../assets/skills/CSS3.png';
import JS from '../assets/skills/JavaScript.png';
import Python from '../assets/skills/python.png';
import TS from '../assets/skills/typescript.png';

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
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h2" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        My Skills
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px',
          alignItems: 'center',
          border: 5
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '10px',
              boxShadow: 2,
              position: 'relative',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            //   backgroundColor: '#fff',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 3,
              },
              backgroundColor: 'primary',
              width: '80px',
              border: 17,
              borderColor: '#C7D5F9',
              color: 'primary'
            }}
          >
            <img
              src={skill.image}
              alt={skill.name}
            //   width="40"
            //   height="40"
              style={{ marginBottom: '5px', backgroundColor: 'transparent', margin: 4}}
            />
            {/* <Typography
              variant="body2"
              sx={{
                fontSize: '14px',
                color: '#333',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              {skill.name}
            </Typography> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
