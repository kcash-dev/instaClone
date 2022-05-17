import { 
  StyleSheet, 
  View, 
  FlatList, 
  Pressable,
  Text,
} from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'

//Components
import ProfileImageComp from './ProfileImageComp'

//Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileImages = ({ userInfo }) => {
  const [ scroll, setScroll ] = useState(false)

  useEffect(() => {
    if(userInfo?.posts > 6) {
      setScroll(true)
    } else if (userInfo?.posts <= 6) {
      setScroll(false)
    }
  }, [ userInfo ])

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
      { userInfo ?
       <FlatList
         data={userInfo.posts}
         renderItem={renderItem}
         keyExtractor={keyExtractor}
         numColumns={ 3 }
         columnWrapperStyle={ styles.row }
         scrollEnabled={ scroll }
         showsVerticalScrollIndicator={ false }
       />
        :
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={{ fontSize: 18, color: '#808080' }}>
            You don't have any posts yet.
          </Text>
        </View>
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