<template>
  <v-container class="full-size min-height hero" ref="intro" id="intro">
    <IntroHero />
  </v-container>
  <NextButtonWrappedForMobile :el="architectureRef" />
  <v-container
    class="full-size min-height"
    ref="architecture"
    id="architecture"
  >
    <IntroArchitecture />
  </v-container>
  <NextButtonWrappedForMobile :el="aboutRef" />
  <v-container class="full-size min-height" ref="about" id="about">
    <IntroAbout />
  </v-container>
  <NextButtonWrappedForMobile :el="keyperRef" />
  <v-container class="full-size min-height" ref="keyper" id="keyper">
    <IntroKeyper />
  </v-container>
  <NextButtonWrappedForMobile :el="contactRef" />
  <v-container class="full-size min-height" ref="contact" id="contact">
    <IntroContact />
  </v-container>
  <NextButtonWrappedForMobile :el="articlesRef" />
  <v-container class="full-size min-height" ref="articles" id="articles">
    <Articles :limit="5" />
  </v-container>
</template>

<script setup></script>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      architectureRef: null,
      aboutRef: null,
      articlesRef: null,
      contactRef: null,
    };
  },
  mounted() {
    this.architectureRef = this.$refs.architecture;
    this.aboutRef = this.$refs.about;
    this.keyperRef = this.$refs.keyper;
    this.contactRef = this.$refs.contact;
    this.articlesRef = this.$refs.articles;
  },
};
</script>

<style scoped>
.min-height {
  min-height: 100vh;
}

.hero {
  background-color: rgb(var(--v-theme-primary));
}
</style>
