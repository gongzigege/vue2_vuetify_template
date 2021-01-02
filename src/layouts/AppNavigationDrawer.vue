<template>
  <v-navigation-drawer
    app
    floating
    disable-route-watcher
    width="300"
    v-model="$store.state.app.appbar.opened"
  >
    <template #prepend>
      <div class="d-flex align-center gy-bar--underline" style="height: 64px;">
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
    </template>

    <template #default>
      <v-list nav dense>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          no-action
          color="primary"
        >
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon v-text="item.action"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            link
            target="a"
            href="javascript;"
            v-for="child in item.items"
            :key="child.title"
            color="primary"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'AppNavigationDrawer',

  data: () => ({
    items: [
      {
        action: 'mdi-ticket',
        items: [{ title: 'List Item' }],
        title: 'Attractions'
      },
      {
        action: 'mdi-silverware-fork-knife',
        active: true,
        items: [
          { title: 'Breakfast & brunch & brunch' },
          { title: 'New American' },
          { title: 'Sushi' },
          { title: 'Breakfast & brunch & brunch1' },
          { title: 'New American2' },
          { title: 'Sushi3' },
          { title: 'Breakfast & brunch & brunch4' },
          { title: 'New American5' },
          { title: 'Sushi6' }
        ],
        title: 'Dining'
      },
      {
        action: 'mdi-school',
        items: [{ title: 'List Item' }],
        title: 'Education'
      },
      {
        action: 'mdi-run',
        items: [{ title: 'List Item' }],
        title: 'Family'
      },
      {
        action: 'mdi-bottle-tonic-plus',
        items: [{ title: 'List Item' }],
        title: 'Health'
      },
      {
        action: 'mdi-content-cut',
        items: [{ title: 'List Item' }],
        title: 'Office'
      },
      {
        action: 'mdi-tag',
        items: [{ title: 'List Item' }],
        title: 'Promotions'
      }
    ]
  }),
  mounted() {}
}
</script>

<style lang="scss" scoped>
@import './index.scss';

.border {
  border: 2px dashed orange;
}
</style>
