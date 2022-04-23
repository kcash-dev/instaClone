import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { loggingOut } from '../auth/firebase'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button 
        placeholderText={'Sign Out'}
        onPress={() => {
          loggingOut()
          navigation.navigate('Authentication', {
            screen: 'Login Screen'
          })
        }}
      />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})