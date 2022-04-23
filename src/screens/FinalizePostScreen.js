import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

//Icons
import { AntDesign } from '@expo/vector-icons';

const FinalizePostScreen = ({ route }) => {
    const { image } = route.params
    const [ caption, setCaption ] = useState('')
    const navigation = useNavigation()

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
                <AntDesign name="close" size={28} color="#000" />
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
                    onPress={() => navigation.navigate('Finalize Post', { image: image })}
                >
                <Text
                    style={[ styles.nextButton, { color: '#76c8f8' } ]}
                >
                    Post
                </Text>
                </Pressable>
            </View>
            <View style={ styles.imageCaptionBox }>
                <Image 
                    source={{ uri: image }}
                    style={ styles.image }
                />
                <TextInput 
                    placeholder="Write a caption..."
                    value={ caption }
                    onChangeText={text => setCaption(text)}
                    multiline={ true }
                    style={ styles.captionText }
                />
            </View>
        </SafeAreaView>
    )
}

export default FinalizePostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        color: '#000',
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
    imageCaptionBox: {
        margin: 10
    },
    captionText: {
        fontSize: 18,
        paddingTop: 25,
    }
})