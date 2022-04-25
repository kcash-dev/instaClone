import { StyleSheet, View, SafeAreaView, Image, Pressable, Text } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';

//Firebase
import { storage, ref, uploadBytes } from '../auth/firebase'

//Icons
import { AntDesign } from '@expo/vector-icons';

const UploadPostScreen = () => {
  const navigation = useNavigation()
  const [image, setImage] = useState(null);
  const [ disabled, setDisabled ] = useState(true)
  const [ disabledColor, setDisabledColor ] = useState('#808080')
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
      const imageRef = ref(storage, 'image.jpg')
      const img = await fetch(result.uri)
      const bytes = await img.blob();

      await uploadBytes(imageRef, bytes)
    }

    setDisabled(false)
    setDisabledColor('#76c8f8')
  };

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.nextButtonContainer }>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ?
              0.5
              :
              1
            }
          ]}
          onPress={() => navigation.pop()}
        >
          <AntDesign name="close" size={28} color="#fff" />
        </Pressable>
        <Text style={ styles.newPostText }>New Post</Text>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 
              0.5
              :
              1
            },
            
          ]}
          onPress={() => navigation.navigate('Finalize Post', { image: image.uri })}
          disabled={disabled}
        >
          <Text
            style={[ styles.nextButton, { color: disabledColor } ]}
          >
            Next
          </Text>
        </Pressable>
      </View>
      {image && <Image source={{ uri: image.uri }} style={ styles.image } />}
      { image ?
        <View style={ styles.pickImageButton }>
          <Button placeholderText="Pick a different image" onPress={pickImage} />
        </View>
        :
        <View style={ styles.pickImageButton }>
          <Button placeholderText="Pick an image from camera roll" onPress={pickImage} />
        </View>
      }
    </SafeAreaView>
  )
}

export default UploadPostScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000'
  },
  nextButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  newPostText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  nextButton: {
    fontSize: 20,
  },
  image: {
    width: '100%', 
    height: 400
  },
  pickImageButton: {
    paddingVertical: 30
  }
})