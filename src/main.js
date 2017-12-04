/* eslint-disable */
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import VueFire from 'vuefire'
import firebase from 'firebase';

Vue.use(Vuetify);
Vue.use(firebase);
Vue.use(VueFire)

Vue.config.productionTip = false;

 new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
});
