import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    Pressable 
} from 'react-native'
import React from 'react'

//Navigation
import { useNavigation } from '@react-navigation/native'

const SearchResultComponent = ({ userInfo }) => {
    const navigation = useNavigation()
    return (
      <Pressable
        style={({ pressed }) => [
            {
                opacity: pressed ? 0.5 : 1
            }
        ]}
        onPress={() => navigation.navigate('ViewProfileNav',
            {
                screen: 'View Profile',
                params: {
                    userInfo: userInfo
                }
            }
        )}
      >
        <View style={ styles.container }>
            <Image 
                source={{ uri: userInfo.profilePicURI }}
                style={ styles.profilePic }
            />
            <View style={ styles.textContainer }>
                <Text style={ styles.usernameText }>{ userInfo.username }</Text>
                <Text style={ styles.nameText }>{ userInfo.fullName }</Text>
            </View>
        </View>
      </Pressable>
  )
}

export default SearchResultComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '3%',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        borderTopWidth: 1,
        borderTopColor: '#ECECEC',
        paddingVertical: '3%'
    },
    profilePic: {
        width: 40, 
        height: 40, 
        borderRadius: 100,
        marginLeft: 10
    },
    textContainer: {
        marginLeft: '3%'
    },
    usernameText: {
        fontWeight: 'bold'
    },
    nameText: {
        color: '#808080'
    }
})