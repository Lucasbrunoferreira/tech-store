<template>
 <v-container>
  <v-layout>
   <v-flex class="text-xs-center" style="padding:4% 4%">
    <h1 style="color:#fff">Cadastre-se:</h1>
   </v-flex>
  </v-layout>
  <v-layout class="text-xs-center">
   <v-flex offset-sm2 offset-md3 md6 xs12 sm8 id="box">
    <v-form ref="form" lazy-validation id="form">
     <v-text-field dark class="grey--text text--lighten-1" type="email" v-model="email" label="E-mail" ></v-text-field>
     <v-text-field dark class="grey--text text--lighten-1" label="Senha" type="Password" v-model="password"></v-text-field>
     <v-text-field dark class="grey--text text--lighten-1" label="Confirme a senha"  type="password"></v-text-field>
     <v-layout style="padding:5%;">
      <v-flex offset-xs3 xs6>
       <v-btn round outline block color="green" v-on:click="signUp" >Cadastrar</v-btn>
      </v-flex>      
     </v-layout>
    </v-form>
   </v-flex>
  </v-layout>
  <v-flex style="padding-top:5%;" class="text-xs-center"><a style="text-decoration:none; color:#fff;" href="">VOLTAR AO INÍCIO</a></v-flex>        
 </v-container>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase';

export default {
  name: 'signUp',
  data: function () {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signUp: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert('Cadastro efetuado com secesso!');
            location.reload();
          },
          err => {
            alert('Algum campo ficou incorreto!');
          },
        );
    },
  },
};
</script>

<style scoped>
  #box {
    background: rgba(0, 0, 0, 0.4);
    padding: 2% 6%;
  }
  #logo {
    width: 220px;
  }
  input[type="file"] {
    color: #fff;
  }
</style>
