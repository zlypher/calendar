<template>
  <aside class="Legend">
    <ul class="LegendList">
      <li v-for="item in items" :key="item.label" class="LegendItem">
        <span class="LegendItemBox" v-bind:style="item.style"></span>
        {{item.label}}
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Passed",
          style: {
            color: "#eaeaea"
          }
        },
        {
          label: "Done",
          style: {
            color: "red"
          }
        }
      ]
  }
  }
}
</script>

<style>
.Legend {
  display: flex;
  padding: 1em;
  border: 1px solid grey;
  margin-bottom: 2em;
}

.LegendList {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.LegendItem {
  position: relative;
  padding: 0 1em 0 16px;
}

.LegendItemBox {
  content: "";
  display: block;
  position: absolute;
  top: 8px;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: currentColor;
}

</style>
