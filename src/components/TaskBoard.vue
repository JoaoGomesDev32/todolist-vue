<template>
  <v-row>
    <v-col cols="12" md="4">
      <TaskColumn title="To Do" :tasks="tasks.toDo" color="red lighten-3" @addTask="addTask" />
    </v-col>
    <v-col cols="12" md="4">
      <TaskColumn title="In Progress" :tasks="tasks.inProgress" color="blue lighten-3" />
    </v-col>
    <v-col cols="12" md="4">
      <TaskColumn title="Done" :tasks="tasks.done" color="green lighten-3" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import TaskColumn from "./TaskColumn.vue";

export default {
  components: { TaskColumn },
  data() {
    return {
      tasks: {
        toDo: [{ title: "Learn Vue" }, { title: "Build a To-Do List" }],
        inProgress: [{ title: "Practice Vuetify" }],
        done: [{ title: "Install Dependencies" }],
      },
    };
  },
  methods: {
    addTask(task: string) {
      this.tasks.toDo.push({ title: task });
    },
  },
};
</script>
