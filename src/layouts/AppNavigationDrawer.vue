<template>
  <v-navigation-drawer
    id="navigation-drawer"
    app
    floating
    disable-route-watcher
    width="300"
    class="gy-navigation-drawer"
    v-model="$store.state.app.appbar.opened"
  >
    <template #prepend>
      <div class="d-flex align-center gy-bar--underline" style="height: 64px;">
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
    </template>

    <template #default>
      <AppNavigationDrawerList :routes="routes" />
    </template>
  </v-navigation-drawer>
</template>
<script>
import { constantRoutes } from '@/router'

export default {
  name: 'AppNavigationDrawer',
  components: {
    AppNavigationDrawerList: () => import('./components/AppNavigationDrawerList')
  },

  data: () => ({
    routes: []
  }),
  computed: {},
  mounted() {
    this.routes = constantRoutes
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import './index.scss';

.border {
  border: 2px dashed orange;
}

.gy-navigation-drawer {
  ::v-deep .v-navigation-drawer__content {
    border-right: thin solid rgba(0, 0, 0, 0.12);
  }
}
</style>
