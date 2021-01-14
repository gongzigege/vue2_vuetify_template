<template>
  <v-list nav dense>
    <template v-for="route in routes">
      <v-list-item
        :key="route.path"
        v-if="hasOneShowingChild(route.children, route)"
        link
        target="a"
        :to="{ name: onlyOneChild.name, query: onlyOneChild.query }"
        color="primary"
        @click="listItemHandle(onlyOneChild)"
      >
        <v-list-item-icon>
          <v-icon v-text="onlyOneChild.meta.action"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="onlyOneChild.meta.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group :key="route.path" v-else v-model="route.meta.action" no-action color="primary">
        <template v-slot:activator>
          <v-list-item-icon>
            <v-icon v-text="route.meta.action"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="route.meta.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          link
          target="a"
          v-for="child in route.children"
          :to="{ name: child.name, query: child.query }"
          :key="child.meta.title"
          color="primary"
          @click="listItemHandle(child)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.meta.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </template>
  </v-list>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppNavigationDrawerList',
  props: {
    routes: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  methods: {
    ...mapActions(['tabViews/addTabView']),
    listItemHandle(values) {
      console.log(values)

      this['tabViews/addTabView'](values)
    },
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      console.log(showingChildren)
      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }
  }
}
</script>

<style></style>
