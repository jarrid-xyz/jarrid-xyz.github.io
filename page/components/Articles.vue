<template>
  <v-container class="page fill-height page">
    <v-row>
      <v-col cols="12">
        <span class="text-h2">Articles</span>
      </v-col>
      <ContentList path="/articles" v-slot="{ list }">
        <template v-for="article in list" :key="article._path">
          <v-col cols="12" md="4" v-if="article.visible != false">
            <v-card :to="{ path: article._path }" class="article text-black">
              <div class="image">
                <v-img
                  :src="article.img ? article.img : defaultImage"
                  cover
                  :height="image.height"
                  :width="image.width"
                />
              </div>
              <v-card-title class="text-wrap">
                {{ article.title }}
              </v-card-title>
              <v-card-subtitle>
                By {{ article.author }} on {{ formatDate(article.date) }}
              </v-card-subtitle>
              <v-card-text>
                {{ article.description }}
              </v-card-text>
            </v-card>
          </v-col>
        </template>
      </ContentList>
      <v-col cols="12" md="4">
        <v-card class="article d-flex flex-column">
          <div class="image">
            <v-img
              cover
              :src="Logo"
              :height="image.height"
              :width="image.width"
            />
          </div>
          <v-card-title>Learn more?</v-card-title>
          <v-card-text>
            We are always up for a chat to learn about your data and AI/ML
            problems.
          </v-card-text>
          <v-card-actions class="mt-auto">
            <lets-talk-button />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Logo from "~/assets/images/og_image_wide_large_1.png";
import moment from "moment";

const getImageUrl = (img) => {
  return new URL(img, import.meta.url);
};
const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
};

defineExpose({
  getImageUrl,
  formatDate
});
</script>

<script>
export default {
  name: "Articles",
  data() {
    return {
      image: {
        height: 200,
        width: 400
      },
      defaultImage: Logo
    };
  }
};
</script>
<style scoped>
.article {
  min-height: 420px;
}
.article-img {
  height: 200px;
}
.image {
  height: 200px;
  width: 400px;
}
</style>
