<template>
  <v-container class="pt-extra">
    <ContentDoc v-slot="{ doc }">
      <ArticleHeader
        :post="{
          title: doc.title,
          description: doc.description,
          img: doc.img,
          author: doc.author,
          authorLink: doc.authorLink,
          date: doc.date,
          tags: doc.tags
        }"
        :url="doc._path"
      />
      <div class="py-15 markdown-body">
        <ContentRenderer :value="doc" />
        <DisqusComments
          :title="doc.title"
          :identifier="doc.title"
          v-if="!doc.disableComment"
        />
      </div>
    </ContentDoc>
  </v-container>
</template>

<style>
.markdown-body {
  p {
    padding-bottom: 30px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 20px;
    margin-bottom: 5px;
  }
  pre {
    overflow-x: auto;
  }
  ul {
    list-style-position: inside;
  }
}
.pt-extra {
  padding-top: 100px;
}
</style>
