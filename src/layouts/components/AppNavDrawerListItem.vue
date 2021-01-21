<template>
  <v-list-item
    :href="item.href"
    :rel="item.href ? 'nofollow' : undefined"
    :target="item.href ? '_blank' : undefined"
    :to="resolvePath(item.path)"
    class="v-list-item--default"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list-item-icon v-if="item.meta.icon">
      <v-icon v-text="item.meta.icon" />
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title v-text="item.meta.title" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'

export default {
  name: 'AppNavDrawerListItem',

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

  methods: {
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="sass">
.v-list-item.v-list-item.v-list-item--default
  min-height: 32px

  > .v-list-item__icon
    margin-bottom: 6px
    margin-top: 6px
</style>
