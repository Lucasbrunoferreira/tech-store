<template>
 <v-app id="bg-produtos">
  <v-layout style="padding-bottom:20px;" row :key="produto.modelo" v-for="produto in produtos">
   <v-flex>
    <v-carousel interval="20000" hide-delimiters style="height:425px;">
     <v-carousel-item transition="fade" reverseTransition="fade" :src="'https://firebasestorage.googleapis.com/v0/b/tech-store-80b74.appspot.com/o/' + produto.img2 +  '?alt=media' "></v-carousel-item>
     <v-carousel-item transition="fade" reverseTransition="fade" :src="'https://firebasestorage.googleapis.com/v0/b/tech-store-80b74.appspot.com/o/' + produto.img3 +  '?alt=media' "></v-carousel-item>
    </v-carousel>
   </v-flex>
   <v-flex>
    <v-card style="height:425px; background:rgba(255,255,255,0.4);">
    <v-tabs  fixed icons centered>
     <v-tabs-bar >
     <v-tabs-slider color="black"></v-tabs-slider>
      <v-tabs-item href="#tab-1">
       Produto
      </v-tabs-item>
      <v-tabs-item href="#tab-2" v-on:click="produto.visualizacoes+= 1">
       Especificações
      </v-tabs-item>
     </v-tabs-bar>
     <v-tabs-items>
      <v-tabs-content v-for="i in 2" :key="i" :id="'tab-' + i">
       <span flat v-if="i == 1"><br>
        <div class="text-xs-center">
         <b>{{produto.visualizacoes}}</b>&nbsp;
         <v-icon>remove_red_eye</v-icon>
        </div>
        <v-card-media :src="'https://firebasestorage.googleapis.com/v0/b/tech-store-80b74.appspot.com/o/' + produto.img1 +  '?alt=media' " height="180px"></v-card-media>
        <div class="text-xs-center">
         <v-flex><br>
          <h1>{{produto.modelo}}</h1>
          <h2>R$&nbsp;{{produto.valor - (produto.valor * calculo.desconto)}} a vista</h2>
          <h5>10% de desconto!</h5>
         </v-flex>
        </div>
       </span>
       <span flat v-if="i == 2">
        <v-flex offset-xs2><br><br>
         <v-divider></v-divider>
         <b>Processador:</b>&ensp;{{produto.processador}} <v-spacer></v-spacer><br>
         <b>Placa de Vídeo:</b> &ensp;{{produto.video}} <v-spacer></v-spacer><br>
         <b>Memoria RAM:</b>&ensp;{{produto.ram}}<v-spacer></v-spacer><br>
         <b>Armazenamento:</b>&ensp;{{produto.armazenamento }}<v-spacer></v-spacer><br>
         <v-divider></v-divider>
         <b>Valor:</b>&ensp;R$&nbsp;{{produto.valor }}<v-spacer></v-spacer>
         <b>Valor a vista:</b>&ensp;R$&nbsp;{{produto.valor - (produto.valor * calculo.desconto)}}<v-spacer></v-spacer>
         <b>Valor no Cartão:</b>&ensp;R$&nbsp;{{produto.valor}}&nbsp;+&nbsp;R$&nbsp;&nbsp;{{ produto.valor * calculo.jurosmes }}&nbsp;juros/Mês
        </v-flex>
       </span>
       </v-tabs-content>
      </v-tabs-items>
      </v-tabs>
    </v-card>
   </v-flex>
  </v-layout>
 </v-app>
</template>

<script>
import { db } from '../config';

const produtosRef = db.ref('produtos');

export default {
  name: 'produtos',
  firebase: {
    produtos: produtosRef,
  },
  data() {
    return {
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
  methods: {},
};
</script>

<style>
#bg-produtos {
  background: #dedede;
}
</style>


