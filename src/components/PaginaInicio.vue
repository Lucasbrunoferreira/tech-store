<template>
  <v-app id="background-inicio">
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 offset-xs2 offset-sm0 sm3 md2>
          <img id="logo" src="../assets/logo.png">
        </v-flex>
        <v-flex offset-md6 offset-sm4 offset-xs2 id="btns">
          <v-btn outline round color="white">Produtos </v-btn>
          <v-btn outline round color="white">Entrar</v-btn>
        </v-flex>
      </v-layout>
     <v-layout row id="box-ajuda">
       <v-flex>
        <h1 id="ajuda">Precisa de uma sugestão?</h1> 
       </v-flex>
    </v-layout>
    <v-layout id="btn-ajuda">
      <v-flex>
        <v-btn outline round color="green">vamos lá</v-btn>
      </v-flex>
    </v-layout>
    </v-container>
  </v-app>
</template>
  
<script>
</script> 

<style scoped>
#background-inicio{
   background: #000 url("../assets/bg_inicio.jpg") no-repeat center top fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#ajuda{
  font-family: 'Dancing Script', cursive;
  color: #fff;
}
#btn-ajuda{
  padding-left: 65px; 
}
#box-ajuda{
  padding: 10% 0% 0%;
}
#logo{
  width: 100%
}
#btns{
  padding-top: 12px;
}
@media screen and (max-width: 650px) {
  #box-ajuda{padding:70% 0% 2% 15%;}
  #btn-ajuda{padding-left: 32%;}
}

</style>

