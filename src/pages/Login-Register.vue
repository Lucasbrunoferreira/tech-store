<template>
  <v-app id="bg-login">
    <v-tabs fixed icons centered>
      <v-tabs-bar dark>
        <v-tabs-slider color="green"></v-tabs-slider>
        <v-tabs-item href="#tab-1">
          <v-icon>directions</v-icon>
          Entrar
        </v-tabs-item>
        <v-tabs-item href="#tab-2">
          <v-icon>add_to_photos</v-icon>
          Registrar
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content v-for="i in 2" :key="i" :id="'tab-' + i">
          <span flat v-if="i == 1">
            <CcLogin></CcLogin>
          </span>
          <span flat v-if="i == 2">
            <CcRegister></CcRegister>
          </span>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </v-app>
</template>

<script>
  import CcLogin from '../components/login';
  import CcRegister from '../components/register';

  export default {
    components: {
      CcLogin,
      CcRegister,
    },
  };
</script>

<style scoped>
#bg-login{
   background: #000 url("../assets/bg_login_register.jpg") no-repeat center top fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
