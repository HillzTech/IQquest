
import React, { useEffect,  useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, Text } from 'react-native';


const WrongImage = () => {
    const popOutAnimation = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.timing(popOutAnimation, {
        toValue: 1,
        duration: 500, // Adjust duration as needed
        useNativeDriver: true,
      }).start();
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
        <ImageBackground
          source={require('../assets/wrongImg.png')}
          style={styles.imageStyle}
        />
        <Text style={{color:'white', fontSize:27, textAlign:'center', fontFamily:'Poppins-Bold', top:"15%"}}>Try Again!</Text>
      </Animated.View>
    );
  };
  

const styles = StyleSheet.create({
    imageContainer: {
        position: 'absolute',
        top: '-2%',
        left: '4%',
        right: 0,
        bottom: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
      },
  imageStyle: {
    width: 190,
    height: 230,
    position: 'absolute',
    
  },
});

export default WrongImage;
