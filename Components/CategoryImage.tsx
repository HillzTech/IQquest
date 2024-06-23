
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect,  useRef, useState } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native';


const CategoryImage = () => {
    const popOutAnimation = useRef(new Animated.Value(0)).current;
    const [score, setScore] = useState<number>(0);
    const [currentLevel, setCurrentLevel] = useState<number>(1);
  
    useEffect(() => {
      Animated.timing(popOutAnimation, {
        toValue: 1,
        duration: 500, // Adjust duration as needed
        useNativeDriver: true,
      }).start();
    }, []);

    useEffect(() => {
        const loadGameProgress = async () => {
          try {
            const savedLevel = await AsyncStorage.getItem('currentLevel');
            const savedScore = await AsyncStorage.getItem('score');
      
            if (savedLevel !== null && savedScore !== null) {
              setCurrentLevel(parseInt(savedLevel));
              setScore(parseInt(savedScore));
            }
          } catch (error) {
            console.error('Error loading game progress:', error);
          }
        };
      
        loadGameProgress();
      }, []); 
  
    return (
      <Animated.View
        style={[
          styles.imageContainer,
          {
            transform: [
              {
                scale: popOutAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
          },
        ]}
      >
        <Text style={{color:'yellow', fontSize:29, textAlign:'center', fontFamily:'Poppins-ExtraBold', top:'-10%'}}>Category  Completed!</Text>
        <ImageBackground
          source={require('../assets/category.png')}
          style={styles.imageStyle}
        />
        
        <View style={{ flexDirection:"row",justifyContent:'center', alignContent:'center', top:'35%', borderColor:'#859410', gap:1}}>
   <ImageBackground
            source={require('../assets/Images/coin.png')} 
            style={{width: 30, height: 30, top:'8%'}}
               
         /> 
      
        
         <Text style={{ fontFamily: 'Poppins-Bold', color: "white", fontSize: 20, top:'7.5%'}}>{score}</Text>
         
      </View>

      <View>
      <ImageBackground source={require('../assets/Images/LevelImg.png')} style={{width:118, height:70, top:'157%'}}/> 
         <Text style={{ fontSize:18, color:'white', fontFamily:'Poppins-Bold', textAlign:'center', top:'107%'}}>{currentLevel}</Text>

      </View>

      
          




      </Animated.View>
    );
  };
  

const styles = StyleSheet.create({
    imageContainer: {
        position: 'absolute',
        backgroundColor:'#152238',
        top: '-5%',
        left: '0%',
        right: 0,
        bottom: '1%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
      },
  imageStyle: {
    width: 250,
    height: 220,
    position: 'absolute',
    top:'37%'
    
  },
});

export default CategoryImage;
