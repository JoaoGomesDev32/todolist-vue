<template>
    <v-card outlined class="mb-2">
      <v-card-title class="text-subtitle-1">{{ task.title }}</v-card-title>
      <v-card-actions>
        <v-btn text color="red" @click="$emit('delete')">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script lang="ts">
  export default {
    name: "TaskCard",
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    transition: box-shadow 0.3s ease;
  }
  
  .v-card:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  </style>