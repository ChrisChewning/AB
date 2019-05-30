import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCyviyvm60HgNfevSKThsUpmcKQruoIUWM",
  authDomain: "austinbrews-9c816.firebaseapp.com",
  databaseURL: "https://austinbrews-9c816.firebaseio.com",
  projectId: "austinbrews-9c816",
  storageBucket: "austinbrews-9c816.appspot.com",
  messagingSenderId: "515264701824",
  appId: "1:515264701824:web:cf4067e58203d62c"
};
firebase.initializeApp(firebaseConfig)

export const database = firebase.database().ref('posts/');
//anything we make from the db will be in reference to the posts.
//users coul dbe const users = firebase.database().ref('users/');
