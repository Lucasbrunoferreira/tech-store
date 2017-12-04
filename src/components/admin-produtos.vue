<template>
  <v-container>
    <v-tabs fixed icons centered>
      <v-tabs-bar>
        <v-tabs-slider color="blue"></v-tabs-slider>
        <v-tabs-item href="#tab-1">
          <v-icon>create</v-icon>Novo   
        </v-tabs-item>
        <v-tabs-item href="#tab-2">
          <v-icon>list</v-icon>Todos
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content v-for="i in 2" :key="i" :id="'tab-' + i">
          <span flat v-if="i == 1">
            <v-flex xs12 offset-sm3 sm6 style="padding-top:20px;">
              <v-card class="elevation-8" style="margin:8px; padding: 20px ">  
                <v-form v-on:submit.prevent="addproduto">
                  <v-flex xs6 offset-xs3>
                    <v-text-field type="text"  label="Marca/Modelo" class="blue--text text--lighten-1" id="produtoTitle"  v-model="newproduto.modelo"></v-text-field>
                  </v-flex >
                  <v-flex xs6 offset-xs3>
                    <v-text-field  type="text"  label="Processador" class="blue--text text--lighten-1" v-model="newproduto.processador"></v-text-field>
                  </v-flex>
                   <v-flex xs6 offset-xs3>
                    <v-text-field  type="text"  label="Placa de Vídeo" class="blue--text text--lighten-1" v-model="newproduto.video"></v-text-field>
                  </v-flex>
                  <v-flex xs6 offset-xs3>
                    <v-text-field type="text"  label="Memoria RAM" class="blue--text text--lighten-1" v-model="newproduto.ram"/></v-text-field>
                  </v-flex>
                  <v-flex xs6 offset-xs3>
                    <v-text-field type="text" label="Memoria de Armazenamento" class="blue--text text--lighten-1" v-model="newproduto.armazenamento"/></v-text-field>
                  </v-flex>
                  <v-flex xs6 offset-xs3>
                    <v-text-field type="number"  label="Valor de Venda" class="blue--text text--lighten-1" v-model="newproduto.valor"/></v-text-field>
                  </v-flex>
                  <div class="text-xs-center">
                    <v-btn round color="primary" dark type="submit" value="Add produto">Cadastrar</v-btn>
                  </div>
                </v-form>
              </v-card>
             </v-flex>  
          </span>
          <span flat v-if="i == 2">
           <v-layout row wrap style="padding-top:60px;">
              <v-flex xs12 offset-sm2 sm8>
                <v-expansion-panel popout >
                  <v-expansion-panel-content v-for="produto in produtos">
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
          </span>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </v-container>
</template>

<script>
/* eslint-disable */
import Firebase from "firebase";

let config = {
  apiKey: "AIzaSyByMkFa0RS4vbJOcO-ljmUst7ohbjx1dtg",
  authDomain: "tech-store-80b74.firebaseapp.com",
  databaseURL: "https://tech-store-80b74.firebaseio.com",
  projectId: "tech-store-80b74",
  storageBucket: "tech-store-80b74.appspot.com",
  messagingSenderId: "37861070063"
};

let app = Firebase.initializeApp(config);
let db = app.database();

let produtosRef = db.ref("produtos");

export default {
  name: "listadeprodutos",
  firebase: {
    produtos: produtosRef,
  },
  data() {
    return {
      newproduto: {
        modelo: "",
        processador: "",
        video: "",
        ram: "",
        armazenamento: "",
        valor: "",
      },
      calculo: {
        desconto: 0.1,
        jurosmes: 0.02,
      },
    }
  },
  methods: {
    addproduto: function() {
      produtosRef.push(this.newproduto);
      this.newproduto.modelo = "";
      this.newproduto.processador = "";
      this.newproduto.video = "";
      this.newproduto.ram = "";
      this.newproduto.armazenamento = "";
      this.newproduto.valor = "";
      alert('Cadastro efetuado com Sucesso!');
    },
    removeproduto: function(produto) {
      produtosRef.child(produto[".key"]).remove();
    }
  }
};
</script>

<style>
</style>
