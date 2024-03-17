import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, BackHandler } from 'react-native';
import Background from '../Components/Background';
import { Ionicons } from '@expo/vector-icons';
import { Animation } from '../Components/Animation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import StrokedText from '../Components/StrokedText';


const MainMenuScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  const [score, setScore] = useState<string>('0');
  const [currentLevel, setCurrentLevel] = useState<string>('1');
 
 
  const handleDailyPuzzlePress = () => {
      navigation.push('DailyPuzzle')
    
  };

  
  
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if route params exist, use them if available
        if (route.params && route.params.score && route.params.currentLevel) {
          setScore(route.params.score);
          setCurrentLevel(route.params.currentLevel);
        } else {
          // Otherwise, fetch from local storage
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

  const handlePlay = () => {
    navigation.push('Game' );
    
  };


  
  const handleNav = () => {
    navigation.navigate('CoinPurchase', { score, currentLevel });
   }
   const handleWord = () => {
    navigation.navigate('Dictionary');
   }
   const handleLogin = () => {
    navigation.push('Login', { score, currentLevel });
   }
  
   useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true; 
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove();
   }, []);
  
  
    
  
 
  return (
    <Background>
      <StatusBar />
    <SafeAreaView>
      <ScrollView style={{paddingHorizontal:7}}>
       <View style={{flexDirection: 'row', justifyContent:"flex-end", marginVertical:14,right:'1%'}}>
      

       <View style={{flexDirection:'row',justifyContent:'space-around', alignItems:'flex-start', top:22, borderWidth:1, borderColor:'#859410', borderRadius:10, paddingHorizontal:2, gap:1, backgroundColor:'black' }}>
       <ImageBackground
          source={require('../assets/Images/coins.png')} 
          style={{width: 22, height: 20}}
          
        />
       <TouchableOpacity onPress={handleNav} >
       
        <Text style={{ fontWeight: 'bold', color: "white", fontSize: 16, fontStyle: 'italic' }}>{score}<Ionicons name="add-circle" size={15} color="green" /></Text>
        
        
       </TouchableOpacity>
       </View>
       
       

    </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderRadius: 9, borderColor:'#B59410', borderWidth:2.5, padding: 4, marginTop:12}}>
      
      <TouchableOpacity onPress={handleLogin} activeOpacity={0.8}>
      <ImageBackground source={require('../assets/Images/cloud.png')} style={{width:60, height:60, top:5, left:'6%'}}/>  
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleWord} >
      <ImageBackground source={require('../assets/Images/glossary.png')} style={{width:45, height:60, right:'15%'}}/>  
      </TouchableOpacity>
    </View>
    <View style={{marginTop:-5}}>
     <ImageBackground
          source={require('../assets/Images/LevelImg.png')} 
          style={{width: 100, height: 79, position:'relative', top: '-35%', left: '36.5%'}}
          
        />
        <Text style={{position:'relative',top: '-88%', textAlign: 'center', color: '#fff', fontWeight: "700", fontSize: 16}}>{currentLevel}</Text>
     </View>
     
     <View style={{width:160,left:'28%', top:'3%', marginTop:'5%'}}>
      
    
      <TouchableOpacity onPress={handleDailyPuzzlePress} style={{backgroundColor:'green', padding:15, borderRadius:10, borderBottomWidth:1, borderColor:'#4CAF50'}}>
        <Text style={{textAlign:'center', color:'yellow', fontSize:23, fontWeight:'700'}}>Daily Puzzle</Text>

      </TouchableOpacity>
      
     
    </View>
 
        <Animation />
     
        <View>
        <ImageBackground 
        source={require('../assets/Images/playImg.png')}
        style={{width:250, height:190, flexDirection: 'row', justifyContent:'center', alignContent:"center", marginLeft:'14%', marginTop: "-44%"}}
        />

        <TouchableOpacity onPress={handlePlay} style={{ top: '-133%', width:100, left:'36%'}}>
        <StrokedText text="Play" strokeColor="black" strokeWidth={2} fontSize={33} />
      </TouchableOpacity>
       </View>
         
    
      </ScrollView>
      

    </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: '#4CAF50',
    borderBottomWidth: 1

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    


  }
})

export default MainMenuScreen;
