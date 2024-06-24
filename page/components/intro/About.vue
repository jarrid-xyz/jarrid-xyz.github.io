<template>
  <v-container class="page fill-height page">
    <v-row class="pt-15">
      <v-col cols="12" class="min-height">
        <p class="text-h2">About</p>
        <v-row>
          <v-col cols="12" md="6">
            <template v-for="(bubble, index) in speechBubbles1" :key="index">
              <Speechbubble :text="bubble.text" />
            </template>
          </v-col>
          <v-col cols="12" md="6">
            <template v-for="(bubble, index) in speechBubbles2" :key="index">
              <Speechbubble :text="bubble.text" color="secondary" />
            </template>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const speechBubbles1 = [
  {
    text: "👋 I'm Lulu. I'm a software engineer with over 10 years of experience working with data, AI/ML, backend, infrastructure, platform, security, legal, and compliance."
  },
  {
    text: "Many times, I've tried to build a new product feature or data pipeline. After months of talking to security, legal, and compliance teams, I still had no clue what their requirements were. 🙈"
  },
  {
    text: "I decided to take on the security and compliance engineer role on the infrastructure team. Guess what... I was confused about my own requirements too. Every time I asked different people, I got different answers. 🤦‍♀️"
  },
  {
    text: "App developers. Data engineers. Platform engineers. Security. Legal. Compliance. We all speak different languages, yet we are all crucial to the success.. or simply the existence.. of the business. Not being able to meet compliance requirements can, in fact, kill a business."
  }
];
const speechBubbles2 = [
  {
    text: "On one flight from SF back to NYC, I thought.. What if there's an expressive and declaritive framework to define security, privacy and compliance policy? Developers could integrate directly into data handlers in existing applications and data pipelines. 💡"
  },
  {
    text: "I spent the next few weeks building out Jarrid. Taking inspiration from internet cookies, I want to put 🍪 back in the 🫙."
  },
  {
    text: "Imagine.. before you get targeted ads for the 1000th time, finally there's a way to say no. Remember, AI is using the data you and I created collectively on the public internet, but OpenAI is making money off us from the free data we've created."
  },
  {
    text: "As an engineer, I truly believe by creating the right abstraction, we can tackle the most complex problems."
  },
  {
    text: "Anyways.. Give it a try and let me know what do you think. 🙏"
  }
];
</script>

<script>
export default {
  name: "IntroAbout"
};
</script>

<style scoped>
.min-height {
  min-height: 750px;
}
</style>
