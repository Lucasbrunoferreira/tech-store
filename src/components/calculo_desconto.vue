<template>
    <span>{{ valor - (valor * desconto) }}</span>
</template>
  
<script>
  export default {
    data() {
      return {
        valor: 50,
        desconto: 0.1,
      };
    },
    created() {
    },
  };
</script> 

<style scoped>
</style>
