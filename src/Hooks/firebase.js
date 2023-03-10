import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN ,
  projectId:"practicetrelo2",
  storageBucket: "practicetrelo2.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDIND_ID,
  appId:process.env.REACT_APP_APP_ID,
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const storage = getStorage(app)


