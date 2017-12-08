<template>  
 <div>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
  </v-carousel><br>
  <v-card style="height:80px; background:rgba(0,0,0,0.1);padding-top:16px">
   <v-layout text-xs-center>
    <v-flex xs12 sm3 offset-sm3>
     <v-btn round flat color="black"   to="/destaque">Destaque</v-btn>
    </v-flex >
    <v-flex xs12 sm3>
     <v-btn round flat color="black"  v-on:click="logout">Sair</v-btn>
    </v-flex>
    </v-layout>
  </v-card>
 </div>
</template>
<script>
/* eslint-disable */
import firebase from 'firebase';

export default {
  name: 'produtos-cabecalho',
  data() {
    return {
      items: [
        {
          src: 'src/assets/carrosel01.jpeg',
        },
        {
          src: 'src/assets/carrosel02.jpeg',
        },
      ],
    };
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
