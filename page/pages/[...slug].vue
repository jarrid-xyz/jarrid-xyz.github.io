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
    padding-bottom: 5px;
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
    margin-bottom: 20px;
  }

  img {
    margin-top: 20px;
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
    display: block;
    overflow-y: scroll;
    margin-top: 20px;
    margin-bottom: 20px;
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

  blockquote {
    width: 100%;
    margin-bottom: 30px;
    font-style: italic;
    color: #000000;
    padding: 10px 30px 0px 60px;
    border-left: 8px solid #78c0a8;
    position: relative;
  }

  blockquote::before {
    content: "\201C";
    color: #78c0a8;
    font-size: 3em;
    position: absolute;
    left: 10px;
    top: -10px;
  }
}

.pt-extra {
  padding-top: 100px;
}
</style>
