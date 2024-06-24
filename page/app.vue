<template>
  <v-app>
    <Appbar />
    <v-container class="full-size pa-0">
      <NuxtPage />
    </v-container>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
const url = useRequestURL();

useHead({
  title: () => "jarrid.xyz",
  meta: [
    {
      name: "description",
      content:
        "Let jarrid manage sensitive data for you. Jarrid is a collection of security, privacy and regulation aware developer tools for backend developers and data engineers. Our goal is to create common languages between security, legal and compliance and engineering teams."
    },
    {
      name: "og:title",
      content: "jarrid"
    },
    {
      name: "og:image",
      content: `${url.protocol}//${url.host}/images/og_image_square_1.png`
    }
  ]
});
</script>

<style>
.page {
  min-height: 96vh;
  max-width: 1280px;
  align-self: center;
}

.full-size {
  min-height: 100vh;
  width: 100% !important;
  max-width: unset;
}
</style>
