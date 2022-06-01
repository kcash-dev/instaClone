import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput 
} from 'react-native'
import React, {
    useState,
    useEffect
  } from 'react'
  
  //Firebase
  import { 
    collection, 
    getDocs, 
    getFirestore 
  } from "firebase/firestore";

//Icons
import { MaterialIcons } from '@expo/vector-icons';

const SearchComponent = ({ getFilteredProfiles }) => {
    const [ searchTerm, setSearchTerm ] = useState('')
    const [ filteredProfiles, setFilteredProfiles ] = useState([])
    const [ userProfiles, setUserProfiles ] = useState([])
    const firestore = getFirestore()
    
    
    const getUserInfo = async () => {
      const userSnapshot = await getDocs(collection(firestore, 'users'))
      const users = []
      userSnapshot.forEach((doc) => {
        users.push({
          userInfo: doc.data()
        })
      })
      setUserProfiles(users) 
    }
  
    useEffect(() => {
      getUserInfo()
    }, [])

    const filterProfiles = (text) => {
        if (text) {
            const newData = userProfiles.filter(item => {
                const itemData = item.username ?
                    item.username.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            });
            setFilteredProfiles(newData)
            setSearchTerm(text);
            getFilteredProfiles(filteredProfiles)
        }
    }

    return (
        <View style={ styles.searchContainer }>
            <MaterialIcons 
                name="search" 
                size={24} 
                color="black"
                style={ styles.icon }
            />
            <TextInput 
                style={ styles.textInput }
                value={ searchTerm }
                onChangeText={ text => filterProfiles(text) }
                placeholder='Search'
            />
        </View>
    )
}

export default SearchComponent

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#ECECEC',
        width: '90%',
        borderRadius: 50,
        alignSelf: 'center',
        height: '8%',
        alignItems: 'center',
        marginVertical: '2%'
    },
    icon: {
        paddingHorizontal: '3%'
    },
    textInput: {
        width: '85%'
    }
})