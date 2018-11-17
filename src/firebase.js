import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAriz89ehrp4e6kaaf13b4qxM13UsDUMk4",
  authDomain: "react-slack-chat-27b7a.firebaseapp.com",
  databaseURL: "https://react-slack-chat-27b7a.firebaseio.com",
  projectId: "react-slack-chat-27b7a",
  storageBucket: "react-slack-chat-27b7a.appspot.com",
  messagingSenderId: "704970019795"
};
firebase.initializeApp(config);

export default firebase;