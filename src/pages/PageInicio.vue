<template>
  <v-app id="background-inicio">
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 offset-xs2 offset-sm0 sm3 md2>
          <img id="logo" src="../assets/logo.png">
        </v-flex>
        <v-flex class="text-xs-center" id="btns">
          <v-btn outline round color="white" to="/destaque">Destaque</v-btn>
          <v-btn outline round color="white" to="/login-register">Entrar</v-btn>
        </v-flex>
      </v-layout>
     <v-layout row id="box-ajuda">
       <v-flex offset-xs1>
        <h1 id="ajuda">&nbsp;Seja Bem Vindo!</h1><br>
       </v-flex>
    </v-layout>
    </v-container>
    <v-footer color="grey darken-4" class="pa-3">
      <v-spacer></v-spacer><div style="color:#fff">TechStore © {{ new Date().getFullYear() }} &emsp; Lucas Bruno <a href="https://github.com/lucasbrunoferreira">GITHUB </a></div>
    </v-footer>
  </v-app>
</template>
  
<script>
export default {
  name: 'page-inicio',
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
  padding: 10% 0% 0%;
}
#logo {
  width: 100%;
}
#btns {
  padding-top: 12px;
}

</style>

