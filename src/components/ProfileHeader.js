import { 
    StyleSheet, 
    Text, 
    View, 
    Pressable, 
    Image,
    SafeAreaView
} from 'react-native'
import React, { useState, useEffect } from 'react'

//Icons
import { MaterialIcons } from '@expo/vector-icons';

//Components
import Button from './Button';

//Firebase
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import NewPostButton from './NewPostButton';

const ProfileHeader = () => {
    const [ user, setUser ] = useState()
    const auth = getAuth()
    const db = getFirestore()

    const getUserInfo = async () => {
        const docRef = doc(db, 'users', auth.currentUser.uid)
        const docSnap = await getDoc(docRef)

        const userInfo = docSnap.data()
        setUser(userInfo)
    }

    useEffect(() => {
        getUserInfo()
    }, [ user ])

    return (
        <View style={ styles.headerContainer }>
            <View style={ styles.nameContainer }>
                <Text style={ styles.usernameText }>
                    { user?.username }
                </Text>
                <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 
                        0.5
                        :
                        1
                    }
                ]}
                >
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                </Pressable>
            </View>
            <View style={ styles.profileOptionsContainer }>
                <NewPostButton />
                <Pressable
                    style={({ pressed }) => [
                        {
                            opacity: pressed ? 
                            0.5
                            :
                            1,
                            paddingHorizontal: 10
                        }
                    ]}
                >
                    <MaterialIcons 
                        name="menu" 
                        size={28} 
                        color="black" 
                    />   
                </Pressable>
            </View>
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#EBECF0',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    nameContainer: {
        flexDirection: 'row'
    },
    usernameText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    profileOptionsContainer: {
        flexDirection: 'row'
    }
})