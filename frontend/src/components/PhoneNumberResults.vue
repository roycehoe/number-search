<script setup lang="ts">
import { usePhoneNumberForm } from "../composables/usePhoneNumberForm";

const { isFormLoading, mockData } = usePhoneNumberForm();
</script>

<template>
  <div class="w-96 h-52">
    <Transition>
      <div
        v-if="!isFormLoading"
        class="phone-number-result bg-green-800 row-span-5 m-2"
      >
        <div class="flex">
          <p class="text-left">Status:</p>
          <div v-if="mockData.valid" class="badge badge-success">
            Valid number
          </div>
          <div v-else class="badge badge-error">Invalid number</div>
        </div>
        <p v-if="mockData.valid" class="text-left">
          Location: {{ mockData.country.name }}, {{ mockData.location }}
        </p>
        <p v-if="mockData.valid" class="text-left">
          Carrier: {{ mockData.carrier }}
        </p>
        <p v-if="mockData.valid" class="text-left">
          international: {{ mockData.format.international }}
        </p>
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
