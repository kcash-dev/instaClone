import { StyleSheet, Text, SafeAreaView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native';

//Firestore
import { getDoc, doc, updateDoc, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

//Components
import EditProfileImageContainer from '../components/EditProfileImageContainer';
import EditProfileHeader from '../components/EditProfileHeader';
import EditProfileInfoContainer from '../components/EditProfileInfoContainer';

const EditProfileScreen = ({ route }) => {
    const { userInfo } = route.params;
    const navigation = useNavigation()
    const [ userState, setUserState ] = useState({
        name: '',
        username: '',
        website: '',
        bio: ''
    })

    console.log(userInfo, "USERINFO")

    const auth = getAuth()
    const db = getFirestore()

    const updateUserInfo = async () => {
        const userRef = doc(db, 'users', auth.currentUser.uid)

        await updateDoc(userRef, {
            fullName: userState.name,
            username: userState.username,
            website: userState.website,
            bio: userState.bio
        })
    }
    
    return (
        <SafeAreaView style={ styles.container }>
            <EditProfileHeader />
            <EditProfileImageContainer item={ userInfo } />
            <EditProfileInfoContainer userState={ userState } />
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