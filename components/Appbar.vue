<template>
  <v-app-bar flat color="primary" app>
    <RouterLink to="/">
      <div class="d-flex pl-4 pl-md-10">
        <v-avatar :title="true" width="50">
          <v-img src="~/assets/images/jarrid_logo_black.png" class="mx-2" />
        </v-avatar>

        <v-app-bar-title class="ml-2 my-auto"> Jarrid </v-app-bar-title>
      </div>
    </RouterLink>
  </v-app-bar>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();
</script>

<script>
export default {
  name: "Appbar",
  data() {
    return {
      drawer: false,
      items: [
        {
          name: "Company",
          link: { to: "/" },
          links: [
            {
              name: "About",
              link: { path: "/", hash: "#about" }
            },
            {
              name: "Services",
              link: { path: "/", hash: "#service" }
            },
            {
              name: "Team",
              link: { path: "/", hash: "#team" }
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped></style>
