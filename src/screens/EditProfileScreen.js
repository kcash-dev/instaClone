import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

//Components
import EditProfileImageContainer from '../components/EditProfileImageContainer';

const EditProfileScreen = ({ route }) => {
    const { userInfo } = route.params;
    console.log(userInfo)
    return (
        <SafeAreaView style={ styles.container }>
            <EditProfileImageContainer item={ userInfo } />
        </SafeAreaView>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})