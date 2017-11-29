import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';

import PaginaInicio from './components/PaginaInicio';

Vue.use(Vuetify);
Vue.use(PaginaInicio);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
