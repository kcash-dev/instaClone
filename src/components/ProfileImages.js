import { 
  StyleSheet, 
  View, 
  FlatList, 
  Pressable, 
  Alert, 
  Text 
} from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'

//Firebase
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { auth } from '../auth/firebase'

//Components
import ProfileImageComp from './ProfileImageComp'

//Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileImages = () => {
  const [ scroll, setScroll ] = useState(false)
  const [ DATA, setDATA ] = useState()

  useEffect( async () => {
    const currentUser = auth.currentUser.uid
    const firestore = getFirestore()
    const userRef = doc(firestore, 'users', currentUser);
    const docSnap = await getDoc(userRef)
    let userInfo;

    if(docSnap.exists()) {
      userInfo = docSnap.data()
      setDATA(userInfo)
    } else {
      Alert.alert('No images found!')
    }

    if(DATA.posts.length >= 7) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }, [ DATA ])

  const renderItem = useCallback(
    ({ item }) => <ProfileImageComp item={ item.imageURI } data={item} />,
    []
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <View style={ styles.container }>
      <View style={ styles.profileChoices }>
        <Pressable style={({ pressed }) => [
          {
            opacity: pressed ?
            0.5
            :
            1
          }
        ]}>
          <MaterialIcons 
            name="border-all" 
            size={30} 
            color='#a9a9a9' 
            style={ styles.profileIcon }
          />
        </Pressable>
        <Pressable style={({ pressed }) => [
          {
            opacity: pressed ?
            0.5
            :
            1
          }
        ]}>
          <MaterialCommunityIcons 
            name="format-list-bulleted" 
            size={30} 
            color='#a9a9a9' 
            style={ styles.profileIcon }
          />
        </Pressable>
        <Pressable style={({ pressed }) => [
          {
            opacity: pressed ?
            0.5
            :
            1
          }
        ]}>
          <MaterialIcons 
            name="location-pin" 
            size={30} 
            color='#a9a9a9' 
            style={ styles.profileIcon }
          />
        </Pressable>
        <Pressable style={({ pressed }) => [
          {
            opacity: pressed ?
            0.5
            :
            1
          }
        ]}>
          <MaterialCommunityIcons 
            name="clipboard-account" 
            size={30} 
            color='#a9a9a9' 
            style={ styles.profileIcon }
          />
        </Pressable>
      </View>
      { DATA?.posts === undefined ?
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={{ fontSize: 18, color: '#808080' }}>
            You don't have any posts yet.
          </Text>
        </View>
        :
        <FlatList
          data={DATA?.posts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={ 3 }
          columnWrapperStyle={ styles.row }
          scrollEnabled={ scroll }
          showsVerticalScrollIndicator={ false }
        />

      }
    </View>
  )
}

export default ProfileImages

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileChoices: {
    borderTopColor: '#D3D3D3',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileIcon: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  row: {
    flex: 1,
    marginVertical: 1,
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end'
  }
})