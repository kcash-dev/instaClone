import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

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
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <FlatList 
        data={ DATA }
        renderItem={({ item }) => <FeedImage item={ item }/>}
      />
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})