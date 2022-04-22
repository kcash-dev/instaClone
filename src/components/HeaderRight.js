import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const HeaderRight = () => {
  return (
    <View
        style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-evenly',
            paddingRight: 10
        }}
    >
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
            <AntDesign 
            name="pluscircleo" 
            size={28} 
            color="black"
            style={{ paddingHorizontal: 10 }}
            />
        </Pressable>
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
            <AntDesign 
            name="hearto" 
            size={28} 
            color="black" 
            style={{ paddingHorizontal: 10 }}
            />
        </Pressable>
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
            <AntDesign 
            name="message1" 
            size={28} 
            color="black" 
            style={{ paddingHorizontal: 10 }}
            />
        </Pressable>
        </View>
  )
}

export default HeaderRight

const styles = StyleSheet.create({})