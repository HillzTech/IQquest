import React, { useEffect, useState, useCallback, memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, BackHandler, Button, Pressable, ActivityIndicator, Vibration , Dimensions, Switch} from 'react-native';
import Background from '../Components/Background';
import { Ionicons } from '@expo/vector-icons';
import { Animation } from '../Components/Animation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import Sound from 'react-native-sound';
import { useSound } from '../SoundContext';
import throttle from 'lodash.throttle';


const settingScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  const [score, setScore] = useState<string>('0');
  const [currentLevel, setCurrentLevel] = useState<string>('1');
  const [helpSound, setHelpSound] = useState<Sound | null>(null);
  const { soundEnabled, vibrationEnabled, toggleSound, toggleVibration, playSound, vibrate } = useSound();
  const {width, height} = Dimensions.get('window');
  

  
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Navigate to MainMenuScreen and pass score and current level
      navigation.push('MainMenu');

      return true; // Prevent default behavior (closing the app)
    });

    return () => {
      backHandler.remove(); // Remove the event listener when component unmounts
    };
  }, [navigation]);

  const handleBack = useCallback(() => {
    navigation.push('MainMenu');
  }, [navigation]);

 
  return (
    <Background>
      <StatusBar />
      <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:'row', justifyContent:'center', top:'13%', backgroundColor:'#1c2e5a'}}>
            <Text style={{textAlign:'center', color:'white', fontFamily:'Poppins-Regular', top:7, left:10}}>Settings</Text>
            <TouchableOpacity onPress={handleBack} style={{left:width * 0.34}}>
            <Ionicons name='close' color={'white'} size={32} />
            </TouchableOpacity>
        </View>
        
        
        
        <View style={styles.menu}>
          <View style={styles.settingRow}>
            
              
            <Text style={styles.settingText}>Sound</Text>
            
            
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={soundEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSound}
              value={soundEnabled}
            />
          </View>
        </View>

        <View style={styles.menu}>
          <View style={styles.settingRow}>
            
            <Text style={styles.settingText}>Vibration</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={vibrationEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleVibration}
              value={vibrationEnabled}
            />
          </View>
        </View>


        <View style={{marginTop:height * 0.72, backgroundColor:'#1c2e5a', height:120}}>
           <Text style={{textAlign:'center', color:'#1c2e9a', fontFamily:'Poppins-Bold', fontSize:17, top:20}}>Version 1.0.7</Text>
           <Text style={{textAlign:'center', color:'#1c2e9a', fontFamily:'Poppins-Bold', fontSize:17, top:20}}>HillzTech Studio</Text>
        </View>
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap:10,
    padding:20,
    marginTop:'10%'
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  toggleText: {
    marginLeft: 10,
    fontFamily:'Poppins-Regular'
  },
  levelRequirementText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding:10,
    backgroundColor:'#1c2e5a',
  },
  settingText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  menu: {
    top: 60,
     
   },
});

export default memo(settingScreen);
