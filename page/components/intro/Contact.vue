<template>
  <v-container class="page fill-height page pt-extra">
    <v-row>
      <v-col cols="12">
        <span class="text-h2">Contact Us</span>
      </v-col>

      <v-row class="pt-10 justify-center">
        <v-col cols="12" md="6">
          <v-col>
            <ContactCard :contact="contacts[0]" :socials="socials" />
          </v-col>
        </v-col>
        <v-col cols="12" md="6">
          <v-col cols="12" class="py-0">
            <ContactCard :contact="contacts[1]" />
          </v-col>
          <v-col cols="12" class="py-5">
            <ContactCard :contact="contacts[2]" class="contact" />
          </v-col>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {

      contacts: [
        {
          name: "monday",
          title: "Follow Us",
          description: "#MondayFeatureDrop Stay tuned!",
          social: true,
        },
        {
          name: "subscribe",
          title: "Subscribe",
          description: "Get weekly updates. Promised.",
          subscribe: true,
        },
        {
          name: "chat",
          title: "Chat with Us",
          description:
            "Not sure how to implement your security feature? Wanna tell us how our library doesn't work for you? We are always up for a chat.",
          letstalk: true,
        },
      ],
      socials: [
        {
          name: "github",
          title: "Stuff we've built. 100% free.",
          link: "https://github.com/jarrid-xyz",
          handle: "jarrid-xyz",
          icon: "fab fa-github",
        },
        {
          name: "instagram",
          title: "Ask us anything. Weekly updates. Promised.",
          link: "https://www.instagram.com/jarrid.xyz",
          handle: "@jarrid.xyz",
          icon: "fab fa-instagram",
        },
        {
          name: "linkedin",
          title: "Industry leading analysis.",
          link: "https://www.linkedin.com/company/apiobuild/",
          handle: "apiobuild",
          icon: "fab fa-linkedin",
        },
        {
          name: "email",
          title: "I will personally reply to all emails. Promised.",
          handle: "luluc@jarrid.xyz",
          link: "mailto:luluc@jarrid.xyz",
          icon: "fas fa-envelope",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contact {
  min-height: 232px;
}

.cta-button {
  background-color: rgb(var(--v-theme-primary));
  color: black;
}
</style>
