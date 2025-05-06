// src/components/Background.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Texture } from 'pixi.js';

export function Background() {
  const spriteRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  // Listen for window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate positioning and scaling
  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  
  let scaleX, scaleY;
  if (dimensions.width > dimensions.height) {
    const width = dimensions.width * 1.2;
    scaleX = width / 1024; // Adjust based on your texture's native size
    scaleY = scaleX;
  } else {
    const height = dimensions.height * 1.2;
    scaleY = height / 768; // Adjust based on your texture's native size
    scaleX = scaleY;
  }
  
  return (
    <pixiSprite 
      ref={spriteRef}
      texture={Texture.from('riverbottom')}
      x={centerX}
      y={centerY}
      anchor={0.5}
      scale={{ x: scaleX, y: scaleY }}
      tint={0x888888}
    />
  );
}