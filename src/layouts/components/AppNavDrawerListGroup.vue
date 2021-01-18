<template>
  <v-list-group
    v-model="model"
    :group="group"
    :prepend-icon="item.meta.icon"
    class="v-list-group--default"
    no-action
    v-bind="$attrs"
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title v-if="item.meta.title" v-text="item.meta.title"></v-list-item-title>
      </v-list-item-content>
    </template>

    <template v-for="child in item.children">
      <AppNavDrawerListGroup
        v-if="child.children"
        :key="`sub-group-${child.name}`"
        :item="child"
        :basePath="`${basePath}/${child.path}`"
        sub-group
      />

      <AppNavDrawerListItem
        v-else
        :key="`child-${child.name}`"
        :item="child"
        :basePath="basePath"
      />
    </template>
  </v-list-group>
</template>

<script>
export default {
  name: 'AppNavDrawerListGroup',
  components: {
    AppNavDrawerListItem: () => import('./AppNavDrawerListItem')
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    model: null
  }),
  computed: {
    // 分配路由命名空间。接受用于确定活动状态的字符串或regexp
    group() {
      return this.genGroup(this.item.children)
    }
  },
  methods: {
    genGroup(items) {
      return items
        .reduce((acc, cur) => {
          acc.push(cur.children ? this.genGroup(cur.children) : cur.path)
          return acc
        }, [])
        .join('|')
    }
  }
}
</script>

<style lang="sass">
.v-list-group.v-list-group--default
  .v-list-group__header
    min-height: 32px

    > .v-list-item__icon
      margin-bottom: 6px
      margin-top: 6px
</style>
