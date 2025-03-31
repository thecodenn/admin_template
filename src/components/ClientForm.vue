<template>
  <q-form @submit="handleSubmit" ref="myForm">
    <q-card class="card-bg fit">
      <!-- <q-card-section class="text-h4 q-pa-lg">
        <div class="text-h4 items-center justify-center">Add A New Client</div>
      </q-card-section> -->
      <q-card-section class="q-pa-lg">
        <q-list>
          <span class="row text-h4 justify-center q-pb-lg">Add a New Client</span>
          <q-input
            rounded
            standout="text-green"
            v-model="form.companyName"
            :label="$t('clients.company_name')"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Required']"
          >
            <template v-slot:prepend><q-icon name="apartment" /></template
          ></q-input>

          <q-input
            rounded
            standout="text-green"
            v-model="form.supplierNumber"
            :label="$t('clients.supplier_number')"
            hint=""
            ><template v-slot:prepend><q-icon name="tag" /></template
          ></q-input>

          <q-input
            rounded
            standout="text-green"
            v-model="form.website"
            :label="$t('clients.website')"
            hint=""
            type="url"
            ><template v-slot:prepend><q-icon name="language" /></template
          ></q-input>

          <q-btn-toggle
            v-model="form.invoiceOption"
            spread
            rounded
            no-caps
            toggle-color="accent"
            toggle-text-color="black"
            color="primary"
            text-color="white"
            style="margin: 20px"
            icon="check"
            :options="[
              { label: $t('clients.invoice_client'), value: 'No' },
              { label: $t('clients.invoice_diff_receipt'), value: 'Yes' },
            ]"
          >
          </q-btn-toggle>

          <q-input
            rounded
            standout="text-green"
            v-model="form.registrationNumber"
            :label="$t('clients.registration_number')"
            hint=""
            ><template v-slot:prepend><q-icon name="tag" /></template
          ></q-input>

          <q-input
            rounded
            standout="text-green"
            v-model="form.taxNumber"
            :label="$t('clients.tax_number')"
            hint=""
            ><template v-slot:prepend><q-icon name="tag" /></template
          ></q-input>

          <q-input
            rounded
            standout="text-green"
            v-model="form.primaryPhone"
            :label="$t('clients.primary_phone')"
            hint=""
            type="tel"
            placeholder="+49"
            ><template v-slot:prepend><q-icon name="smartphone" /></template
          ></q-input>

          <q-input
            rounded
            standout="text-green"
            v-model="form.primaryEmail"
            :label="$t('clients.primary_email')"
            hint=""
            type="email"
            ><template v-slot:prepend><q-icon name="mail_outline" /></template
          ></q-input>

          <q-input
            rounded
            standout="text-green"
            v-model="form.address"
            :label="$t('clients.address')"
            autogrow
            ><template v-slot:prepend><q-icon name="home" /></template
          ></q-input>

          <q-section class="row no-wrap">
            <q-input
              class="col-6"
              rounded
              standout="text-green"
              v-model="form.city"
              :label="$t('clients.city')"
              hint=""
              ><template v-slot:prepend><q-icon name="place" /></template
            ></q-input>
            <q-space />
            <q-input
              class="col-5"
              rounded
              standout="text-green"
              v-model="form.postalCode"
              :label="$t('clients.postal_code')"
              ><template v-slot:prepend><q-icon name="" /></template
            ></q-input>
          </q-section>

          <q-input
            rounded
            standout="text-green"
            v-model="form.mailbox"
            :label="$t('clients.mailbox')"
            hint=""
            ><template v-slot:prepend><q-icon outlined name="label_outline" /></template
          ></q-input>

          <q-input
            rounded
            standout="text-green"
            v-model="form.notes"
            :label="$t('clients.notes')"
            autogrow
            ><template v-slot:prepend><q-icon outlined name="notes" /></template
          ></q-input>
        </q-list>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          rounded
          size="large"
          type="submit"
          class="primary-button"
          style="width: 150px; margin-bottom: 40px"
        >
          {{ $t('buttons.save') }}
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const myForm = ref(null)
const form = ref({
  companyName: '',
  supplierNumber: '',
  website: '',
  invoiceOption: 'No',
  registrationNumber: '',
  taxNumber: '',
  primaryPhone: '',
  primaryEmail: '',
  address: '',
  city: '',
  postalCode: '',
  mailbox: '',
  notes: '',
})

const handleSubmit = () => {
  myForm.value.validate().then((success) => {
    if (success) {
      $q.notify({ type: 'positive', message: 'Form submitted successfully!' })
      console.log('Form Data:', form.value)
    } else {
      $q.notify({ type: 'negative', message: 'Please fill in required fields.' })
    }
  })
}
</script>

<style scoped>
.q-list {
  gap: auto;
}

::v-deep(.q-field__messages) {
  text-align: right !important;
}

.q-icon {
  color: #4caf50;
}
</style>
