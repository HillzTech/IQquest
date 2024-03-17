import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';


const SplashScreen: React.FC <{ navigation: any }> = ({ navigation }) => {
  useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('MainMenu');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SplashScreen;