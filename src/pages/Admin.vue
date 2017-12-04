<template>
  <v-app id="bg-admin">
    <v-container>
      <v-layout row>
        <v-flex class="text-xs-center">
        <v-btn outline fab color="red" v-on:click="logout">
          <v-icon>exit_to_app</v-icon>
        </v-btn>                
        </v-flex>
      </v-layout>
      <ccadminprodutos></ccadminprodutos>
    </v-container>
  </v-app>
</template>

<script>
/* eslint-disable */
import Ccadminprodutos from "../components/admin-produtos";
import firebase from "firebase";

export default {
  components: {
    Ccadminprodutos
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    },

  }
};
</script>

<style scoped>
</style>
