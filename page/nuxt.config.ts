import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  build: {
    transpile: ["vuetify", "@nuxtjs/robots", "@nuxtjs/sitemap"]
  },
  css: ["~/assets/css/main.css"],
  buildModules: ["@nuxtjs/vuetify"],
  modules: [
    "@nuxt/content",
    "nuxt-disqus",
    "nuxt-gtag",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/image"
  ],
  pages: true,
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins.push(
        vuetify({
          autoImport: true
        })
      );
    }
  },
  vuetify: {
    defaultAssets: {
      font: "Ubuntu"
    }
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"]
    },
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  components: [
    {
      path: "~/components"
    }
  ],
  site: {
    url: "https://jarrid.xyz",
    name: "jarrid.xyz",
    description:
      "Let jarrid manage sensitive data for you. Jarrid is a collection of security, privacy and regulation aware developer tools for backend developers and data engineers. Our goal is to create common languages between security, legal and compliance and engineering teams.",
    defaultLocale: "en"
  },
  content: {
    contentHead: false,
    markdown: {
      mdc: true,
      rehypePlugins: ["rehype-autolink-headings"]
    }
  },
  disqus: {
    shortname: "apiobuild-com"
  },
  gtag: {
    id: "G-437EGHNNRF"
  }
});
