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
      :to="tabView.path"
    >
      <span class="gy-tab--text">{{ tabView.meta.title }} </span>
      <v-btn icon small class="gy-btn--close" @click="closeTabs(tabView)">
        <v-icon size="18">mdi-close</v-icon>
      </v-btn>
    </v-tab>
  </v-tabs>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppTabs',
  computed: {
    ...mapGetters(['visitedTabViews'])
  },
  mounted() {
    console.log(this.visitedTabViews)
  },
  methods: {
    closeTabs(values) {
      console.log(values)
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
.gy-tab {
  padding: 0 0 0 12px;
}

.gy-tab--text {
  position: relative;
  display: inline-block;
  height: 100%;
  line-height: 36px;
  min-width: 8rem; // 4 * 16px
  max-width: 10rem;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.8125rem;
  text-align: left;
}

.gy-tab--text::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: auto;
  right: 0;
  padding-left: 1rem;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 1));
}

.gy-tab::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: auto;
  right: 0;
  width: 1px;
  height: 100%;
  background-color: #4caf50;
}

.gy-tab--active {
  background-color: #4caf50;
  .gy-btn--close {
    opacity: 1;
  }
  .gy-tab--text::after {
    background: linear-gradient(to right, transparent, rgba(97, 184, 101, 0.9));
  }
}

.gy-tab:not(.gy-tab--active):hover .gy-btn--close {
  opacity: 0.54;
}

.gy-btn--close {
  opacity: 0;
}
</style>
