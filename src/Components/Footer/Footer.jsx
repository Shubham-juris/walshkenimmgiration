import React from "react";
import { Container, Grid, Typography, Link, Box } from "@mui/material";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // Alternative for TikTok

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", py: 4, textAlign: "center" }}>
      <Container maxWidth="lg">
        {/* Social Media Icons */}
        <Box sx={{ mb: 2, display: "flex", justifyContent: "center", gap: 2 }}>
          <Facebook />
          <Instagram />
          <MusicNoteIcon />
          <YouTube />
        </Box>
        
        {/* Links Section */}
        <Grid container spacing={2} justifyContent="center">
          {[
            "Immigration services", "Immigration consultants", "Visa application assistance",
            "Citizenship application help", "Visa processing", "Immigration solutions",
            "Immigration advice", "Work visa application", "Study abroad assistance",
            "Visa application support", "Immigration updates", "Immigration news",
            "Visa eligibility assessment", "Immigration resources", "Visa application status",
            "Paralegal services", "Canadian Paralegal", "fighting tickets",
            "lease agreements paralegal"
          ].map((text, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link href="#" color="inherit" underline="hover">{text}</Link>
            </Grid>
          ))}
        </Grid>
        
        {/* Footer Note */}
        <Typography sx={{ mt: 3, fontSize: "0.9rem" }}>
          Regulated Canadian Immigration Consultants (RCIC)
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
