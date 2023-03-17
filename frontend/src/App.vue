<script setup lang="ts">
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
// const isLoading = ref(true)

function handleClick() {
  console.log(searchInput.value)
}


</script>

<template>
  <div>
    <div class="grid grid-rows-6 w-96">
      <div class="phone-number-input bg-blue-800 row-span-1">
        <div class="flex m-2">
          <div>
            <input v-model="searchInput" type="text" placeholder="Phone number..."
              class="input input-bordered input-primary w-full h-full" />
          </div>
          <div class="ml-4">
            <button @click="handleClick">Search</button>
          </div>
        </div>
      </div>
      <div class="phone-number-result bg-green-800 row-span-5 m-2">
        <div class="flex">
          <p class="text-left mr-2">Status: </p>
          <div class="badge badge-success h-full">
            Valid
          </div>
        </div>
        <p class="text-left">Location: {{ mockData.country.name }}, {{ mockData.location }}</p>
        <p class="text-left">Carrier: {{ mockData.carrier }}</p>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
