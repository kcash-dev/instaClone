import { StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

const ProfileImageComp = ({ item }) => {
    console.log(item)
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
      >
          <Image 
            source={{ uri: item.imageURI }}
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