<template>
  <v-app id="guiyang">
    <AppBar />
    <AppNavigationDrawer />
    <AppMain />
  </v-app>
</template>
<script>
export default {
  name: 'Layout',

  components: {
    AppBar: () => import('./AppBar'),
    AppNavigationDrawer: () => import('./AppNavigationDrawer'),
    AppMain: () => import('./AppMain')
  },

  data: () => ({}),
  mounted() {}
}
</script>

<style scoped></style>
