<template>
  <v-app-bar
    app
    color="white"
    flat
    clipped-right
    scroll-off-screen
    height="64"
    extension-height="36"
    class="gy-bar"
  >
    <template>
      <v-app-bar-nav-icon
        class="d-flex d-lg-none d-xl-node"
        @click="toggleAppBarHandle"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center d-lg-none d-xl-none">
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

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </template>

    <template #extension>
      <v-tabs
        align-with-title
        color="#FFFFFF"
        background-color="#EEEEEE"
        height="36"
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
        hide-slider
        class="elevation-2 gy-tabs"
      >
        <v-tab
          active-class="gy-tab--active"
          class="gy-tab"
          :ripple="false"
          v-for="n in 30"
          :key="n"
        >
          Normal {{ n }}
          <v-btn icon small class="gy-btn--close">
            <v-icon size="18">mdi-close</v-icon>
          </v-btn>
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppBar',

  computed: {
    ...mapActions({
      toggleAppBar: 'app/toggleAppBar'
    })
  },
  methods: {
    toggleAppBarHandle() {
      this.toggleAppBar
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
@import './index.scss';

.gy-tab {
  padding: 0 0 0 16px;
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
}

.gy-tab:not(.gy-tab--active):hover .gy-btn--close {
  opacity: 0.54;
}

.gy-btn--close {
  opacity: 0;
}
</style>
