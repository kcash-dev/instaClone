import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

//Icons
import { FontAwesome } from '@expo/vector-icons';

const ImageOptions = () => {
  return (
    <View style={ styles.imageOptions }>
        <Pressable
            style={({ pressed }) => [
            {
                opacity: pressed ?
                0.5
                :
                1
            }
            ]}
        >
            <FontAwesome 
                name="heart-o" 
                size={24} 
                color="black" 
                style={{ paddingHorizontal: 10 }}
            />
        </Pressable>
        <Pressable
            style={({ pressed }) => [
            {
                opacity: pressed ?
                0.5
                :
                1
            }
            ]}
        >
            <FontAwesome 
                name="comment-o" 
                size={24} 
                color="black" 
                style={{ paddingHorizontal: 10 }}
            />
        </Pressable>
        <Pressable
            style={({ pressed }) => [
            {
                opacity: pressed ?
                0.5
                :
                1
            }
            ]}
        >
            <FontAwesome 
                name="send-o" 
                size={24} 
                color="black" 
                style={{ paddingHorizontal: 10 }}
            />
        </Pressable>
        <Pressable
            style={({ pressed }) => [
            {
                opacity: pressed ?
                0.5
                :
                1
            },
            styles.bookmarkButton
            ]}
        >
            <FontAwesome 
                name="bookmark-o" 
                size={24} 
                color="black" 
                style={{ paddingHorizontal: 10 }}
            />
        </Pressable>
    </View>
  )
}

export default ImageOptions

const styles = StyleSheet.create({
    imageOptions: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        alignItems: 'center'
    },
    bookmarkButton: {
        position: 'absolute',
        right: 10
    },
})