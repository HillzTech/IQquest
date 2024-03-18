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


import Purchases, { PurchasesConfiguration}   from 'react-native-purchases';

// Initialize Purchases SDK
const purchasesConfig: PurchasesConfiguration = {
  apiKey: 'your_api_key',
};


const Stack = createStackNavigator();


const App: React.FC = () => {

 
  
  
  return (
    
    <NavigationContainer>
      
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
      
      
    </NavigationContainer>
   
    
    
  );
};

export default App;


