// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithCredential, signInWithPopup, setPersistence } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "clone-4b753.firebaseapp.com",
  projectId: "clone-4b753",
  storageBucket: "clone-4b753.appspot.com",
  messagingSenderId: "634134464547",
  appId: "1:634134464547:web:0ea8a3b3c52dd0a93b0996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth(app);


export const signInWithGoogle = async () => {
  const authResponse = await signInWithPopup(auth, provider)

  try {
    const token = GoogleAuthProvider.credentialFromResult(authResponse);

    const profile = {
      name: authResponse.user.displayName,
      email: authResponse.user.email,
      profilePic: authResponse.user.photoURL,
    }

    return {  profile, token }
  } catch (error) {
    return { error }
  }
};
