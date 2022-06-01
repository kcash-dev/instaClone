import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

//Components
import ProfileHeader from '../components/ProfileHeader'
import ViewProfileInfo from '../components/ViewProfileInfo'
import Button from '../components/Button'
import ProfileImages from '../components/ProfileImages'

const ViewProfileScreen = ({ route }) => {
    const { userInfo } = route.params;
    return (
        <SafeAreaView style={ styles.container }>
        <ProfileHeader />
        <ViewProfileInfo 
            userInfo={ userInfo }
        />
        <ProfileImages 
            userInfo={ userInfo }
        />
        </SafeAreaView>
    )
}

export default ViewProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})