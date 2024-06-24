import React, { useEffect,  useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, Text } from 'react-native';


const CorrectImage = () => {
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
          source={require('../assets/rightImg.png')}
          style={styles.imageStyle}
        />
        <Text style={{color:'yellow', fontSize:35, textAlign:'center', fontFamily:'Poppins-Bold', top:"15%"}}>Great!</Text>
      </Animated.View>
    );
  };
  

const styles = StyleSheet.create({
    imageContainer: {
        position: 'absolute',
        top: '-4%',
        left: '4%',
        right: 0,
        bottom: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
      },
  imageStyle: {
    width: 300,
    height: 240,
    position: 'absolute',
    
  },
});

export default CorrectImage;
