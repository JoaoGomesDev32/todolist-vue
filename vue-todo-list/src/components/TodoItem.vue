<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ todo.title }}</v-list-item-title>
      <v-list-item-subtitle v-if="todo.completed">Completed</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn @click="toggleComplete" icon>
        <v-icon>{{ todo.completed ? 'mdi-check-circle' : 'mdi-circle-outline' }}</v-icon>
      </v-btn>
      <v-btn @click="deleteTodo" icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleComplete() {
      this.$emit('toggle', this.todo);
    },
    deleteTodo() {
      this.$emit('delete', this.todo);
    }
  }
});
</script>

<style scoped>
</style>