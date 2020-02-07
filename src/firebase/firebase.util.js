import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBZ6kGHOfamg0X4KzIWTDQt233is8kR-e0",
    authDomain: "crwn-db-87bbf.firebaseapp.com",
    databaseURL: "https://crwn-db-87bbf.firebaseio.com",
    projectId: "crwn-db-87bbf",
    storageBucket: "crwn-db-87bbf.appspot.com",
    messagingSenderId: "769938893506",
    appId: "1:769938893506:web:376c15509ba18252f9695b"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();     
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;