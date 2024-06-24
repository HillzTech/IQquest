import React, { useEffect, useState, useRef } from 'react';
import { BackHandler, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Platform, SafeAreaView, Dimensions } from 'react-native';
import Background from '../Components/Background';
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import BackgroundBtn from '../Components/BackgroundBtn';
import { Animated, Easing } from 'react-native';
import PartyPopperAnimation from '../Components/PartyPopperAnimation';
import levels from '../Components/Level';
import { StatusBar } from 'expo-status-bar'
import CorrectImage from '../Components/CorrectImage';
import WrongImage from '../Components/WrongImage';
import CategoryImage from '../Components/CategoryImage';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { useInterstitialAd } from '../Components/useInterstitialAd';
import { useFocusEffect } from '@react-navigation/native';
import Share from 'react-native-share';
import { useSound } from '../SoundContext';
import ProgressBar from '../Components/ProgressBar'; 
import BouncingImage from '../Components/BouncingImage';
import Video from 'react-native-video';

  const GameScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [currentLevel, setCurrentLevel] = useState(1); 
  const [score, setScore] = useState(0);
  const [currentGuess, setCurrentGuess] = useState<string[]>(['', '', '', '']);
  const [letterBox, setLetterBox] = useState<string[]>([]);
  const [showImage, setShowImage] = useState(false);
const [showWrongImage, setShowWrongImage] = useState(false);
const [showCategoryImage, setShowCategoryImage] = useState(false);
 const [progress, setProgress] = useState(0);
