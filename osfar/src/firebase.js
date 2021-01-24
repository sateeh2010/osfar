import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZtu1d8wUuKqZSYot8_qCYzuyPzVXv0Ks",
    authDomain: "osfar-4b6d1.firebaseapp.com",
    projectId: "osfar-4b6d1",
    storageBucket: "osfar-4b6d1.appspot.com",
    messagingSenderId: "317680878372",
    appId: "1:317680878372:web:e4740f0267c24cec08a9b1",
    measurementId: "G-BPNG48D6K1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };