import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyCHqdvES80-Mm5zyOnpuJfi7b5nYOe4IGc",
    authDomain: "facebook-messenger-clone-1affc.firebaseapp.com",
    projectId: "facebook-messenger-clone-1affc",
    storageBucket: "facebook-messenger-clone-1affc.appspot.com",
    messagingSenderId: "421995452568",
    appId: "1:421995452568:web:6071a5591136ad864f98ed",
    measurementId: "G-HYTR6RY9GV"
      
});

const db = firebaseApp.firestore();

export default db;