const fillAnimation = useRef(new Animated.Value(0)).current;
const [coinVisible, setCoinVisible] = useState(false);
const [iqVisible, setIqVisible] = useState(false);
const [extraVisible, setExtraVisible] = useState(false);
const [correctSound, setCorrectSound] = useState<Sound | null>(null);
const [buttonSound, setButtonSound] = useState<Sound | null>(null);
const [helpSound, setHelpSound] = useState<Sound | null>(null);
const [removeSound, setRemoveSound] = useState<Sound | null>(null);
const [levelSound, setLevelSound] = useState<Sound | null>(null);
const [incorrectSound, setIncorrectSound] = useState<Sound | null>(null);
const [iqSound, setIqSound] = useState<Sound | null>(null);
const {width, height} = Dimensions.get('window');

  const [coinAnimation] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const [iqAnimation] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const [extraAnimation] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const [pendingScore, setPendingScore] = useState<number | null>(null);
  const [showPartyPopper, setShowPartyPopper] = useState(false); 
  const translateX = useRef(new Animated.Value(500)).current;
  const { handleManualRefresh } = useInterstitialAd();
  const [screenshotUri, setScreenshotUri] = useState<string>('');
  const { soundEnabled } = useSound();
  // Reference for capturing screenshot
  const viewShotRef = useRef<View>(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [showTutorial, setShowTutorial] = useState(false);
  const wobbleAnimation = useRef(new Animated.Value(0)).current;
  const [showVideo, setShowVideo] = useState(true);



  useEffect(() => {
    checkTutorialStatus();
    checkVideoStatus();
  }, []);

  useEffect(() => {
    if (showTutorial) {
      startWobbleAnimation();
    }
  }, [showTutorial]);

  const startWobbleAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(wobbleAnimation, {
          toValue: 1,
          duration: 70, // Decreased duration for faster animation
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(wobbleAnimation, {
          toValue: -1,
          duration: 70, // Decreased duration for faster animation
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(wobbleAnimation, {
          toValue: 0,
          duration: 70, // Decreased duration for faster animation
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        
        
      ]),
      {
        iterations: 13,
      }
    ).start();
  };

  const wobbleInterpolate = wobbleAnimation.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-3deg', '3deg'],
  });

  const wobbleStyle = {
    transform: [{ rotate: wobbleInterpolate }],
  };



  const checkTutorialStatus = async () => {
    try {
      const tutorialShown = await AsyncStorage.getItem('tutorialShown');
      if (!tutorialShown) {
        setTimeout(() => {
          setShowTutorial(true);
        }, 16000); // 16 seconds delay
      }
    } catch (error) {
      console.error('Error checking tutorial status:', error);
    }
  };

  const checkVideoStatus = async () => {
    try {
      const videoShown = await AsyncStorage.getItem('videoShown');
      if (!videoShown) {
        
        setShowVideo(true); 
      } else {
        setShowVideo(false);
      }
    } catch (error) {
      console.error('Error checking tutorial status:', error);
    }
  };

  const hideTutorial = async () => {
    try {
      await AsyncStorage.setItem('tutorialShown', 'true');
      setShowTutorial(false);
    } catch (error) {
      console.error('Error setting tutorial status:', error);
    }
  };

  


  const onVideoEnd = async () => {
    try {
      await AsyncStorage.setItem('videoShown', 'true');
      setShowVideo(false);
    } catch (error) {
      console.error('Error setting video status:', error);
    }
  };
 
  


  useEffect(() => {
    if (screenshotUri !== '') {
      // Call the function to share the screenshot
      shareScreenshot();
    }
  }, [screenshotUri]);

  // Function to capture screenshot
  const takeScreenshot = async () => {
    try {
      // Capture the current screen
      const uri = await captureRef(viewShotRef, { // using viewShotRef here
        format: 'png',
        quality: 1,
      });
      setScreenshotUri(uri);
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };

  // Function to share the screenshot
  const shareScreenshot = async () => {
    try {
      // Save the image to the media library
      const asset = await MediaLibrary.createAssetAsync(screenshotUri);
      if (asset) {
        // Define the message with the link
        const link = 'https://play.google.com/store/apps/details?id=com.harrison.ugwu.IQquest'; // Your game link
        const message = `What do you think the word is? ${link}`;
  
        // Share the screenshot with the message as caption using react-native-share
        await Share.open({
          title: 'Share this awesome screenshot',
          message: message,
          url: asset.uri,
          type: 'image/png',
        });
      } else {
        console.error('Failed to create asset for sharing.');
      }
    } catch (error) {
      console.error('Error sharing screenshot:', error);
    }
  };
  
 // Request permissions if not granted
useEffect(() => {
  if (permissionResponse && permissionResponse.status !== 'granted') {
    requestPermission();
  }
}, [permissionResponse]); // Include permissionResponse in the dependency array


  // useEffect to handle the refresh when the screen is mounted
     useEffect(() => {
    handleManualRefresh(); // Refresh the interstitial ad when the screen mounts
  }, []);

  // useFocusEffect to handle the refresh when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      handleManualRefresh(); // Refresh the interstitial ad when the screen is focused
      return () => {
        // Cleanup function if needed
      };
    }, [])
  );


  
  
  
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 700, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  }, [currentLevel]);



  
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Navigate to MainMenuScreen and pass score and current level
      navigation.push('MainMenu', { score: score });

      return true; // Prevent default behavior (closing the app)
    });

    return () => {
      backHandler.remove(); // Remove the event listener when component unmounts
    };
  }, [navigation, score]);
  
   
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

        const helpSoundObject = new Sound(require('../assets/sounds/sharpButton.mp3'), (error) => {
          if (error) {
            console.error('Failed to load help sound', error);
          } else {
            setHelpSound(helpSoundObject);
          }
        });

        const correctSoundObject = new Sound(require('../assets/sounds/correct.mp3'), (error) => {
          if (error) {
            console.error('Failed to load correct sound', error);
          } else {
            setCorrectSound(correctSoundObject);
          }
        });

        const incorrectSoundObject = new Sound(require('../assets/sounds/incorrect.mp3'), (error) => {
          if (error) {
            console.error('Failed to load incorrect sound', error);
          } else {
            setIncorrectSound(incorrectSoundObject);
          }
        });

        const iqSoundObject = new Sound(require('../assets/sounds/iq.mp3'), (error) => {
          if (error) {
            console.error('Failed to load iq sound', error);
          } else {
            setIqSound(iqSoundObject);
          }
        });
      

      const levelSoundObject = new Sound(require('../assets/sounds/levelpassed.mp3'), (error) => {
        if (error) {
          console.error('Failed to load levelsound sound', error);
        } else {
          setLevelSound(levelSoundObject);
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
      helpSound && helpSound.release();
      correctSound && correctSound.release();
      incorrectSound && incorrectSound.release();
      iqSound && iqSound.release();
      levelSound && levelSound.release();
    };
  }, []);






  useEffect(() => {
    // Update the score after a delay
    if (pendingScore !== null) {
      setTimeout(() => {
        setScore(pendingScore);
        setPendingScore(null);
      }, 1000); // Delay updating the score for 1 second
    }
  }, [pendingScore]);
  
  const moveCoin = () => {
    Animated.timing(coinAnimation, {
      toValue: { x: 0, y: -740 }, // Adjust the value to move the coin to the score area
      duration: 1300, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      setCoinVisible(false); // Hide the coin after animation
      coinAnimation.setValue({ x: 0, y: 0 }); // Reset animation valuez
    });
  };

  const moveIq = () => {
    Animated.timing(iqAnimation, {
      toValue: { x: 0, y: -900 }, // Adjust the value to move the coin to the score area
      duration: 1300, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      setIqVisible(false); // Hide the coin after animation
      iqAnimation.setValue({ x: 0, y: 0 }); // Reset animation value
    });
  };

 


  useEffect(() => {
    loadGameProgress(); // Load game progress when component mounts
  
  }, []);
    useEffect(() => {
    // Save game progress whenever score or current level changes
    saveGameProgress();
  }, [score]);

  

  const loadGameProgress = async () => {
    try {
      
      const savedScore = await AsyncStorage.getItem('score');
      const savedProgress = await AsyncStorage.getItem('progress');
      


      if (savedScore !== null) {
      
        setScore(parseInt(savedScore));
      }
      if (savedProgress !== null) {
        setProgress(JSON.parse(savedProgress));
      }
      
    } catch (error) {
      console.error('Error loading game progress:', error);
    }
  };

  const saveGameProgress = async () => {
    try {
      
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
    setCurrentGuess(Array(levels[currentLevel].word.length).fill(''));
    // Initialize letter box with 10 random letters and letters from the current word
    const wordLetters = levels[currentLevel].word.split('');
    const remainingLetters = Array.from({ length: 10 - wordLetters.length }, () => {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    });
    const shuffledLetters = shuffle(wordLetters.concat(remainingLetters));
    setLetterBox(shuffledLetters);
  }, [currentLevel]);

  const handleGuessInputPress = async (index: number) => {
    const letterToMove = currentGuess[index];
    if (letterToMove !== '') {
      // Remove the letter from the guess box
      const updatedGuess = [...currentGuess];
      updatedGuess[index] = ''; // Clear the guess box
      setCurrentGuess(updatedGuess);
      playSound(removeSound);
  
      // Add the letter back to the letter box at the original position
      const updatedLetterBox = [...letterBox];
      const originalIndex = letterBox.indexOf('');
      if (originalIndex !== -1) {
        updatedLetterBox[originalIndex] = letterToMove;
      }
      setLetterBox(updatedLetterBox);
    }
  };
  
 

