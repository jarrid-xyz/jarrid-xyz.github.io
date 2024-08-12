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
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },

  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute("src", `https://eocampaign1.com/form/${this.id}.js`);
    plugin.setAttribute("data-form", this.id);
    plugin.async = true;
    this.$refs.email.appendChild(plugin);
  },
};
</script>

<style scoped>
/* Your component's styles go here */
</style>
