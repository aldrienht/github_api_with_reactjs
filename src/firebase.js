import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBZxD2EcJKmX_4qmz7pUCx-8EjX0msqTMM",
  authDomain: "learning-reactjs-71abb.firebaseapp.com",
  databaseURL: "https://learning-reactjs-71abb.firebaseio.com",
  projectId: "learning-reactjs-71abb",
  storageBucket: "learning-reactjs-71abb.appspot.com",
  messagingSenderId: "876345646477"
};

export const firebaseApp = firebase.initializeApp(config);
