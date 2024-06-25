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
const meta = {
  title: "jarrid.xyz",
  description:
    "Let jarrid manage sensitive data for you. Jarrid is a collection of security, privacy and regulation aware developer tools for backend developers and data engineers. Our goal is to create common languages between security, legal and compliance and engineering teams.",
  image: "https://jarrid.xyz/images/og_image_square_1.png"
};

useHead(
  {
    title: () => meta.title,
    meta: [
      {
        property: "og:title",
        content: meta.title
      },
      {
        name: "description",
        property: "og:description",
        content: meta.description
      },
      {
        name: "image",
        property: "og:image",
        content: meta.image
      },
      { name: "twitter:card", content: "summary" }
    ]
  },
  { tagPriority: "critical" }
);
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
