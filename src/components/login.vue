<template>
    <v-container id="login">
        <v-layout>
            <v-flex class="text-xs-center" style="padding:4% 4%">
                 <img  id="logo" src="../assets/logo.png">
            </v-flex>
        </v-layout>
        <v-layout class="text-xs-center">
            <v-flex offset-sm2 offset-md3 md6 xs12 sm8 id="login-box">
                <v-form ref="form" lazy-validation id="form">
                    <v-text-field dark class="grey--text text--lighten-1" label="E-mail"  v-model="email" ></v-text-field>
                    <v-text-field dark class="grey--text text--lighten-1" label="Senha" type="password" v-model="password" ></v-text-field>
                    <v-layout style="padding:5%;">
                       <v-flex offset-xs3 xs6>
                            <v-btn round outline block color="green" v-on:click="signIn" >entrar</v-btn>
                        </v-flex>         
                    </v-layout>
                </v-form>
            </v-flex>
        </v-layout>
        <v-flex style="padding-top:5%;" class="text-xs-center"><a style="text-decoration:none; color:#fff;" href="">VOLTAR AO INÍCIO</a></v-flex>        
    </v-container>
</template>
    
<script>
/* eslint-disable */
import firebase from "firebase";

export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            if (this.email == "admin@techstore.com") {
              alert('Você esta fazendo login como Administrador!')
              this.$router.replace("admin");
                    
            } else {
              this.$router.replace("produtos");
            }
          },
          err => {
            alert("Algum campo ficou incorreto!");
          }
        );
    }
  }
};
</script>

<style scoped>
#login-box {
  background: rgba(0, 0, 0, 0.4);
  padding: 2% 6%;
}
#logo {
  width: 220px;
}
</style>
