import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import MainMenuScreen from './Screens/MainMenuScreen';
import  GameScreen from './Screens/GameScreen';
import { CoinPurchaseScreen } from './Screens/CoinPurchaseScreen';
import DictionaryScreen from './Screens/DictionaryScreen';
import LoginScreen from './Screens/LoginScreen';
import DailyPuzzleScreen from './Screens/DailyPuzzleScreen';
import SplashScreen from './Screens/SplashScreen';
import 'expo-dev-client';
import { SoundProvider } from './SoundContext';
import registerNNPushToken from 'native-notify';
import  Purchases  from 'react-native-purchases';


const Stack = createStackNavigator();


const App: React.FC = () => {
 React.useEffect(() => {
    // Initialize Purchases SDK
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG); // Set log level to debug
    Purchases.configure({ apiKey: 'YOUR_REVENUECAT_API_KEY' });
  }, []);
  
 
  return (
    
    <NavigationContainer>
      <SoundProvider>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false, gestureEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        }), }}>
          
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false }}/>
        <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{headerShown: false,    ...TransitionPresets.SlideFromRightIOS }}/>
        <Stack.Screen name="Game" component={GameScreen} options={{ ...TransitionPresets.SlideFromRightIOS }}/>
        <Stack.Screen name="CoinPurchase" component={CoinPurchaseScreen}  options={{...TransitionPresets.SlideFromRightIOS }}/>
        <Stack.Screen name="Dictionary" component={DictionaryScreen}   options={{  ...TransitionPresets.SlideFromRightIOS }}/>
        <Stack.Screen name="Login" component={LoginScreen}   options={{  ...TransitionPresets.SlideFromRightIOS }}/>
        <Stack.Screen name="DailyPuzzle" component={DailyPuzzleScreen}   options={{  ...TransitionPresets.SlideFromRightIOS }}/>
        
      </Stack.Navigator>
      </SoundProvider>
      
    </NavigationContainer>
   
    
    
  );
};

export default App;


