import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ImageBackground, BackHandler, Text, Alert } from 'react-native';
import { RewardedAd, RewardedAdEventType } from 'react-native-google-mobile-ads';
import Background from '../Components/Background';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializePurchases, purchaseProduct, restorePurchases } from '../purchases';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      navigation.push('Game', { score: score });
      return true; // Prevent default behavior (closing the app)
    });

    return () => {
      backHandler.remove(); // Remove the event listener when component unmounts
    };
  }, [navigation, score]);

  useEffect(() => {
    initializePurchases();
  }, []);

  const handlePurchaseProduct1 = async () => {
    try {
      const result = await purchaseProduct('iqquest_score_1000');
      Alert.alert('Purchase successful', `Product: ${result.productIdentifier}`);
      AsyncStorage.setItem('score', score.toString());
      setPendingScore(score + 1000);
    } catch (e: any) {
      if (!e.userCancelled) {
        Alert.alert('Purchase failed', e.message);
      }
    }
  };

  const handlePurchaseProduct2 = async () => {
    try {
      const result = await purchaseProduct('iqquest_score_5000');
      Alert.alert('Purchase successful', `Product: ${result.productIdentifier}`);
      AsyncStorage.setItem('score', score.toString());
      setPendingScore(score + 5000);
    } catch (e: any) {
      if (!e.userCancelled) {
        Alert.alert('Purchase failed', e.message);
      }
    }
  };

  const handlePurchaseProduct3 = async () => {
    try {
      const result = await purchaseProduct('iqquest_score_10000');
      Alert.alert('Purchase successful', `Product: ${result.productIdentifier}`);
      AsyncStorage.setItem('score', score.toString());
      setPendingScore(score + 10000);
    } catch (e: any) {
      if (!e.userCancelled) {
        Alert.alert('Purchase failed', e.message);
      }
    }
  };

  const handleRestore = async () => {
    try {
      const customerInfo = await restorePurchases();
      Alert.alert('Restore successful', `Restored: ${JSON.stringify(customerInfo)}`);
    } catch (e: any) {
      Alert.alert('Restore failed', e.message);
    }
  };

  return (
    <Background>
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ImageBackground source={require('../assets/Images/newcoin.png')} style={{ width: 120, height: 120, top: '33%' }} />
      
      
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 21, fontFamily:'Poppins-Bold', bottom:'45%' }}>{score}</Text>
      </View>
      

      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', left: '13%', marginTop: '12%', marginBottom:'3%' }}>
        <TouchableOpacity onPress={handleShowAd}>
          <ImageBackground source={require('../assets/Images/watchnow.png')} style={{ width: '90%', height: '130%', padding: '4%' }} />
        </TouchableOpacity>
      </View>

      <View style={{ top: '1%' }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
          <TouchableOpacity onPress={handlePurchaseProduct1}>
            <ImageBackground source={require('../assets/Images/1000.png')} style={{ width: 176, height: 159, top:'-3%' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePurchaseProduct2}>
            <ImageBackground source={require('../assets/Images/5000.png')} style={{ width: 160, height: 200 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePurchaseProduct3}>
            <ImageBackground source={require('../assets/Images/10000.png')} style={{ width: 170, height: 200, bottom:'20%' }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center', left:"10%"}}>
      <ImageBackground source={require('../assets/Images/coinchest.png')} style={{ width: '62%', height: '104%', bottom:'10%' }} />
      </View>

      </SafeAreaView>
    </Background>
  );
};
