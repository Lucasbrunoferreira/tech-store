import Vue from 'vue';
import Router from 'vue-router';

import Admin from '@/pages/PageAdmin';
import Inicio from '@/pages/PageInicio';
import LoginRegister from '@/pages/PageLoginRegister';
import Produtos from '@/pages/PageProdutos';
import Destaque from '@/pages/PageDestaque';

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
    {
      path: '/destaque',
      name: 'Destaque',
      component: Destaque,
    },
  ],
});


export default router;

