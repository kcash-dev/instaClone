import { StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProfileImageComp = ({ item, data }) => {
    const navigation = useNavigation()
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    opacity: pressed ?
                    0.5
                    :
                    1,
                    width: '34%',
                    marginHorizontal: 1
                }
            ]}
            onPress={() => navigation.navigate('ProfileNav', {
                screen: 'View Post',
                params: {
                    imageData: data
                }
            },
            )}
        >
            <Image 
                source={{ uri: item }}
                style={ styles.image }
            />
        </Pressable>
    )
}

export default ProfileImageComp

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 120
    }
})