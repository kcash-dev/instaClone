import { 
  StyleSheet, 
  FlatList, 
  SafeAreaView, 
  Text,
  View 
} from 'react-native'

import 
React, 
{ 
  useState, 
  useEffect,
  useCallback 
} from 'react'

import { 
  useNavigation 
} from '@react-navigation/native'

import { 
  collection, 
  getDocs, 
  getFirestore 
} from 'firebase/firestore'

//Components
import FeedImage from '../components/FeedImage'

const HomeScreen = () => {
  const [ data, setData ] = useState([])
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

  console.log(data)

  const keyExtractor = useCallback(item => item?.id.toString(), []);

  const navigation = useNavigation()
  return (
    <SafeAreaView style={ styles.container }>
     { data.length > 0 ?
      <FlatList 
        data={ data }
        renderItem={ renderItem }
        keyExtractor={ keyExtractor }
        inverted
        showsVerticalScrollIndicator={ false }
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
      />
    :
      <View style={ styles.alternateContainer }>
        <Text>
          There are no posts yet.
        </Text>
      </View>
    } 
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  alternateContainer: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})