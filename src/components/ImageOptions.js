import { 
    StyleSheet, 
    Pressable, 
    View
} from 'react-native'
import React, { useState } from 'react'

//Icons
import { FontAwesome } from '@expo/vector-icons';

//Navigation
import { useNavigation } from '@react-navigation/native';

const ImageOptions = ({ item }) => {
    const [ liked, setLiked ] = useState(false)
    const navigation = useNavigation()

    return (
        <View style={ styles.imageOptions }>
            <Pressable
                style={({ pressed }) => [
                {
                    opacity: pressed ?
                    0.5
                    :
                    1
                }
                ]}
                onPressOut={() => setLiked(!liked)}
            >
                { liked ? 
                <FontAwesome 
                    name="heart" 
                    size={24} 
                    color="black" 
                    style={{ paddingHorizontal: 10 }}
                />
                :
                <FontAwesome 
                    name="heart-o" 
                    size={24} 
                    color="black" 
                    style={{ paddingHorizontal: 10 }}
                />
                }
            </Pressable>
            <Pressable
                style={({ pressed }) => [
                {
                    opacity: pressed ?
                    0.5
                    :
                    1
                }
                ]}
                onPressOut={() => navigation.navigate('CommentsNav', {
                    screen: 'Comments',
                    params: {
                        item: item
                    }
                })}
            >
                <FontAwesome 
                    name="comment-o" 
                    size={24} 
                    color="black" 
                    style={{ paddingHorizontal: 10 }}
                />
            </Pressable>
            <Pressable
                style={({ pressed }) => [
                {
                    opacity: pressed ?
                    0.5
                    :
                    1
                }
                ]}
            >
                <FontAwesome 
                    name="send-o" 
                    size={24} 
                    color="black" 
                    style={{ paddingHorizontal: 10 }}
                />
            </Pressable>
            <Pressable
                style={({ pressed }) => [
                {
                    opacity: pressed ?
                    0.5
                    :
                    1
                },
                styles.bookmarkButton
                ]}
            >
                <FontAwesome 
                    name="bookmark-o" 
                    size={24} 
                    color="black" 
                    style={{ paddingHorizontal: 10 }}
                />
            </Pressable>
        </View>
    )
}

export default ImageOptions

const styles = StyleSheet.create({
    imageOptions: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        alignItems: 'center'
    },
    bookmarkButton: {
        position: 'absolute',
        right: 10
    },
})