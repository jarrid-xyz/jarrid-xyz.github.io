<template>
  <iframe
    :src="src"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
  />
</template>

<script>
export default {
  name: "YouTube",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.demo-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media (min-width: 1024px) {
    height: 100%;
  }
}
</style>
