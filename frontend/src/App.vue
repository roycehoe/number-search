<script setup lang="ts">
import codes from 'country-calling-code';
import { ref } from 'vue';

export interface Format {
  international: string;
  local: string;
}

export interface Country {
  code: string;
  name: string;
  prefix: string;
}

export interface GetPhoneNumberResponse {
  _id: string;
  phone: string;
  valid: boolean;
  format: Format;
  country: Country;
  location: string;
  type: string;
  carrier: string;
  createdAt: number;
}


const MOCK_DATA = {
  "_id": "6413b4a4b372f80c7fe2916c",
  "phone": "6591348138",
  "valid": true,
  "format": {
    "international": "+6591348138",
    "local": "9134 8138"
  },
  "country": {
    "code": "SG",
    "name": "Singapore",
    "prefix": "+65"
  },
  "location": "Singapore",
  "type": "mobile",
  "carrier": "SingTel",
  "createdAt": 1679013028962
}


const searchInput = ref("")
const isLoading = ref(false)
const mockData = ref(MOCK_DATA)
const countryCode = ref("65")

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
          <input v-model="searchInput" type="text" placeholder="eg. 5550199"
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
          <p v-if="mockData.valid" class="text-left">international: {{ mockData.carrier }}</p>
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
