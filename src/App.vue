<template>
  <v-app>
    <v-container class="py-4">
      <v-card class="pa-4">
        <h1 class="text-center mb-4">To-Do List</h1>
        <v-row>
          <v-col cols="4">
            <h2>To Do</h2>
            <task-card
              v-for="(task, index) in tasks.todo"
              :key="index"
              :task="task"
              @delete="deleteTask('todo', index)"
            />
          </v-col>
          <v-col cols="4">
            <h2>In Progress</h2>
            <task-card
              v-for="(task, index) in tasks.inProgress"
              :key="index"
              :task="task"
              @delete="deleteTask('inProgress', index)"
            />
          </v-col>
          <v-col cols="4">
            <h2>Done</h2>
            <task-card
              v-for="(task, index) in tasks.done"
              :key="index"
              :task="task"
              @delete="deleteTask('done', index)"
            />
          </v-col>
        </v-row>
        <v-footer class="mt-4">
          <span class="text-center">© 2024 João Gomes</span>
        </v-footer>
      </v-card>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import TaskCard from "./components/TaskCard.vue";

export default {
  components: { TaskCard },
  data(): { tasks: { todo: { title: string }[], inProgress: { title: string }[], done: { title: string }[] } } {
    return {
      tasks: {
        todo: [{ title: "Treinar" }],
        inProgress: [{ title: "Ler um livro" }],
        done: [{ title: "Comprar mantimentos" }],
      },
    };
  },
  methods: {
    deleteTask(list: 'todo' | 'inProgress' | 'done', index: number) {
      this.tasks[list].splice(index, 1);
    },
  },
};
</script>

<style>
h1 {
  font-family: "Roboto", sans-serif;
  color: #1976d2;
}
h2 {
  font-family: "Roboto", sans-serif;
  color: #424242;
}

.v-card {
  background-color: #f5f5f5;
}

.v-footer {
  background-color: #1976d2;
  color: white;
  padding: 10px;
}
</style>
