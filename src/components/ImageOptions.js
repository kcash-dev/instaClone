import { 
    StyleSheet, 
    Pressable, 
    View
} from 'react-native'
import React, { useState, useEffect } from 'react'

//Icons
import { FontAwesome } from '@expo/vector-icons';

//Navigation
import { useNavigation } from '@react-navigation/native';

//Firebase
import { 
    doc, 
    updateDoc, 
    getFirestore, 
    getDoc, 
    arrayUnion, 
    arrayRemove,
    onSnapshot 
} from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const ImageOptions = ({ item }) => {
    const [ liked, setLiked ] = useState(false)
    const [ likedUsers, setLikedUsers ] = useState()
    const navigation = useNavigation()

    const firestore = getFirestore()
    const auth = getAuth()
    const photoRef = doc(firestore, 'posts', item.caption)

    const getLikes = async () => {
        const photoSnap = await getDoc(photoRef)

        if (photoSnap.exists()) {
            setLikedUsers(photoSnap.data().likes)
            photoSnap.data().likes.forEach(user => {
                if (user === auth.currentUser.uid) {
                    setLiked(true)
                } else {
                    setLiked(false)
                }
            })
        }
    }

    useEffect(() => {
        getLikes()
    }, [])

    console.log(auth.currentUser)

    const addOrRemoveLike = async () => {
        likedUsers.forEach(async user => {
            if (user === auth.currentUser.uid) {
                await updateDoc(photoRef, {
                    likes: arrayRemove(auth.currentUser.uid)
                })
                getLikes()
            } else {
                await updateDoc(photoRef, {
                    likes: arrayUnion(auth.currentUser.uid)
                })
                getLikes()
            }
        })
    }

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
                onPressOut={() => addOrRemoveLike()}
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
            <Pressable>

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