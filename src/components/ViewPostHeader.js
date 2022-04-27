import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

//Icons
import { MaterialIcons } from '@expo/vector-icons';

//Firebase
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

//Navigation
import { useNavigation } from '@react-navigation/native';

const ViewPostHeader = () => {
    const [ username, setUsername ] = useState('')
    const auth = getAuth()
    const db = getFirestore()
    const navigation = useNavigation()

    const getUserInfo = async () => {
        const docRef = doc(db, 'users', auth.currentUser.uid)
        const docSnap = await getDoc(docRef)

        const userInfo = docSnap.data()
        setUsername(userInfo.username)
    }

    useEffect(() => {
        getUserInfo()
    }, [])
    return (
        <View style={ styles.headerContainer }>
            <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ?
                        0.5
                        :
                        1
                    },
                    styles.backButton
                ]}
                onPress={() => navigation.pop()}
            >
                <MaterialIcons name="arrow-back-ios" size={30} color="black" />
            </Pressable>
            <View style={ styles.nameContainer }>
                <Text style={ styles.usernameText }>
                    { username }
                </Text>
                <Text style={ styles.postText }>
                    Posts
                </Text>
            </View>
        </View>
    )
}

export default ViewPostHeader

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EBECF0',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#fff'
    },
    backButton: {
        justifyContent: 'flex-start'
    },
    nameContainer: {
        alignItems: 'center',
        width: '80%',
    },
    usernameText: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#808080'
    },
    postText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    profileOptionsContainer: {
        flexDirection: 'row'
    }
})