<template>
  <main class="login">
    Login
    <button @click="loginWithGoogle">Google Login</button>
  </main>
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

<style>
.login {
  padding-top: 32px;
}
</style>
