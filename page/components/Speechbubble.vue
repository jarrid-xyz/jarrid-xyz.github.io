<template>
  <v-avatar class="avatar">
    <v-img src="~/assets/images/lulu.png" />
  </v-avatar>
  <div
    v-bind:class="{
      box: true,
      sb2: true,
      primary: color === 'primary',
      secondary: color === 'secondary'
    }"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "SpeechBubble",
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "primary"
    }
  }
  // Add component properties and methods here
};
</script>

<style scoped>
.primary {
  background: rgb(var(--v-theme-primary));
  color: black;
}
.primary:before {
  border-right: 10px solid rgb(var(--v-theme-primary));
  border-top: 10px solid rgb(var(--v-theme-primary));
}
.secondary {
  background: rgb(var(--v-theme-secondary));
  color: white;
}
.secondary:before {
  border-right: 10px solid rgb(var(--v-theme-secondary));
  border-top: 10px solid rgb(var(--v-theme-secondary));
}
.box {
  left: 50px;
  padding: 10px;
  max-width: 90%;
  position: relative;
}

.sb2:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;

  border-bottom: 10px solid transparent;
  left: -19px;
  top: 10px;
}
.avatar {
  position: relative;
  left: -10px;
  top: 40px;
}
</style>
