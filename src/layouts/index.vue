<template>
  <v-app id="guiyang">
    <AppBar />

    <AppNavDrawer />

    <AppMain />
  </v-app>
</template>
<script>
export default {
  name: 'Layout',

  components: {
    AppBar: () => import('./AppBar'),
    AppNavDrawer: () => import('./AppNavDrawer'),
    AppMain: () => import('./AppMain')
  },

  data: () => ({}),
  mounted() {}
}
</script>

<style scoped></style>
