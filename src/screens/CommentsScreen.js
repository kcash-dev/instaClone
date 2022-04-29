import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

//Components
import CommentsHeader from '../components/CommentsHeader'
import CommentSection from '../components/CommentSection'

const CommentsScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <SafeAreaView style={ styles.container }>
            <CommentsHeader />
            <CommentSection item={ item }/>
        </SafeAreaView>
    )
}

export default CommentsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})