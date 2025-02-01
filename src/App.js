import React from 'react';
import Header from './components/Header';
import MonsterList from './components/MonsterList';
import { Container, Typography, Box, Button } from '@mui/material';

// Steampunk color palette
const steampunkColors = {
  background: '#4B3F31', // Deep brownish tone for the background
  accent: '#B07F5F', // Brass/copper color
  text: '#F2E8C6', // Light parchment color for text
  button: '#C2B97A', // Brass-like button color
  buttonHover: '#A57C43', // Darker brass for hover effect
};

const monsters = [
  { id: 1, name: 'Goblin Warrior', imageUrl: './images/goblinWarrior.png' },
  { id: 2, name: 'Samurai', imageUrl: './images/samurai.png' },
  { id: 3, name: 'Griffin', imageUrl: './images/griffin.png' },
  { id: 4, name: 'Ice Elemental', imageUrl: './images/iceElemental.png' },
  { id: 5, name: 'Green Dragon', imageUrl: './images/greenDragon.png' },
  { id: 6, name: 'Ogre', imageUrl: './images/ogre.png' },
  { id: 7, name: 'Minotaur', imageUrl: './images/minotaur.png' },
  // Add more monsters here
];

function App() {
  return (
    <div style={{ backgroundColor: steampunkColors.background, color: steampunkColors.text }}>
      <Header />
      <Container maxWidth="lg" sx={{ padding: '20px 0' }}>
        {/* Business Promotion Section */}
        <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
          <Typography variant="h4" gutterBottom sx={{ color: steampunkColors.text }}>
            Get Custom Characters for Your Story or Game!
          </Typography>
          <Typography variant="h6" paragraph sx={{ color: steampunkColors.text }}>
            Our custom characters are designed to bring your creative visions to life. Whether you're
            working on a story, game, or other project, you can get a one-of-a-kind character for just
            <strong> $5 each!</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: steampunkColors.text }}>
            Choose from a variety of monster designs or request a completely custom character that fits
            your needs. These characters come with transparent backgrounds, making them easy to integrate
            into your projects.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: steampunkColors.button,
              '&:hover': {
                backgroundColor: steampunkColors.buttonHover,
              },
            }}
            href="#form-section"
          >
            Order Your Custom Character
          </Button>
        </Box>

        {/* Monster List */}
        <MonsterList monsters={monsters} />

        {/* Google Form Section (Embedded via iframe) */}
        <Box id="form-section" sx={{ marginTop: '50px', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ color: steampunkColors.text }}>
            Contact Us for Custom Characters
          </Typography>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdQz6POjSxKXkCY-tfdogJYJjmPHLXU4M0oGsGJ5lw8xlKC3w/viewform?embedded=true"  // Replace with your Google Form URL
            width="100%"
            height="700px"
            frameBorder="0"
            style={{ border: 'none', marginTop: '20px' }}
            title="Custom Character Request Form"
          ></iframe>
        </Box>
      </Container>
    </div>
  );
}

export default App;
