import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDLjq5AkBWdqt_BSz4xOBfgV2s_cFdRQJ4",
    authDomain: "sush-firegram.firebaseapp.com",
    projectId: "sush-firegram",
    storageBucket: "sush-firegram.appspot.com",
    messagingSenderId: "865573783110",
    appId: "1:865573783110:web:f51cf8bd52b8e4fe04ec47"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp};