import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import MainMenuScreen from './Screens/MainMenuScreen';
import GameScreen from './Screens/GameScreen';
import { CoinPurchaseScreen } from './Screens/CoinPurchaseScreen'; // Corrected import
import DictionaryScreen from './Screens/DictionaryScreen';
import LoginScreen from './Screens/LoginScreen';
import DailyPuzzleScreen from './Screens/DailyPuzzleScreen';
import { SoundProvider } from './SoundContext';
import Purchases, { LOG_LEVEL } from 'react-native-purchases';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { initializePurchases } from './purchases';
import { DrawerScreen } from './Screens/Drawerscreen';
import SettingScreen from './Screens/settingScreen'; // Corrected import
import { useInterstitialAd } from './Components/useInterstitialAd'; 
import { GameProvider } from './Components/GameContext';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.otf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.otf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.otf'),
    'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.otf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
  });

  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    setSplashVisible(false);
    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Purchases.setLogLevel(LOG_LEVEL.VERBOSE);
    Purchases.configure({ apiKey: 'goog_xPhhFyZWbrmRZoMWRJqXyZHZzqi' });
  }, []);

  useEffect(() => {
    initializePurchases();
  }, []);

  return (
    <GameProvider>
      <NavigationContainer>
        <SoundProvider>
          {splashVisible ? (
            <SplashScreenComponent />
          ) : (
            <Stack.Navigator
              initialRouteName="MainMenu"
              screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardStyle: { backgroundColor: '#152238' },
                animationEnabled: true, // Enable animation
                ...TransitionPresets.ModalSlideFromBottomIOS, // Slide-up transition
              }}
            >
              <Stack.Screen name="MainMenu" component={MainMenuScreen} />
              <Stack.Screen name="Game" component={GameScreen} />
              <Stack.Screen name="CoinPurchase" component={CoinPurchaseScreen} />
              <Stack.Screen name="Dictionary" component={DictionaryScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="DailyPuzzle" component={DailyPuzzleScreen} />
              <Stack.Screen name="Settings" component={SettingScreen} />
              <Stack.Screen
                name="Drawer"
                component={DrawerScreen}
                options={{
                  cardStyle: {
                    backgroundColor: 'black',
                    width: '80%',
                    alignSelf: 'flex-end',
                  },
                  gestureDirection: 'horizontal',
                  cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                      transform: [
                        {
                          translateX: Animated.multiply(
                            progress.interpolate({
                              inputRange: [0, 1],
                              outputRange: [1000, 0],
                              extrapolate: 'clamp',
                            }),
                            0.8
                          ),
                        },
                      ],
                    },
                    overlayStyle: {
                      opacity: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 0.5],
                        extrapolate: 'clamp',
                      }),
                      backgroundColor: 'rgba(0, 290, 249, 80)', // Dark blue with 50% opacity
                    },
                  }),
                }}
              />
            </Stack.Navigator>
          )}
        </SoundProvider>
      </NavigationContainer>
    </GameProvider>
  );
};

const SplashScreenComponent: React.FC = () => {
  return (
    <View style={styles.splashContainer}>
      {/* Render SplashScreen UI */}
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#152238',
  },
});

export default App;
