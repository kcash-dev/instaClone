import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { loggingOut } from '../auth/firebase'
import { useNavigation } from '@react-navigation/native'

//Components
import ProfileHeader from '../components/ProfileHeader'
import ProfileInfo from '../components/ProfileInfo'
import Button from '../components/Button'

const ProfileScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <ProfileHeader username={ 'kcash935' }/>
      <ProfileInfo />
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