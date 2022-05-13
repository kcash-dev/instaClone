import { 
    StyleSheet, 
    View, 
    SafeAreaView, 
    Image, 
    Pressable, 
    Text,
    Alert,
    Platform 
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const EditProfileImageContainer = ({ item }) => {
    const navigation = useNavigation()

    return (
        <View style={ styles.profileImageContainer }>
            <Image 
                source={{ uri: item.profilePhoto }}
                style={ styles.profileImage }
            />
            <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ?
                        0.5
                        :
                        1
                    }
                ]}
                onPress={() => navigation.navigate('Upload Profile Pic')}
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
        marginBottom: '5%'
    },
    changePhotoText: {
        color: '#76c8f8',
        fontWeight: 'bold',
        fontSize: 16
    }
})