import React, { useEffect, useState, useCallback,memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, BackHandler, Button, Pressable } from 'react-native';
import Background from '../Components/Background';
import { Ionicons } from '@expo/vector-icons';
import { Animation } from '../Components/Animation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import Sound from 'react-native-sound';
import { useSound } from '../SoundContext';
import throttle from 'lodash.throttle';

const MainMenuScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  const [score, setScore] = useState<string>('0');
  const [currentLevel, setCurrentLevel] = useState<string>('1');
  const [helpSound, setHelpSound] = useState<Sound | null>(null);
  const { soundEnabled } = useSound();
  const [showLevelRequirement, setShowLevelRequirement] = useState<boolean>(false);

  
  
  
  
  const playSound = useCallback((soundObject: Sound | null) => {
    if (soundObject && soundEnabled) {
      soundObject.play((success) => {
        if (!success) {
          console.error('Failed to play the sound');
        }
      });
    }
  }, [soundEnabled]);

  useEffect(() => {
    const helpSoundObject = new Sound(require('../assets/sounds/sharpButton.mp3'), (error) => {
      if (error) {
        console.error('Failed to load the sound', error);
        return;
      }
      setHelpSound(helpSoundObject);
    });

    return () => {
      helpSoundObject.release();
    };
  }, []);

  const handleDailyPuzzlePress = useCallback(throttle(() => {
    if (parseInt(currentLevel, 10) >= 20) {
      navigation.push('DailyPuzzle');
      playSound(helpSound);
    } else {
      setShowLevelRequirement(true);
      setTimeout(() => setShowLevelRequirement(false), 3000);
    }
  }, 2000), [currentLevel, navigation, playSound, helpSound]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (route.params && route.params.score && route.params.currentLevel) {
          setScore(route.params.score);
          setCurrentLevel(route.params.currentLevel);
        } else {
          const savedScore = await AsyncStorage.getItem('score');
          const savedCurrentLevel = await AsyncStorage.getItem('currentLevel');

          if (savedScore !== null) {
            setScore(savedScore);
          }

          if (savedCurrentLevel !== null) {
            setCurrentLevel(savedCurrentLevel);
          }
        }
      } catch (error) {
        console.error('Error fetching data from local storage:', error);
      }
    };

    fetchData();
  }, [route.params]);

  const handlePlay = useCallback(throttle(() => {
    navigation.push('Game');
    playSound(helpSound);
  }, 5000), [navigation, playSound, helpSound]);

  const handleNav = useCallback(() => {
    navigation.navigate('CoinPurchase', { score, currentLevel });
    playSound(helpSound);
  }, [navigation, score, currentLevel, playSound, helpSound]);

  const handleWord = useCallback(() => {
    navigation.navigate('Dictionary');
    playSound(helpSound);
  }, [navigation, playSound, helpSound]);

  const handleLogin = useCallback(() => {
    navigation.push('Login', { score, currentLevel });
    playSound(helpSound);
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
        <View style={{ flexDirection: 'row', justifyContent: "flex-end", marginVertical: 16, right: '1%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', top: '87%', borderWidth: 1, borderColor: '#859410', borderRadius: 10, paddingHorizontal: 8, gap: 1, backgroundColor: 'black', right: 3 }}>
            <ImageBackground
              source={require('../assets/Images/coin.png')}
              style={{ width: 15, height: 17, top: '8%' }}
            />
            <TouchableOpacity onPress={handleNav}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: "white", fontSize: 16, top: '4%' }}>{score}<Ionicons name="add-circle" size={13} color="green" /></Text>
            </TouchableOpacity>
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
          <Pressable onPress={handlePlay}>
            <ImageBackground
              source={require('../assets/playimge.png')}
              style={{ width: 265, height: 120, flexDirection: 'row', justifyContent: 'center', alignContent: "center" }}
            />
          </Pressable>
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
  }
});

export default memo(MainMenuScreen);
