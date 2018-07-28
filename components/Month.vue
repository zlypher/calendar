<template>
  <section class="Month">
    <header class="Month-Name">{{ getMonthName(month) }}</header>
    <div class="Month-Days">
      <day v-for="day in noDays" :key="day.index" :year="year" :month="month" :day="day" />
    </div>
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
  transition: border 150ms ease-in-out;
  border: 1px solid lightgrey;
  margin: 0 4px;
  width: 50px;
}

.Month-Days {
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
}

.Month:hover {
  border: 1px solid red;
}

.Month:first-child {
  margin-left: 0;
}

.Month:last-child {
  margin-right: 0;
}

.Month-Name {
  text-align: center;
  padding: 8px;
  font-weight: bold;
  background: lightgrey;
}

@media screen and (max-width: 700px) {
  .Month {
    width: auto;
    margin: 0 0 1em 0;
  }

  .Month-Days {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    grid-row-gap: 1px;
  }

  .Month-Name {
    flex-basis: 100%;
  }
}
</style>
