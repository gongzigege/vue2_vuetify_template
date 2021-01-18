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
      <v-icon left size="20">{{ tabView.meta.action }}</v-icon>
      <span class="gy-tab--text">{{ tabView.meta.title }}</span>
      <v-btn icon x-small plain class="gy-btn--close" @click.prevent.stop="closeTabs(tabView)">
        <v-icon size="16">mdi-close</v-icon>
      </v-btn>
    </v-tab>
  </v-tabs>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AppTabs',
  computed: {
    ...mapGetters({
      visitedTabViews: 'visitedTabViews'
    })
  },
  mounted() {
    // console.log(this.visitedTabViews)
  },
  methods: {
    ...mapActions({
      removeVisitedTabViews: 'tabViews/removeVisitedTabViews'
    }),
    closeTabs(values) {
      console.log(values)
      this.removeVisitedTabViews(values)
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
