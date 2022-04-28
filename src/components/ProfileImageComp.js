import { StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProfileImageComp = ({ item }) => {
    const navigation = useNavigation()

    console.log(item, 'ITEM')
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    opacity: pressed ?
                    0.5
                    :
                    1,
                    width: '33%',
                    marginBottom: 1
                }
            ]}
            onPress={() => navigation.navigate('ProfileNav', {
                screen: 'View Post',
                params: {
                    image: item
                }
            },
            ) }
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