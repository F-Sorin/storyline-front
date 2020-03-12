<template>
  <v-app>
    <v-content>
      <MenuBurger />
    </v-content>
  </v-app>
</template>

<script>
import MenuBurger from '@/components/MenuBurger.vue';

export default {
  name: 'App',

  components: {
    MenuBurger,
  },
};
</script>

<style>
  .v-application a {
    color: white !important;
    text-decoration: none !important;
  }
</style>
