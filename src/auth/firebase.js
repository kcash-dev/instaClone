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
      console.log(user.uid)
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
      console.log('The user has been signed out')
    }).catch((error) => {
      console.error(error)
    });
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

//Upload Post
async function uploadNewPost(image) {
  try {
    const imageRef = ref(storage, 'image.jpg')
    const img = image.uri
    console.log('uri: ' + img)
    const bytes = img.blob()

    await uploadBytes(imageRef, bytes)

  } catch (err) {
    console.error(err)
  }
}

export { auth, storage, ref, uploadBytes, onAuthStateChanged, registration, signIn, loggingOut, uploadNewPost };