<template>
  <div class="next text-center">
    <v-btn variant="flat" icon>
      <v-icon icon="fas fa-chevron-down" />
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "NextButton",
};
</script>

<style scoped>
/* Add your component styles here */
.next {
  position: relative;
  bottom: 55px;
}
</style>
