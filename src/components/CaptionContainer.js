import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CaptionContainer = ({ item }) => {
  return (
    <View style={ styles.captionContainer }>
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