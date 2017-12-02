<template>
    <span><h1>{{ valor - (valor * desconto) }}</h1></span>
</template>
  
<script>
export default {
  data() {
    return {
      valor: 50,
      desconto: 0.1
    };
  },
  created() {}
};
</script> 

<style scoped>

</style>
