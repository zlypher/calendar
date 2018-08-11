<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
            <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Login</v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-text class="text-xs-center">
          <v-btn color="secondary" @click="loginWithGoogle">Login with Google</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    loginWithGoogle() {
      this.$store.dispatch("loginWithGoogle").then(() => {
        console.log("login");
      }).catch((e) => {
        console.log(e.message);
      });
    }
  }
}
</script>
