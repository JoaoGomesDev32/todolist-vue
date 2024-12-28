<template>
  <v-container>
    <h1>Todo List</h1>
    <v-form @submit.prevent="addTodo">
      <v-text-field
        v-model="newTodo"
        label="Add a new todo"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Add Todo</v-btn>
    </v-form>
    <TodoList :todos="todos" @remove="removeTodo" @toggle="toggleTodo" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TodoList from '@/components/TodoList.vue';
import useTodos from '@/composables/useTodos';

export default defineComponent({
  components: {
    TodoList,
  },
  setup() {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos();
    const newTodo = ref('');

    const handleAddTodo = () => {
      if (newTodo.value.trim()) {
        addTodo(newTodo.value);
        newTodo.value = '';
      }
    };

    return {
      todos,
      newTodo,
      addTodo: handleAddTodo,
      removeTodo,
      toggleTodo,
    };
  },
});
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>