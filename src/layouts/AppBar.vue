<template>
  <v-app-bar
    app
    color="white"
    flat
    clipped-right
    scroll-off-screen
    height="64"
    class="gy-bar--underline"
  >
    <v-app-bar-nav-icon
      class="d-flex d-lg-none d-xl-node"
      @click="toggleAppBarHandle"
    ></v-app-bar-nav-icon>
    <div class="d-flex align-center d-lg-none d-xl-none">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppBar',

  computed: {
    ...mapActions({
      toggleAppBar: 'app/toggleAppBar'
    })
  },
  methods: {
    toggleAppBarHandle() {
      this.toggleAppBar
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
