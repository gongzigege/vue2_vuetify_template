<template>
  <v-list nav dense expand>
    <template v-for="item in navDrawerList">
      <AppNavDrawerListGroup
        v-if="item.children.length >= 2"
        :key="`group-${item.path}`"
        :item="item"
        :basePath="item.path"
      />
      <!-- 只有一个路由时，子路由作为默认路由 -->
      <AppNavDrawerListItem
        v-else
        :key="`item-${item.path}`"
        :item="item.children[0]"
        :basePath="item.path"
      />
    </template>
  </v-list>
</template>

<script>
/**
 * !BUG 只有一个路由时，子路由作为默认路由.但是此条 Item 没有选中状态的样式呈现
 * * v-list、v-list-group、v-list-item会自动更加当前 URL 确定选中的item
 */

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
    return {
      model: 0
    }
  },
  computed: {
    navDrawerList() {
      const filterList = this.filterHandle(this.routes)

      return filterList
    }
  },
  methods: {
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
