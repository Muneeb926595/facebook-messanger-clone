import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCSM5AuwM7IQcjYcQvWxqi7eYo8uFxPcuY",
    authDomain: "facebook-messenger-clone-1cab6.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-1cab6.firebaseio.com",
    projectId: "facebook-messenger-clone-1cab6",
    storageBucket: "facebook-messenger-clone-1cab6.appspot.com",
    messagingSenderId: "137801888778",
    appId: "1:137801888778:web:3a9f140b59ea1c0f029bf3",
    measurementId: "G-LZZVGB9PNX"
})


const db = firebaseApp.firestore();

export { db };