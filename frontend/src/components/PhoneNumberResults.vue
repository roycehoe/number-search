<script setup lang="ts">
import { usePhoneNumberForm } from "../composables/usePhoneNumberForm";

const { isFormLoading, mockData } = usePhoneNumberForm();
</script>

<template>
  <div class="w-96 h-24 mt-4">
    <Transition>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body p-0">
          <div v-if="!isFormLoading" class="phone-number-result row-span-5 m-2">
            <div class="flex">
              <p class="text-left">Status:
                <div v-if="mockData.valid" class="badge badge-success">
                  Valid number
                </div>
                <div v-else class="badge badge-error">Invalid number</div>
              </p>
            </div>
            <p v-if="mockData.valid" class="text-left">
              Location: {{ mockData.country.name }}, {{ mockData.location }}
            </p>
            <p v-if="mockData.valid" class="text-left">
              Carrier: {{ mockData.carrier }}
            </p>
            <p v-if="mockData.valid" class="text-left">
              International number: {{ mockData.format.international }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
