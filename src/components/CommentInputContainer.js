import { 
    StyleSheet, 
    Text, 
    KeyboardAvoidingView, 
    Keyboard, 
    Platform, 
    TextInput,
    TouchableWithoutFeedback,
    Image
} from 'react-native'
import React, { useState } from 'react'

const CommentInputContainer = ({ item }) => {
    const [ comment, setComment ] = useState('')
  return (
    <KeyboardAvoidingView 
        style={ styles.container }
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
    >
        <Image 
            source={{ uri: item.profilePicURI }}
            style={ styles.profilePic }
        />
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss() }>
            <TextInput 
                placeholder={'Add a comment as ' + item.profileName }
                style={ styles.commentInput }
                value={ comment }
                onChangeText={text => setComment(text)}
            />
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default CommentInputContainer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%'
    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: 100,
        marginHorizontal: 5
    },
    commentInput: {
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 100,
        padding: 8,
        width: '85%'
    }
})