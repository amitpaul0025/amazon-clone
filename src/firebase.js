//import firebase from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions
require('firebase/auth')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANPk-9RMKxjbRMt9IbFbvAZuvAwhi13Eg",
  authDomain: "clone-d31fb.firebaseapp.com",
  databaseURL: "https://clone-d31fb.firebaseio.com",
  projectId: "clone-d31fb",
  storageBucket: "clone-d31fb.appspot.com",
  messagingSenderId: "136333672773",
  appId: "1:136333672773:web:f7ad4c5c1b1254e2c1be2c",
  measurementId: "G-0D8S40J0WW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};