import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CaptionContainer = ({ item }) => {
  return (
    <View style={ styles.captionContainer }>
        <Image 
            source={{ uri: item.profilePicURI }}
            style={ styles.profilePic }
        />
        <Text style={ styles.captionProfileNameText }>{ item.profileName }</Text>
        <Text style={ styles.captionText }>{ item.caption }</Text>
    </View>
  )
}

export default CaptionContainer

const styles = StyleSheet.create({
    captionContainer: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    captionProfileNameText: {
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    captionText: {
        paddingLeft: 10
    },
    profilePic: {
        height: 30,
        width: 30,
        borderRadius: 100
    }
})