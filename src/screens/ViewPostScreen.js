import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

//Components
import ViewPostHeader from '../components/ViewPostHeader';
import FeedImage from '../components/FeedImage';

const ViewPostScreen = ({ route }) => {
    const { image } = route.params;
    return (
        <SafeAreaView style={ styles.container }>
            <ViewPostHeader />
            <FeedImage item={ image }/>
        </SafeAreaView>
    )
}

export default ViewPostScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    }
})