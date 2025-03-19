<template>
  <q-form @submit="handleSubmit" ref="myForm">

    <q-card class="card-bg fit" bordered shadow-10 rounded-borders>
      <q-card-section class="text-h6 text-grey-8">

        <div class="text-h6"><q-icon name="apartment" color="primary" class="q-mb-xs" /> Clients
        </div>

      </q-card-section>
      <q-card-section class="q-pa-sm">
        <q-list class="row">

          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input  :label="$t('clients.company_name')" lazy-rules
                :rules="[val => val && val.length > 0 || 'Required']" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input  :label="$t('clients.supplier_number')" hint="" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input :label="$t('clients.website')" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>

              <q-btn-toggle  spread no-caps toggle-color="primary" color="white"
                text-color="black" :options="[
                  { label: $t('clients.invoice_client'), value: 'No' },
                  { label: $t('clients.invoice_diff_receipt'), value: 'Yes' }
                ]" />

            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input :label="$t('clients.registration_number')" hint="" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input  :label="$t('clients.tax_number')" hint="" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input type="tel" :label="$t('clients.primary_phone')" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input   :label="$t('clients.primary_email')" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input   autogrow :label="$t('clients.address')" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input  :label="$t('clients.city')" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input  :label="$t('clients.postal_code')" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input  autogrow :label="$t('clients.mailbox')" />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input  type="textarea" dense :label="$t('clients.notes')" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn push type="submit" class="text-capitalize bg-primary text-white" style="width: 150px">{{
          $t('buttons.save') }}</q-btn>
      </q-card-actions>
    </q-card>

  </q-form>
</template>

<script setup>


</script>
