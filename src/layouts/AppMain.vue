<template>
  <v-main app style="height: 2000px">
    <!-- <v-icon color="red" dense>{{ svgPath }}</v-icon>
    <v-icon color="red" large>$vuetify.icons.404</v-icon>
    <v-icon color="red" small>$404</v-icon>
    <v-icon color="red" size="48" v-text="'$404'"> </v-icon>
    <v-icon color="red" v-html="'$404'"> </v-icon> -->

    <v-container fluid>
      <v-expand-transition>
        <router-view></router-view>
      </v-expand-transition>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'AppMain',

  data: () => ({
    svgPath: '$vuetify.icons.404'
  }),
  mounted() {}
}
</script>

<style scoped></style>
