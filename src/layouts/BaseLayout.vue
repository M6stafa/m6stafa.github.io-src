<template>
  <q-layout view="lHh lpR lff">
    <!-- Header -->
    <!-- <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="fas fa-bars"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->
    <!-- End Header -->

    <!-- Left Drawer -->
    <!-- <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      elevated
    >
    </q-drawer> -->
    <!-- End Left Drawer -->

    <!-- Main Content -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- End Main Content -->
  </q-layout>
</template>

<script>
export default {
  name: 'BaseLayout',

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
