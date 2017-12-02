/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

import Admin from '@/pages/Admin';
import Inicio from '@/pages/Inicio';
import LoginRegister from '@/pages/Login-Register';
import Produtos from '@/pages/Produtos';
import Sugestao from '@/pages/Sugestao';
import firebase from 'firebase'

import('vuetify/dist/vuetify.min.css');

Vue.use(Router);

let router = new Router({
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
    {
      path: '/sugestao',
      name: 'Sugestao',
      component: Sugestao,
    },
  ],
});


export default router;

