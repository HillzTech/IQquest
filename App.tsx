import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './Screens/MainMenuScreen';
import GameScreen from './Screens/GameScreen';
import { CoinPurchaseScreen} from './Screens/CoinPurchaseScreen'; // Corrected import
import DictionaryScreen from './Screens/DictionaryScreen';
import LoginScreen from './Screens/LoginScreen';
import DailyPuzzleScreen from './Screens/DailyPuzzleScreen';
import { SoundProvider } from './SoundContext';
import Purchases from 'react-native-purchases';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View, StyleSheet } from 'react-native';
import * as Updates from 'expo-updates';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.otf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.otf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.otf'),
    'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.otf'),
  });

  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setSplashVisible(false);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
    Purchases.configure({ apiKey: 'goog_xPhhFyZWbrmRZoMWRJqXyZHZzqi' });
  }, []);

  if (!fontsLoaded && !fontError) {
    return null; // Return null to avoid rendering anything until fonts are loaded
  }


    useEffect(() => {
      const checkForUpdates = async () => {
        try {
          const update = await Updates.checkForUpdateAsync();
          if (update.isAvailable) {
            await Updates.fetchUpdateAsync();
            // Apply the update silently
            await Updates.reloadAsync();
          }
        } catch (e) {
          // Handle errors appropriately
          console.error(e);
        }
      };
  
      checkForUpdates();
    }, []);

  return (
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
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              }),
            }}
          >
            <Stack.Screen name="MainMenu" component={MainMenuScreen} />
            <Stack.Screen name="Game" component={GameScreen} />
            <Stack.Screen name="CoinPurchase" component={CoinPurchaseScreen} />
            <Stack.Screen name="Dictionary" component={DictionaryScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="DailyPuzzle" component={DailyPuzzleScreen} />
          </Stack.Navigator>
        )}
      </SoundProvider>
    </NavigationContainer>
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
