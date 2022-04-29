import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

//Navigation
import { useNavigation } from '@react-navigation/native'

//Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EditProfileHeader = ({ callback }) => {
    const navigation = useNavigation()

    const handleCallback = () => {
        callback()
    }

    return (
        <View style={ styles.headerContainer }>
            <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ?
                        0.5
                        :
                        1
                    }
                ]}
                onPress={() => navigation.pop() }
            >
                <Text style={ styles.cancelButtonText }>
                    Cancel
                </Text>
            </Pressable>
            <Text style={ styles.headerText }>
                Comments
            </Text>
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
                <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
            </Pressable>
        </View>
    )
}

export default EditProfileHeader

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        borderBottomColor: '#EBECF0',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        padding: '5%'
    },
    cancelButtonText: {
        fontSize: 18
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    doneButtonText: {
        fontSize: 18,
        color: '#76c8f8',
        fontWeight: 'bold'
    }
})