import React, { useEffect, useState } from 'react';
import { BackHandler, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton, User } from "@react-native-google-signin/google-signin";
import Background from '../Components/Background';
import StrokedText from '../Components/StrokedText';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [error, setError] = useState<string | undefined>();
  const [userInfo, setUserInfo] = useState<User | false>(false);
  const [score, setScore] = useState<number>(0);
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  

  
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
  
  

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "643584292899-rdfrr3hkc7huj76l2ue3edprvdg88qbl.apps.googleusercontent.com"
    });

    // Check if user is already signed in
    const checkInitialAuthState = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const user = await GoogleSignin.getCurrentUser();
        if (user) {
          // User is already signed in, set user info
          setUserInfo(user);
          setError(undefined);
        }
      } catch (e) {
        setError(String(e)); // Convert unknown type to string
      }
    };

    checkInitialAuthState();
  }, []);

  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user: any = await GoogleSignin.signIn(); // Use 'any' type assertion

      // Check if user is signing in from another device
      if (user) {
        // Retrieve progress from Firebase if user is already signed in
        console.log("User signed in. userId:", user);
        const progressExists = await checkProgressInFirebase(user.user?.id); // Check if progress exists in Firebase
        if (!progressExists) {
          // If progress doesn't exist, save it to the cloud
          await saveProgressToFirebase(user.user?.id, score, currentLevel); // Use optional chaining
        }
        await retrieveProgressFromFirebase(user.user?.id); // Retrieve progress regardless of existence
        // Set user info and exit the function
        setUserInfo(user);
        setError(undefined);
        console.log('You have logged in successfully');
        return;
      }

      // If user is null, handle the scenario here
      setError("User not signed in. Please sign in to save progress.");
    } catch (e) {
      setError(String(e)); // Convert unknown type to string
    }
  };

  
  const checkProgressInFirebase = async (userId: string): Promise<boolean> => {
    try {
      const progressRef = firestore.collection('progress').doc(userId);
      const progressDoc = await progressRef.get();
      return progressDoc.exists;
    } catch (error) {
      console.error('Error checking progress:', error);
      return false;
    }
  };
  
  
  

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Navigate to MainMenuScreen and pass score and current level
      navigation.push('MainMenu', { score, currentLevel });
      return true; // Prevent default behavior (closing the app)
    });

    return () => {
      backHandler.remove(); // Remove the event listener when component unmounts
    };
  }, [navigation]);

  const handleNext =async () => {
    
    try {
      if (userInfo) {
        // Save progress to Firebase before navigating
        await saveProgressToFirebase(userInfo.user?.id, score, currentLevel);
        console.log('Progress saved to Firebase');
      }
      // Navigate to MainMenuScreen and pass score and current level
      navigation.push('MainMenu', { score, currentLevel });
    } catch (error) {
      console.error('Error handling next:', error);
    }
  
   };

   const firebaseConfig = {
    apiKey: "AIzaSyBZVlV5C3h6RA0cgl6FCT0tan-oW-6LX-0",
  authDomain: "fir-518d2-9dc09.firebaseapp.com",
  projectId: "fir-518d2",
  storageBucket: "fir-518d2.appspot.com",
  messagingSenderId: "218830265460",
  appId: "1:218830265460:web:0c4c6dcb380230623e4521",
  measurementId: "G-HE2NSV229C"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const firestore = firebase.firestore();


  const saveProgressToFirebase = async (userId: string, score: number, currentLevel: number) => {
    try {
      const progressRef = firestore.collection('progress').doc(userId);
      await progressRef.set({
        score,
        currentLevel
      });
      console.log('score and currentLevel saved successfully');
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };
  

  const retrieveProgressFromFirebase = async (userId: string) => {
    try {
      const progressRef = firestore.collection('progress').doc(userId);
      const progressDoc = await progressRef.get();
      if (progressDoc.exists) {
        const { score: savedScore, currentLevel: savedCurrentLevel } = progressDoc.data() as { score: number, currentLevel: number };
        setScore(savedScore);
        setCurrentLevel(savedCurrentLevel);
        // Save retrieved progress locally
        await AsyncStorage.setItem('score', String(savedScore));
        await AsyncStorage.setItem('currentLevel', String(savedCurrentLevel));
        console.log('Progress retrieved successfully');
      } else {
        console.log('No progress found for the user');
      }
    } catch (error) {
      console.error('Error retrieving progress:', error);
    }
  };



  return (
    <Background>
      <View>
        <Text style={{textAlign:'center', color:'white', fontFamily:'Poppins-Regular', fontSize:10, top:'94%'}}>{error}</Text>
        {userInfo && (
          <View style={{top:'34%', backgroundColor:'#00007B', width:'95%', left:'2.5%', borderColor:"blue", borderWidth:2, borderRadius:20 }}>
          <ImageBackground
          source={require('../assets/comeback.png') } style={{width:200, height:200, left:'20%', bottom:'20%'}}
        
        />
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 23, marginTop:"-25%" , fontFamily:'Poppins-ExtraBold'}}>Done, Progress saved!</Text>
          <Text style={{ color: 'yellow', textAlign: 'center', fontSize: 17, fontFamily:'Poppins-BoldItalic'}}>Synchronized via Google</Text>
          <>
          <View style={{ flexDirection:"row",justifyContent:'center', alignContent:'center', top:'19%', borderColor:'#859410', gap:1}}>
   <ImageBackground
            source={require('../assets/Images/coin.png')} 
            style={{width: 15, height: 17, top:'8%'}}
               
         /> 
      
        
         <Text style={{ fontFamily: 'Poppins-Bold', color: "white", fontSize: 17, top:'7%'}}>{score}</Text>


      </View>
          </>
          <View style={{flex:1, justifyContent:'center', alignItems:'center', top:'4%'}}>
          <ImageBackground source={require('../assets/Images/LevelImg.png')} style={{width:90, height:72}}/> 
          
          </View>
          <Text style={{ fontSize:16, color:'white', fontFamily:'Poppins-Bold', textAlign:'center', top:'1%'}}>{currentLevel}</Text>
          <Text style={{color:"white",textAlign:'center', top:'18%', fontFamily:'Poppins-Regular', fontSize:11}}>Click save to continue</Text>
          <TouchableOpacity onPress={handleNext} style={{backgroundColor:'green', width:130, height:43, left:'30.7%', top:"19%", borderRadius:10, borderBottomColor:'yellow', borderWidth:1,marginBottom:"47%", paddingRight:20}}>
          <StrokedText text="Save" strokeColor="black" strokeWidth={2} fontSize={25} /><Ionicons name='cloud-upload' size={23} color={'white'} style={{left:'80%', bottom:'60%'}}/>
          </TouchableOpacity>
          </View>

          
        )}
        {!userInfo && (
          <View style={{ marginTop: '36%', backgroundColor:'#00007B', width:'97%',left:'1%', borderColor:"blue", borderWidth:2, borderRadius:20 , height:'73%'}}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
            <ImageBackground source={require('../assets/cloudVector.png')} style={{width:230, height:170, bottom:'19%'}}/>
            <Text style={{ color: "white", fontSize: 15, textAlign: "center", bottom:'18%', paddingHorizontal:'6%', fontFamily:'Poppins-Bold' }}>Sign in and save your game progress!{'\n'} You can then access your score on other devices</Text>
            <ImageBackground source={require('../assets/adaptive-icon.png')} style={{width:250, height:259, bottom:'20%'}}/>
            <GoogleSigninButton
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signin}
              style={{ bottom:'19%', height:56}}
            />
            </View>
          </View>
        )}
      </View>
    </Background>
  )
}

export default LoginScreen;
