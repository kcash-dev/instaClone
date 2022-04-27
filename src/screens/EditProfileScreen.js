import { StyleSheet, Text, SafeAreaView } from 'react-native'
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

    const saveDataToCloud = () => {
        updateUserInfo()
        navigation.navigate('HomeNav', {
            screen: 'Profile'
        })
    }

    const handleCallback = (childData) => {
        setUserState({
            name: childData.name,
            username: childData.username,
            website: childData.website,
            bio: childData.bio,
        })
    }
    
    return (
        <SafeAreaView style={ styles.container }>
            <EditProfileHeader callback={ saveDataToCloud }/>
            <EditProfileImageContainer item={ userInfo } />
            <EditProfileInfoContainer userState={ userState } handleCallback={ handleCallback }/>
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