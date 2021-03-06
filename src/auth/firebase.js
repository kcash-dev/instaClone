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
import { 
  getFirestore, 
  addDoc, 
  setDoc, 
  doc, 
  collection 
} from 'firebase/firestore';

import {
  getStorage,
  ref,
  uploadBytes
} from 'firebase/storage'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const storage = getStorage();

let userUID;

//Registration
const registration = async (email, password, fullName, username) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user
      userUID = user.uid
      await setDoc(doc(firestore, "users", user.uid), {
        email: email,
        fullName: fullName,
        username: username,
        bio: '',
        website: '',
        posts: []
      })
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

//Sign In
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

//Sign Out
async function loggingOut() {
  try {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.error(error)
    });
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export { auth, storage, ref, uploadBytes, onAuthStateChanged, registration, signIn, loggingOut };