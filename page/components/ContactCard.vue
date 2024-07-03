<template>
  <v-card class="pb-10 d-flex flex-column">
    <v-card-title class="px-7"> {{ contact.title }} </v-card-title>
    <v-card-text class="px-7">
      {{ contact.description }}
    </v-card-text>

    <template v-if="contact.social">
      <v-list-item
        v-for="social in socials"
        :key="social.name"
        :href="social.link"
        target="_blank"
      >
        <v-col class="justify-center">
          <v-btn :icon="social.icon" size="small" color="primary" />
          <span class="pl-3">
            {{ social.handle }}
          </span>

          <p class="pt-2 text-black text-body-2">
            {{ social.title }}
          </p>
        </v-col>
      </v-list-item>
    </template>
    <template v-if="contact.subscribe">
      <div class="px-6">
        <Subscribe />
      </div>
    </template>
    <template v-if="contact.letstalk">
      <v-card-actions class="px-6 mt-auto">
        <LetsTalkButton />
      </v-card-actions>
    </template>
  </v-card>
</template>
<script>
export default {
  name: "ContactCard",
  props: {
    contact: {
      type: Object
    },
    socials: {
      type: Array
    }
  }
};
</script>
