import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAELQy2WpAMNkMyLnhd9idpAgPCPKg_y2Q",
    authDomain: "clothify-5dda0.firebaseapp.com",
    databaseURL: "https://clothify-5dda0-default-rtdb.firebaseio.com",
    projectId: "clothify-5dda0",
    storageBucket: "clothify-5dda0.appspot.com",
    messagingSenderId: "10636985651",
    appId: "1:10636985651:web:36ce0fc8b829d4273aaa46",
    measurementId: "G-SKY8GK2898"
  });

const db = firebaseApp.firestore()
const auth = firebase.auth()
var provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }