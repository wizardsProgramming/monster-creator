import React from 'react';
import { Box } from '@mui/material';

function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '250px', sm: '300px', md: '300px', lg: '300px' }, // Responsive height based on screen size
        backgroundImage: 'url(./images/headerIMG.jpg)', // Path to your banner image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Ensure the image doesn't repeat
      }}
    />
  );
}

export default Header;
