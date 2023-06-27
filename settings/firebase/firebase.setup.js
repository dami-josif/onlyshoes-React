// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD77CI0mMsgJRWgIglIXkGD-CHEf0GELTU",
  authDomain: "onlyshoes-fa7f5.firebaseapp.com",
  projectId: "onlyshoes-fa7f5",
  storageBucket: "onlyshoes-fa7f5.appspot.com",
  messagingSenderId: "1068912653912",
  appId: "1:1068912653912:web:dc5ee663d75182fe81fc2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

//firestore
const db = getFirestore(app);


export{auth,db}