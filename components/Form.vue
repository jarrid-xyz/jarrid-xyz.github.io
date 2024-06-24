<template>
  <v-card class="form-min-height">
    <v-card-title class="text-h3"> Let's Chat</v-card-title>
    <v-col cols="12">
      We are a dedicated team actively expanding our capabilities. We are eager
      to learn about your use cases and tailor our features to meet your needs.
    </v-col>
    <v-form ref="form" @submit.prevent>
      <v-card-text class="pt-10">
        <v-row class="px-0">
          <v-col
            v-for="(field, index) in form"
            :key="field.label"
            :cols="field.cols || 12"
            class="py-1 px-2"
          >
            <component
              :is="field.component || 'v-text-field'"
              v-model="field.value"
              :rules="field.rules"
              :label="field.label"
              :required="field.required"
            >
            </component>
            <!-- <v-text-field> </v-text-field> -->
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="card-actions justify-end pr-3">
        <v-btn
          class="btn-width"
          variant="flat"
          size="x-large"
          color="secondary"
          @click="submit"
          type="submit"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-form>
    <v-form ref="form2"></v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    const rules = {
      required: (v) => !!v || "Required",
      email: (v) => {
        return "E-mail must be valid";
      }
    };
    return {
      form: [
        {
          label: "Name *",
          rules: [rules.required],
          required: true,
          value: ""
        },
        {
          label: "Email *",
          rules: [rules.required, rules.email],
          required: true,
          value: ""
        },
        {
          label: "Company *",
          rules: [rules.required],
          required: true,
          cols: 6,
          value: ""
        },
        {
          label: "Job Title",
          cols: 6,
          value: ""
        },
        {
          label: "Message",
          component: "v-textarea",
          value: ""
        }
      ],
      rules
    };
  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();
      console.log("valid", valid);

      if (valid) alert("Form is valid");
    },
    async submit() {
      console.log("here");
      this.validate();
    }
  }
};
</script>

<style scoped>
.card-actions {
  width: 100%;
  position: absolute;
  bottom: 15px;
}
.btn-width {
  width: 200px;
}
.form-min-height {
  min-height: 780px;
}
</style>
