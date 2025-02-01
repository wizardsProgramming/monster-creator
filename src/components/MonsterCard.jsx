import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

function MonsterCard({ monster }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={monster.imageUrl}
          alt={monster.name}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {monster.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MonsterCard;
