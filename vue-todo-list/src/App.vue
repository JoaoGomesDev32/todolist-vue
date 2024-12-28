<template>
  <v-app>
    <v-container>
      <h1>Vue Todo List</h1>
      <router-view />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
/* Add any global styles here */
</style>