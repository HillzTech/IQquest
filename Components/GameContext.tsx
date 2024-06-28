import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GameContextType {
  currentLevel: number;
  score: number;
  setCurrentLevel: (level: number) => void;
  setScore: (score: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const loadGameProgress = async () => {
      try {
        const savedLevel = await AsyncStorage.getItem('currentLevel');
        const savedScore = await AsyncStorage.getItem('score');
        
        if (savedLevel !== null) {
          setCurrentLevel(parseInt(savedLevel, 10));
        }
        if (savedScore !== null) {
          setScore(parseInt(savedScore, 10));
        }
      } catch (error) {
        console.error('Error loading game progress:', error);
      }
    };

    loadGameProgress();
  }, []);

  useEffect(() => {
    const saveGameProgress = async () => {
      try {
        await AsyncStorage.setItem('currentLevel', currentLevel.toString());
        await AsyncStorage.setItem('score', score.toString());
      } catch (error) {
        console.error('Error saving game progress:', error);
      }
    };

    saveGameProgress();
  }, [currentLevel, score]);

  return (
    <GameContext.Provider value={{ currentLevel, score, setCurrentLevel, setScore }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
