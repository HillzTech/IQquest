import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

interface BackgroundProps {
  children: ReactNode;
}

const BackgroundBtn: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/Images/help.png')}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 58,
    height: 50.7,
    
  
  },
});

export default BackgroundBtn;
