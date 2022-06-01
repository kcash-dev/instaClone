import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList 
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


const SearchScreen = () => {
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

  console.log(userProfiles)

  return (
    <View>
      <FlatList 
        data={ userProfiles }
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

const styles = StyleSheet.create({})