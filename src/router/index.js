import Vue from 'vue';
import Router from 'vue-router';
import PaginaInicio from '@/components/PaginaInicio';

import('vuetify/dist/vuetify.min.css');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PaginaInicio',
      component: PaginaInicio,
    },
  ],
});
