import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderLeft = ({ logoColor }) => {
  return (
    <Text
        style={[ 
            { 
            fontFamily: 'Pacifico_400Regular', 
            fontSize: 24,
            paddingLeft: 10,
            color: logoColor
            },
        ]}
    >
        PixtaGram
    </Text>
  )
}

export default HeaderLeft

const styles = StyleSheet.create({})