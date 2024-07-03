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
            v-for="field in formFields"
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
              :disabled="submitted"
            >
            </component>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="card-actions justify-end pr-3">
        <v-col v-if="submitted">
          <p class="text-subtitle-1">Yay. We'll reach out to you shortly !!</p>
        </v-col>
        <v-btn
          class="btn-width"
          variant="flat"
          size="x-large"
          color="secondary"
          @click="submitForm"
          type="submit"
          :disabled="submitted"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-form>
    <v-form ref="form2"></v-form>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
const WEB3FORMS_ACCESS_KEY = "8f1ec400-61d0-458e-b2b8-4cfa3e712abf";
const form = ref(null);
const submitted = ref(null);

const getFormValues = () => {
  const values = {};
  formFields.value.forEach((field) => {
    values[field.label] = field.value;
  });
  return values;
};

const submitForm = async () => {
  const valid = await validate();
  if (!valid.valid) {
    return;
  }
  const payload = getFormValues();
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: payload["Name *"],
      email: payload["Email *"],
      company: payload["Company *"],
      job_title: payload["Job Title"],
      message: payload["Message"]
    })
  });
  const result = await response.json();
  if (result.success) {
    submitted.value = true;
  }
};
const rules = {
  required: (v) => !!v || "Required",
  email: (v) => {
    if (!/^[^@]+@\w+(\.\w+)+\w$/.test(v)) {
      return "E-mail must be valid";
    }
  }
};

const validate = async () => {
  return form.value?.validate();
};

const formFields = ref([
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
]);

defineExpose({
  formFields,
  submitForm,
  submitted
});
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
