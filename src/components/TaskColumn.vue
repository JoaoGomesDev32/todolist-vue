<template>
  <v-card :color="color" class="pa-4">
    <v-card-title class="text-h6">{{ title }}</v-card-title>
    <v-divider />
    <v-list>
      <TaskCard v-for="(task, index) in tasks" :key="index" :task="task" />
    </v-list>
    <v-divider />
    <v-text-field label="Add Task" v-model="newTask" outlined dense class="mt-2" />
    <v-btn color="primary" block @click="addNewTask">Add Task</v-btn>
  </v-card>
</template>

<script lang="ts">
import TaskCard from "./TaskCard.vue";

export default {
  components: { TaskCard },
  props: {
    title: String,
    tasks: Array,
    color: String,
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addNewTask() {
      if (this.newTask.trim()) {
        this.$emit("addTask", this.newTask.trim());
        this.newTask = "";
      }
    },
  },
};
</script>