const handleNav = () => {
  navigation.push('CoinPurchase', { score, currentLevel });
  playSound(helpSound)
 }

 const handleDrawer = () => {
  navigation.push('Drawer', { score, currentLevel });
  
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
    
    // Create a copy of letterBox and remove the letter at the specified index
    const updatedLetterBox = [...letterBox];
    updatedLetterBox[index] = '';  // or use null or any placeholder that represents an empty slot
    setLetterBox(updatedLetterBox);
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
    const currentWord = levels[currentLevel].word;
    if (currentGuess.join('').toUpperCase() === currentWord) {
      setShowPartyPopper(true);
      playSound(correctSound);
      setCoinVisible(true); // Show the coin
      setIqVisible(true); // Show the coin
      setShowImage(true); 
      setTimeout(() => {
        setShowImage(false);
      }, 3900);
      setTimeout(() => {
        moveCoin(); // Move the coin to the score area
        setPendingScore(score + 5); // Increment score after animation
      }, 500);
      setTimeout(() => {
         // Move the iq to the iq area
        moveIq();
        playSound(iqSound);
        
      }, 1500);
      const newProgress = progress + 0.25;
    setProgress(newProgress); 
    setTimeout(() => {
      
      increaseDifficulty();
   }, 3900);
    
      // Move to the next level
      setTimeout(() => {
      
    
        increaseLevel();
        AsyncStorage.setItem('progress', JSON.stringify(newProgress))
        .then(() => console.log('Progress saved successfully'))
        .catch(error => console.error('Error saving progress:', error));
        Animated.timing(fillAnimation, {
          toValue: newProgress,
          duration: 500, // Adjust duration as needed
          easing: Easing.linear,
          useNativeDriver: false
        }).start();
      }, 4000);
    } else {
      playSound(incorrectSound);
      setShowWrongImage(true);
      setTimeout(() => {
        setShowWrongImage(false); // Hide the wrong image after 2 seconds
      }, 1000);
      
    }
  };
  
  
  

  const handleNavigation = () => {
   navigation.push('MainMenu', { score, currentLevel }); 
 };

 const openDrawer = async () => {
  playSound(helpSound);
  
  if (score >= 50) {
    setScore(score - 50);
     
    // Get the word for the current level
    const currentWord = levels[currentLevel].word;

    // Find an empty guess box
    const emptyIndex = currentGuess.findIndex((letter) => letter === '');

    // Find a random letter from the word
    const nextIndex = currentGuess.findIndex((letter) => letter === '');
    const randomLetter = currentWord[nextIndex];


    if (emptyIndex !== -1 && randomLetter) {
      // Update the guess box with the random letter
      const updatedGuess = [...currentGuess];
      updatedGuess[emptyIndex] = randomLetter.toUpperCase();
      setCurrentGuess(updatedGuess);
      
      // Create a copy of letterBox and remove the random letter
      const updatedLetterBox = [...letterBox];
      updatedLetterBox[nextIndex] = ''; // or use null or any placeholder that represents an empty slot
      setLetterBox(updatedLetterBox);
    }
  } else {
    navigation.push('CoinPurchase');
  }
};



 const [difficulty, setDifficulty] = useState(1);

  useEffect(() => {
    // Load difficulty from AsyncStorage when component mounts
    AsyncStorage.getItem('difficulty')
      .then((storedDifficulty) => {
        if (storedDifficulty) {
          setDifficulty(parseInt(storedDifficulty));
        } else {
          setDifficulty(1); // Default starting difficulty
        }
      })
      .catch((error) => {
        console.error('Error loading difficulty from AsyncStorage:', error);
      });
  }, []);

  const increaseDifficulty = () => {
    setDifficulty((prevDifficulty) => {
      const newDifficulty = prevDifficulty + 1;
      if (newDifficulty >= 11) {
         // Set showWrongImage to true if newDifficulty is 11 or greater
        setTimeout(() => {
          setShowCategoryImage(true);
          playSound(levelSound);
        }, 500);
        setTimeout(() => {
          setShowCategoryImage(false); // Reset showWrongImage after 4 seconds
        }, 5000);
        return 1; // Reset difficulty after it reaches 11
      } else {
        return newDifficulty;
      }
    });
  };

  useEffect(() => {
    // Store the current difficulty in AsyncStorage whenever it changes
    AsyncStorage.setItem('difficulty', difficulty.toString())
      .catch((error) => {
        console.error('Error saving difficulty to AsyncStorage:', error);
      });
  }, [difficulty]);

  
  useEffect(() => {
    // Load currentLevel from AsyncStorage when component mounts
    AsyncStorage.getItem('currentLevel')
      .then((storedCurrentLevel) => {
        if (storedCurrentLevel) {
          setCurrentLevel(parseInt(storedCurrentLevel));
        } else {
          setCurrentLevel(1); // Default starting difficulty
        }
      })
      .catch((error) => {
        console.error('Error loading level from AsyncStorage:', error);
      });
  }, []);

  const increaseLevel = () => {
    setCurrentLevel((prevCurrentLevel) => {
      const newCurrentLevel = prevCurrentLevel + 1;
      return newCurrentLevel; 
    });
  };
  useEffect(() => {
    // Store the current difficulty in AsyncStorage whenever it changes
    AsyncStorage.setItem('currentLevel', currentLevel.toString())
      .catch((error) => {
        console.error('Error saving currentLevel to AsyncStorage:', error);
      });
  }, [currentLevel]);


  


