import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
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

//Components
import SearchResultComponent from '../components/SearchResultComponent';

//Icons
import { MaterialIcons } from '@expo/vector-icons';

const SearchScreen = () => {
  const [ userProfiles, setUserProfiles ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ filteredProfiles, setFilteredProfiles ] = useState([])
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
      setFilteredProfiles(users)
  }

  const filterProfiles = (text) => {
    if (text) {
      const newData = userProfiles.filter(item => {
        const itemData = item.userInfo.username ? item.userInfo.username.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1;
      });
      setFilteredProfiles(newData)
      setSearchTerm(text)
    } else {
      setFilteredProfiles(userProfiles)
      setSearchTerm(text)
    }
  }

  useEffect(() => {
    getUserInfo()

    return () => {
      setSearchTerm('')
      setFilteredProfiles([])
      setUserProfiles([])
    }
  }, [])

  return (
    <View style={ styles.container }>
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
                autoCapitalize='none'
            />
        </View>
      <FlatList 
        data={ filteredProfiles }
        renderItem={({ item }) => 
          <SearchResultComponent 
            userInfo={ item.userInfo }
          />
        }
        keyExtractor={item => item.userInfo.username}
      />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
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