import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { loggingOut } from '../auth/firebase'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
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

export default HomeScreen

const styles = StyleSheet.create({})