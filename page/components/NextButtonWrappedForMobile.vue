<template>
  <template v-if="mdAndUp">
    <NextButton @click="el.$el.scrollIntoView({ behavior: 'smooth' })" />
  </template>
  <template v-else>
    <NextButton
      @click="el.$el.scrollIntoView({ behavior: 'smooth' })"
      style="bottom: 20px !important"
    />
  </template>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();
</script>

<script>
export default {
  name: "NextButtonWrappedForMobile",
  props: {
    el: { type: null, required: true }
  }
  // Your component options here
};
</script>

<style scoped>
/* Your component styles here */
</style>
