import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { collection, getDocs, getFirestore } from 'firebase/firestore'

//Components
import FeedImage from '../components/FeedImage'

const DATA = [
  {
    id: 1,
    profileName: 'kcash935',
    profilePicURI: 'https://i.imgur.com/jEVwln7.jpg',
    imageURI: 'https://i.imgur.com/VdCOYOy.jpg',
    caption: 'Kyle in a bottle'
  },
  {
    id: 2,
    profileName: 'kcash935',
    profilePicURI: 'https://i.imgur.com/jEVwln7.jpg',
    imageURI: 'https://i.imgur.com/FtI1Ldi.jpg',
    caption: 'Majestic Mountains'
  },
  {
    id: 3,
    profileName: 'kcash935',
    profilePicURI: 'https://i.imgur.com/jEVwln7.jpg',
    imageURI: 'https://i.imgur.com/EO24Oaj.jpg',
    caption: 'Sunsets'
  }
]

const HomeScreen = () => {
  const [ data, setData ] = useState()
  const firestore = getFirestore()
  
  useEffect( async () => {
    const docs = []
    const querySnapshot = await getDocs(collection(firestore, 'posts'))
    querySnapshot.forEach((doc) => {
      docs.push(doc.data())
    })

    setData(docs)
  }, [])

  console.log(data)

  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <FlatList 
        data={ data }
        renderItem={({ item }) => <FeedImage item={ item }/>}
      />
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})