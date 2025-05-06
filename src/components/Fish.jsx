// src/components/Fish.jsx
import React, { useRef, useState } from 'react';
import { Texture } from 'pixi.js';
import { useTick } from '@pixi/react';

export function Fish({ type, initialX, initialY, initialScale }) {
  // Set up fish state
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [rotation, setRotation] = useState(0);
  
  // Fish movement properties
  const direction = useRef(Math.random() * Math.PI * 2);
  const speed = useRef(1 + Math.random() * 1);
  const turnSpeed = useRef(Math.random() - 0.8);
  
  // Use the useTick hook to update fish position on each frame
  useTick(delta => {
    // Update direction
    direction.current += turnSpeed.current * 0.01;
    
    // Calculate new position
    const newX = position.x + Math.sin(direction.current) * speed.current;
    const newY = position.y + Math.cos(direction.current) * speed.current;
    
    // Apply the fish rotation according to direction
    const newRotation = -direction.current - Math.PI / 2;
    
    // Update state
    setPosition({ x: newX, y: newY });
    setRotation(newRotation);
    
    // Handle wrapping around the screen
    const stagePadding = 100;
    const boundWidth = window.innerWidth + stagePadding * 2;
    const boundHeight = window.innerHeight + stagePadding * 2;
    
    if (newX < -stagePadding) {
      setPosition(prev => ({ ...prev, x: newX + boundWidth }));
    } else if (newX > window.innerWidth + stagePadding) {
      setPosition(prev => ({ ...prev, x: newX - boundWidth }));
    }
    
    if (newY < -stagePadding) {
      setPosition(prev => ({ ...prev, y: newY + boundHeight }));
    } else if (newY > window.innerHeight + stagePadding) {
      setPosition(prev => ({ ...prev, y: newY - boundHeight }));
    }
  });
  
  return (
    <pixiSprite
      texture={Texture.from(type)}
      x={position.x}
      y={position.y}
      rotation={rotation}
      anchor={0.5}
      scale={initialScale}
    />
  );
}