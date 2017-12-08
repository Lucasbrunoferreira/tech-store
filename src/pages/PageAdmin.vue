<template>
 <v-app>
  <v-container>
   <v-layout row>
    <v-flex class="text-xs-center">
     <v-btn outline fab color="green" to="/produtos">
      <v-icon>home</v-icon>
     </v-btn>         
     <v-btn outline fab color="red" v-on:click="logout">
      <v-icon>exit_to_app</v-icon>
     </v-btn>        
    </v-flex>
   </v-layout>
   <v-tabs fixed icons centered>
    <v-tabs-bar>
     <v-tabs-slider color="blue"></v-tabs-slider>
     <v-tabs-item href="#tab-1">
      <v-icon>create</v-icon>Novo
     </v-tabs-item>
     <v-tabs-item href="#tab-2">
      <v-icon>list</v-icon>Todos
     </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items>
     <v-tabs-content v-for="i in 2" :key="i" :id="'tab-' + i">
      <span flat v-if="i == 1">
       <CcAdminNovo></CcAdminNovo>
      </span>
      <span flat v-if="i == 2">
       <CcAdminProdutos></CcAdminProdutos>
      </span>
     </v-tabs-content>
    </v-tabs-items>
   </v-tabs>
  </v-container>
 </v-app>
</template>

<script>
/* eslint-disable */
import CcAdminNovo from '../components/CcAdminNovo';
import CcAdminProdutos from '../components/CcAdminProdutos';
import firebase from 'firebase';

export default {
  name: 'page-admin',
  components: {
    CcAdminNovo,
    CcAdminProdutos,
  },
  methods: {
    logout: function () {
      firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.replace('/');
      });
    },
  },
};
</script>

<style scoped>

</style>
