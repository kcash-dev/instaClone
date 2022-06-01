import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const ViewProfileButton = ({ placeholderText, onPress }) => {
  return (
    <Pressable
        style={({ pressed }) => [{
            opacity: pressed ? 
                0.5
                :
                1
            },
            styles.buttonContainer
        ]}
        onPressOut={ onPress }
    >
        <View
            style={ styles.button }
        >
                <Text
                    style={ styles.text }
                >
                    { placeholderText }
                </Text>
        </View>
    </Pressable>
  )
}

export default ViewProfileButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#76c8f8',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '3%',
        marginHorizontal: '2%',
        borderRadius: 10,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonContainer: {
        width: '55%'
    }
})