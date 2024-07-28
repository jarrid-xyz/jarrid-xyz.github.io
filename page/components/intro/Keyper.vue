<template>
  <v-container class="page fill-height page pt-extra">
    <v-row>
      <v-col cols="12">
        <p class="text-h2">Keyper</p>
        <p class="text pt-3">
          Keyper by Jarrid is a suite of crypto key management APIs that
          simplify key creation, management, deployment, and
          encryption/decryption. It supports file-based operations for easy
          automation and tracking via GitOps. Fully integrated with cloud KMS
          services like AWS KMS and GCP KMS, Keyper reduces infrastructure
          maintenance.
        </p>
      </v-col>
      <v-col cols="12" class="d-md-flex justify-end text-right">
        <div
          v-for="button in three_buttons"
          :key="button.text"
          class="pl-5 pt-3"
        >
          <v-btn
            :href="button.to.href"
            target="_blank"
            class="cta-button"
            size="large"
          >
            {{ button.text }}
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12">
        <div class="demo-video">
          <iframe
            src="https://www.youtube.com/embed/0ut4KVRdKgM?si=LFEVIEo3V8pgH8lG&controls=0&modestbranding=1&showinfo=0&rel=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Keyper",
  data() {
    return {
      three_buttons: [
        {
          text: "Docs",
          to: { href: "https://jarrid.xyz/keyper" },
        },
        {
          text: "Github",
          to: { href: "https://github.com/jarrid-xyz/keyper" },
        },

        {
          text: "Questions? Talk to Us",
          to: { href: "https://calendar.app.google/qAjVcpLwLesdtSPQ8" },
        },
      ],
    };
  },
};
</script>

<style scoped>
.pt-extra {
  padding-top: 50px;
}

.cta-button {
  background-color: rgb(var(--v-theme-primary));
  color: black;
}

.demo-video {
  position: relative;
  @media (min-width: 1024px) {
    padding-bottom: 50%;
    /* 16:9 */
  }
  padding-bottom: 100%;
  padding-top: 25px;
  height: 0;
}

.demo-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
