<template>
  <v-app>
    <v-toolbar fixed app dark color="primary">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!user">
        <v-btn flat href="/login">Login</v-btn>
      </v-toolbar-items>
      <v-menu v-if="user">
        <v-toolbar-title slot="activator">
          <span>{{ user.displayName }}</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item"
          >
            <v-list-tile-title v-text="item"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app dark height="auto">
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-text class="white--text">
          <span>&copy; Chain Calendar 2018</span>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters.activeUser
    }
  },
  data () {
    return {
      clipped: false,
      fixed: false,
      title: 'Chain Calendar',
      items: [ "Logout" ]
    }
  }
}
</script>
