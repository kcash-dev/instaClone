import { 
    StyleSheet, 
    Text, 
    View, 
    Image 
} from 'react-native'
import React, { useState, useEffect } from 'react'

//Navigation
import { useNavigation } from '@react-navigation/native'

//Components
import ProfileOptionsButton from './ProfileOptionsButton'
import ProfileButton from './ProfileButton'

//Firebase
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const ProfileInfo = () => {
    const [ name, setName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ userInfo, setUserInfo ] = useState()
    const auth = getAuth()
    const db = getFirestore()
    const navigation = useNavigation()

    const getUserInfo = async () => {
        const docRef = doc(db, 'users', auth.currentUser.uid)
        const docSnap = await getDoc(docRef)

        const userInfo = docSnap.data()

        setName(userInfo.fullName)
        setUsername(userInfo.username)
        setUserInfo(userInfo)
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
    <View>
        <View style={ styles.profileInfoContainer }>
            <Image 
                source={{ uri: 'https://i.imgur.com/jEVwln7.jpg' }}
                style={ styles.profilePicture }
            />
            <View>
                <View style={ styles.innerProfileInfoContainer }>
                    <View style={ styles.profileSpecifics }>
                        <Text style={ styles.profileNumbers }>
                            371
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
                        <ProfileButton 
                            placeholderText={'Edit Profile'}
                            onPress={() => navigation.navigate('ProfileNav', {
                                screen: 'Edit Profile',
                                params: { 
                                    userInfo: userInfo
                                 }
                            }) }
                        
                        />
                    </View>
                    <View style={ styles.arrowOptionsContainer }>
                        <ProfileOptionsButton />
                    </View>
                </View>
            </View>
        </View>
        <View style={ styles.bioContainer }>
            <View>
                <Text style={ styles.username }>
                    { name }
                </Text>
            </View>
            <View>
                <Text>
                    My name is Kyle Cash and this is my Instagram. I am not famous.
                </Text>
            </View>
        </View>
    </View>
  )
}

export default ProfileInfo

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
        width: '65%'
    },
    bioContainer: {
        marginHorizontal: '5%',
        marginVertical: '2%'
    },
    username: {
        fontWeight: 'bold'
    }
})