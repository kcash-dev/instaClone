import { 
    StyleSheet, 
    View, 
    SafeAreaView, 
    Image, 
    Pressable, 
    Text,
    Alert,
    Platform 
  } from 'react-native'
  import React, { useState, useEffect } from 'react'
  import * as ImagePicker from 'expo-image-picker';
  import Button from '../components/Button'
  import { useNavigation } from '@react-navigation/native';

import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes
} from 'firebase/storage'

import {
    doc,
    updateDoc,
    getFirestore,
    arrayUnion,
    getDoc
} from 'firebase/firestore'

import {
    auth
} from '../auth/firebase'
  
//Icons
import { AntDesign } from '@expo/vector-icons';
  
  const UploadProfilePicScreen = () => {
    const navigation = useNavigation()
    const [image, setImage] = useState(null);
    const [ disabled, setDisabled ] = useState(true)
    const [ disabledColor, setDisabledColor ] = useState('#808080')

        useEffect(() => {
            (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if(status !== 'granted') {
                Alert.alert('Sorry, we need permission to make this work!')
                }
            }
            })();
        }, [])
      
        const pickImage = async () => {
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            });
        
            if (!result.cancelled) {
                setImage(result)
            }

            setDisabled(false)
            setDisabledColor('#76c8f8')
        };

        const uploadImage = async (image) => {
            const storage = getStorage()
            const firestore = getFirestore()
            const currentUser = auth.currentUser.uid
            const name = `${currentUser} profileImage.jpg`
            const imageRef = ref(storage, name)

            const img = await fetch(image.uri)
            const bytes = await img.blob()

            await uploadBytes(imageRef, bytes)
                .then(async() => {
                    const reference = ref(storage, name)
                    await getDownloadURL(reference).then(async (x) => {
                        const userRef = doc(firestore, 'users', currentUser)
                        await updateDoc(userRef, {
                            profilePicURI: x
                        })
                    })
                }).catch((err) => console.error(err))
            
            navigation.pop()
        }
  
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
          <Text style={ styles.newPostText }>New Profile Picture</Text>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 
                0.5
                :
                1
              },
              
            ]}
            onPress={() => uploadImage(image)}
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
  
  export default UploadProfilePicScreen
  
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