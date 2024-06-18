import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, ImageSourcePropType, Keyboard, BackHandler, ScrollView, SafeAreaView } from 'react-native';
import levels from '../Components/Level';
import Background from '../Components/Background';
import { Ionicons } from '@expo/vector-icons';

const DictionaryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [error, setError] = useState('');
  const [images, setImages] = useState<ImageSourcePropType[]>([]);

  const searchDictionary = () => {
    Keyboard.dismiss();
    const searchTerm = word.trim().toLowerCase();
    const foundWord = levels.find(level => level.word.toLowerCase() === searchTerm);

    if (foundWord) {
      setDefinition(foundWord.definition || 'Definition not available');
      const wordImages = foundWord.images.map((image, index) => image);
      setImages(wordImages);
      setError('');
    } else {
      setError('Word not found in the glossary.');
      setDefinition('');
      setImages([]);
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.goBack('MainMenu');
      return true;
    });

    return () => {
      backHandler.remove();
    };
  }, [navigation]);

  return (
    <Background>
      <SafeAreaView style={{flex:1}}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={{ flex: 1 }}
      >
       
        <View>
          <Text style={{ textAlign: 'center', color: 'white', marginTop: '9%', fontFamily: 'Poppins-BoldItalic', fontSize: 18, top:'1%' }}>
            Welcome to the Glossary!
          </Text>
          <Text style={{ fontFamily: 'Poppins-Regular', textAlign: 'center', color: 'white', marginBottom: '7%', paddingHorizontal: '13%' }}>
            Search and get more information of words used in the game.
          </Text>

          <View style={{ backgroundColor: '#00006B', width: '97%', height: '82%', borderRadius: 20, left: '1.6%', top: -14, borderWidth: 2, borderColor: 'blue' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: '4%' }}>
              <TextInput
                 placeholder="Enter word"
                placeholderTextColor={'white'}
                value={word}
                onChangeText={setWord}
                onSubmitEditing={searchDictionary}
                style={{ borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 1, width: '80%', color: 'white', left: '58%', textAlign: 'center', height: 40, fontSize: 17, fontFamily: 'Poppins-Bold' }}
              />
              <Ionicons name="search" size={21} color="white" style={{ right: 30 }} onPress={searchDictionary} />
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 3, top: '1%', width: '90%', borderRadius: 20 }}>
              {images.length > 0 && (
                <View style={{flex:1, justifyContent:'center', alignItems:'center', left:'19%'}}> 
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: '3%' }}>
                  {images.map((image, index) => (
                    <Image key={index} source={image} style={{ width: 95, height: 90, margin: 5 }} />
                  ))}
                  </View>
                </View>
              )}

              <ScrollView style={{top:'1%', maxHeight: '57%', left:'5.5%' }}>
                {definition ? (
                  <Text style={{ fontSize: 13, color: 'white', textAlign: 'justify', fontFamily: 'Poppins-Regular' }}>
                    {definition}
                  </Text>
                ) : null}
                {error ? (
                  <Text style={{ marginTop: 19, fontSize: 13, color: 'red', fontFamily: 'Poppins-Regular', textAlign:'center' }}>
                    {error}
                  </Text>
                ) : null}
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    </Background>
  );
};

export default DictionaryScreen;
