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
     <v-text-field dark class="grey--text text--lighten-1" type="email" v-model="email" label="E-mail"></v-text-field>
     <v-text-field dark class="grey--text text--lighten-1" label="Senha" type="Password" id="senha" v-model="password"></v-text-field>
     <v-text-field dark class="grey--text text--lighten-1" label="Confirme a senha" id="csenha" type="password" v-model="confirmacao"></v-text-field>
     <v-layout style="padding:5%;">
      <v-flex offset-xs3 xs6>
       <v-btn round outline block color="green" v-on:click="signUp" >Cadastrar</v-btn>
      </v-flex>
     </v-layout>
    </v-form>
   </v-flex>
  </v-layout>
  <v-flex offset-xs4 xs4>
    <v-alert outline color="success" icon="check_circle" :value="true" v-if="cadastroSuccess">
      Cadastro efetuado com Sucesso!
   </v-alert>
    <v-alert outline color="error" icon="warning" :value="true" v-if="cadastroError">
      E-mail inválido ou já em uso!
   </v-alert>
  </v-flex>
  <v-flex style="padding-top:5%;" class="text-xs-center"><a style="text-decoration:none; color:#fff;" href="">VOLTAR AO INÍCIO</a></v-flex>
 </v-container>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase';

export default {
  name: 'registrar',
  data: function () {
    return {
      email: '',
      password: '',
      confirmacao: '',
      cadastroSuccess: false,
      cadastroError: false
    };
  },
  methods: {
    signUp: function () {
      let self = this
      if(this.password != this.confirmacao){
        alert('As senhas não se coicidem!');
        return false;
      }
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.cadastroSuccess = true,
            this.email = '',
            this.password = '',
            this.confirmacao = ''
            setTimeout(function(){
            self.cadastroSuccess = false
            },4000)
          },
          err => {
            this.cadastroError = true
            setTimeout(function(){
            self.cadastroError = false
            },4000)
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
