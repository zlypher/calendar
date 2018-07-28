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
  props: [ "year" ]
}
</script>

<style lang="scss">
@import "~assets/variables.scss";

.Calendar {
  display: flex;
  flex-direction: row;
  align-items: start;
}

@media screen and (max-width: $bp-calendar) {
  .Calendar {
    flex-direction: column;
    padding: $space-2;
  }
}
</style>
