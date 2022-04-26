import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const ProfileButton = ({ placeholderText, onPress }) => {
  return (
    <Pressable
        style={({ pressed }) => [{
            opacity: pressed ? 
                0.5
                :
                1
        }]}
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

export default ProfileButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#76c8f8',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 5,
        paddingHorizontal: 5,
        borderRadius: 10
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})