<template>
  <v-app id="bg-produtos">
    <cc-header></cc-header><br>
    <cc-produtos></cc-produtos>
    <v-footer color="grey darken-4" class="pa-3">
      <v-spacer></v-spacer><div style="color:#fff">TechStore © {{ new Date().getFullYear() }} &emsp; Lucas Bruno <a href="https://github.com/lucasbrunoferreira">GITHUB </a></div>
    </v-footer>
  </v-app>
</template>

<script>
import CcHeader from '../components/CcProdutosHeader';
import CcProdutos from '../components/CcProdutos';

export default {
  name: 'page-produtos',
  components: {
    CcHeader,
    CcProdutos,
  },
};
</script>

<style scoped>
#bg-produtos{
  background: #DEDEDE;
}
</style>
