<template>
  <v-footer padless>
    <v-container>
      <span>&copy; {{ new Date().getFullYear() }} João Gomes</span>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.v-footer {
  background-color: #212529;
  color: white;
  text-align: center;
  padding: 10px 0;
}
</style>
