<template>
  <v-app id="background-inicio">
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 offset-xs2 offset-sm0 sm3 md2>
          <img id="logo" src="../assets/logo.png">
        </v-flex>
        <v-flex class="text-xs-center" id="btns">
          <v-btn outline round color="white" to="/produtos">Produtos</v-btn>
          <v-btn outline round color="white" to="/login-register">Entrar</v-btn>
        </v-flex>
      </v-layout>
     <v-layout row id="box-ajuda">
       <v-flex offset-xs1>
        <h1 id="ajuda">&nbsp;Seja Bem Vindo!</h1><br>
        <h2 id="ajuda">Precisa de uma sugestão?</h2> 
       </v-flex>
    </v-layout>
    <v-layout id="btn-ajuda">
      <v-flex offset-xs1>
        <v-btn small outline round color="green" to="/sugestao" v-on:click="ola" >vamos lá</v-btn> <!---->
      </v-flex>
    </v-layout>
    </v-container>
    <v-footer color="grey darken-4" class="pa-3">
      <v-spacer></v-spacer><div style="color:#fff">TechStore © {{ new Date().getFullYear() }} &emsp; Lucas Bruno <a href="https://github.com/lucasbrunoferreira">GITHUB </a></div>
    </v-footer>
  </v-app>
</template>
  
<script>
/* eslint-disable */
import firebase from "firebase";

export default {
  methods: {
    ola: function() {
      let currentUser = firebase.auth().currentUser;
      alert(currentUser.email);
    }
  }
};
</script>

<style scoped>
#background-inicio {
  background: #000 url("../assets/bg_inicio.jpg") no-repeat center top fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#ajuda {
  font-family: "Dancing Script", cursive;
  color: #fff;
}
#box-ajuda {
  padding: 7% 0% 0%;
}
#logo {
  width: 100%;
}
#btns {
  padding-top: 12px;
}
#btn-ajuda {
  padding-left: 40px;
}
@media screen and (max-width: 650px) {
  #box-ajuda {
    padding: 70% 0% 2% 15%;
  }
  #btn-ajuda {
    padding-left: 28%;
  }
}
</style>

