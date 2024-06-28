import React, { createContext, useState, useContext, useEffect } from 'react';
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SoundContextType {
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  toggleSound: () => void;
  toggleVibration: () => void;
  playSound: (soundObject: Sound | null) => void;
  vibrate: () => void;
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
  const [vibrationEnabled, setVibrationEnabled] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedSoundEnabled = await AsyncStorage.getItem('soundEnabled');
        const savedVibrationEnabled = await AsyncStorage.getItem('vibrationEnabled');

        if (savedSoundEnabled !== null) {
          setSoundEnabled(savedSoundEnabled === 'true');
        }
        if (savedVibrationEnabled !== null) {
          setVibrationEnabled(savedVibrationEnabled === 'true');
        }
      } catch (error) {
        console.error('Error fetching sound and vibration settings:', error);
      }
    };

    fetchData();
  }, []);

  const toggleSound = () => {
    const newValue = !soundEnabled;
    setSoundEnabled(newValue);
    AsyncStorage.setItem('soundEnabled', newValue.toString());
  };

  const toggleVibration = () => {
    const newValue = !vibrationEnabled;
    setVibrationEnabled(newValue);
    AsyncStorage.setItem('vibrationEnabled', newValue.toString());
  };

  const playSound = (soundObject: Sound | null) => {
    // Implement playSound function as per your existing logic
  };

  const vibrate = () => {
    // Implement vibrate function as per your existing logic
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, vibrationEnabled, toggleSound, toggleVibration, playSound, vibrate }}>
      {children}
    </SoundContext.Provider>
  );
};
