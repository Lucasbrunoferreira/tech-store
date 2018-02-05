<template>
 <v-layout row wrap style="padding-top:60px;">
  <v-flex xs12 offset-sm2 sm8>
  <v-flex>
    <v-alert outline color="error" icon="warning" :value="true" v-if="deletAlert">
      O item foi deletado com sucesso!
    </v-alert>
  </v-flex>
   <v-expansion-panel popout >
    <v-expansion-panel-content :key="produto.modelo" v-for="produto in produtos ">
    <div slot="header"> {{produto.modelo}} </div>
      <v-card>
       <v-card-text class="grey lighten-3">
        <b>Processador:&emsp;</b> {{produto.processador}} <br>
        <b>Placa de Video:&emsp;</b> {{produto.video}} <br>
        <b>Mémoria RAM:&emsp;</b> {{produto.ram}} <br>
        <b>Armazenamento:&emsp;</b> {{produto.armazenamento }} <br><br>
        <b>Valor:&emsp;</b>R$&nbsp; {{produto.valor }} <br>
        <b>A vista:&emsp;</b> R$&nbsp; {{produto.valor - (produto.valor * calculo.desconto)}} <br>
        <b>Juros Cartão:&emsp;</b>R$&nbsp; {{ produto.valor * calculo.jurosmes }}/Mês
        </v-card-text>
       <v-btn small outline class="white--text" color="red" v-on:click="removeproduto(produto)">Excluir</v-btn>
      </v-card>
    </v-expansion-panel-content>
   </v-expansion-panel>
  </v-flex>
 </v-layout>
</template>

<script>
/* eslint-disable */
import Firebase from 'firebase';
import { db } from '../config';

const produtosRef = db.ref('produtos');

export default {
  name: 'admin',
  firebase: {
    produtos: produtosRef,
  },
  data() {
    return {
      deletAlert: false,
      newproduto: {
        modelo: '',
        processador: '',
        video: '',
        ram: '',
        armazenamento: '',
        valor: '',
        img1: '',
        img2: '',
        img3: '',
        visualizacoes: 0,
      },
      calculo: {
        desconto: 0.1,
        jurosmes: 0.02,
      },
    };
  },

  methods: {
    removeproduto: function(produto) {
      let self = this;
      this.deletAlert = true;
      produtosRef.child(produto['.key']).remove();
      setTimeout(function(){
        self.deletAlert = false;
      },4000)
    },
  },
};
</script>

<style scoped>
</style>
