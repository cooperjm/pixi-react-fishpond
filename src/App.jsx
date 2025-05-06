// src/App.jsx
import React from 'react';
import { Application, useExtend } from '@pixi/react';
import { Container, Sprite, Graphics, TilingSprite } from 'pixi.js';
import { FishPond } from './components/FishPond';
import { useAssets } from './hooks/useAssets';

function App() {
  // Use the hook version of extend
  useExtend({ Container, Sprite, Graphics, TilingSprite });
  
  const assetsLoaded = useAssets();

  if (!assetsLoaded) {
    return <div className="loading">Loading assets...</div>;
  }

  return (
    <div className="app">
      <Application 
        width={window.innerWidth} 
        height={window.innerHeight} 
        backgroundColor={0x1099bb}
        resizeTo={window}
      >
        <FishPond />
      </Application>
    </div>
  );
}

export default App;