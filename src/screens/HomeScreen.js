import { 
  StyleSheet, 
  FlatList, 
  SafeAreaView, 
  Text 
} from 'react-native'
import 
React, 
{ 
  useState, 
  useEffect,
  useCallback 
} from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
  collection, 
  getDocs, 
  getFirestore 
} from 'firebase/firestore'

//Components
import FeedImage from '../components/FeedImage'

const HomeScreen = () => {
  const [ data, setData ] = useState()
  const firestore = getFirestore()
  
  useEffect( async () => {
    const docs = []
    const querySnapshot = await getDocs(collection(firestore, 'posts'))
    querySnapshot.forEach((doc) => {
      docs.push(doc.data())
    })

    setData(docs)
  }, [])

  const renderItem = useCallback(
    ({ item }) => <FeedImage item={ item }/>,
    []
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const navigation = useNavigation()
  return (
    <SafeAreaView style={ styles.container }>
     { data ?
      <FlatList 
        data={ data }
        renderItem={ renderItem }
        keyExtractor={ keyExtractor }
        contentContainerStyle={{ justifyContent: 'flex-end' }}
        inverted
        showsVerticalScrollIndicator={ false }
      />
    :
      <Text>
        You haven't followed anyone yet.
      </Text>
    } 
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
})