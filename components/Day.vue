<template>
  <a class="Day"
    tabindex="0"
    v-bind:class="{ DayPassed: hasPassed, DayChecked: $store.getters.isChecked(year, month, day) }"
    v-on:click="onClick">
    {{day}}
  </a>
</template>

<script>
export default {
  props: ["year", "month", "day"],
  methods: {
    onClick() {
      this.$store.commit("toggleDay", {
        year: this.year,
        month: this.month,
        day: this.day
      });
    }
  },
  computed: {
    hasPassed: function () {
      const date = new Date(this.year, this.month, this.day);
      const now = new Date();

      return date < now;
    },
  }
}
</script>

<style lang="scss">
@import "~assets/variables.scss";

.Day {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 50ms ease-in-out, color 50ms ease-in-out;
  cursor: pointer;
  text-align: center;
  padding: $space-1;
  height: 30px;
  color: darkgrey;
  border-bottom: 1px solid lightgray;
}

.Day:last-child {
  border-bottom: none;
}

.DayPassed {
  background-color: $state-passed;
}

.Day:focus,
.Day:hover {
  color: black;
  background-color: $state-hover;
}

.DayChecked:focus,
.DayChecked:hover,
.DayChecked {
  background-color: $state-selected;
}

@media screen and (max-width: 700px) {
  .Day {
    flex: 1;
    border-bottom: none;
  }
}
</style>
