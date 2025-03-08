import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import backgroundImg from '../../assets/Hero/background.jpg';
const Hero = () => {
  return (
    <Box
      sx={{
        mx: 'auto',
        // width:"100vw",
        height: '100vh',
        position: 'relative',
        display: 'flex',
        paddingLeft: 5,
        alignItems: 'center',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        //  height:'700px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          px: { xs: '5%', sm: '15%' },
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column',
          width: { xs: '80%', sm: '50%' },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem' },
            textAlign: 'left',
            color: '#fff',
            fontWeight: 'bold',
          }}
        >
          BOOK YOUR CONSULTATION TODAY!
        </Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            textAlign: 'left',
            color: '#fff',
            fontWeight: '250px',
            py: 2,
          }}
        >
          Helping you migrate to your dream country, Canada! We Provide
          affordable immigration consultation services Canadian
        </Typography>
        <Box
          sx={{
            py: 2,
            // py:2,
            display: 'flex',
            gap: 4,
          }}
        >
          <Button
            sx={{
              // width:'15%',
              color: '#fff',
              border: '2px solid white',
              borderRadius: '10px',
              padding: '5px',
            }}
          >
            BOOK ONLINE
          </Button>
          <Button
            sx={{
              color: '#fff',
              border: '2px solid white',
              borderRadius: '10px',
              padding: '5px',
            }}
          >
            CASE ASSESSMENT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
