// src/components/FishPond.jsx
import React from 'react';
import { useApplication } from '@pixi/react';
import { Background } from './Background';
import { FishContainer } from './FishContainer';
import { WaterOverlay } from './WaterOverlay';
import { DisplacementEffect } from './DisplacementEffect';

export function FishPond() {
  const { app } = useApplication();
  
  // Pass the app to children that need it
  return (
    <>
      <Background app={app} />
      <FishContainer />
      <WaterOverlay />
      <DisplacementEffect />
      {/* Other components will be added here */}
    </>
  );
}