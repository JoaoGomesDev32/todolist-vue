<template>
  <v-container>
    <v-list>
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo(todo.id)"
        @delete="deleteTodo(todo.id)"
      />
    </v-list>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TodoItem from './TodoItem.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array as PropType<Array<{ id: number; text: string; completed: boolean }>>,
      required: true,
    },
  },
  methods: {
    toggleTodo(id: number) {
      this.$emit('toggle', id);
    },
    deleteTodo(id: number) {
      this.$emit('delete', id);
    },
  },
});
</script>

<style scoped>
</style>