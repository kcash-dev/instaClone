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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();

let userUID;

//Registration
const registration = async (email, password, fullName, username) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user
      userUID = user.uid
      const docRef = await setDoc(doc(firestore, "users", user.uid), {
        email: email,
        fullName: fullName,
        username: username,
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
async function uploadPost(post) {
  const docRef = doc(firestore, "users", userUID);
  setDoc(docRef, {posts: {
    id: post.id,
    photo: post.photo,
    title: post.title,
    caption: post.caption,
    likes: []
  }}, { merge: true })
}

export { auth, onAuthStateChanged, registration, signIn, loggingOut, uploadPost };