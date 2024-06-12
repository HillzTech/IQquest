import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import MainMenuScreen from './Screens/MainMenuScreen';
import GameScreen from './Screens/GameScreen';
import { CoinPurchaseScreen } from './Screens/CoinPurchaseScreen';
import DictionaryScreen from './Screens/DictionaryScreen';
import LoginScreen from './Screens/LoginScreen';
import DailyPuzzleScreen from './Screens/DailyPuzzleScreen';
import { SoundProvider } from './SoundContext';
import registerNNPushToken from 'native-notify';
import Purchases from 'react-native-purchases';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

const Stack = createStackNavigator();

const App: React.FC = () => {
  // Use state to manage font loading state
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.otf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.otf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.otf'),
    'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.otf'),
  });

  // Use state to manage SplashScreen visibility
  const [splashVisible, setSplashVisible] = useState(true);

  // Hide SplashScreen when fonts are loaded or an error occurs
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
      setSplashVisible(false);
    }
  }, [fontsLoaded, fontError]);

  // Effect to initialize Purchases SDK
  useEffect(() => {
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
    Purchases.configure({ apiKey: 'goog_xPhhFyZWbrmRZoMWRJqXyZHZzqi' });
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <SoundProvider>
        {/* Render SplashScreen conditionally */}
        {splashVisible ? (
          <SplashScreenComponent />
        ) : (
          <Stack.Navigator
            initialRouteName="MainMenu"
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              }),
            }}>
            <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="Game" component={GameScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="CoinPurchase" component={CoinPurchaseScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="Dictionary" component={DictionaryScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            <Stack.Screen name="DailyPuzzle" component={DailyPuzzleScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
          </Stack.Navigator>
        )}
      </SoundProvider>
    </NavigationContainer>
  );
};

// Custom SplashScreen component
const SplashScreenComponent: React.FC = () => {
  return (
    // Customize SplashScreen as needed
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      {/* Render SplashScreen UI */}
      
    </View>
  );
};

export default App;
