import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const ProfileOptionsButton = ({ onPress }) => {
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
            <MaterialIcons name="arrow-drop-down" size={24} color="#fff" />
        </View>
    </Pressable>
  )
}

export default ProfileOptionsButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#76c8f8',
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderRadius: 10
    },
})