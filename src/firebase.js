import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-WmHCuVm3a51AHUjwVztIz7eQArqfz1Q",
    authDomain: "facebook-messanger-clone-e19b4.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-e19b4.firebaseio.com",
    projectId: "facebook-messanger-clone-e19b4",
    storageBucket: "facebook-messanger-clone-e19b4.appspot.com",
    messagingSenderId: "759181121678",
    appId: "1:759181121678:web:090f4e0f53e135b82811df",
    measurementId: "G-4HQNBTXXCG"
})


const db = firebaseApp.firestore();

export { db };