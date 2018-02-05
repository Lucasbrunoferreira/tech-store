<template>
 <v-flex xs12 offset-sm3 sm6 style="padding-top:20px;">
   <v-alert outline color="success" icon="check_circle" :value="true" v-if="successAlert">
      Produto cadastrado com Sucesso!
    </v-alert>
  <v-card class="elevation-8" style="margin:5px; padding: 20px ">
   <v-form v-on:submit.prevent="addproduto">
    <v-layout row wrap>
     <v-flex xs10 offset-xs1 sm5 offset-sm1>
      <v-text-field type="text"  label="Marca/Modelo" class="blue--text text--lighten-1" id="produtoTitle"  v-model="newproduto.modelo"></v-text-field>
     </v-flex >
     <v-flex xs10 offset-xs1 sm4 offset-sm1>
      <v-text-field  type="text"  label="Processador" class="blue--text text--lighten-1" v-model="newproduto.processador"></v-text-field>
     </v-flex>
      </v-layout>
     <v-layout row wrap>
     <v-flex xs10 offset-xs1 sm5 offset-sm1>
      <v-text-field  type="text"  label="Placa de Vídeo" class="blue--text text--lighten-1" v-model="newproduto.video"></v-text-field>
     </v-flex>
     <v-flex xs10 offset-xs1 sm4 offset-sm1>
      <v-text-field type="text"  label="Memoria RAM" class="blue--text text--lighten-1" v-model="newproduto.ram"></v-text-field>
     </v-flex>
    </v-layout>
    <v-layout row wrap>
     <v-flex xs10 offset-xs1 sm5 offset-sm1>
      <v-text-field type="text" label="Memoria de Armazenamento" class="blue--text text--lighten-1" v-model="newproduto.armazenamento"></v-text-field>
     </v-flex>
     <v-flex xs10 offset-xs1 sm4 offset-sm1>
      <v-text-field type="number"  label="Valor de Venda" class="blue--text text--lighten-1" v-model="newproduto.valor"></v-text-field>
     </v-flex>
     </v-layout>
     <v-flex xs12>
      <v-expansion-panel>
       <v-expansion-panel-content >
        <div slot="header" class="text-xs-center">
         <b>Imagens</b> <br>
         <progress value="0" max="100" id="uploader"></progress>
        </div>
        <v-card>
         <v-flex xs6 offset-xs3>
          <v-text-field type="text"  label="Nome Imagem 1" class="green--text text--lighten-1" v-model="newproduto.img1"></v-text-field>
          <input accept=".jpg, .png" type="file" value="upload" @change="fileBtn1(file1, $event)">
          <v-text-field type="text"  label="Nome Imagem 2" class="green--text text--lighten-1" v-model="newproduto.img2"></v-text-field>
          <input  accept=".jpg, .png" type="file" value="upload" @change="fileBtn2(file2, $event)">
          <v-text-field type="text"  label="Nome Imagem 3" class="green--text text--lighten-1" v-model="newproduto.img3"></v-text-field>
          <input  accept=".jpg, .png" type="file" value="upload" @change="fileBtn3(file3, $event)"> <br><br>
         </v-flex>
        </v-card>
       </v-expansion-panel-content>
      </v-expansion-panel>
     </v-flex><br>
     <v-flex class="text-xs-center">
      <v-btn round color="primary" dark type="submit" value="Add produto">Cadastrar</v-btn>
     </v-flex>
    </v-form>
   </v-card> <br><br>
   <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500">
     <v-btn color="primary" flat dark slot="activator"><v-icon>help_outline</v-icon> &ensp;Upload de Imagens </v-btn>
     <v-card>
      <v-card-title class="headline">Upload de Imagens</v-card-title>
       <v-card-text>
        1 - Clique em "Escolher Arquivo" para selecionar a imagem.. <br>
        2 - Assim que selecionada, o upload sera iniciado. <br>
        3 - No campo "Nome da Imagem" coloque examente o nome do arquivo  a ser enviado . <br>
        4 - Aguarde a barra de carregamento se preencher de azul. <br>
        5 - Repita para as demais Imagens, uma de cada vez.  <br> <br>
        Exigencias: <br>
        ** Formatos: .png ou .jpg <br>
        ** Inicie o upload de uma nova imagem somente após o término da anterior. <br>
        ** Não são aceitos espaços ou caracteres especiais. <br><br>
        Exemplo: <br>
        <img style="height:100px" src="../assets/tuto_upload.jpg">
       </v-card-text>
       <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" flat @click.native="dialog = false">Fechar</v-btn>
       </v-card-actions>
     </v-card>
    </v-dialog>
   </v-layout>
  </v-flex>
</template>

<script>
/* eslint-disable */
import Firebase from 'firebase';
import { db } from '../config';
import CcAdminProdutos from '../components/CcAdminProdutos';
import Vue from 'vue';

const produtosRef = db.ref('produtos');

export default {
  name: 'admin-novo',
  components: {
   CcAdminProdutos,
  },
  firebase: {
    produtos: produtosRef,
  },
  data() {
    return {
      dialog: false,
      successAlert: false,
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
    addproduto: function() {
      let self = this;
      produtosRef.push(this.newproduto);
      this.newproduto.modelo = '',
      this.newproduto.processador = '',
      this.newproduto.video = '',
      this.newproduto.ram = '',
      this.newproduto.armazenamento = '',
      this.newproduto.valor = '',
      this.newproduto.img1 = '',
      this.newproduto.img2 = '',
      this.newproduto.img3 = '',

      this.successAlert = true;
      setTimeout( function(){
        self.successAlert = false;
        location.reload();
      },3000);
    },
    removeproduto: function(produto) {

      produtosRef.child(produto['.key']).remove();
    },
    fileBtn1: function(file1, e) {
      e.preventDefault();

      const uploader = document.getElementById('uploader');

      let getFile = e.target.files[0];
      let storageRef = Firebase.storage().ref(getFile.name);
      let task = storageRef.put(getFile);

      task.on(
        "state_changed",
        function progress(snapshot) {
          let percentage =
          snapshot.bytesTransferred / snapshot.totalBytes * 100;
          uploader.value = percentage;
        },
        function error(err) {
          console.log(err);
        },
        function complete() {
          console.log('complete upload');
        },
      );
    },
    fileBtn2: function(file2, e) {
      e.preventDefault();

      const uploader = document.getElementById('uploader');

      let getFile = e.target.files[0];
      let storageRef = Firebase.storage().ref(getFile.name);
      let task = storageRef.put(getFile);

      task.on(
        'state_changed',
        function progress(snapshot) {
          let percentage =
          snapshot.bytesTransferred / snapshot.totalBytes * 100;
          uploader.value = percentage;
        },
        function error(err) {
          console.log(err);
        },
        function complete() {
          console.log('complete upload');
        },
      );
    },
    fileBtn3: function(file3, e) {
      e.preventDefault();

      const uploader = document.getElementById('uploader');

      let getFile = e.target.files[0];
      let storageRef = Firebase.storage().ref(getFile.name);
      let task = storageRef.put(getFile);

      task.on(
        'state_changed',
        function progress(snapshot) {
          let percentage =
          snapshot.bytesTransferred / snapshot.totalBytes * 100;
          uploader.value = percentage;
        },
        function error(err) {
          console.log(err);
        },
        function complete() {
          console.log('complete upload');
        },
      );
    },
  },
};
</script>

<style>

</style>
