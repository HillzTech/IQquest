import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ImageSourcePropType, Keyboard, BackHandler, ScrollView } from 'react-native'; // Import Keyboard
import levels from '../Components/Level';
import Background from '../Components/Background';
import { Ionicons } from '@expo/vector-icons';

const DictionaryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [error, setError] = useState('');
  const [images, setImages] = useState<ImageSourcePropType[]>([]); // Update images state type

  // Function to search for a word in the dictionary data
  const searchDictionary = () => {
    // Dismiss the keyboard
    Keyboard.dismiss();

    // Convert the input word to lowercase for case-insensitive search
    const searchTerm = word.trim().toLowerCase();

    // Find the word in the dictionary data
    const foundWord = levels.find(level => level.word.toLowerCase() === searchTerm);

    // If the word is found, display its definition and images
    if (foundWord) {
      
      setDefinition(foundWord.definition || 'Definition not available');
      // Displaying images of the word
      const wordImages = foundWord.images.map((image, index) => image);
      setImages(wordImages);
      setError('');
    } else {
      // If the word is not found, set the error message
      setError('Word not found in the glossary.');
      setDefinition('');
      setImages([]);
    }
  };
     

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Navigate to MainMenuScreen and pass score and current level
      navigation.push('MainMenu');

      return true; // Prevent default behavior (closing the app)
    });

    return () => {
      backHandler.remove(); // Remove the event listener when component unmounts
    };
  }, [navigation]);

  return (
    <Background>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }} // Add flexGrow: 1 to make content fill the screen
        keyboardShouldPersistTaps="handled" // Handle taps when keyboard is open
        style={{ flex: 1 }} // Add flex: 1 to make ScrollView fill the screen
      >
     
      
      <View style={{ flexDirection:'row', justifyContent:'space-between',alignContent:'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ImageBackground
              source={require('../assets/Images/backIcon.png')}
              style={{ width: 30, height: 30, left:15, top:'130%' }}
            />
          </TouchableOpacity>

            

        </View>

        <View>
        <Text style={{textAlign:'center', color:'white', marginBottom:'1%', marginTop:'1%', fontWeight:'800', fontSize:18}}>Welcome to the Glossary!</Text>
        <Text style={{textAlign:'center', color:'white', marginBottom:'7%', fontStyle:'italic', paddingHorizontal:'13%'}}>Search and get more information of words used in the game. </Text>

        <View style={{backgroundColor:'#00006B', width: '97%', height:'87%', borderRadius:20, left:'1.6%', top:-14, borderWidth:2, borderColor:'blue' }}>

        <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', top:'4%'}}>
            <TextInput
              
              placeholderTextColor={'white'}
          
              value={word}
              onChangeText={setWord}
              onSubmitEditing={searchDictionary} 
              style={{ borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 1, width: '80%', color: 'white', left:'58%', textAlign:'center', height:40, fontSize:17 }}
              
            />
            <Ionicons name="search" size={21} color="white" style={{right:30}} onPress={searchDictionary}/>

           
            </View>
        

        
         <View style={{flexDirection:'column', justifyContent:'center', alignContent:'center', padding:3, top:'3%',  width:'90%', borderRadius:20}}>
            {images.length > 0 ? (
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: '3%', left:'9%'}}>
                {images.map((image, index) => (
                  <Image key={index} source={image} style={{ width: 110, height: 110, margin: 5}} /> 
                ))}
                {definition ? (
              <Text style={{ marginTop: '3%', fontSize: 15, color:'white', textAlign:'justify', right:'5%'}}>{definition}</Text>
            ) : null}
            {error ? <Text style={{ marginTop: 19, fontSize: 20, color: 'red' }}>{error}</Text> : null}
              </View>
            ) : (
              <View style={{ marginTop: '16%' }}>
                {error ? (
                  <Text style={{ marginTop: 19, fontSize: 20, color: 'red', left:'8%' }}>{error}</Text>
                ) : null}
              </View>
            )}


         </View>
         </View>
         </View>

         </ScrollView>

    </Background>
  );
};

export default DictionaryScreen;
