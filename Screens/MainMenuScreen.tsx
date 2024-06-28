import React, { useEffect, useState, useCallback,memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, BackHandler, Button, Pressable, ActivityIndicator, Dimensions } from 'react-native';
import Background from '../Components/Background';
import { Ionicons } from '@expo/vector-icons';
import { Animation } from '../Components/Animation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import Sound from 'react-native-sound';
import { useSound } from '../SoundContext';
import throttle from 'lodash.throttle';
import { useGame } from '../Components/GameContext'; // Import useGame hook



const MainMenuScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  const { score, currentLevel, setScore, setCurrentLevel } = useGame(); 
  const [helpSound, setHelpSound] = useState<Sound | null>(null);
  const { soundEnabled } = useSound();
  const [showLevelRequirement, setShowLevelRequirement] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const {width, height} = Dimensions.get('window');
  
  
  const playSound = (soundObject: Sound | null) => {
    try {
      if (soundObject && soundEnabled) { // Check if sound is enabled
        soundObject.play();
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };
  

  useEffect(() => {
    const loadSounds = async () => {
      try {
      

        const helpSoundObject = new Sound(require('../assets/sounds/sharpButton.mp3'), (error) => {
          if (error) {
            console.error('Failed to load help sound', error);
          } else {
            setHelpSound(helpSoundObject);
          }
        });

        
       

      } catch (error) {
        console.error('Error loading sounds:', error);
      }
      };

    loadSounds();


    return () => {
      // Cleanup function to unload sounds when component unmounts
     
      helpSound && helpSound.release();
      
    };
  }, []);




  const handleDailyPuzzlePress = useCallback(throttle(() => {
    if (currentLevel >= 20) {
      navigation.push('DailyPuzzle');
    } else {
      setShowLevelRequirement(true);
      setTimeout(() => setShowLevelRequirement(false), 3000);
    }
  }, 2000), [currentLevel, navigation]);


  

  const handlePlay = useCallback(throttle(() => {
    navigation.navigate('Game');
    setIsLoading(true);
    
    setIsLoading(false);
  }, 3000), [navigation]);

 
  const handleWord = useCallback(() => {
    navigation.navigate('Dictionary');
    
  }, [navigation, playSound, helpSound]);

  const handleSetting = useCallback(() => {
    navigation.navigate('Settings');
    
  }, [navigation, playSound, helpSound]);


  const handleLogin = useCallback(() => {
    navigation.navigate('Login', { score, currentLevel });

  }, [navigation, score, currentLevel, playSound, helpSound]);

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, []);

  

  return (
    <Background>
      <StatusBar />
      <SafeAreaView>
     
        <View style={{ flexDirection: 'row', justifyContent: "flex-end", marginVertical: 16, right: width * 0.01, top:height * 0.03 }}>
          <View style={{right:width * 0.03, top:height * 0.0038  }}>
            <TouchableOpacity onPress={handleSetting} >
        <Ionicons name='settings' size={25} color={'white'} />
        </TouchableOpacity></View>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', borderWidth: 1, borderColor: '#859410', borderRadius: 10, paddingHorizontal: 8, gap: 1, backgroundColor: 'black', right: 3 , height:22, top: height * 0.008}}>
            <ImageBackground
              source={require('../assets/Images/coin.png')}
              style={{ width: 15, height: 17, top: height * 0.001 }}
            />
            <View>
              <Text style={{ fontFamily: 'Poppins-Regular', color: "white", fontSize: 16, bottom:1.5 }}>{score}</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 9, borderColor: '#B59410', borderWidth: 2.5, padding: 4, marginTop: 12 }}>
          <TouchableOpacity onPress={handleLogin} activeOpacity={0.8}>
            <ImageBackground source={require('../assets/Images/cloud.png')} style={{ width: 65, height: 60, top: 5, left: '6%' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWord}>
            <ImageBackground source={require('../assets/glossary.png')} style={{ width: 90, height: 50, right: '6%' }} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: -5 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground
              source={require('../assets/Images/LevelImg.png')}
              style={{ width: 100, height: 79, top: '-35%' }}
            />
          </View>
          <Text style={{ position: 'relative', top: '-50%', textAlign: 'center', color: '#fff', fontFamily: 'Poppins-Bold', fontSize: 16 }}>{currentLevel}</Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', marginTop: '20%', top: '14%' }}>
          {showLevelRequirement && (
            <Text style={styles.levelRequirementText}>You need to reach level 20 to access this feature.</Text>
          )}
          <Pressable onPress={handleDailyPuzzlePress}>
            <ImageBackground source={require('../assets/dailyimge.png')} style={{ width: 188, height: 70 }} />
          </Pressable>
        </View>

        <View style={{ top: '90%', marginTop: '8%' }}>
          <Animation />
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", top: '120%' }}>
        {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
          <Pressable onPress={handlePlay}>
            <ImageBackground
              source={require('../assets/playimge.png')}
              style={{ width: 265, height: 120, flexDirection: 'row', justifyContent: 'center', alignContent: "center" }}
            />
          </Pressable>
           )}
        </View>

    
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  levelRequirementText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 13,
    marginBottom: 13,
    textAlign: 'center',
    position: 'absolute',
    top: -69,
    width: 170,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 4
  },

});

export default memo(MainMenuScreen);
