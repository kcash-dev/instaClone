import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Image, 
    TextInput, 
    Pressable,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator 
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes
} from 'firebase/storage'

import {
    doc,
    updateDoc,
    getFirestore,
    arrayUnion,
    getDoc,
    addDoc,
    collection,
    getDocs
} from 'firebase/firestore'

import {
    auth
} from '../auth/firebase'


//Icons
import { AntDesign } from '@expo/vector-icons';

const FinalizePostScreen = ({ route }) => {
    const { image } = route.params
    const [ caption, setCaption ] = useState('')
    const [ currentUserInfo, setCurrentUserInfo ] = useState()
    const [ url, setUrl ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ postsCollection, setPostsCollection ] = useState()

    const navigation = useNavigation()
    const currentUser = auth.currentUser.uid
    const firestore = getFirestore()

    useEffect(async () => {
        const userRef = doc(firestore, 'users', currentUser)
        const docSnap = await getDoc(userRef)

        const docs = []
        const querySnapshot = await getDocs(collection(firestore, 'posts'))
        querySnapshot.forEach((doc) => {
            docs.push(doc.data())
        })

        setPostsCollection(docs)

        if(docSnap.exists()) {
            setCurrentUserInfo(docSnap.data())
        }
    }, [])

    const uploadImage = async (image) => {
        setIsLoading(true)
        const storage = getStorage();
        const name = caption;
        const imageRef = ref(storage, name);

        const img = await fetch(image.uri)
        const bytes = await img.blob();
        
        await uploadBytes(imageRef, bytes)
            .then( async () => {
                const reference = ref(storage, name)
                await getDownloadURL(reference).then(async (x) => {
                    const userRef = doc(firestore, 'users', currentUser)
                    await updateDoc(userRef, {
                        posts: arrayUnion({
                            id: currentUserInfo.posts.length,
                            profileName: currentUserInfo.username,
                            profilePicURI: currentUserInfo.profilePicURI,
                            imageURI: x,
                            caption: name
                        })
                    })
                    await addDoc(collection(firestore, 'posts'), {
                        id: postsCollection.length,
                        profileName: currentUserInfo.username,
                        profilePicURI: currentUserInfo.profilePicURI,
                        imageURI: x,
                        caption: name
                    })
                }).catch((err) => console.error(err))
            })
            setIsLoading(false)
            navigation.navigate('HomeNav', {
                screen: 'Feed'
            })
    }

    return (
        <SafeAreaView style={ styles.container }>
            
            <View style={ styles.nextButtonContainer }>
                <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ?
                    0.5
                    :
                    1
                    }
                ]}
                onPress={() => navigation.pop()}
                >
                    <AntDesign name="close" size={28} color="#fff" />
                </Pressable>
                <Text style={ styles.newPostText }>New Post</Text>
                <Pressable
                    style={({ pressed }) => [
                        {
                            opacity: pressed ? 
                            0.5
                            :
                            1
                        },
                    ]}
                    onPress={() => uploadImage(image)}
                >
                    <Text
                        style={[ styles.nextButton, { color: '#76c8f8' } ]}
                    >
                        Post
                    </Text>
                </Pressable>
            </View>
                <TouchableWithoutFeedback
                    onPress={() => Keyboard.dismiss()}
                >
                <View style={ styles.imageBox }>
                    <Image 
                        source={{ uri: image.uri }}
                        style={ styles.image }
                    />
                    <KeyboardAvoidingView 
                        style={ styles.imageCaptionBox }
                        behavior={ Platform.OS == 'ios' ? 'padding' : 'height' }
                    >
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <TextInput 
                                placeholder="Write a caption..."
                                value={ caption }
                                onChangeText={text => setCaption(text)}
                                multiline={ true }
                                style={ styles.captionText }
                                placeholderTextColor='#fff'
                            />
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
            { isLoading ?
                <View style={ styles.loadingIndicator }>
                    <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
                        Posting...
                    </Text>
                    <ActivityIndicator size="large" color='#000' />
                </View>
                :
                null
            }
        </SafeAreaView>
    )
}

export default FinalizePostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    nextButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    newPostText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    nextButton: {
        fontSize: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    imageBox: {
        margin: 10
    },
    imageCaptionBox: {
        height: 200,
        borderBottomColor: '#fff',
        borderWidth: 1,
    },
    captionText: {
        fontSize: 18,
        paddingTop: 25,
        color: '#fff',
        opacity: 0.6
    },
    loadingIndicator: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})