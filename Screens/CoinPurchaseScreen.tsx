import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ImageBackground, BackHandler, Text } from 'react-native';
import { RewardedAd, RewardedAdEventType } from 'react-native-google-mobile-ads';
import Background from '../Components/Background';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  Purchases  from 'react-native-purchases';

export const CoinPurchaseScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [showAd, setShowAd] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [pendingScore, setPendingScore] = useState<number | null>(null);
  const adUnitId = 'ca-app-pub-1458204118033702/4208576771';
  const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    keywords: ['food', 'cooking', 'fruit'],
    requestNonPersonalizedAdsOnly: true,
  });


  useEffect(() => {
    // Update the score after a delay
    if (pendingScore !== null) {
      setTimeout(() => {
        setScore(pendingScore);
        setPendingScore(null);
      }, 1000); // Delay updating the score for 1 second
    }
  }, [pendingScore]);

  useEffect(() => {
    // Save game progress whenever score or current level changes
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
        AsyncStorage.setItem('score', score.toString())
      setPendingScore(score + 20);
        setShowAd(false);
      }
    });
  

const rewardEventListener = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
  console.log('user earned reward');
  setScore(prevScore => {
    const updatedScore = prevScore + 20;
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
      // Navigate to MainMenuScreen and pass score and current level
      navigation.push('Game', { score: score });

      return true; // Prevent default behavior (closing the app)
    });

    return () => {
      backHandler.remove(); // Remove the event listener when component unmounts
    };
  }, [navigation, score ]);





  const purchaseCoins = async (productIdentifier: string) => {
    try {
      const purchaseResult = await Purchases.purchaseProduct(productIdentifier);
  
      // Handle the purchased product based on the purchase result
      if (purchaseResult.error) {
        // Handle purchase error
        alert('Purchase failed: ' + purchaseResult.error.message);
      } else {
        // Purchase was successful, update coins accordingly
        const entitlements = purchaseResult.entitlements;
        if (entitlements.active.includes('1000_coins')) {
          await updateCoins(1000);
        } else if (entitlements.active.includes('5000_coins')) {
          await updateCoins(5000);
        } else if (entitlements.active.includes('10000_coins')) {
          await updateCoins(10000);
        }
  
        // Show success message to the user
        alert('Purchase successful!');
      }
    } catch (error) {
      // Handle other errors
      alert('An error occurred: ' + error.message);
    }
  };
  
  const updateCoins = async (amount: number) => {
    // Retrieve current coin balance from storage
    let coins = parseInt(await AsyncStorage.getItem('coins') || '0', 10);
    // Add purchased coins to the balance
    coins += amount;
    // Save updated coin balance to storage
    await AsyncStorage.setItem('coins', coins.toString());
  };
  const restorePurchases = async () => {
    try {
      const { purchaserInfo } = await Purchases.restoreTransactions();
      // Handle restored purchases
      const { entitlements } = purchaserInfo;
      // Update coins based on entitlements (similar to purchaseCoins function)
    } catch (error) {
      // Handle error
      alert('Failed to restore purchases: ' + error.message);
    }
  };
  
















  return (
    <Background>

      
      <View style={{top:'6.7%'}}>
      <ImageBackground source={require('../assets/Images/coin.png')} style={{width:26, height: 26, top:'50%', left:'40%'}}/>

        <Text style={{color:'white', textAlign:'center', fontSize:20, left:'3.3%', fontStyle:'italic'}}>{score}</Text>
        
      </View>




     
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', left:'13%', top:'2%' }}>
        <TouchableOpacity onPress={handleShowAd}>
          <ImageBackground source={require('../assets/Images/watchnow.png')} style={{ width: '90%', height: '90%', padding:'4%'}} />
        </TouchableOpacity>
      </View>

      <View style={{top:'-20%'}}>

      <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignContent:'center', gap:10}}>
      <TouchableOpacity onPress={() => purchaseCoins('1000_coins')} >
        <ImageBackground source={require('../assets/Images/1000.png')} style={{width:170, height:150}}/>
        
         </TouchableOpacity>
      <TouchableOpacity onPress={() => purchaseCoins('5000_coins')} > 
      <ImageBackground source={require('../assets/Images/5000.png')} style={{width:120, height: 150}}/>
      
      </TouchableOpacity>

      <TouchableOpacity onPress={() => purchaseCoins('10000_coins')} > 
      <ImageBackground source={require('../assets/Images/10000.png')} style={{width:120, height: 150}}/> 
      </TouchableOpacity>
    </View>
    </View>
    </Background>
  );
};
