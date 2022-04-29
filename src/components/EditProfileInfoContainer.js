import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Button, 
    KeyboardAvoidingView, 
    Platform, 
    Alert,
    TouchableWithoutFeedback,
    Keyboard 
} from 'react-native'
import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native';

//Firestore
import { getDoc, doc, updateDoc, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const EditProfileInfoContainer = ({ userState }) => {
    const navigation = useNavigation()
    const [ state, setState ] = useState({
        name: userState.name,
        username: userState.username,
        website: userState.website,
        bio: userState.bio
    })

    const updateUserInfo = async () => {
        const userRef = doc(db, 'users', auth.currentUser.uid)

        await updateDoc(userRef, {
            fullName: state.name,
            username: state.username,
            website: state.website,
            bio: state.bio
        })
    }

    const saveDataToCloud = () => {
        updateUserInfo()
        navigation.navigate('HomeNav', {
            screen: 'Profile'
        })
    }

    const auth = getAuth()
    const db = getFirestore()

    const getUserInfo = async () => {
        const docRef = doc(db, 'users', auth.currentUser.uid)
        const docSnap = await getDoc(docRef)

        const userInfo = docSnap.data()

        setState({
            name: userInfo.fullName,
            username: userInfo.username,
            website: userInfo?.website,
            bio: userInfo?.bio,
        })
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
            style={{ flex: 1 }}
        >
            <View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={ styles.inputContainer }>
                        <Text style={ styles.text }>Name</Text>
                        <TextInput 
                            style={ styles.textInput }
                            placeholder={ userState.name }
                            value={ state.name }
                            onChangeText={text => setState({
                                ...state,
                                name: text
                            })}
                            autoCapitalize='words'
                            placeholderTextColor='#000'
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={ styles.inputContainer }>
                        <Text style={ styles.text }>Username</Text>
                        <TextInput 
                            style={ styles.textInput }
                            placeholder={ userState.username }
                            value={ state.username }
                            autoCapitalize='none'
                            onChangeText={text => setState({
                                ...state,
                                username: text
                            })}
                            placeholderTextColor='#000'
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={ styles.inputContainer }>
                        <Text style={ styles.text }>Website</Text>
                        <TextInput 
                            style={ styles.textInput }
                            placeholder={ userState.website ? userState.website : 'Enter a website' }
                            value={ state.website }
                            keyboardType='url'
                            autoCapitalize='none'
                            onChangeText={text => setState({
                                ...state,
                                website: text
                            })}
                            placeholderTextColor='#000'
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={ styles.inputContainer }>
                        <Text style={ styles.text }>Bio</Text>
                        <TextInput 
                            style={ styles.textInput }
                            placeholder={ userState.bio ? userState.bio : 'Enter a bio' }
                            value={ state.bio }
                            onChangeText={text => setState({
                                ...state,
                                bio: text
                            })}
                            placeholderTextColor='#000'
                            multiline={ true }
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <Button
                title="Save"
                onPress={() => saveDataToCloud()}
                style={ styles.button }
            />
        </KeyboardAvoidingView>
    )
}

export default EditProfileInfoContainer

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '3%'
    },
    text: {
        fontSize: 22
    },
    textInput: {
        borderBottomColor: '#EBECF0',
        borderBottomWidth: 1,
        width: '60%',
        fontSize: 24,
        marginVertical: '2%'
    },
    button: {
        fontSize: 24
    }
})