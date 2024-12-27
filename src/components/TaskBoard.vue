<template>
    <v-row>
      <v-col cols="12" md="4" v-for="(column, index) in columns" :key="index">
        <v-card outlined>
          <v-card-title class="text-h6">{{ column.title }}</v-card-title>
          <v-divider></v-divider>
  
          <v-card-text>
            <task-card
              v-for="(task, idx) in column.tasks"
              :key="idx"
              :task="task"
            />
          </v-card-text>
  
          <v-card-actions>
            <v-btn text color="primary" @click="addTask(index)">Add Task</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import TaskCard from "./TaskCard.vue";
  
  export default {
    name: "TaskBoard",
    components: {
      TaskCard,
    },
    data() {
      return {
        columns: [
          { title: "To Do", tasks: [] },
          { title: "In Progress", tasks: [] },
          { title: "Done", tasks: [] },
        ],
      };
    },
    methods: {
      addTask(index) {
        const taskTitle = prompt("Enter task title:");
        if (taskTitle) {
          this.columns[index].tasks.push({ title: taskTitle });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .v-row {
    margin-top: 20px;
  }
  </style>