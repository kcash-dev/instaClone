import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderRight = () => {
    const navigation = useNavigation()
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
                onPressOut={() => navigation.navigate("HeaderNav", {
                    screen: "Upload Post"
                })}
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