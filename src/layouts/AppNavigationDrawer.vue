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
      <v-list nav dense>
        <template v-for="item in items">
          <v-list-item
            v-if="!item.children"
            :key="item.meta.title"
            link
            target="a"
            :to="item.path"
            color="primary"
            @click="listItemHandle(item)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.meta.action"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.meta.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group
            v-else
            :key="item.meta.title"
            v-model="item.meta.active"
            no-action
            color="primary"
          >
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon v-text="item.meta.action"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.meta.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              link
              target="a"
              v-for="child in item.children"
              :to="child.path"
              :key="child.meta.title"
              color="primary"
              @click="listItemHandle(child)"
            >
              <v-list-item-content>
                <v-list-item-title
                  v-text="child.meta.title"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { constantRoutes } from '@/router'
import { mapActions } from 'vuex'

export default {
  name: 'AppNavigationDrawer',

  data: () => ({
    items: []
  }),
  computed: {},
  mounted() {
    console.log(constantRoutes)
    this.items = constantRoutes
  },
  methods: {
    ...mapActions(['tabViews/addTabView']),
    listItemHandle(values) {
      console.log(values)

      this['tabViews/addTabView'](values)
    }
  }
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
