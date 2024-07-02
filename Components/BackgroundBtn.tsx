import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

interface BackgroundProps {
  children: ReactNode;
}

const BackgroundBtn: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/hint.png')}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 53,
    height: 98,
    
  
  },
});

export default BackgroundBtn;
