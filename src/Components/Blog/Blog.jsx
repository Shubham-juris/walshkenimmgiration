import React from 'react';
import PlaneImage from '../../assets/hero/bg.jpg';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  Container 
} from '@mui/material';

const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'Eligibility for Farm Stream', date: '18 March 2024', category: 'Alberta PNP Streams', image: PlaneImage, excerpt: 'When applying to the AAIP and throughout the assessment process, candidates are required to fulfill these criteria. However, meeting these criteria does not automatically guarantee nomination or permanent residency...' },
    { id: 2, title: 'Unlocking Opportunities: The Graduate Entrepreneur Stream', date: '15 March 2024', category: 'Alberta PNP Streams', image: PlaneImage, excerpt: 'In today’s rapidly evolving global landscape, opportunities abound for ambitious individuals to carve their own paths and make a meaningful impact. For recent graduates with entrepreneurial aspirations, Alberta presents...' },
    { id: 3, title: 'Breaking New Horizons: The Power of International Mobility', date: '15 March 2024', category: 'Immigrate', image: PlaneImage, excerpt: 'In today\'s interconnected world, many opportunities exist beyond national borders. Whether it\'s seeking career advancement, experiencing different cultures or making the most of the world, the need for international mobility...' },
    { id: 4, title: 'Citizenship', date: '7 February 2024', category: 'Immigrate', image: PlaneImage, excerpt: 'Canada provides pathways to citizenship through naturalization and birth within its borders...' },
    { id: 5, title: 'Family Sponsorship', date: '27 January 2024', category: 'Immigrate', image: PlaneImage, excerpt: 'If you\'re a Canadian citizen or a permanent resident of Canada, aged 18 or older, you have the opportunity to act as a sponsor for specific family members seeking Canadian permanent residency. Upon obtaining permanent residency...' },
    { id: 6, title: 'Spousal Sponsorship: Husband, Wife, Common-law partner', date: '18 January 2024', category: 'Spouses', image: PlaneImage, excerpt: 'The typical processing duration ranges from 8 to 12 months on average, contingent upon the specific visa office handling the application. Some larger visa offices, like the USA, can expedite processing within 4 to 6 months...' },
    { id: 7, title: 'Canada extends int\'l student off-campus work hours policy 2024', date: '15 December 2023', category: 'Latest News Updates, Study Permit', image: PlaneImage, excerpt: 'by Walshken Immigration...' },
    { id: 8, title: 'Why should apply for study permit NOW this December 2023?', date: '15 December 2023', category: 'Latest News Updates, Study Permit', image: PlaneImage, excerpt: 'by Walshken Immigration...' },
    { id: 9, title: 'Rural Renewal Stream Alberta Eligibility 2023', date: '23 November 2023', category: 'Alberta PNP Streams, Increase your knowledge', image: PlaneImage, excerpt: 'by: Walshken Immigration...' },
  ];

  return (
    <Container maxWidth="lg" sx={{ padding: { xs: 2, md: 4 }, backgroundColor: '#ffffff', width: '100%' }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ marginBottom: { xs: 2, md: 4 }, fontWeight: 'bold', color: '#1A2B49', fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
        BLOGS
      </Typography>
      
      <Typography variant="body2" sx={{ color: '#D32F2F', textTransform: 'uppercase', fontWeight: 'bold', fontSize: { xs: '0.8rem', md: '1rem' }, textAlign: 'center', marginBottom: 2 }}>
        All Posts | Alberta PNP Streams | Immigrate | Spouses | Study Permit
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 2, display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 }, backgroundColor: '#F5F7FA' }}>
              <CardMedia component="img" height="250" image={post.image} alt={post.title} sx={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
              <CardContent sx={{ flexGrow: 1, padding: { xs: 2, sm: 2.5, md: 3 }, backgroundColor: '#FFFFFF' }}>
                <Typography variant="caption" sx={{ color: '#666', display: 'block', marginBottom: 1.5 }}>{post.date} | {post.category}</Typography>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1A2B49' }}>{post.title}</Typography>
                <Typography variant="body2" sx={{ color: '#444', marginBottom: 2 }}>{post.excerpt}</Typography>
                <Button variant="contained" sx={{ backgroundColor: '#D32F2F', color: '#FFFFFF' }}>Continue Reading</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
