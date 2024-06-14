import React, { useEffect, useState, useRef } from 'react';
import { BackHandler, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Background from '../Components/Background';
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { Animated, Easing } from 'react-native';
import PartyPopperAnimation from '../Components/PartyPopperAnimation';
import Puzzle from '../Components/Puzzle';
import { StatusBar } from 'expo-status-bar';
import {  useSound } from '../SoundContext';



  const DailyPuzzleScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  
    const [currentPuzzle, setCurrentPuzzle] = useState(1); 
  const [score, setScore] = useState(0);
  const [currentGuess, setCurrentGuess] = useState<string[]>(['', '', '', '']);
  const [letterBox, setLetterBox] = useState<string[]>([]);
  const [correctSound, setCorrectSound] = useState<Sound | null>(null);
  const [buttonSound, setButtonSound] = useState<Sound | null>(null);
  const [coinVisible, setCoinVisible] = useState(false);
  const [removeSound, setRemoveSound] = useState<Sound | null>(null);
  const [incorrectSound, setIncorrectSound] = useState<Sound | null>(null);
  const [fanfareSound, setFanfareSound] = useState<Sound | null>(null);
  const [comicSound, setComicSound] = useState<Sound | null>(null);
 
  const [coinAnimation] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const { soundEnabled } = useSound();
  const [pendingScore, setPendingScore] = useState<number | null>(null);
  const [showPartyPopper, setShowPartyPopper] = useState(false); // Add this state variable
  const translateX = useRef(new Animated.Value(500)).current;
  const [loading, setLoading] = useState(false);
  const LoadingImage = require('../assets/loadingImg.gif');
  const completionTimeKey = 'lastCompletionTime';
  const [remainingTime, setRemainingTime] = useState<number | null>(null);


  useEffect(() => {
    loadGameProgress();
  
  }, [])

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 600, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  }, [currentPuzzle]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Navigate to MainMenuScreen and pass score and current level
      navigation.push('MainMenu', { score: score, current: currentPuzzle });

      return true; // Prevent default behavior (closing the app)
    });

    return () => {
      backHandler.remove(); // Remove the event listener when component unmounts
    };
  }, [navigation, score, currentPuzzle]);

  
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
        const buttonSoundObject = new Sound(require('../assets/sounds/button.mp3'), (error) => {
          if (error) {
            console.error('Failed to load button sound', error);
          } else {
            setButtonSound(buttonSoundObject);
          }
        });
        
        const removeSoundObject = new Sound(require('../assets/sounds/remove.mp3'), (error) => {
          if (error) {
            console.error('Failed to load remove sound', error);
          } else {
            setRemoveSound(removeSoundObject);
          }
        });

        const fanfareSoundObject = new Sound(require('../assets/sounds/fanfair.mp3'), (error) => {
          if (error) {
            console.error('Failed to load fanfare sound', error);
          } else {
            setFanfareSound(fanfareSoundObject);
          }
        });

        const incorrectSoundObject = new Sound(require('../assets/sounds/incorrect.mp3'), (error) => {
          if (error) {
            console.error('Failed to load incorrect sound', error);
          } else {
            setIncorrectSound(incorrectSoundObject);
          }
        });

        const correctSoundObject = new Sound(require('../assets/sounds/dailycorrect.mp3'), (error) => {
          if (error) {
            console.error('Failed to load correct sound', error);
          } else {
            setCorrectSound(correctSoundObject);
          }
        });
      } catch (error) {
        console.error('Error loading sounds:', error);
      }
    };

    loadSounds();

    return () => {
      // Cleanup function to unload sounds when component unmounts
      buttonSound && buttonSound.release();
      removeSound && removeSound.release();
      correctSound && correctSound.release();
      incorrectSound && incorrectSound.release();
    };
  }, []);







  useEffect(() => {
    // Update the score after a delay
    if (pendingScore !== null) {
      setTimeout(() => {
        setScore(pendingScore);
        setPendingScore(null);
      }, 300); // Delay updating the score for 1 second
    }
  }, [pendingScore]);
  
  const moveCoin = () => {
    Animated.parallel([
      Animated.timing(coinAnimation, {
        toValue: { x: 0, y: -820 },
        duration: 1300,
        easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
        useNativeDriver: false,
      }),
      Animated.timing(coinAnimation, {
        toValue: { x: 1, y: 1 },
        duration: 1300,
        easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
        useNativeDriver: false,
      }),
      Animated.timing(coinAnimation, {
        toValue: 0, // Reset scale back to original
        duration: 0,
        delay: 1300, // Delay reset to match the end of movement animation
        useNativeDriver: false,
      }),
      Animated.timing(coinAnimation, {
        toValue: 0, // Reset opacity back to original
        duration: 0,
        delay: 1300, // Delay reset to match the end of movement animation
        useNativeDriver: false,
      }),
    ]).start(() => {
      setCoinVisible(false);
      coinAnimation.setValue({ x: 0, y: 0 });
    });
  };
  
  useEffect(() => {
    if (currentGuess.every((letter) => letter !== '')) {
      checkGuess();
    }
  }, [currentGuess]);

  
  useEffect(() => {
    if (currentPuzzle > Puzzle.length) {
      setCurrentPuzzle(1);
    }
  }, [currentPuzzle]);
 
    useEffect(() => {
    // Save game progress whenever score or current level changes
    saveGameProgress();
  }, [score, currentPuzzle]);

  const loadGameProgress = async () => {
    try {
      const savedLevel = await AsyncStorage.getItem('currentPuzzle');
      const savedScore = await AsyncStorage.getItem('score');
      
      if (savedLevel !== null && savedScore !== null) {
        setCurrentPuzzle(parseInt(savedLevel));
        setScore(parseInt(savedScore));
        const lastCompletionTime = await AsyncStorage.getItem(completionTimeKey);
        if (lastCompletionTime) {
          const timeDifference = Date.now() - parseInt(lastCompletionTime);
          if (timeDifference < 24 * 60 * 60 * 1000) {
            const remainingTime = 24 * 60 * 60 * 1000 - timeDifference;
            setRemainingTime(remainingTime); // Update remaining time state
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, remainingTime);
          }
        }
      }
      
    } catch (error) {
      console.error('Error loading game progress:', error);
    }
  };

  const saveCompletionTime = async () => {
    try {
      await AsyncStorage.setItem(completionTimeKey, Date.now().toString());
    } catch (error) {
      console.error('Error saving completion time:', error);
    }
  };

  const saveGameProgress = async () => {
    try {
      await AsyncStorage.setItem('currentPuzzle', currentPuzzle.toString());
      await AsyncStorage.setItem('score', score.toString());
    } catch (error) {
      console.error('Error saving game progress:', error);
    }
  };
 
  useEffect(() => {
    const loadCombinedScore = async () => {
      try {
        const savedScore = await AsyncStorage.getItem('combinedScore');
        if (savedScore !== null) {
          setScore(parseInt(savedScore));
        }
      } catch (error) {
        console.error('Error loading combined score:', error);
      }
    };

    loadCombinedScore();
  }, []);

  useEffect(() => {
    const saveCombinedScore = async () => {
      try {
        await AsyncStorage.setItem('combinedScore', score.toString());
      } catch (error) {
        console.error('Error saving combined score:', error);
      }
    };

    saveCombinedScore();
  }, [score]);


  useEffect(() => {
    // Initialize guess boxes based on the length of the word for the current level
    setCurrentGuess(Array(Puzzle[currentPuzzle].word.length).fill(''));
    // Initialize letter box with 10 random letters and letters from the current word
    const wordLetters = Puzzle[currentPuzzle].word.split('');
    const remainingLetters = Array.from({ length: 10 - wordLetters.length }, () => {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    });
    const shuffledLetters = shuffle(wordLetters.concat(remainingLetters));
    setLetterBox(shuffledLetters);
  }, [currentPuzzle]);

  const handleGuessInputPress = async (index: number) => {
   const letterToMove = currentGuess[index];
   if (letterToMove !== '') {
     // Remove the letter from the guess box
     const updatedGuess = [...currentGuess];
     updatedGuess[index] = ''; // Clear the guess box
     setCurrentGuess(updatedGuess);
    playSound(removeSound);
     // Add the letter back to the letter box
     setLetterBox([...letterBox, letterToMove]);
     
     
   }
 };
 

