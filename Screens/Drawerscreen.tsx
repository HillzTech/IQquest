import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, ImageBackground, BackHandler, Text, Alert, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { RewardedAd, RewardedAdEventType } from 'react-native-google-mobile-ads';
import Background from '../Components/Background';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializePurchases, restorePurchases } from '../purchases';
import { SafeAreaView } from 'react-native-safe-area-context';
import Purchases, { PurchasesPackage } from 'react-native-purchases';
import StrokedText from '../Components/StrokedText';
import Sound from 'react-native-sound';
import {  useSound } from '../SoundContext'
import { Ionicons } from '@expo/vector-icons';

export const DrawerScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [showAd, setShowAd] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const adUnitId = 'ca-app-pub-3940256099942544/5224354917';
  const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    keywords: ['food', 'cooking', 'fruit'],
    requestNonPersonalizedAdsOnly: true,
  });
  const [packages, setPackages] = useState<PurchasesPackage[]>([]);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [pendingScore, setPendingScore] = useState<number | null>(null);
  const {width, height} = Dimensions.get('window');
  const [correctSound, setCorrectSound] = useState<Sound | null>(null);
  const { soundEnabled } = useSound();
  


  useEffect(() => {
    if (pendingScore !== null) {
      setTimeout(() => {
        setScore(pendingScore);
        setPendingScore(null);
      }, 1000); // Delay updating the score for 1 second
    }
  }, [pendingScore]);

  useEffect(() => {
    saveGameProgress();
  }, [score]);

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
    const adEventListener = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      if (showAd) {
        rewarded.show();
        AsyncStorage.setItem('score', score.toString());
        setPendingScore(score + 50);
        setShowAd(false);
        
        
      }
    });

    const rewardEventListener = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
      console.log('user earned reward');
    
      setScore(prevScore => {
        const updatedScore = prevScore + 50;
        AsyncStorage.setItem('score', updatedScore.toString()); // Save updated score to storage
        return updatedScore;
  
      });
      rewarded.load(); // Load a new ad after receiving the reward
    });

    rewarded.load();

    return () => {
      adEventListener();
      rewardEventListener();
    };
  }, [showAd, score]);

  const handleShowAd = () => {
    console.log('Button clicked');
    setShowAd(true);
  };


  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.push('Game', { score: score });
      return true; // Prevent default behavior (closing the app)
    });

    return () => {
      backHandler.remove(); // Remove the event listener when component unmounts
    };
  }, [navigation, score]);

  

  useEffect(() => {
    const getPackages = async () => {
      try {
        const offerings = await Purchases.getOfferings();
        if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {
          setPackages(offerings.current.availablePackages);
        }
      } catch (e) {
        console.error("Error fetching offerings: ", e);
      }
    };

    getPackages();
  }, []);

  const onSelection = async (productPackage: PurchasesPackage) => {
    setIsPurchasing(true);
    try {
      const { customerInfo } = await Purchases.purchasePackage(productPackage);
      if (customerInfo.entitlements.active["score"] !== undefined) {
        console.log("Purchase successful, coins purchased");
      }
      // If purchase is successful, update score accordingly
      switch (productPackage.identifier) {
        case '1000 coins':
          await updateScoreAndSave(1000); // Await here to ensure score is updated before proceeding
          console.log('Package 1000 purchased successfully.');
          break;
        case '5000 coins':
          await updateScoreAndSave(5000);
          console.log('Package 5000 purchased successfully.');
          break;
        case '10000 coins':
          await updateScoreAndSave(10000);
          console.log('Package 10000 purchased successfully.');
          break;
        default:
          break;
      }
    } catch (e: any) {
      if (!e.userCancelled) {
        showError(e);
      } else {
        console.log("User cancelled the purchase");
      }
    } finally {
      setIsPurchasing(false);
    }
  };
  
  const updateScoreAndSave = async (increment: number) => {
    try {
      const newScore = score + increment;
      setPendingScore(newScore); // Update pending score immediately
      playSound(correctSound);
  
      // Save the updated score to AsyncStorage
      await AsyncStorage.setItem('score', newScore.toString());
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };
  


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
      
      correctSound && correctSound.release();
      
    };
  }, []);

  const handleExit = useCallback(() => {
    navigation.push('Game', { score });
  }, [navigation, score]);
  

  return (
    
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', bottom: height * 0.04 }}>
          <ImageBackground source={require('../assets/Images/newcoin.png')} style={{ width: 80, height: 80 }} />
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Poppins-Bold', bottom: height * 0.07 }}>{score}</Text>
        </View>
      <View style={{justifyContent:'center', alignItems:'flex-end', right:height * 0.018, top:height * -0.2}}>
      <TouchableOpacity onPress={handleExit}>
        <Ionicons name='close' size={37} color={'white'}/>
         </TouchableOpacity>
        <View>
            <ImageBackground source={require('../assets/box.png')} style={{width:100, height:100, top:height * 0.08, right: width * 0.2}}/>
        </View>
      </View>

        

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top:height * -0.14 }}>
          <TouchableOpacity onPress={handleShowAd}>
            <ImageBackground source={require('../assets/watchad.png')} style={{ width: 205, height: 90}} />
          </TouchableOpacity>
        </View>

       

        <View style={{top: height * -0.245, flex: 1, padding: 42,}}>
          {isPurchasing && <ActivityIndicator size="large" color="#0000ff" />}
          {!isPurchasing &&
            packages.map((pkg) => (
              <TouchableOpacity
                key={pkg.identifier}
                style={styles.package}
                onPress={() => onSelection(pkg)}
              >
                <ImageBackground source={require('../assets/1000coins.png')} style={{ width: 50, height: 35, left:width * 0.20}} />
                
                <View style={{top:'-20%'}}>
                <StrokedText text={pkg.product.description} strokeColor="black" strokeWidth={8} fontSize={22} />
                </View>
                
                <View style={{marginLeft:'71%', borderRadius:20, top:'-38%'}}>
                <Text style={{textAlign:'right', color:'white', paddingHorizontal:4, right:1, fontFamily:'OpenSans-Bold', fontSize:12}}>¤{pkg.product.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
           
        

      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
 
  package: {
    height:80,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#001260',
    borderRadius: 23,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    borderColor:'#FFD991',
    borderRightColor:'black',
    borderWidth:1
  },
});
function showError(e: any) {
  throw new Error('Function not implemented.');
}

