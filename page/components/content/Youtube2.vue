<template>
  <div class="demo-video">
    <Youtube :src="src" />
  </div>
</template>

<script>
export default {
  name: "YouTube2",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.demo-video {
  position: relative;
  @media (min-width: 1024px) {
    padding-bottom: 50%;
    /* 16:9 */
  }
  padding-bottom: 100%;
  padding-top: 25px;
  height: 0;
}
</style>
