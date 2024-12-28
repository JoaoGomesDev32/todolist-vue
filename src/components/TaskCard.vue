<template>
  <v-card outlined class="mb-2">
    <v-card-title>{{ task.title }}</v-card-title>
  </v-card>
</template>

<script lang="ts">
export default {
  props: {
    task: {
      type: Object,
      default: () => ({ title: '' }),
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: box-shadow 0.3s ease;
}

.v-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
