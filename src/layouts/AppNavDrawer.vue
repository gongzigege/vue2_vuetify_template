<template>
  <v-navigation-drawer
    id="navigation-drawer"
    app
    floating
    disable-route-watcher
    width="300"
    class="gy-navigation-drawer"
    v-model="drawer"
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
    <keep-alive>
      <AppNavDrawerList :routes="routes" />
    </keep-alive>

    <div class="pt-12" />
  </v-navigation-drawer>
</template>
<script>
import { constantRoutes, asyncRoutes } from '@/router'

export default {
  name: 'AppNavDrawer',
  components: {
    AppNavDrawerList: () => import('./components/AppNavDrawerList')
  },

  data: () => ({
    drawer: null
  }),
  computed: {
    routes() {
      // TODO 添加权限之后得使用已有权限的路由 - wangjiangui/20210121
      return constantRoutes.concat(asyncRoutes)
    }
  },
  created() {},
  mounted() {
    this.drawer = this.$store.state.app.appbar.opened
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
