<template>
    <v-container>
      <v-text-field
        v-model="newTask"
        label="Adicionar nova tarefa"
        @keyup.enter="addTask"
        outlined
        clearable
      />
      <v-list>
        <v-list-item
          v-for="(task, index) in tasks"
          :key="index"
        >
          <v-checkbox
            v-model="task.completed"
            class="mr-4"
          />
          <v-text-field
            v-model="task.text"
            :readonly="!task.editing"
            outlined
          />
          <v-btn icon @click="editTask(index)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="deleteTask(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  
  export default defineComponent({
    name: 'TodoList',
    setup() {
      const tasks = reactive([
        { text: 'Estudar Vue.js', completed: false, editing: false },
        { text: 'Criar portfólio', completed: false, editing: false },
      ]);
      const newTask = ref('');
  
      const addTask = () => {
        if (newTask.value.trim()) {
          tasks.push({ text: newTask.value, completed: false, editing: false });
          newTask.value = '';
        }
      };
  
      const editTask = (index: number) => {
        tasks[index].editing = !tasks[index].editing;
      };
  
      const deleteTask = (index: number) => {
        tasks.splice(index, 1);
      };
  
      return { tasks, newTask, addTask, editTask, deleteTask };
    },
  });
  </script>
  