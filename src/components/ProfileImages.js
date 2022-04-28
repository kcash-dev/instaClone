import { StyleSheet, View, FlatList, Pressable, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

//Firebase
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { auth } from '../auth/firebase'

//Components
import ProfileImageComp from './ProfileImageComp'

//Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// const DATA1 = [
//   {
//     id: 1,
//     profileName: 'kcash935',
//     profilePicURI: 'https://i.imgur.com/jEVwln7.jpg',
//     imageURI: 'https://i.imgur.com/VdCOYOy.jpg',
//     caption: 'Kyle in a bottle'
//   },
//   {
//     id: 2,
//     profileName: 'kcash935',
//     profilePicURI: 'https://i.imgur.com/jEVwln7.jpg',
//     imageURI: 'https://i.imgur.com/FtI1Ldi.jpg',
//     caption: 'Majestic Mountains'
//   },
//   {
//     id: 3,
//     profileName: 'kcash935',
//     profilePicURI: 'https://i.imgur.com/jEVwln7.jpg',
//     imageURI: 'https://i.imgur.com/EO24Oaj.jpg',
//     caption: 'Sunsets'
//   },
//   {
//     id: 4,
//     profileName: 'kcash935',
//     profilePicURI: 'https://i.imgur.com/jEVwln7.jpg',
//     imageURI: 'https://i.imgur.com/VdCOYOy.jpg',
//     caption: 'Kyle in a bottle'
//   },
//   {
//     id: 5,
//     profileName: 'kcash935',
//     profilePicURI: 'https://i.imgur.com/jEVwln7.jpg',
//     imageURI: 'https://i.imgur.com/FtI1Ldi.jpg',
//     caption: 'Majestic Mountains'
//   },
//   {
//     id: 6,
//     profileName: 'kcash935',
//     profilePicURI: 'https://i.imgur.com/jEVwln7.jpg',
//     imageURI: 'https://i.imgur.com/EO24Oaj.jpg',
//     caption: 'Sunsets'
//   },
// ]

const ProfileImages = () => {
  const [ scroll, setScroll ] = useState(false)
  const [ DATA, setDATA ] = useState()

  useEffect( async () => {
    const currentUser = auth.currentUser.uid
    const firestore = getFirestore()
    const userRef = doc(firestore, 'users', currentUser);
    const docSnap = await getDoc(userRef)
    let userInfo;

    if(docSnap.exists()) {
      userInfo = docSnap.data()
      setDATA(userInfo)
    } else {
      Alert.alert('No images found!')
    }

    // if(DATA.length >= 7) {
    //   setScroll(true)
    // } else {
    //   setScroll(false)
    // }
  }, [])


  return (
    <View style={ styles.container }>
      <View style={ styles.profileChoices }>
        <Pressable style={({ pressed }) => [
          {
            opacity: pressed ?
            0.5
            :
            1
          }
        ]}>
          <MaterialIcons 
            name="border-all" 
            size={30} 
            color='#a9a9a9' 
            style={ styles.profileIcon }
          />
        </Pressable>
        <Pressable style={({ pressed }) => [
          {
            opacity: pressed ?
            0.5
            :
            1
          }
        ]}>
          <MaterialCommunityIcons 
            name="format-list-bulleted" 
            size={30} 
            color='#a9a9a9' 
            style={ styles.profileIcon }
          />
        </Pressable>
        <Pressable style={({ pressed }) => [
          {
            opacity: pressed ?
            0.5
            :
            1
          }
        ]}>
          <MaterialIcons 
            name="location-pin" 
            size={30} 
            color='#a9a9a9' 
            style={ styles.profileIcon }
          />
        </Pressable>
        <Pressable style={({ pressed }) => [
          {
            opacity: pressed ?
            0.5
            :
            1
          }
        ]}>
          <MaterialCommunityIcons 
            name="clipboard-account" 
            size={30} 
            color='#a9a9a9' 
            style={ styles.profileIcon }
          />
        </Pressable>
      </View>
      <FlatList
        data={DATA.posts}
        renderItem={({ item }) => <ProfileImageComp item={ item } data={DATA} />}
        numColumns={ 3 }
        columnWrapperStyle={ styles.row }
        scrollEnabled={ scroll }
      />
    </View>
  )
}

export default ProfileImages

const styles = StyleSheet.create({
  profileChoices: {
    borderTopColor: '#D3D3D3',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileIcon: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  }
})