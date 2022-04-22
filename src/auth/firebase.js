import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../config/firebaseauth'
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { getFirestore, addDoc, setDoc, doc, collection } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native'; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const auth = getAuth();

const registration = async (email, password, fullName, username) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user
      const docRef = await addDoc(collection(firestore, "users"), {
        email: email,
        fullName: fullName,
        username: username
      });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

  const signIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  }

  async function loggingOut() {
    try {
      signOut(auth).then(() => {
        console.log('The user has been signed out')
      }).catch((error) => {
        console.error(error)
      });
    } catch (err) {
      Alert.alert('There is something wrong!', err.message);
    }
  }

export { auth, onAuthStateChanged, registration, signIn, loggingOut };