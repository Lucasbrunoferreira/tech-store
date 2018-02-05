/* eslint-disable */
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
});

export const db = firebaseApp.database();
