import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

//Icons
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const FeedImage = ({ item }) => {
  return (
    <View>
        <View style={ styles.profileBar }>
            <Image 
                source={{ uri: item.profilePicURI }}
                style={ styles.profilePicture }
            />
            <Text style={ styles.profileNameText }>
                { item.profileName }
            </Text>
            <Pressable
                style={({ pressed }) => [
                {
                    opacity: pressed ?
                    0.5
                    :
                    1
                },
                styles.optionsButton
                ]}
            >
                <SimpleLineIcons 
                    name="options" 
                    size={24} 
                    color="black" 
                    style={{ paddingHorizontal: 10 }}
                />
            </Pressable>
        </View>
        <Image 
            source={{ uri: item.imageURI }}
            style={{ width: '100%', height: 300 }}
        />
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
        <View style={ styles.captionContainer }>
            <Text style={ styles.captionProfileNameText }>{ item.profileName }</Text>
            <Text style={ styles.captionText }>{ item.caption }</Text>
        </View>
    </View>
  )
}

export default FeedImage

const styles = StyleSheet.create({
    profileBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10
    },
    profilePicture: {
        width: 40, 
        height: 40, 
        borderRadius: 100,
        marginLeft: 10
    },
    profileNameText: {
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    optionsButton: {
        position: 'absolute',
        right: 10
    },
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
    captionContainer: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    captionProfileNameText: {
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    captionText: {
        paddingLeft: 10
    }
})