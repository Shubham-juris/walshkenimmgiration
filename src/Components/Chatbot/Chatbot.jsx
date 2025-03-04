import React, { useState } from "react";
import { IconButton, TextField, Button, Paper, Typography, Slide, Grow, Box } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CloseIcon from "@mui/icons-material/Close";
import ChatBotImg from "../../assets/ChatBot/ChatBot.jpg";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", contact: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#1976d2",
          color: "white",
          '&:hover': {
            backgroundColor: "#1565c0",
          },
        }}
      >
        <ChatBubbleIcon fontSize="large" />
      </IconButton>
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper
          sx={{
            position: "fixed",
            bottom: 80,
            right: 20,
            padding: 2,
            width: 250,
            textAlign: "center",
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <img src={ChatBotImg} alt="Chatbot" style={{ borderRadius: "50%", width: "50px", height: "50px" }} />
            <IconButton onClick={() => setOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="h6">Hello!</Typography>
          <Grow in={open} timeout={700}>
            <Box mt={2} p={1} bgcolor="#e0f7fa" borderRadius={1}>
              <Typography variant="body2" color="textPrimary">
                Let's chat! How can we assist you further?
              </Typography>
            </Box>
          </Grow>
          <form onSubmit={handleSubmit}>
            <Grow in={open} timeout={900}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="dense"
              />
            </Grow>
            <Grow in={open} timeout={1100}>
              <TextField
                fullWidth
                label="Contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                margin="dense"
              />
            </Grow>
            <Grow in={open} timeout={1300}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="dense"
              />
            </Grow>
            <Grow in={open} timeout={1500}>
              <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
                Submit
              </Button>
            </Grow>
            <Grow in={open} timeout={1700}>
              <Box mt={2} p={1} bgcolor="#f0f0f0" borderRadius={1}>
                <Typography variant="body2" color="textSecondary">
                  Thank you for reaching out! We'll get back to you soon.
                </Typography>
              </Box>
            </Grow>
            <Grow in={open} timeout={1900}>
              <TextField
                fullWidth
                label="Ask me anything..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="dense"
                multiline
                rows={3}
              />
            </Grow>
          </form>
        </Paper>
      </Slide>
    </>
  );
};

export default Chatbot;
