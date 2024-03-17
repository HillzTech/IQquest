import { useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';
import AsyncStorage from '@react-native-async-storage/async-storage';

const adUnitId = 'ca-app-pub-1458204118033702/3922600342';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['food', 'cooking', 'fruit'],
  requestNonPersonalizedAdsOnly: true,
});

export const useInterstitialAd = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [proUser, setProUser] = useState<boolean>(false);
  const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    // Check if the user is pro from AsyncStorage
    const checkProUser = async () => {
      try {
        const isProUser = await AsyncStorage.getItem('proUser');
        if (isProUser === 'true') {
          setProUser(true);
        }
      } catch (error) {
        console.error('Error checking pro user:', error);
      }
    };

    checkProUser();

    // Load ad if not a pro user
    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);
      interstitial.load();
    });

    // Listen for app state changes
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        // App is returning from background or being resumed
        if (!proUser) {
          interstitial.load();
        }
      }
      setAppState(nextAppState);
    };

    const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

    // Load ad initially
    interstitial.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
      appStateSubscription.remove();
    };
  }, [proUser]);

  useEffect(() => {
    // Check if the user is a pro user and if ad is loaded, then show the ad
    if (!proUser && loaded && appState === 'active') {
      interstitial.show();
    }
  }, [proUser, loaded, appState]);

  return { loaded };
};
