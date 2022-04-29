import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

//Components
import ProfileBar from './ProfileBar';
import ImageOptions from './ImageOptions';
import CaptionContainer from './CaptionContainer';

const FeedImage = ({ item }) => {

  return (
    <View>
        <ProfileBar item={ item } />
        <Image 
            source={{ uri: item.imageURI }}
            style={{ width: '100%', height: 300 }}
        />
        <ImageOptions item={ item }/>
        <CaptionContainer item={ item } />
    </View>
  )
}

export default FeedImage

const styles = StyleSheet.create({})