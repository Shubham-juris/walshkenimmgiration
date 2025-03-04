import { Box, Button } from '@mui/material';
import React from 'react';
import logoImage from '../../assets/Navbar/logo.png';

const navItems = ['Home','Initial', 'Consultation','Services','Blog','Contact Us'];

const Navbar = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        zIndex: '10',
        py: 1,
        // px: 6,
        backgroundColor: 'rgba(0, 0, 0, 0)', 
        display: 'flex',
        justifyContent: {xs:'flex-start',sm:'space-around'},
        alignItems: {xs:'flex-start', sm:'center'},
      }}
    >
      <img
        style={{
          position:'relative',
          left:'48px',
          height: '60px',
          width: '60px',
        }}
        src={logoImage}
        alt="Logo"
      />
      <Box
        sx={{

          overflow:'hidden',
          // width: '70vw',
          display: {xs:'none', sm:'flex'},
       
        gap: 2,
          alignItems: 'center',
        }}
      >
        {navItems.map((item) => (
          <Button
            sx={{
              fontSize: "1.1rem",
              fontWeight:'bold',
              color: '#fff',
              textTransform: 'none', 
            }}
            key={item}
          >
            {item}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;