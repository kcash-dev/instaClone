import { StyleSheet, Image, View, Text, Pressable } from 'react-native'
import React from 'react'

const EditProfileImageContainer = ({ item }) => {
  return (
    <View style={ styles.profileImageContainer }>
        { item?.profileImage !== undefined ?
            <Image 
                source={{ uri: item.profileImage }}
                style={ styles.profileImage }
            />
            :
            <Image 
                source={{ uri: 'https://i.imgur.com/O024Oaz.jpg' }}
                style={ styles.profileImage }
            />
        }
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
            <Text style={ styles.changePhotoText }>
                Change profile photo
            </Text>
        </Pressable>
    </View>
  )
}

export default EditProfileImageContainer

const styles = StyleSheet.create({
    profileImageContainer: {
        borderTopColor: '#EBECF0',
        borderTopWidth: 1,
        borderBottomColor: '#EBECF0',
        borderBottomWidth: 1,
        paddingVertical: '5%',
        alignItems: 'center'
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 100,
        marginBottom: '10%'
    },
    changePhotoText: {
        color: '#76c8f8',
        fontWeight: 'bold',
        fontSize: 16
    }
})