import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { 
    Box, 
    // Button, 
    IconButton,
    // useMediaQuery,
 } from '@mui/material';

import '../styles.css';

interface ScrollProps {
  section: string;
}

const Scroll: React.FC<ScrollProps> = ({section}) => { 

     const handleScroll = (event: React.MouseEvent<HTMLElement>, id: string) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection:'column',
            justifyContent: 'center', 
            alignItems: 'center',}}>                    
            <IconButton
            onClick={(e) => handleScroll(e, section)}
            sx={{
                // position: 'absolute',  
                bottom: 16,          
                color: "#99B2F5",
                animation: "bounce 2s infinite",
            }}
            >
        <KeyboardArrowDownIcon fontSize="large" />
    </IconButton>          
    </Box> 
        );
}
    
       


export default Scroll;
