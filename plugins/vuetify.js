import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from "vuetify/lib/iconsets/mdi";

import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import 'vuetify/styles'
import "~/assets/css/_variables.scss";


import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// color theme
// https://coolors.co/palette/7400b8-6930c3-5e60ce-5390d9-4ea8de-48bfe3-56cfe1-64dfdf-72efdd-80ffdb
const lightColorTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#80FFDB",
    "primary-darken-1": "#64DFDF",
    secondary: "#7400B8",
    "secondary-darken-1": "#5E60CE",
    error: "#fe6700",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#fe6700",
    anchor: "#7400B8"
  }
};


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: "lightColorTheme",
      themes: {
        lightColorTheme
      }
    },
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        mdi,
        fa
      }
    },
    components,
    directives,
  })
  app.vueApp.use(vuetify)
})