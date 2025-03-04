import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Grow,
  Slide,
} from "@mui/material";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Slide direction="down" in timeout={500}>
        <Typography variant="h4" align="center" gutterBottom fontWeight={700}>
          CONTACT US
        </Typography>
      </Slide>
      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Grow in timeout={800}>
            <Paper elevation={4} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Drop us a message!
              </Typography>
              <TextField fullWidth label="Name" margin="normal" variant="outlined" />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2, fontWeight: "bold" }}
                >
                  SEND
                </Button>
              </motion.div>
            </Paper>
          </Grow>
        </Grid>

        {/* Contact Details */}
        <Grid item xs={12} md={6}>
          <Grow in timeout={1000}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Better yet, see us in person!
              </Typography>
              <Typography>
                Visit us in person or book an online consultation. We are available
                to help during business hours.
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 700 }}>
                Walshken Immigration Services
              </Typography>
              <Typography>3030 3 Ave NE #120, Calgary, Alberta T2A 6T7, Canada</Typography>
              <Typography sx={{ fontWeight: 500, color: "red" }}>
                walshkenco@gmail.com
              </Typography>
              <Typography sx={{ fontWeight: 500, color: "red" }}>
                info@walshkenimmigration.com
              </Typography>
              <Typography sx={{ fontWeight: "bold", color: "Black" }}>
               Contact
              </Typography>
              <Typography sx={{ fontWeight: "bold", color: "red" }}>
                +1 365-363-6068
              </Typography>

              <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 700 }}>
                Hours
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>Mon: 09:00 am – 05:00 pm</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Tue: 09:00 am – 05:00 pm</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Wed: 09:00 am – 05:00 pm</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Thu: 09:00 am – 05:00 pm</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Fri: 09:00 am – 05:00 pm</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Sat: Closed</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Sun: Closed</Typography>
            </Box>
          </Grow>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;