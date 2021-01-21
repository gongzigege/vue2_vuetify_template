<template>
  <v-tabs
    align-with-title
    color="#FFFFFF"
    background-color="#FFFFFF"
    height="36"
    next-icon="mdi-arrow-right-bold-box-outline"
    prev-icon="mdi-arrow-left-bold-box-outline"
    show-arrows
    hide-slider
    class="elevation-1 gy-tabs"
  >
    <v-tab
      active-class="gy-tab--active"
      class="gy-tab"
      :ripple="false"
      v-for="tabView in visitedTabViews"
      :key="tabView.path"
      :title="tabView.meta.title"
      :to="{ name: tabView.name, query: tabView.query }"
    >
      <v-icon v-if="tabView.meta.icon" left size="20">{{ tabView.meta.icon }}</v-icon>
      <span class="gy-tab--text">{{ tabView.meta.title }}</span>
      <v-btn
        v-if="!tabView.meta.fixTab"
        icon
        x-small
        plain
        class="gy-btn--close"
        @click.prevent.stop="closeTabs(tabView)"
      >
        <v-icon size="16">mdi-close</v-icon>
      </v-btn>
    </v-tab>
  </v-tabs>
</template>

<script>
/**
 * Tbas
 *  除固定 tab 外，缓存的都是 this.$route
 */
import { mapActions, mapGetters } from 'vuex'
import path from 'path'

import { constantRoutes, asyncRoutes } from '@/router'

export default {
  name: 'AppTabs',
  computed: {
    ...mapGetters({
      visitedTabViews: 'visitedTabViews'
    }),
    routes() {
      // TODO 添加权限之后得使用已有权限的路由 - wangjiangui/20210121
      return constantRoutes.concat(asyncRoutes)
    }
  },
  watch: {
    $route() {
      this.addTab()
    }
  },
  mounted() {
    this.initTabs()
    this.addTab()
  },
  methods: {
    ...mapActions({
      addTabView: 'tabViews/addTabView',
      removeTabView: 'tabViews/removeTabView'
    }),
    isActive(route) {
      return route.path === this.$route.path
    },
    /**
     * 过滤出固定Tab
     * @param {array} routes - 拥有权限的路由集合
     * @returns {array} 固定的Tab
     */
    filterFixTab(routes, basePath = '/') {
      let tags = []
      routes.forEach((route) => {
        if (route.meta && route.meta.fixTab) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterFixTab(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    // 初始化 Tabs
    // 添加固定的 tab,即路由 meta 对象中包含 fixTab 属性的路由
    initTabs() {
      const affixTags = (this.affixTags = this.filterFixTab(this.routes))
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.addTabView(tag)
        }
      }
    },
    addTab() {
      const { name } = this.$route
      if (name) {
        this.addTabView(this.$route)
      }
      return false
    },
    closeTabs(view) {
      console.log(view)
      this.removeTabView(view).then(({ visitedTabViews }) => {
        console.log(visitedTabViews)
        if (this.isActive(view)) {
          this.toLastView(visitedTabViews, view)
        }
      })
    },

    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath })
        } else {
          this.$router.push('/')
        }
      }
    }
  }
}
</script>

<style lang="scss">
.gy-bar .v-toolbar__content {
  border-width: 0 0 thin;
  border-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.12) !important;
}
</style>

<style lang="scss" scoped>
.v-tab {
  padding: 0 4px;
  text-transform: none;
  justify-content: space-between;
  max-width: 160px;
}

.gy-tab {
}

.gy-tab--text {
  //   position: relative;
  width: calc(100% - 24px);
  overflow: hidden;
  white-space: nowrap;
}

// .gy-tab--text::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   bottom: auto;
//   right: 0;
//   padding-left: 1rem;
//   height: 100%;
//   background: linear-gradient(to right, transparent, rgba(255, 255, 255, 1));
// }

.gy-tab::after {
  content: '';
  position: absolute;
  top: 24%;
  bottom: auto;
  right: 0;
  width: 1px;
  height: 52%;
  background-color: #1976d2;
}

.gy-tab--active {
  background-color: #1976d2;
  .gy-btn--close {
    opacity: 1;
    background-color: #1976d2;
  }
  .gy-tab--text::after {
    background: linear-gradient(to right, transparent, rgba(97, 184, 101, 0.9));
  }
}

.gy-tab:not(.gy-tab--active):hover .gy-btn--close {
  opacity: 0.54;
}

.gy-btn--close {
  // opacity: 0;
}
</style>
