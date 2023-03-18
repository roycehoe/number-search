<script setup lang="ts">
import codes from 'country-calling-code';
import { isLoading, mockData, phoneNumberInput } from './composables/usePhoneNumberForm';



function handleClick() {
  console.log(codes)
}

function handleSelectCountryCode(event) {
  console.log(event)
}


</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="m-12">Find This Number</h1>
    <div>
      <select class="select w-full max-w-xs">
        <option disabled selected>Select a country code</option>
        <option v-for="{ country, countryCodes, isoCode2, isoCode3 } in codes">
          <a @click="handleSelectCountryCode(countryCodes[0])">
            {{ country }} +{{ countryCodes[0] }}
          </a>
        </option>
      </select>

      <div class="phone-number-input w-full max-w-xs">
        <div>
          <input v-model="phoneNumberInput" type="text" placeholder="eg. 5550199"
            class="input input-bordered input-primary w-full mt-2" />
        </div>
      </div>

      <div class="flex mt-2 justify-end gap-2">
        <button class="btn w-24" :class="{
          'btn loading': isLoading
        }" @click="handleClick">Reset</button>
        <button class="btn w-24" :class="{
          'btn loading': isLoading
        }" @click="handleClick">Search</button>

      </div>

    </div>

    <div class="w-96">
      <Transition>
        <div v-if="!isLoading" class="phone-number-result bg-green-800 row-span-5 m-2">
          <div class="flex">
            <p class="text-left">Status:
            <div v-if="mockData.valid" class="badge badge-success">
              Valid number
            </div>
            <div v-else class="badge badge-error">
              Invalid number
            </div>
            </p>
          </div>
          <p v-if="mockData.valid" class="text-left">Location: {{ mockData.country.name }}, {{ mockData.location }}</p>
          <p v-if="mockData.valid" class="text-left">Carrier: {{ mockData.carrier }}</p>
          <p v-if="mockData.valid" class="text-left">international: {{ mockData.format.international }}</p>
        </div>
      </Transition>
    </div>

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
