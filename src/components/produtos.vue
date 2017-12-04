<template>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data () {
      return {
        items: [
          {
            src: '/src/assets/bg_inicio.jpg'
          },
          {
            src: '/src/assets/bg_login_register.jpg'
          },
        ]
      }
    }
  }
</script>

<style>
</style>


