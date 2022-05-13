import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { loggingOut } from '../auth/firebase'
import { useNavigation } from '@react-navigation/native'

//Components
import ProfileHeader from '../components/ProfileHeader'
import ProfileInfo from '../components/ProfileInfo'
import Button from '../components/Button'
import ProfileImages from '../components/ProfileImages'

//Firebase
import { getDoc, doc, getFirestore, onSnapshot } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const ProfileScreen = () => {
  const navigation = useNavigation()
  const [ userInfo, setUserInfo ] = useState({
    profilePhoto: 'https://i.imgur.com/O024Oaz.jpg',
    fullName: '',
    numUserPosts: 0,
    email: '',
    bio: '',
    website: '',
    posts:[]
  })
  const firestore = getFirestore()
  const auth = getAuth()

    const sub = () => {
      onSnapshot(doc(firestore, "users", auth.currentUser.uid), (doc) => {
        setUserInfo({
          ...userInfo,
          profilePhoto: doc.data().profilePicURI,
          numUserPosts: doc.data().posts.length,
          fullName: doc.data().fullName,
          email: doc.data().email,
          bio: doc.data().bio,
          website: doc.data().website,
          posts: doc.data().posts
        })
      })
    }

    useEffect(() => {
      sub()
    }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ProfileHeader />
      <ProfileInfo 
        userInfo={ userInfo }
      />
      <ProfileImages 
        userInfo={ userInfo }
      />
      <Button 
        placeholderText={'Sign Out'}
        onPress={() => {
          loggingOut()
          navigation.navigate('Authentication', {
            screen: 'Login Screen'
          })
        }}
      />
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({

})