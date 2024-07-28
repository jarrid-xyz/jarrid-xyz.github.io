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
          tags: doc.tags,
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

  ol,
  ul {
    list-style-position: outside;
    margin-left: 20px;
  }

  img {
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }
  table td {
    padding: 5px;
  }
  table thead tr {
    border: 1px solid #dddfe1;
  }
  table thead th {
    padding: 10px;
    border: 1px solid #dddfe1;
  }
  table tbody td {
    border: 1px solid #dddfe1;
  }
  table tbody tr:nth-child(odd) {
    background-color: #f9fafb;
  }
}

.pt-extra {
  padding-top: 100px;
}
</style>
