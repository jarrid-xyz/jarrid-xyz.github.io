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

const meta = {
  title: "jarrid.xyz",
  description:
    "Let jarrid manage sensitive data for you. Jarrid is a collection of security, privacy and regulation aware developer tools for backend developers and data engineers. Our goal is to create common languages between security, legal and compliance and engineering teams.",
  image: `${url.protocol}//${url.host}/images/og_image_square_1.png`
};

useSeoMeta({
  title: meta.title,
  ogTitle: meta.title,
  description: meta.description,
  ogDescription: meta.description,
  ogImage: meta.image,
  twitterCard: "summary_large_image"
});

useHead({
  title: () => "jarrid.xyz"
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
