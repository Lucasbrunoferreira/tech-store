import Vue from 'vue';
import Router from 'vue-router';

import Admin from '@/pages/Admin';
import Inicio from '@/pages/Inicio';
import LoginRegister from '@/pages/Login-Register';
import Produtos from '@/pages/Produtos';

import('vuetify/dist/vuetify.min.css');

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: Produtos,
    },
    {
      path: '/login-register',
      name: 'Login-Register',
      component: LoginRegister,
    },
  ],
});


export default router;

