<template>
  <main class="container">
    <header>
      <h1 class="title">Calendar Check</h1>
    </header>
    <calendar year="2018" />
    <footer class="footer">
      <span class="footerLeft">
        <a class="footerResetLink" v-on:click="onResetClick">Reset Calendar</a>
      </span>
      Calendar v1.0.0
    </footer>
  </main>
</template>

<script>
import Calendar from '~/components/Calendar.vue'

export default {
  components: {
    Calendar
  },
  methods: {
    onResetClick() {
      this.$store.commit("resetCalendar");
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 2em;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 48px;
  color: #35495e;
  margin-bottom: 0.5em;
  letter-spacing: 1px;
}

.footer {
  margin-top: 2em;
  padding: 0.5em;
  width: 100%;
  text-align: right;
}

.footerLeft {
  float: left;
}

.footerResetLink {
  cursor: pointer;
}
</style>
