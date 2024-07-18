import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  build: {
    transpile: ["vuetify", "@nuxtjs/robots", "@nuxtjs/sitemap"],
  },
  css: ["~/assets/css/main.css"],
  buildModules: ["@nuxtjs/vuetify"],
  modules: [
    "@nuxt/image",
    "nuxt-content-assets",
    "@nuxt/content",
    "nuxt-disqus",
    "nuxt-gtag",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  extends: ["node_modules/nuxt-content-assets/cache"],
  pages: true,
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins.push(
        vuetify({
          autoImport: true,
        })
      );
    },
  },
  vuetify: {
    defaultAssets: {
      font: "Ubuntu",
    },
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  components: [
    {
      path: "~/components",
    },
  ],
  robots: {
    UserAgent: "*",
    Disallow: "",
  },
  site: {
    url: "https://jarrid.xyz",
    name: "jarrid.xyz",
    description:
      "Let jarrid manage sensitive data for you. Jarrid is a collection of security, privacy and regulation aware developer tools for backend developers and data engineers. Our goal is to create common languages between security, legal and compliance and engineering teams.",
    defaultLocale: "en",
    trailingSlash: true,
  },
  sitemap: {
    xsl: false,
  },
  content: {
    contentHead: false,
    highlight: {
      theme: {
        default: "one-dark-pro",
        dark: "github-dark",
      },
    },
    markdown: {
      mdc: true,
      rehypePlugins: ["rehype-autolink-headings"],
    },
  },
  disqus: {
    shortname: "apiobuild-com",
  },
  gtag: {
    id: "G-437EGHNNRF",
  },
});
