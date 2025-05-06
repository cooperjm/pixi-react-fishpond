import { useState, useEffect } from 'react';
import { Assets } from 'pixi.js';
// Make sure to import your riverBottom image or adjust the path
import riverBottomImg from '../assets/riverbottom_result.webp';

export function useAssets() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function loadAssets() {
      const assets = [
        { alias: 'background', src: 'https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg' },
        { alias: 'fish1', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish1.png' },
        { alias: 'fish2', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish2.png' },
        { alias: 'fish3', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish3.png' },
        { alias: 'fish4', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish4.png' },
        { alias: 'fish5', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish5.png' },
        { alias: 'overlay', src: 'https://pixijs.com/assets/tutorials/fish-pond/wave_overlay.png' },
        { alias: 'displacement', src: 'https://pixijs.com/assets/tutorials/fish-pond/displacement_map.png' },
        { alias: 'riverbottom', src: riverBottomImg }
      ];

      try {
        await Assets.load(assets);
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load assets:', error);
      }
    }

    loadAssets();
  }, []);

  return isLoaded;
}