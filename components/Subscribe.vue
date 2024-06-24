<template>
  <p class="pl-7 pb-0 font-weight-bold">{{ text }}</p>
  <form ref="email" class="form" />
</template>

<script>
export default {
  name: "Subscribe",
  props: {
    text: {
      type: String,
      default: ""
    }
  },

  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://eocampaign1.com/form/65f5c51c-31dc-11ef-99a7-4d1c46d3528b.js"
    );
    plugin.setAttribute("data-form", "65f5c51c-31dc-11ef-99a7-4d1c46d3528b");
    plugin.async = true;
    this.$refs.email.appendChild(plugin);
  }
};
</script>

<style scoped>
/* Your component's styles go here */
</style>
