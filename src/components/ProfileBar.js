import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

//Icons
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const ProfileBar = ({ item }) => {
  return (
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
                size={20} 
                color="black" 
                style={{ paddingHorizontal: 10 }}
            />
        </Pressable>
    </View>
  )
}

export default ProfileBar

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
})