import firebase from 'firebase/app';
import 'firebase/auth';

// With new modular imports
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = { 
  apiKey: "AIzaSyCbv2U9w7nqTjPaiQMZrbpUcOf-E98INQ0",
  authDomain: "hack-6d6bf.firebaseapp.com",
  projectId: "hack-6d6bf",
  storageBucket: "hack-6d6bf.appspot.com",  // Corrected storageBucket URL
  messagingSenderId: "1016964256437",
  appId: "1:1016964256437:web:2b3c07d7ebdfbf3ece64fc",
  measurementId: "G-HVM1EF0D34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Export the auth instance
export { auth };

// Optionally export the app for other uses
export default app;
