
import React, { useRef, useEffect, useState } from 'react'; // Import useState
import { Texture } from 'pixi.js';
// import { useTick } from '@pixi/react';

export function WaterOverlay() {
  // Create state to hold dimensions, initialized to current window size
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Create a reference to hold the PixiJS TilingSprite instance
  const spriteRef = useRef(null);

  // Effect to handle window resizing
  useEffect(() => {
    // Handler function to update dimensions state on resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add the resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Effect for the tiling animation (your existing logic)
  useEffect(() => {
    if (!spriteRef.current) return;

    const sprite = spriteRef.current;
    let offset = { x: 0, y: 0 };
    let animationId;

    const animate = () => {
      const speed = 0.5;

      offset.x -= speed;
      offset.y -= speed;

      sprite.tilePosition.x = offset.x;
      sprite.tilePosition.y = offset.y;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []); // This effect also runs once on mount

  return (
    // Use the pixiTilingSprite component tag
    <pixiTilingSprite
      ref={spriteRef} // Attach the ref to the component
      texture={Texture.from('overlay')} // Assumes 'overlay' is a pre-loaded resource name
      width={dimensions.width} // Use state for width
      height={dimensions.height} // Use state for height
      tilePosition={{ x: 0, y: 0 }} // Initial position
    />
  );
}