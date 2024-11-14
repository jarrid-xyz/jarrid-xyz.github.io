<template>
  <v-container class="page fill-height page pt-extra pb-15">
    <v-row>
      <v-col cols="12">
        <span class="text-h2">Articles</span>
      </v-col>
      <ContentList path="/articles" v-slot="{ list }">
        <template v-for="article in limitArticles(sortByDate(list))" :key="article._path">
          <v-col cols="12" md="4" v-if="article.visible != false">
            <v-card :to="{ path: article._path }" class="article text-black">
              <div class="image">
                <v-img :src="article.img ? article.img : Logo" cover />
              </div>
              <v-card-title class="text-wrap">
                {{ article.title }}
              </v-card-title>
              <v-card-subtitle>
                By {{ article.author }} on {{ formatDate(article.date) }} <br />
                {{ Math.ceil(article.meta.readingTime[1]) }} min read
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
            <v-img cover :src="Logo" />
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
import moment from "moment";
import Logo from "~/assets/images/og_image_wide_large_1.png";

const getImageUrl = (img) => {
  return new URL(img, import.meta.url);
};
const formatDate = (date) => {
  return moment(date).utc().format("YYYY-MM-DD");
};

defineExpose({
  getImageUrl,
  formatDate,
});
</script>

<script>
export default {
  name: "Articles",
  props: {
    limit: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      defaultImage: Logo,
    };
  },
  methods: {
    limitArticles(list) {
      if (this.limit > 0) {
        return list.slice(0, this.limit);
      }
      return list;
    },
    sortByDate(list) {
      list.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });
      return list;
    },
  },
};
</script>
<style scoped>
.pt-extra {
  padding-top: 100px;
}

.article {
  min-height: 450px;
}

.image {
  height: 200px;
  max-width: 400px;
}
</style>
