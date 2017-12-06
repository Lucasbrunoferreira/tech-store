/* eslint-disable */
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyByMkFa0RS4vbJOcO-ljmUst7ohbjx1dtg',
  authDomain: 'tech-store-80b74.firebaseapp.com',
  databaseURL: 'https://tech-store-80b74.firebaseio.com',
  projectId: 'tech-store-80b74',
  storageBucket: 'tech-store-80b74.appspot.com',
  messagingSenderId: '37861070063',
});

export const db = firebaseApp.database();
