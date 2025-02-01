import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import MonsterCard from './MonsterCard';

function MonsterList({ monsters }) {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Custom Monsters for Stories & Games
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {monsters.map((monster) => (
          <Grid item key={monster.id} xs={12} sm={6} md={4}>
            <MonsterCard monster={monster} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MonsterList;
