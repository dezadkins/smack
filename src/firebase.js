// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-UJtxSsHs8ihiBJl_T3Pb1n-_9bNn2Io",
  authDomain: "smack-13b2c.firebaseapp.com",
  projectId: "smack-13b2c",
  storageBucket: "smack-13b2c.appspot.com",
  messagingSenderId: "299985704054",
  appId: "1:299985704054:web:a8c5145ca3c47bb501fb57",
  measurementId: "G-R8TC0W5GC5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

// Cloud Firestore ...rules

// rules_version = '2';

// service cloud.firestore {

//   match /databases/{database}/documents {

//     match /{document=**} {

//       allow read, write: if

//           request.time < timestamp.date(2021, 3, 30);

//     }

//   }

// }
