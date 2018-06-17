<template>
  <section class="Month">
    <header class="Month-Name">{{ getMonthName(month) }}</header>
    <day v-for="day in noDays" :key="day.index" :year="year" :month="month" :day="day" />
  </section>
</template>

<script>
import { getMonthName } from "~/components/utils";
import Day from '~/components/Day.vue'

export default {
  components: {
    Day
  },
  props: [ "month", "year" ],
  methods: {
    getMonthName
  },
  computed: {
    noDays() {
      return new Date(this.year, this.month + 1, 0).getDate();
    }
  }
}
</script>

<style>
.Month {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  border: 1px solid lightgrey;
  margin: 0 4px
}

.Month-Name {
  text-align: center;
  padding: 8px;
  font-weight: bold;
  background: lightgrey;
}
</style>
