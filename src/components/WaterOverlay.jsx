
// import React, { useRef } from 'react';
// import { Texture } from 'pixi.js';
// import { useTick } from '@pixi/react';

// export function WaterOverlay() {
//   // Create a reference for tracking position
//   const tilePositionRef = useRef({ x: 0, y: 0 });
  
//   // Use the useTick hook for animation
//   useTick((delta) => {
//     // Update the tile position reference
//     tilePositionRef.current.x -= delta;
//     tilePositionRef.current.y -= delta;
//   });
  
//   return (
//     <pixiTilingSprite
//       texture={Texture.from('overlay')}
//       width={window.innerWidth}
//       height={window.innerHeight}
//       tilePosition={tilePositionRef.current}
//     />
//   );
// }


// working version 1
// import React, { useRef, useEffect } from 'react';
// import { Texture } from 'pixi.js';

// export function WaterOverlay() {
//   const spriteRef = useRef(null);
  
//   useEffect(() => {
//     if (!spriteRef.current) return;
    
//     const sprite = spriteRef.current;
//     let offset = { x: 0, y: 0 };
//     let animationId;
    
//     // Animation function
//     const animate = () => {
//       // Update the offset
//       offset.x -= 1;
//       offset.y -= 1;
      
//       // Apply directly to the sprite
//       sprite.tilePosition.x = offset.x;
//       sprite.tilePosition.y = offset.y;
      
//       // Continue the animation loop
//       animationId = requestAnimationFrame(animate);
//     };
    
//     // Start the animation
//     animationId = requestAnimationFrame(animate);
    
//     // Clean up on unmount
//     return () => {
//       cancelAnimationFrame(animationId);
//     };
//   }, []);
  
//   return (
//     <pixiTilingSprite
//       ref={spriteRef}
//       texture={Texture.from('overlay')}
//       width={window.innerWidth}
//       height={window.innerHeight}
//       tilePosition={{ x: 0, y: 0 }}
//     />
//   );
// }


// src/components/WaterOverlay.jsx
import React, { useRef, useEffect } from 'react';
import { Texture } from 'pixi.js';

export function WaterOverlay() {
  const spriteRef = useRef(null);
  
  useEffect(() => {
    if (!spriteRef.current) return;
    
    const sprite = spriteRef.current;
    let offset = { x: 0, y: 0 };
    let animationId;
    
    // Animation function with speed control
    const animate = () => {
      // Slow down the animation by using a smaller increment
      // Adjust this value to match the original speed
      const speed = 0.25; // Try different values to match original speed
      
      // Update the offset
      offset.x -= speed;
      offset.y -= speed;
      
      // Apply directly to the sprite
      sprite.tilePosition.x = offset.x;
      sprite.tilePosition.y = offset.y;
      
      // Continue the animation loop
      animationId = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationId = requestAnimationFrame(animate);
    
    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <pixiTilingSprite
      ref={spriteRef}
      texture={Texture.from('overlay')}
      width={window.innerWidth}
      height={window.innerHeight}
      tilePosition={{ x: 0, y: 0 }}
    />
  );
}