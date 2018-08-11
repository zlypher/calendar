import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCmSc9ocBnGtjI4DnWedx3oGWQVjBltQ7g",
    authDomain: "chain-ae54b.firebaseapp.com",
    databaseURL: "https://chain-ae54b.firebaseio.com",
    projectId: "chain-ae54b",
    storageBucket: "chain-ae54b.appspot.com",
    messagingSenderId: "42258803359"
  })
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase;
