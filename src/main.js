/* eslint-disable */
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import firebase from 'firebase';

Vue.use(Vuetify);
Vue.use(firebase);

Vue.config.productionTip = false;

Vue.component('calculo', {
  template: '<h2>Lucas Bruno</h2>',
});

let app;
let config = {
  apiKey: "AIzaSyDeNmgBsx-IJCg5d2KwPRSt_ttEjgyE9k4",
  authDomain: "techstore-fa054.firebaseapp.com",
  databaseURL: "https://techstore-fa054.firebaseio.com",
  projectId: "techstore-fa054",
  storageBucket: "techstore-fa054.appspot.com",
  messagingSenderId: "1061290215626"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
