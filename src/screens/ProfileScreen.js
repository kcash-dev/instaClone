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
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const ProfileScreen = () => {
  const [ userInfo, setUserInfo ] = useState()
  const navigation = useNavigation()
  const auth = getAuth()
  const db = getFirestore()

  const getUserInfo = async () => {
    const docRef = doc(db, 'users', auth.currentUser.uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        const user = docSnap.data()
        
        setUserInfo(user)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ProfileHeader />
      <ProfileInfo userInfo={ userInfo }/>
      <ProfileImages userInfo={ userInfo }/>
      {/* <Button 
        placeholderText={'Sign Out'}
        onPress={() => {
          loggingOut()
          navigation.navigate('Authentication', {
            screen: 'Login Screen'
          })
        }}
      /> */}
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({

})