<template>
  <v-row class="pt-5">
    <v-col cols="12" md="6">
      <LetsTalkButton :text="ctaText" :buttonText="buttonText" />
    </v-col>
    <v-col cols="12" md="6">
      <Subscribe :text="subscribeText" :id="subscribeId" />
    </v-col>
  </v-row>
</template>

<script setup>
const props = defineProps({
  ctaText: {
    type: String,
  },
  subscribeText: {
    type: String,
  },
  subscribeId: {
    type: String,
    default: "6c1ab5f4-5849-11ef-bf71-59031bd0151b",
  },
  buttonText: {
    type: String,
    default: "Let's Talk",
  },
});
</script>

<script>
export default {
  name: "LetsTalkAndSubscribe",
  // Your component's JavaScript logic goes here
};
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>
