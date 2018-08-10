<template>
  <main>
    <header class="header" style="background-image: url('/home-banner.jpg');">
      <div class="container">
        <h1 class="header-text">Chain Calendar</h1>
      </div>
    </header>
    <div class="container">
      <p class="leadin">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <nuxt-link to="/calendar">Checkout Demo</nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style>
.header {
  position: relative;
  height: 400px;
  background-size: cover;
  background-position: center center;
  margin-bottom: 32px;
}

.header-text {
  position: absolute;
  bottom: 0;
  padding: 16px 32px 0;
  background-color: white;
  font-weight: 600;
  font-size: 48px;
}

.leadin {
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
}

.container {
  max-width: 100%;
  width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
