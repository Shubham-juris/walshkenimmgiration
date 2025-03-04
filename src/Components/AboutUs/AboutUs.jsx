import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent 
} from '@mui/material';
import GlobeImage from '../../assets/hero/bg.jpg';
import TeamImage from '../../assets/hero/bg.jpg';
import PlaneImage from '../../assets/hero/bg.jpg';

const AboutUs = () => {
  return (
    <Box sx={{ 
      padding: { xs: 2, md: 4 },
      backgroundColor: '#ffffff',
      margin: '0 auto',
      maxWidth: '1200px',
      width: '100%' 
    }}>
      <Typography 
        variant="h2" 
        align="center"
        gutterBottom
        sx={{
          marginBottom: { xs: 2, md: 4 }, 
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '3rem' } 
        }}
      >
        ABOUT WALSHKEN IMMIGRATION SERVICES
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }}>
     
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <CardMedia
              component="img"
              height={{ xs: 150, md: 200 }} 
              image={GlobeImage}
              alt="Globe on map"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ 
              textAlign: 'center',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}
              >
                About Us
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  lineHeight: 1.5
                }}
              >
                At Walshken Immigration, We believe the New beginnings bring spark to life. Our Mission is to Help individuals and families to Navigate the complexity of Immigration process to New Country. We provide Expert Guidance and help with documentation at...
              </Typography>
            </CardContent>
          </Card>
        </Grid>

  
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <CardMedia
              component="img"
              height={{ xs: 150, md: 200 }}
              image={TeamImage}
              alt="Team joining hands"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ 
              textAlign: 'center',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}
              >
                Who We Are
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  lineHeight: 1.5
                }}
              >
                We are dedicated team of Immigration professionals with years of experience in Immigration law and policy. Our team is comprised of licensed attorneys, paralegals, and consultants who are passionate about helping people achieve their dreams of living...
              </Typography>
            </CardContent>
          </Card>
        </Grid>

    
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <CardMedia
              component="img"
              height={{ xs: 150, md: 200 }}
              image={PlaneImage}
              alt="Airplane with stamps"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ 
              textAlign: 'center',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}
              >
                Our Vision
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  lineHeight: 1.5
                }}
              >
                Our vision is to be the leading immigration consultancy, recognized for our excellence in service, innovative solutions, and dedication to client success. We aim to make the immigration process as smooth and stress-free as possible, helping our clients build new...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;