const handleNav = () => {
  navigation.navigate('CoinPurchase', { score, currentPuzzle });
 }


  const handleLetterBoxPress = async (index: number) => {
   try{
    playSound(buttonSound);
   
    // Move the letter to the first empty guess input box
    const emptyIndex = currentGuess.findIndex((letter) => letter === '');
    if (emptyIndex !== -1) {
      const updatedGuess = [...currentGuess];
      updatedGuess[emptyIndex] = letterBox[index];
      setCurrentGuess(updatedGuess);
      setLetterBox(letterBox.filter((_, idx) => idx !== index));
    } 
    } catch (error) {
      console.error('Error handling letterbox press:', error);
    }
  };

  const shuffle = (array: string[]) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  useEffect(() => {
    // Automatically check the guess when the guess box is full
    if (currentGuess.every((letter) => letter !== '')) {
      checkGuess();
    }
  }, [currentGuess]);




  const checkGuess = () => {
    const currentWord = Puzzle[currentPuzzle].word;
    if (currentGuess.join('').toUpperCase() === currentWord) {
      setShowPartyPopper(true);
     
      playSound(fanfareSound);
      setCoinVisible(true); // Show the coin
      setTimeout(() => {
        playSound(correctSound);
        
      }, 2900)
      
      setTimeout(() => {
        setLoading(true);
        setCurrentPuzzle(currentPuzzle + 1);
        playSound(comicSound);
      }, 4500)
      saveCompletionTime();
      setTimeout(() => {
        setLoading(false);
        
        
      }, 24 * 60 * 60 * 1000);
      setTimeout(() => {
        moveCoin(); // Move the coin to the score area
        AsyncStorage.setItem('score', score.toString())
        setPendingScore(score + 60); // Increment score after animation
      }, 2000);
        
    } else {
      playSound(incorrectSound);
    }
  };
  
  

  const handleMovement = () => {
   navigation.push('MainMenu', { score, currentPuzzle }); 
 };

 const formatTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours}h ${minutes}m ${seconds}s`;
};

 
    
return(

<Background>
<StatusBar />
   <View style={{backgroundColor:'black', height:'9%', flexDirection: 'row', justifyContent:'space-between', alignContent:'space-around'}}>
    
         <View>
            <TouchableOpacity onPress={handleMovement} >
            <ImageBackground 
            source={require('../assets/Images/backIcon.png')}
            style={{width:30, height: 30, marginTop: 43, marginBottom:-81, left:9}}
            
            />
               
            </TouchableOpacity>
            
         </View>
         

   <View style={{ flexDirection:"row",justifyContent:'space-around', alignContent:'flex-start', top:43, right:10, borderColor:'#859410', borderWidth:1, borderRadius:10, marginBottom:50, paddingHorizontal:7, gap:1}}>
   <ImageBackground
            source={require('../assets/Images/coins.png')} 
            style={{width: 15, height: 22}}
               
         /> 
        <TouchableOpacity onPress={handleNav} >
        
         <Text style={{ fontFamily:'Poppins-Regular', color: "white", fontSize: 16}}>{score}<Ionicons name="add-circle" size={11} color="green" /></Text>


        </TouchableOpacity>
         
         
          
        
</View>
     
   </View>

    
   <View style={{ }}>
    
      {loading ? (
        <View style={{ marginTop: '21%', backgroundColor:'#00007B', width:'97%', borderColor:"blue", borderWidth:2, borderRadius:20 , height:'79%', left:'1%'}}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
          
          <Image source={LoadingImage} style={{width:180, height: 180}}/>
          
          <ImageBackground source={require('../assets/adaptive-icon.png')} style={{width:280, height:280, bottom:30}}/>

          
          <Text style={{fontFamily:'Poppins-Bold',color:'white', padding:'7%', textAlign:'center', fontSize:16, marginTop:-70}}>You have played your puzzle for the day!</Text>
        {remainingTime !== null && (
          <View style={{backgroundColor:'#152238', borderRadius:12}}>
          <Text style={{fontFamily:'Poppins-Regular',color:'white', padding:'2%', textAlign:'center', fontSize:13, marginTop:10}}>
            Remaining time: {formatTime(remainingTime)}
          </Text>
          </View>
           )}
        </View>
         </View>
        
      
      ) : (
    

        
 <View>
   <View style={{paddingHorizontal:'5%'}}>

    <ImageBackground source={require('../assets/board.png')} style={{width:'100%', height:60, top:'23%'}} />
   
  <Text style={{fontFamily:'Poppins-BoldItalic',color:'white', textAlign:'center', fontSize:17, bottom:'20%'}}>{Puzzle[currentPuzzle].question}</Text>
 </View>
      
     
 
      <Animated.View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',
      marginBottom:'40%',
      marginTop:'50%',
      transform: [{ translateX }]
    }}>
      {Puzzle[currentPuzzle].images.map((imageSource, index) => (
        <Image key={index} source={imageSource} style={{
          width: '43%',
          height: '480%',
          margin: 5,
          borderWidth: 3,
          borderColor: 'grey',
          borderRadius: 10
        }} />
      ))}
    </Animated.View>
       
       
    
          
    {coinVisible && (
        <Animated.View
          style={[
            styles.coinContainer,
            {
              transform: [{ translateY: coinAnimation.y }],
            },
          ]}
        >
          <ImageBackground source={require('../assets/Images/coin.png')} style={{ width: 24, height: 24 }}>
            <Text style={styles.coinText}>60</Text>
          </ImageBackground>
          
        </Animated.View>
      )}
        {showPartyPopper && (
        <PartyPopperAnimation onAnimationComplete={() => setShowPartyPopper(false)} />
      )}



    <View style={{flexDirection: 'row', flexWrap:'wrap', justifyContent:'center', alignContent:'center', marginTop:'10%'}}>
      {/* Guess boxes */}
      {currentGuess.map((letter, index) => (
        <TouchableOpacity key={index} onPress={() => handleGuessInputPress(index) }>
          <View style={{ padding: 5, margin: 2,paddingHorizontal:'3.5%', backgroundColor:'black', borderRadius:5, borderWidth:1, borderColor:'white'}}>
            <Text style={{fontFamily:'Poppins-ExtraBold',fontSize:21,  color:'white', textAlign:'center'}}>{letter}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>

    

      {/* Render letter box */}
      <View style={{flexDirection:'row', justifyContent:'space-around',alignContent:'center', width:"94%"}}>
      <View style={styles.container}>
        {letterBox.map((letter, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleLetterBoxPress(index)}
            style={styles.box}
          >
            <Text style={{fontFamily:'Poppins-ExtraBold',fontSize:28,textAlign:'center'}}>{letter}</Text>
          </TouchableOpacity>
        ))}

        
      </View>
      
       
      

      
      </View>
      
      
      </View>
       )}
       </View>
      
     
   </Background>
   

)



}
const styles = StyleSheet.create({
   
  

    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginVertical: '12%',
      width: '90%',
      marginLeft: '15%',
      marginRight:1
      
      
      
    },
    box: {
      borderWidth: 2,
      borderColor: 'black',
      padding: 2,
      margin: 1,
      borderRadius: 6,
      backgroundColor: 'white',
      minWidth: '17%',
      maxWidth: '17%',
      

      
      
    },
    coinContainer: {
      position: 'absolute',
      top: '-8%', 
      left: '90%', 
      marginLeft: -11.5, 
      zIndex: 1000, 
    },
    coinText: {
      fontWeight: '600',
      color: 'white',
      fontSize: 17,
      fontStyle: 'italic',
      position: 'absolute',
      top: 0,
      left: '-10%',
      fontFamily:'Poppins-Bold',
    },

    

    imageStyle: {
      width: 80,
      height: 75,
      position: 'absolute',
      top: '35%', // Adjust this as needed
      left: '6%',
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999, // Ensure the image appears above other content
    },

    wrongImageStyle: {
      width: 80,
      height: 75,
      position: 'absolute',
      top: '35%', // Adjust this as needed
      left: '14%',
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999, // Ensure the image appears above other content
    },

    
  });
  
  


export default DailyPuzzleScreen;
