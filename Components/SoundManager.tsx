// SoundManager.tsx
import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

interface SoundManagerProps {
  children: React.ReactNode;
  soundEnabled: boolean;
  volume: number;
}

const SoundManager: React.FC<SoundManagerProps> = ({ children, soundEnabled, volume }) => {
  const [sounds, setSounds] = useState<{ [key: string]: Audio.Sound }>({});

  useEffect(() => {
    const loadSounds = async () => {
      const soundObjects: { [key: string]: Audio.Sound } = {};
      const soundKeys = ['correct', 'help', 'remove', 'incorrect', 'button', 'iq'];

      try {
        await Promise.all(
          soundKeys.map(async (key) => {
            const soundObject = new Audio.Sound();
            await soundObject.loadAsync(require(`../assets/sounds/${key}.mp3`));
            soundObjects[key] = soundObject;
          })
        );
        setSounds(soundObjects);
      } catch (error) {
        console.error('Error loading sounds:', error);
      }
    };

    loadSounds();

    return () => {
      Object.values(sounds).forEach((sound) => sound.unloadAsync());
    };
  }, []);

  const playSound = async (soundKey: string) => {
    if (soundEnabled && sounds[soundKey]) {
      try {
        await sounds[soundKey].setPositionAsync(0);
        await sounds[soundKey].playAsync();
      } catch (error) {
        console.error(`Error playing ${soundKey} sound:`, error);
      }
    }
  };

  return <>{React.cloneElement(children as React.ReactElement, { playSound })}</>;
};

export default SoundManager;
