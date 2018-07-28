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

<style lang="scss">
@import "~assets/variables.scss";

.Month {
  transition: border 150ms ease-in-out;
  border: 1px solid lightgrey;
  margin: 0 4px;
  width: 50px;

  &:hover {
    border: 1px solid red;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &-Days {
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
  }

  &-Name {
    text-align: center;
    padding: $space-1;
    font-weight: bold;
    background: lightgrey;
  }
}

@media screen and (max-width: $bp-calendar) {
  .Month {
    width: auto;
    margin: 0 0 1em 0;

    &-Days {
      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto;
      grid-row-gap: 1px;
    }

    &-Name {
      flex-basis: 100%;
    }
  }
}
</style>
