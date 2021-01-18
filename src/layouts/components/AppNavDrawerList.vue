<template>
  <v-list nav dense expand>
    <template v-for="item in navDrawerList">
      <AppNavDrawerListGroup
        v-if="item.children"
        :key="`group-${item.path}`"
        :item="item"
        :basePath="item.path"
      />

      <AppNavDrawerListItem v-else :key="`item-${item.path}`" />
    </template>
  </v-list>
</template>

<script>
/**
 * TODO: 只有一个路由时，子路由作为默认路由 - 2021/01/18
 */
import { mapActions } from 'vuex'

export default {
  name: 'AppNavDrawerList',
  components: {
    AppNavDrawerListGroup: () => import('./AppNavDrawerListGroup'),
    AppNavDrawerListItem: () => import('./AppNavDrawerListItem')
  },
  props: {
    routes: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  computed: {
    navDrawerList() {
      const filterList = this.filterHandle(this.routes)
      console.log(filterList)
      return filterList
    }
  },
  methods: {
    ...mapActions(['tabViews/addTabView']),

    _isExpand(value, route) {
      const routeCurrent = route
      if (routeCurrent.path === value) {
        return true
      } else {
        return false
      }
    },

    listItemHandle(values) {
      console.log(values)

      this['tabViews/addTabView'](values)
    },

    // 递归过滤路由中包含 hidden: true 的路由
    filterHandle(array) {
      return array.filter((item) => {
        if (!item.hidden) {
          if (item.children) {
            item.children = this.filterHandle(item.children)
          }
          return item
        }
      })
    }
  }
}
</script>

<style></style>
