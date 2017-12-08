<template>
 <v-app id="bg-destaque">
  <v-parallax src="src/assets/parallax_predator_2.jpg">
  </v-parallax>
  <v-card style="background:rgba(255,255,255,0.1);padding-top:px">
   <v-layout text-xs-center>
    <v-flex xs12 sm10 offset-sm1>
     <v-btn round flat color="white" to="/#">Inicio</v-btn>
    </v-flex >
   </v-layout>
   <v-parallax src="src/assets/parallax_predator.png">
    <v-layout column align-center justify-center>
     <h1 class="white--text">DESTAQUE DOS EDITORES</h1>
     <h4> <a href="https://www.acer.com/ac/pt/BR/content/predator-series/predatortriton700">Pagina Oficial</a></h4>
    </v-layout>
   </v-parallax>
   <v-parallax src="src/assets/predator_info.jpg"></v-parallax>
  </v-card>
  <v-footer color="grey darken-4" class="pa-3">
   <v-spacer></v-spacer><div style="color:#fff">TechStore © {{ new Date().getFullYear() }} &emsp; Lucas Bruno <a href="https://github.com/lucasbrunoferreira">GITHUB </a></div>
  </v-footer>
 </v-app>
</template>

<script>
export default {
  name: 'page-destaque',
};
</script>

<style scoped>
#bg-destaque{
  background: #000;
}
</style>


