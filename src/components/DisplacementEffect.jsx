// src/components/DisplacementEffect.jsx
import React, { useRef, useEffect } from 'react';
import { Texture, DisplacementFilter } from 'pixi.js';

export function DisplacementEffect() {
  const spriteRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (spriteRef.current && containerRef.current) {
      // Get the parent container (should be the stage)
      const parent = containerRef.current.parent;
      
      // Create a displacement filter
      const sprite = spriteRef.current;
      
      // Fix for v8.0.0 deprecation warnings
      sprite.texture.source.addressMode = 'repeat';
      
      const filter = new DisplacementFilter({
        sprite,
        scale: 50,
      });
      
      // Apply the filter to the parent (stage)
      parent.filters = [filter];
      
      // Clean up on unmount
      return () => {
        parent.filters = null;
      };
    }
  }, []);
  
  return (
    <pixiContainer ref={containerRef}>
      <pixiSprite
        ref={spriteRef}
        texture={Texture.from('displacement')}
        visible={false}
      />
    </pixiContainer>
  );
}