return(

<Background>
<SafeAreaView style={styles.safe}>
<StatusBar />


   <><View style={styles.header}>
              <View>
                <View style={styles.back}>
                  <TouchableOpacity onPress={handleNavigation}>
                    <ImageBackground
                      source={require('../assets/Images/backIcon.png')}
                      style={styles.backImg} />

                  </TouchableOpacity>

                </View>


                <View style={styles.brain}>
                  <Image source={require('../assets/Images/brain.png')} style={styles.brainImg} />

                </View>
                <View style={styles.animatedcontainer}>
                  <Animated.View
                    style={{
                      height: 6,
                      width: fillAnimation.interpolate({
                        inputRange: [0, 100],
                        outputRange: ['0%', '100%']
                      }),
                      backgroundColor: 'green',
                    }} />
                  <Text style={styles.iq}>IQ</Text>
                </View>

              </View>

              <View style={styles.levelcontainer}>
                <ImageBackground
                  source={require('../assets/Images/LevelImg.png')}
                  style={styles.levelimg} />

                <Text style={styles.currentlevel}>{currentLevel}</Text>

              </View>

              <View style={{ flexDirection: "row", justifyContent: 'space-around', alignContent: 'flex-start', top: height * 0.07, right: 10, borderColor: '#859410', borderWidth: 1, borderRadius: 10, marginBottom: 57, paddingHorizontal: 5, gap: 1 }}>
                <ImageBackground
                  source={require('../assets/Images/coin.png')}
                  style={{ width: 15, height: 17, top: '6%' }} />
                <TouchableOpacity onPress={handleNav}>

                  <Text style={{ fontFamily: 'Poppins-Regular', color: "white", fontSize: 14, top: '7%' }}>{score}<Ionicons name="add-circle" size={10} color="green" /></Text>


                </TouchableOpacity>






              </View>

            </View><View ref={viewShotRef} collapsable={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', top: '14%', marginBottom: 13 }}>
                  <Text style={{ color: '#fffff1', fontSize: 16, fontFamily: 'OpenSans-Bold', borderColor: 'black', borderWidth: 1, backgroundColor: 'black', paddingHorizontal: 2, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, paddingLeft: 8 }}>Category</Text>

                  <Text style={{ color: 'white', fontSize: 18, fontFamily: 'OpenSans-Bold', borderColor: 'black', borderWidth: 2, paddingHorizontal: 9, borderTopRightRadius: 8, borderBottomRightRadius: 8, backgroundColor: 'grey' }}>{levels[currentLevel].category}</Text>

                </View>

                <TouchableOpacity onPress={handleDrawer}>
                  <BouncingImage source={require("../assets/box.png")} style={{ width: 37, height: 35, left: width * 0.875, bottom: height * 0.03 }} />
                </TouchableOpacity>

                <Animated.View style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  flexWrap: 'wrap',

                  top: height * 0.236,
                  transform: [{ translateX }]
                }}>
                  {levels[currentLevel].images.map((imageSource, index) => (
                    <Image key={index} source={imageSource} style={{
                      width: '43%',
                      height: '475%',
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
                      <Text style={styles.coinText}>5</Text>
                    </ImageBackground>
                  </Animated.View>
                )}
                {showPartyPopper && (
                  <PartyPopperAnimation onAnimationComplete={() => setShowPartyPopper(false)} />
                )}

                {iqVisible && (
                  <Animated.View
                    style={[
                      styles.iqContainer,
                      {
                        transform: [{ translateY: iqAnimation.y }],
                      },
                    ]}
                  >
                    <ImageBackground source={require('../assets/Images/iq.png')} style={{ width: 15, height: 15 }}>

                    </ImageBackground>
                  </Animated.View>
                )}

                {showPartyPopper && (
                  <PartyPopperAnimation onAnimationComplete={() => setShowPartyPopper(false)} />
                )}



                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', top: height * 0.47 }}>
                  {/* Guess boxes */}
                  {currentGuess.map((letter, index) => (
                    <TouchableOpacity key={index} onPress={() => handleGuessInputPress(index)}>
                      <View style={{ padding: 6, margin: 2, paddingHorizontal: '3.5%', backgroundColor: 'black', borderRadius: 5, borderWidth: 1, borderColor: 'white' }}>
                        <Text style={{ fontSize: 21, color: 'white', textAlign: 'center', fontFamily: 'OpenSans-Bold' }}>{letter}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>



                {/* Render letter box */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', width: "90%", top: height * 0.486 }}>
                  <View style={styles.container}>
                    {letterBox.map((letter, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => handleLetterBoxPress(index)}
                        style={styles.box}
                      >
                        <Text style={{ fontSize: 30, fontFamily: 'OpenSans-ExtraBold', textAlign: 'center' }}>{letter}</Text>
                      </TouchableOpacity>
                    ))}


                  </View>


                </View>



              </View><View style={{ position: 'absolute', left: "78%", top: height * 0.815 }}>
                <View style={{ position: 'absolute' }}>
                  <TouchableOpacity onPress={openDrawer}>
                    <BackgroundBtn children={undefined}>

                    </BackgroundBtn>

                  </TouchableOpacity>
                </View>
              </View><View style={{ position: 'absolute', left: "78%", top: height * 0.900 }}>
                <View style={{ position: 'absolute' }}>
                  <TouchableOpacity onPress={takeScreenshot}>
                    <ImageBackground source={require('../assets/share.png')} style={{ width: 60, height: 59 }} />
                  </TouchableOpacity>
                </View>
              </View><View style={{ position: 'absolute', top: height * 0.181, left: width * 0.255 }}>
                <View style={{ position: 'absolute' }}>
                  <Text style={{ color: 'white', textAlign: 'center', top: '50%', fontFamily: 'Poppins-Regular', fontSize: 9, }}>Difficulty</Text>
                  <View style={{ left: '76%' }}>

                    <ProgressBar difficulty={difficulty} />
                  </View>
                </View>
              </View></>
             
      
          {showImage && <CorrectImage />}

{showWrongImage && <WrongImage />}

{showCategoryImage && <CategoryImage />}



{showVideo && (
  <Video
    source={require('../assets/sounds/tutorialvideo.mp4')}
    style={styles.video}
    resizeMode="contain"
    onEnd={onVideoEnd}
    controls={false}
  />
)}


      
      {showTutorial && (
        <TouchableOpacity style={styles.tutorialOverlay} onPress={hideTutorial}>
          <Animated.View style={[styles.tutorialContent, wobbleStyle]}>
           <Ionicons name="arrow-up" size={35} color={"white"}/>
            <Text style={styles.tutorialText}>Get coins</Text>
        
          </Animated.View>

          <Animated.View style={[styles.guess, wobbleStyle]}>
            <Text style={{color:'white', fontSize:15, fontFamily: 'Poppins-Bold' }}>Guess The Word</Text>
          </Animated.View>
         
          <Animated.View style={[styles.hint, wobbleStyle]}>
          <Text style={styles.tutorialTexts}>Get Hint</Text>
           <Ionicons name="arrow-down" size={36} color={"white"}/>
            
        
          </Animated.View>
          
        </TouchableOpacity>


      )}
      

     </SafeAreaView>
   </Background>

)



}
const styles = StyleSheet.create({
   
  header: {
    backgroundColor:'black', 
    height:'10%', 
    flexDirection: 'row', 
    justifyContent:'space-between', 
    alignContent:'space-between'
  },
  back: {
    top:'58%'
  },
  backImg: {
    width:30, 
    height: 30, 
    marginBottom:-81, 
    left:9
  },
  brain: {
    top:'59%'
  },
  brainImg: {
    width:20, 
    height:30, 
    left:45
  },
   animatedcontainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    top:'59%',
     left: 66,
     backgroundColor:'white', 
     width:28, 
     height:8, 
     borderRadius: 10
   },
   
  iq: {
    fontSize:6, 
    left:3, 
    fontWeight:'600'
  },
  levelcontainer: {
    left:14, 
    marginRight:-20, 
    top:'12%'
  },
  levelimg: {
    width: 100, 
    height: 79
  },
 currentlevel:{
  fontFamily: 'Poppins-Bold', 
  position:'relative', 
  textAlign: 'center', 
  color: '#fff', 
  fontSize: 17, 
  top:'-70%', 
  right:'3%'
 },










    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginVertical: '8%',
      width: '90%',
      marginLeft: '1%',
      marginRight:1
      
      
      
    },
    box: {
      borderWidth: 2,
      borderColor: 'black',
      margin: 1,
      borderRadius: 6,
      backgroundColor: 'white',
      minWidth: '17%',
      maxWidth: '17%',
      padding: 2,

      
      
    },
    coinContainer: {
      position: 'absolute',
      top: '200%', 
      left: '87.7%', 
      marginLeft: -11.5, 
      zIndex: 1000, 
    },
    coinText: {
      color: 'white',
      fontSize: 17,
      position: 'absolute',
      top: 0,
      left: '88%',
      fontFamily:'Poppins-Regular'
    },

    iqContainer: {
      position: 'absolute',
      top: '270%', 
      left: '21%', 
      marginLeft: '-10%', 
      zIndex: 1000, 
    },

    extraContainer: {
      position: 'absolute',
      top: '83%', 
      left: '90%', 
      marginLeft: -11.5, 
      zIndex: 1000, 
    },
    extraText: {
      color: 'white',
      fontSize: 17,
      position: 'absolute',
      top: 0,
      left: '-10%',
      fontFamily:'Poppins-Regular'
    },

    imageStyle: {
      width: '80%',
      height: '75%',
      position: 'absolute',
      top: '20%', 
      left: '6%',
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999, // Ensure the image appears above other content
    },

    wrongImageStyle: {
      width: '80%',
      height: '75%',
      position: 'absolute',
      top: '27%', 
      left: '14%',
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999, // Ensure the image appears above other content
    },

    startButton: {
      backgroundColor: '#009688',
      padding: 15,
      borderRadius: 8,
    },
    startButtonText: {
      color: '#ffffff',
      fontSize: 18,
    },
    tutorialOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tutorialContent: {
      left: "39%",
      bottom: "33%",
      alignItems: 'center',
    },
    
    tutorialText: {
      fontSize: 13,
      textAlign: 'center',
      color:'white',
      fontFamily:'Poppins-Regular'
    },

    tutorialTexts: {
      fontSize: 13,
      textAlign: 'center',
      color:'white',
      fontFamily:'Poppins-Regular',
      right:7
    },

    guess: {
    top: "24%"
    },
    hint: {
      top: "17.4%",
      left:"38%"
    },
    safe: {
       flex: 1 
    },

    video: {
      position: 'absolute',
      top: '2%',
      left: 0,
      width: '100%',
      height: '100%',
    },













  });
  
  


export default GameScreen;