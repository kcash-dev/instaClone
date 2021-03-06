import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

//Navigation
import { useNavigation } from '@react-navigation/native'

const EditProfileHeader = () => {
    const navigation = useNavigation()

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
            <View style={ styles.headerTextContainer }>
                <Text style={ styles.headerText }>
                    Edit profile
                </Text>
            </View>
        </View>
    )
}

export default EditProfileHeader

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        borderBottomColor: '#EBECF0',
        borderBottomWidth: 1,
        padding: '5%',
    },
    cancelButtonText: {
        fontSize: 18
    },
    headerTextContainer: {
        alignItems: 'center',
        width: '65%'
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