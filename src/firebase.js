// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3Fk0MGDI9SuxOEKTEWXLxFq2k9VFlQyQ',
  authDomain: 'reddit-clone-4b3ef.firebaseapp.com',
  projectId: 'reddit-clone-4b3ef',
  storageBucket: 'reddit-clone-4b3ef.appspot.com',
  messagingSenderId: '1081348895015',
  appId: '1:1081348895015:web:7a2f74cd3e0cdd8a787902',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);
