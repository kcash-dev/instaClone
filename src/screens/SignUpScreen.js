import { 
    StyleSheet, 
    Text, 
    TextInput, 
    SafeAreaView, 
    View, 
    Pressable, 
    Alert,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard 
} from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import { registration, auth, onAuthStateChanged } from '../auth/firebase'
import { getAuth, updateProfile } from 'firebase/auth'

const SignUpScreen = () => {
    const [ email, setEmail ] = useState('')
    const [ fullName, setFullName ] = useState('')
    const [ username, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')

    const handlePress = () => {
        if (!email) {
            Alert.alert('Email field is required.');
        } else if (!password) {
            Alert.alert('Password field is required.');
        } else if (!username) {
            Alert.alert('Username field is required.');
        } else if (!fullName) {
            Alert.alert('Full name field is required.');
        } else {
            registration(
                email,
                password,
                fullName,
                username,
            );

            updateProfile(auth.currentUser, {
                displayName: username
            })
        }
      };

    const navigation = useNavigation()

    onAuthStateChanged(auth, user => {
        if (user != null) {
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
            <View
                style={ styles.headerTextContainer }
            >
                <Text
                    style={ styles.headerText }
                >
                    Sign up to see photos and videos from your friends.
                </Text>
            </View>
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
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >

                <KeyboardAvoidingView
                    behavior={ Platform.OS = 'ios' ? 'padding' : 'height' }
                >
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor={'#8e8e8e'}
                        style={ styles.textInputs }
                        value={ email }
                        onChangeText={text => setEmail(text) }
                        keyboardType="email-address"
                    />
                    <TextInput 
                        placeholder="Full Name"
                        style={ styles.textInputs }
                        placeholderTextColor={'#8e8e8e'}
                        placeholderText={ styles.text }
                        value={ fullName }
                        onChangeText={text => setFullName(text) }
                    />
                    <TextInput 
                        placeholder="Username"
                        style={ styles.textInputs }
                        placeholderTextColor={'#8e8e8e'}
                        placeholderText={ styles.text }
                        value={ username }
                        onChangeText={text => setUserName(text) }
                    />
                    <TextInput 
                        placeholder="Password"
                        style={ styles.textInputs }
                        placeholderTextColor={'#8e8e8e'}
                        placeholderText={ styles.text }
                        value={ password }
                        onChangeText={text => setPassword(text) }
                        secureTextEntry={true}
                    />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            <Button 
                placeholderText={"Sign up"}
                onPress={ handlePress }
            />
            <Text style={ styles.termsText }>
                By signing up, you agree to our Terms, Data Policy and Cookies Policy.
            </Text>
            <View 
                style={ styles.bottomSeparator }
            />
            <View style={ styles.bottomTextContainer }>
                <Text 
                    style={[ 
                        styles.bottomText, 
                        { 
                            color: '#949494', 
                            marginVertical: 5,
                            fontSize: 14 
                        } 
                    ]}
                >
                    Already have an account?
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
                        onPressOut={() => navigation.navigate('Login Screen')}
                    >
                        <Text style={
                            { 
                                color: '#399ce9',
                                fontSize: 14,
                                fontFamily: 'Inter_700Bold'
                            }
                        }>
                            Log in
                        </Text>
                    </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

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
        marginVertical: 6
    },
    headerTextContainer: {
        justifyContent: 'center',
        marginVertical: 10
    },
    headerText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Inter_700Bold',
        color: '#949494'
    },
    textInputs: {
        height: 50,
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
        borderBottomWidth: 1,
        marginVertical: 3
    },
    bottomTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    bottomText: {
        fontFamily: 'Inter_400Regular',
    },
    termsText: {
        textAlign: 'center',
        fontFamily: 'Inter_700Bold',
        marginHorizontal: 5,
        color: '#949494'
    }
})