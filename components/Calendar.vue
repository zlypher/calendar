<template>
  <section class="Calendar">
    <month v-for="(_, mIdx) in 12" :month="mIdx" :year="year" :key="mIdx"/>
  </section>
</template>

<script>
import Month from '~/components/Month.vue'

export default {
  components: {
    Month
  },
  props: [ "year" ],
  computed: {
      months: function () {
        const start = new Date(this.year, 0, 1);
        console.log(this.year);
        return [
          "asdf",
          "abc"
        ]
      }
  }
}
</script>

<style>
.Calendar {
  display: flex;
  flex-direction: row;
  align-items: start;
}
</style>
