import { StyleSheet, Text, TextInput, SafeAreaView, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import { auth, onAuthStateChanged, signIn } from '../auth/firebase'

const LoginScreen = () => {
    const navigation = useNavigation()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handlePress = () => {
        if (!email) {
            Alert.alert('Email field is required.');
        } else if (!password) {
            Alert.alert('Password field is required.');
        } else {
          signIn(
            email,
            password,
          );
        }
    };

    onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('We are authenticated now!');
        navigation.navigate('HomeNav', {
        screen: 'Feed'
        })
    }
    });

    return (
        <SafeAreaView
            style={ styles.container }
        >
            <Text
                style={[ 
                    { fontFamily: 'Pacifico_400Regular' },
                    styles.logoText 
                ]}
            >
                PixtaGram
            </Text>
            <TextInput 
                placeholder="Phone number, username, or email"
                placeholderTextColor={'#8e8e8e'}
                style={ styles.textInputs }
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput 
                placeholder="Password"
                style={ styles.textInputs }
                placeholderTextColor={'#8e8e8e'}
                placeholderText={ styles.text }
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
            />
            <Pressable
                style={({ pressed }) => [
                    {
                    opacity: pressed
                        ? 
                        0.5
                        : 1
                    },
                    styles.forgotPasswordText
                ]}
            >
                <Text style={[ styles.text, { color: '#399ce9' } ]}>Forgot password?</Text>
            </Pressable>
            <Button 
                placeholderText={"Log In"}
                onPress={ handlePress }
            />
            <View style={ styles.separatorContainer }>
                <View 
                    style={ styles.separator }
                />
                <Text
                    style={[ styles.text, { color: '#949494' } ]}
                >
                    OR
                </Text>
                <View 
                    style={ styles.separator }
                />
            </View>
            <View style={{ height: 150 }}>

            </View>
            <View 
                style={ styles.bottomSeparator }
            />
            <View style={ styles.bottomTextContainer }>
                <Text 
                    style={[ 
                        styles.bottomText, 
                        { 
                            color: '#949494', 
                            marginVertical: 10,
                            fontSize: 16 
                        } 
                    ]}
                >
                    Don't have an account?
                </Text>
                <Pressable
                        style={({ pressed }) => [
                            {
                            opacity: pressed ? 
                                0.5
                                : 1,
                            alignItems: 'center'
                            },
                        ]}
                        onPressOut={() => navigation.navigate('Sign Up Screen')}
                    >
                        <Text style={
                            { 
                                color: '#399ce9',
                                fontSize: 16,
                                fontFamily: 'Inter_700Bold'
                            }
                        }>
                            Sign Up
                        </Text>
                    </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center'
    },
    logoText: {
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15
    },
    textInputs: {
        height: 60,
        backgroundColor: "#fafafa",
        borderColor: '#f1f1f1',
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    forgotPasswordText: {
        alignItems: 'flex-end',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    separator: {
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1,
        flex: 1,
        marginHorizontal: 15
    },
    text: {
        fontFamily: 'Inter_700Bold'
    },
    bottomSeparator: {
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1
    },
    bottomTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    bottomText: {
        fontFamily: 'Inter_400Regular',
    }
})