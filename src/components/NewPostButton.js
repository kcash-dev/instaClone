import { StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NewPostButton = () => {
    const navigation = useNavigation()
    return (
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
    )
}

export default NewPostButton

const styles = StyleSheet.create({})