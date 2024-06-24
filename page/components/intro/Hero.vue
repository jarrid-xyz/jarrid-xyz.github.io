<template>
  <template v-if="mdAndUp">
    <v-container class="page fill-height page justify-center">
      <v-row>
        <v-col cols="12" md="6">
          <p class="text-h2">
            {{ title }}
          </p>
          <p class="text-h5 pt-10">
            {{ description }}
          </p>
          <div class="pl-5 pt-10">
            <ul>
              <li v-for="item in items" :key="item.title">
                <p class="text-h6 text-capitalize">
                  {{ item.title }}
                </p>
                <p>{{ item.description }}</p>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="form">
          <Form />
        </v-col>
      </v-row>
    </v-container>
  </template>
  <template v-else>
    <v-container
      class="full-size fill-height justify-center"
      style="min-height: 98vh !important"
    >
      <p class="text-h2 my-auto">
        {{ title }}
      </p>
    </v-container>

    <NextButton
      @click="$refs.about.$el.scrollIntoView({ behavior: 'smooth' })"
    />
    <v-container class="full-size fill-height justify-center" ref="about">
      <p class="text-h5 pt-5">
        {{ description }}
      </p>
    </v-container>

    <NextButton
      @click="$refs.features.$el.scrollIntoView({ behavior: 'smooth' })"
    />

    <v-container
      class="full-size fill-height justify-center pt-15"
      ref="features"
    >
      <v-col cols="12" v-for="item in items" :key="item.title">
        <p class="text-h6 text-capitalize">
          {{ item.title }}
        </p>
        <p>{{ item.description }}</p>
      </v-col>
    </v-container>
    <NextButton
      @click="$refs.form.$el.scrollIntoView({ behavior: 'smooth' })"
      style="bottom: 0px !important"
    />
    <v-container class="full-size fill-height justify-center pt-15" ref="form">
      <Form />
    </v-container>
  </template>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();
</script>

<script>
export default {
  name: "IntroHero",
  data() {
    return {
      title: "Let Jarrid Manage Sensitive Data for You",
      description:
        "Jarrid's data collection SDKs enable developers to speak the same languages as security, privacy, regulation and compliance teams. Data collected are automatically tagged with configurable policies managed by security and counsel. Each policy ensure that data is encrypted, protected, and compliant at all times.",
      items: [
        {
          title: "Create Transparency and Trust with Your Users",
          description:
            "Users can see and configure the data they are sharing with you, fostering transparency and trust."
        },
        {
          title: "Managed Security, Governance, Privacy, and Compliance",
          description:
            "Simplify your infosec, governance, privacy, legal, and compliance efforts with our developer-friendly open source SDKs."
        },
        {
          title: "Privacy-Preserving Data Analytics and AI",
          description:
            "Achieve high performance and cost-effective data analytics and AI on encrypted data without compromise privacy and security."
        },
        {
          title: "Data Marketplace",
          description:
            "Our platform enables companies to exchange data collected from other companies with clear user consent."
        }
      ]
    };
  }
};
</script>

<style scoped>
.fill-height-intro {
  height: 100%;
}
</style>
