<template>
  <div :ref="'asciinema-' + id" />
</template>

<script>
export default {
  name: "Asciinema",
  props: {
    id: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  },

  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute("src", "https://asciinema.org/a/666351.js");
    plugin.setAttribute("id", this.$props.id);
    plugin.async = true;
    this.$refs[`asciinema-${this.$props.id}`].appendChild(plugin);
  }
};
</script>
