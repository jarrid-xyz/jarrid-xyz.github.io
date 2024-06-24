<template>
  <v-app-bar flat color="primary" app>
    <RouterLink to="/">
      <div class="d-flex pl-4 pl-md-10">
        <v-avatar :title="true" width="50">
          <v-img src="~/assets/images/jarrid_logo_black.png" class="mx-2" />
        </v-avatar>

        <v-app-bar-title class="ml-2 my-auto text-black">
          Jarrid
        </v-app-bar-title>
      </div>
    </RouterLink>
    <v-spacer />
    <v-app-bar-nav-icon
      color="black"
      icon="fas fa-bars"
      @click.stop="drawer = !drawer"
      v-if="!mdAndUp"
    />
    <template v-else>
      <v-list-item
        class="py-0 fill-height font-weight-black text-black"
        v-for="item in items"
        :key="item.name"
        :to="item.link.to"
        :href="item.link.href"
        :target="item.link.openNew ? '_blank' : null"
      >
        {{ item.name }}
      </v-list-item>
    </template>
  </v-app-bar>
  <v-navigation-drawer location="right" temporary v-model="drawer">
    <v-list class="px-0" nav>
      <template v-for="item in items" :key="item.name">
        <v-list-group class="px-0" :value="item.name" v-if="item.links">
          <template v-slot:activator="{ props }">
            <v-list-item rounded="0" v-bind="props">
              <v-list-item-title class="py-3 text-subtitle-1 text-black">
                {{ item.name }}
              </v-list-item-title>
              <template v-slot:append>
                {{ item.link.hash }}
                <v-btn icon="fas fa-caret-down" size="small" variant="text" />
              </template>
            </v-list-item>
          </template>

          <v-row class="py-3">
            <v-col class="item-group-div py-0" cols="12">
              <v-list-item
                class="text-subtitle-1 text-black"
                v-for="link in item.links"
                :key="link.name"
                :to="{ path: link.link.path, hash: link.link.hash }"
                :href="link.link.href"
                :active="false"
                :target="item.link.openNew ? '_blank' : null"
              >
                {{ link.name }}
              </v-list-item>
            </v-col>
          </v-row>
        </v-list-group>
        <template v-else>
          <v-row class="py-3">
            <v-col class="py-0" cols="12">
              <v-list-item
                class="text-subtitle-1 text-black"
                rounded="0"
                :href="item.link.href"
                :to="item.link.to"
                :target="item.link.openNew ? '_blank' : null"
              >
                {{ item.name }}
              </v-list-item>
            </v-col>
          </v-row>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
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
              name: "Intro",
              link: { path: "/", hash: "#intro" }
            },
            {
              name: "Let's Chat",
              link: { path: "/", hash: "#chat" }
            },
            {
              name: "Architecture",
              link: { path: "/", hash: "#architecture" }
            },
            {
              name: "About",
              link: { path: "/", hash: "#about" }
            }
          ]
        },
        {
          name: "Articles",
          link: { to: "/articles" }
        }
      ]
    };
  }
};
</script>

<style scoped></style>
