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
    Platform 
} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { uploadNewPost } from '../auth/firebase';

//Icons
import { AntDesign } from '@expo/vector-icons';

const FinalizePostScreen = ({ route }) => {
    const { image } = route.params
    const [ caption, setCaption ] = useState('')
    const navigation = useNavigation()

    console.log(image)

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
                    onPress={() => uploadNewPost(image)}
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
                        <TextInput 
                            placeholder="Write a caption..."
                            value={ caption }
                            onChangeText={text => setCaption(text)}
                            multiline={ true }
                            style={ styles.captionText }
                            placeholderTextColor='#fff'
                            onBlur={ Keyboard.dismiss() }
                        />
                    </KeyboardAvoidingView>
            </View>
            </TouchableWithoutFeedback>
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
        height: 250,
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
    }
})