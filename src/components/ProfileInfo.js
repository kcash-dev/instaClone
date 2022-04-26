import { 
    StyleSheet, 
    Text, 
    View, 
    Image 
} from 'react-native'
import React, { useState, useEffect } from 'react'

//Components
import ProfileOptionsButton from './ProfileOptionsButton'
import ProfileButton from './ProfileButton'

//Firebase
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const ProfileInfo = () => {
    const [ name, setName ] = useState('')
    const [ username, setUsername ] = useState('')
    const auth = getAuth()
    const db = getFirestore()

    const getUserInfo = async () => {
        const docRef = doc(db, 'users', auth.currentUser.uid)
        const docSnap = await getDoc(docRef)

        const userInfo = docSnap.data()

        setName(userInfo.fullName)
        setUsername(userInfo.username)
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
            <View style={ styles.buttonOptionsContainer }>
                <View style={ styles.followButtonContainer }>
                    <ProfileButton placeholderText={'Edit Profile'}/>
                </View>
                <View style={ styles.arrowOptionsContainer }>
                    <ProfileOptionsButton />
                </View>
            </View>
        </View>
  )
}

export default ProfileInfo

const styles = StyleSheet.create({
    profileInfoContainer: {
        flexDirection: 'row'
      },
      profilePicture: {
          height: 90,
          width: 90,
          borderRadius: 100,
          marginHorizontal: 20,
          marginTop: 20,
          marginBottom: 10
      },
      innerProfileInfoContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '55%'
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
          marginHorizontal: 15,
          marginTop: 10
      },
      followButtonContainer: {
        width: '80%'
      },
      arrowOptionsContainer: {
          width: '20%'
      },
      bioContainer: {
        marginHorizontal: 20
      },
      username: {
          fontWeight: 'bold'
      }
})