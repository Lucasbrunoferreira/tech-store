<template>
  <v-app id="bg-produtos">
    <cc-header></cc-header><br>
    <cc-produtos></cc-produtos>
  </v-app>
</template>

<script>
import CcHeader from '../components/produtos-header';
import CcProdutos from '../components/produtos';

export default {
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
