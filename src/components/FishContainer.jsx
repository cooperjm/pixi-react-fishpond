// src/components/FishContainer.jsx
import React from 'react';
import { Fish } from './Fish';

export function FishContainer() {
  const fishCount = 24;
  const fishTypes = ['fish1', 'fish2', 'fish3', 'fish4', 'fish5'];
  const fishes = [];
  
  // Create fish configurations
  for (let i = 0; i < fishCount; i++) {
    const fishType = fishTypes[i % fishTypes.length];
    const initialX = Math.random() * window.innerWidth;
    const initialY = Math.random() * window.innerHeight;
    const initialScale = 0.5 + Math.random() * 0.2;
    
    fishes.push({
      id: i,
      type: fishType,
      initialX,
      initialY,
      initialScale
    });
  }
  
  return (
    <pixiContainer>
      {fishes.map(fish => (
        <Fish
          key={fish.id}
          type={fish.type}
          initialX={fish.initialX}
          initialY={fish.initialY}
          initialScale={fish.initialScale}
        />
      ))}
    </pixiContainer>
  );
}