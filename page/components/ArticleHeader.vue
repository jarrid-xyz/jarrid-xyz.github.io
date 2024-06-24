<template>
  <v-card flat rounded="0" class="min-width">
    <v-img cover :src="post.img" v-if="post.img" />
    <img :src="getImageUrl(defaultImage)" v-else style="height: 100%; width: 100%;"/>
    <v-card-title class="text-h3 text-wrap px-0">
      {{ post.title }}
    </v-card-title>
    <v-card-subtitle class="text-subtitle-1 px-0">
      By
      <a :href="post.authorLink" target="_blank">{{ post.author }}</a> on
      {{ formatDate(post.date) }}
    </v-card-subtitle>
    <v-card-text class="px-0">
      <v-chip-group class="px-0">
        <v-chip v-for="tag in post.tags" :key="tag" class="ma-1" outlined>
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script setup>
import moment from "moment";

const url = useRequestURL();
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  post: {
    type: Object,
    required: true
  }
});

useSeoMeta({
  title: props.post.title,
  ogTitle: props.post.title,
  description: props.post.description,
  ogDescription: props.post.description,
  ogImage: (props.post.img ? props.post.img : `${url.protocol}//${url.host}/images/og_image_square_1.png`),
  twitterCard: 'summary_large_image',
})

const getImageUrl = (img) => {
  return new URL(img, import.meta.url)
}
const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
}

defineExpose({
  getImageUrl,
  formatDate
})
</script>

<script>
export default {
  name: "ArticleHeader",

  data() {
    return {
      defaultImage: "../assets/images/og_image_wide_large_1.png"
    }
  },
};
</script>

<style scoped:>
@media (min-width: 1024px) {

  .min-width {
    min-width: 1024px;
  }
}
</style>
