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

const EditProfileInfoContainer = ({ userInfo }) => {
    const navigation = useNavigation()
    const [ state, setState ] = useState({
        name: userInfo.fullName,
        website: userInfo.website,
        bio: userInfo.bio
    })

    console.log(state)

    const updateUserInfo = async () => {
        const userRef = doc(db, 'users', auth.currentUser.uid)

        await updateDoc(userRef, {
            fullName: state.name,
            website: state.website,
            bio: state.bio
        })
        .then(() => {
            navigation.navigate('HomeNav', {
                screen: 'Profile'
            })
        })
    }

    const saveDataToCloud = () => {
        updateUserInfo()
    }

    const auth = getAuth()
    const db = getFirestore()

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
                            placeholder={ state.name }
                            value={ state.name }
                            onChangeText={text => setState({
                                ...state,
                                fullName: text
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
                        <Text style={ styles.text }>Website</Text>
                        <TextInput 
                            style={ styles.textInput }
                            placeholder={ state.website ? state.website : 'Enter a website' }
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
                            placeholder={ state.bio ? state.bio : 'Enter a bio' }
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
                onPress={() => updateUserInfo()}
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