import React, { createContext, useState, useContext } from 'react';
import Sound from 'react-native-sound';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playSound: (soundObject: Sound | null) => void; // Add playSound function
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    setSoundEnabled(prev => !prev); // Invert the previous state
  };
  const playSound = (soundObject: Sound | null) => {
    // Implementation of the playSound function
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
  {children}
</SoundContext.Provider>
  );
};
