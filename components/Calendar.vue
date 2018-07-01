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

<style>
.Calendar {
  display: flex;
  flex-direction: row;
  align-items: start;
}

@media screen and (max-width: 700px) {
  .Calendar {
    flex-direction: column;
    padding: 16px;
  }
}
</style>
