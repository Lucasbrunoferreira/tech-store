<template>
  <v-container>
    <button v-on:click="logout">Logout</button>
  </v-container>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase';

export default {
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
      })
    }
  }
}
</script>

<style scoped>
</style>
