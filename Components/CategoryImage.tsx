
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect,  useRef, useState } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const CategoryImage = () => {
    const popOutAnimation = useRef(new Animated.Value(0)).current;
    const [score, setScore] = useState<number>(0);
    const [currentLevel, setCurrentLevel] = useState<number>(1);
    const {width, height} = Dimensions.get('window');
  
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
        <Text style={{color:'yellow', fontSize:RFValue(27), textAlign:'center', fontFamily:'Poppins-ExtraBold', bottom:hp('13%')}}>Category  Completed!</Text>
        <ImageBackground
          source={require('../assets/category.png')}
          style={styles.imageStyle}
        />
        
        <View style={{ flexDirection:"row",justifyContent:'center', alignContent:'center', top:hp('12%'), borderColor:'#859410', gap:hp('0.5%')}}>
   <ImageBackground
            source={require('../assets/Images/coin.png')} 
            style={{width: wp('8%'), height: hp('4%'), top:'8%'}}
               
         /> 
      
        
         <Text style={{ fontFamily: 'Poppins-Bold', color: "white", fontSize: RFValue(20), top:hp('4%')}}>{score}</Text>
         
      </View>

      <View style={{top:hp('17%')}}>
      <ImageBackground source={require('../assets/Images/LevelImg.png')} style={{width:wp('25%'), height:hp('10%')}}/> 
         <Text style={{ fontSize:RFValue(17), color:'white', fontFamily:'Poppins-Bold', textAlign:'center', bottom: hp('6.3%')}}>{currentLevel}</Text>

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
    width: 300,
    height: 198,
    position: 'absolute',
    top:'31%'
    
  },
});

export default CategoryImage;
