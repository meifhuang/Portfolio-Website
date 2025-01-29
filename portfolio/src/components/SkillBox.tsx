import { Box, Typography } from '@mui/material';

type SkillBoxProps = {
  name: string;
  image: string;
};

const SkillBox = ({ name, image }: SkillBoxProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: 2,
        backgroundColor: '#fff',
        width: '100px',
        height: '100px',
        justifyContent: 'center',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: '40px',
          height: '40px',
          marginBottom: '10px',
        }}
      />
      <Typography variant="body2">{name}</Typography>
    </Box>
  );
};

export default SkillBox;
