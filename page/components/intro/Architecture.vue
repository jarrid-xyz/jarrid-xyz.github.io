<template>
  <v-container class="page fill-height page">
    <v-row class="pt-15">
      <p class="text-h2 pb-15">Architecture</p>
      <v-row>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12">
              <v-card variant="flat" class="card-height-50 px-0">
                <v-row>
                  <v-col cols="12" md="6" class="my-auto">
                    <v-card-title class="text-h5 text-wrap px-0">
                      {{ part1.title }}
                    </v-card-title>
                    <v-card-text class="px-0">
                      {{ part1.description }}
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-img
                      :height="part1.image.height"
                      :width="part1.image.width"
                      contain
                      :src="part1.image.src"
                      class="mx-auto"
                    />
                  </v-col>
                </v-row>
              </v-card>
              <v-card variant="flat" class="card-height-50">
                <v-row>
                  <v-col cols="12" md="6" class="my-auto">
                    <v-card-title class="text-h5 text-wrap px-0">
                      {{ part2.title }}
                    </v-card-title>
                    <v-card-text class="px-0">
                      {{ part2.description }}
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-img
                      :height="part2.image.height"
                      :width="part2.image.width"
                      contain
                      :src="part2.image.src"
                      class="mx-auto"
                    />
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-card variant="outlined" class="card-height-100">
            <v-row>
              <v-col cols="12" md="6" class="my-auto">
                <v-card-title class="text-h5 text-wrap">
                  {{ part3.title }}
                </v-card-title>
                <v-card-text class="text-subtitle-1">
                  {{ part3.description }}
                  <div class="pl-5 pt-5 text-subtitle-2">
                    <ol>
                      <li v-for="(step, index) in part3.steps" :key="index">
                        {{ step }}
                      </li>
                    </ol>
                  </div>
                </v-card-text>
              </v-col>
              <v-col cols="12" md="6">
                <v-img
                  :height="part3.image.height"
                  :width="part3.image.width"
                  cover
                  :src="part3.image.src"
                  class="mx-auto"
                />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script setup>
import PolicyDiagram from "~/assets/images/policy_config_white.png";
import JarSDKDiagram from "~/assets/images/Jar_SDK.png";
import DataFlowDiagram from "~/assets/images/jarrid_flow_white.png";
</script>

<script>
export default {
  name: "IntroArchitecture",
  // Add your component's properties, methods, and lifecycle hooks here
  data() {
    return {
      part1: {
        title: "Policy as Configuration",
        description:
          "Jarrid makes it easy for security, legal, and compliance teams to configure data collection and management policies with simple configurations.",
        image: {
          src: PolicyDiagram,
          alt: "Policy as Configuration",
          width: "300px",
          height: "300px"
        }
      },
      part2: {
        title: "Jar-SDK Integrations",
        description:
          "Both app developers and data engineers can leverage Jarrid's integrations with minimal code changes via the Jar-SDK. The SDK automatically manages key management, encryption/decryption, and policy metadata in the background, ensuring data is handled according to its security, privacy, and compliance configurations at all stages of the data lifecycle.",
        image: {
          src: JarSDKDiagram,
          alt: "Jar-SDK Integration",
          width: "250px",
          height: "350px"
        }
      },
      part3: {
        title: "Data Flow",
        description:
          "Jarrid provides a simple abstraction layer for security, legal, and compliance teams, enabling app developers and data engineers to work seamlessly. With predefined policy configurations, engineers can develop applications and data pipelines without guessing requirements and constraints.",
        steps: [
          "Platform initiated data collection request from user",
          "Add Jar-SDK to existing app backend and data pipeline code",
          "Jar-SDK handles encryption/description, key management based on pre-defined policies",
          "Data is sent to designated datastore or passed on in the pipeline accordingly"
        ],
        image: {
          src: DataFlowDiagram,
          alt: "Data Flow Diagram",
          width: "300px",
          height: "700px"
        }
      }
    };
  }
};
</script>

<style scoped>
.card-height-50 {
  min-height: 350px;
}
.card-height-100 {
  min-height: 700px;
}
</style>
