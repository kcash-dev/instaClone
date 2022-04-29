import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Components
import CommentsCaptionContainer from './CommentsCaptionContainer'
import CommentInputContainer from './CommentInputContainer'

const CommentSection = ({ item }) => {
  return (
    <View style={ styles.container }>
        <View style={ styles.commentCaption }>
            <CommentsCaptionContainer item={ item } />
        </View>
        <View style={ styles.commentInput }>
            <CommentInputContainer item={ item } />
        </View>
    </View>
  )
}

export default CommentSection

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    commentCaption: {
        paddingBottom: 50,
        borderBottomColor: '#EBECF0',
        borderBottomWidth: 1
    },
    commentInput: {
        position: 'absolute',
        bottom: 2,
        borderTopWidth: 1,
        borderTopColor: '#EBECF0',
        paddingTop: 10,
        justifyContent: 'center'
    }
})