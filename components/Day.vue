<template>
  <a class="Day"
    tabindex="0"
    v-bind:class="{ DayPassed: hasPassed }"
    v-on:click="onClick"
    v-on:keyup.enter="onClick">
    {{day}}
    <div class="Day-Checked"
      v-if="$store.getters.isChecked(year, month, day)">
      <svg viewbox="0 0 30 30" class="Day-svg">
        <line x1="4" x2="26" y1="4" y2="26" stroke="#6c757d" stroke-width="5" stroke-linecap="round"/>
        <line x1="26" x2="4" y1="4" y2="26" stroke="#6c757d" stroke-width="5" stroke-linecap="round"/>
      </svg>
    </div>
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 50ms ease-in-out, color 50ms ease-in-out;
  cursor: pointer;
  text-align: center;
  padding: $space-1;
  height: 30px;
  color: darkgrey;
  border-bottom: 1px solid $color-grey-2;
  user-select: none;
}

.Day:last-child {
  border-bottom: none;
}

.Day-Checked {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  user-select: none;
  pointer-events: none;
}

.Day-svg {
  width: 30px;
  height: 30px;
}

.DayPassed {
  background-color: $state-passed;
}

.Day:focus,
.Day:hover {
  color: $color-black;
  background-color: $state-hover;
}

@media screen and (max-width: 700px) {
  .Day {
    flex: 1;
    border-bottom: none;
  }
}
</style>
