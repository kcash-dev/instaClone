import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    Pressable 
} from 'react-native'
import React from 'react'

import * as Linking from 'expo-linking';

//Navigation
import { useNavigation } from '@react-navigation/native'

//Components
import ViewProfileButton from './ViewProfileButton';

const ViewProfileInfo = ({ userInfo }) => {
    const navigation = useNavigation()
    console.log(userInfo)
    const userPhoto = userInfo.profilePhoto != undefined ? userInfo.profilePhoto : userInfo.profilePicURI

    return (
        <View>
            <View style={ styles.profileInfoContainer }>
                <Image 
                    source={{ uri: userPhoto }}
                    style={ styles.profilePicture }
                />
                <View>
                    <View style={ styles.innerProfileInfoContainer }>
                        <View style={ styles.profileSpecifics }>
                            <Text style={ styles.profileNumbers }>
                                { userInfo.posts.length }
                            </Text>
                            <Text style={ styles.profileSpecificsText }>
                                posts
                            </Text>
                        </View>
                        <View style={ styles.profileSpecifics }>
                            <Text style={ styles.profileNumbers }>
                                14.4k
                            </Text>
                            <Text style={ styles.profileSpecificsText }>
                                followers
                            </Text>
                        </View>
                        <View style={ styles.profileSpecifics }>
                            <Text style={ styles.profileNumbers }>
                                272
                            </Text>
                            <Text style={ styles.profileSpecificsText }>
                                following
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.buttonOptionsContainer }>
                        <View style={ styles.followButtonContainer }>
                            <ViewProfileButton 
                                placeholderText={'Follow'}
                                // onPress={() => navigation.navigate('ProfileNav', {
                                //     screen: 'Edit Profile',
                                //     params: { 
                                //         userInfo: userInfo
                                //     }
                                // }) }
                            />
                            <ViewProfileButton 
                                placeholderText={'Message'}
                                // onPress={() => navigation.navigate('ProfileNav', {
                                //     screen: 'Edit Profile',
                                //     params: { 
                                //         userInfo: userInfo
                                //     }
                                // }) }
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={ styles.bioContainer }>
                <View>
                    <Text style={ styles.username }>
                        { userInfo.fullName }
                    </Text>
                </View>
                <Pressable
                    style={({ pressed }) => [
                        {
                            opacity: pressed ?
                        0.5
                        :
                        1
                    }
                    ]}
                    onPressOut={() => Linking.openURL('https://' + url)}
                >
                    <Text style={{ color: 'blue' }}>
                        { userInfo.website }
                    </Text>
                </Pressable>
                <View>
                    <Text>
                        { userInfo.bio }
                    </Text>
                </View>
            </View>
        </View>
  )
}

export default ViewProfileInfo

const styles = StyleSheet.create({
    profileInfoContainer: {
        flexDirection: 'row',
        marginHorizontal: '5%',
        paddingVertical: '5%'
    },
    profilePicture: {
        height: '100%',
        width: '30%',
        borderRadius: 100,
    },
    innerProfileInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    profileSpecifics: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileNumbers: {
        fontWeight: 'bold',
        fontSize: 20
    },
    profileSpecificsText: {
        color: '#808080'
    },
    buttonOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '3%'
    },
    followButtonContainer: {
        width: '75%',
        flexDirection: 'row'
    },
    bioContainer: {
        marginHorizontal: '5%',
        marginVertical: '2%'
    },
    username: {
        fontWeight: 'bold'
    }
})