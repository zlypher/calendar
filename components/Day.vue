<template>
  <div class="Day"
    v-bind:class="{ DayPassed: hasPassed }"
    v-on:click="onClick">
    {{day}}
  </div>
</template>

<script>
export default {
  props: ["year", "month", "day"],
  methods: {
    onClick() {
      console.log("click");
      console.log(this);
    }
  },
  computed: {
    hasPassed: function () {
      const date = new Date(this.year, this.month, this.day);
      const now = new Date();

      return date < now;
    }
  }
}
</script>

<style>
.Day {
  transition: background-color 50ms ease-in-out;
  cursor: pointer;
  text-align: center;
  padding: 8px;
}

.DayPassed {
  background-color: #eaeaea;
}

.Day:hover {
  background-color: lightgrey;
}
</style>
