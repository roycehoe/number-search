<script setup lang="ts">
import codes from "country-calling-code";
import { usePhoneNumberForm } from "../composables/usePhoneNumberForm";

const {
  isFormLoading,
  phoneNumberInput,
  countryCallingCode,
  resetPhoneNumberForm,
} = usePhoneNumberForm();

function handleClick() {
  console.log(countryCallingCode.value);
}

function handleSelectCountryCode(newCountryCallingCode: string) {
  countryCallingCode.value = newCountryCallingCode.replace("-", "");
}
</script>

<template>
  <div
    class="form-container"
    :class="[countryCallingCode ? 'max-h-40' : 'max-h-12']"
  >
    <select class="phone-number-input--country-code select w-full max-w-xs">
      <option disabled selected>Select a country code</option>
      <option
        v-for="{ country, countryCodes, isoCode2, isoCode3 } in codes"
        @click="handleSelectCountryCode(countryCodes[0])"
      >
        <a> {{ country }} +{{ countryCodes[0] }} </a>
      </option>
    </select>

    <div
      class="phone-number-input--phone-number w-full max-w-xs"
      v-if="countryCallingCode"
    >
      <div>
        <input
          v-model="phoneNumberInput"
          type="text"
          placeholder="eg. 5550199"
          class="input input-bordered input-primary w-full mt-2"
        />
      </div>
    </div>

    <div
      class="phone-number-input--buttons flex mt-2 justify-end gap-2"
      v-if="countryCallingCode"
    >
      <button
        class="btn w-24"
        :class="{
          'btn loading': isFormLoading,
        }"
        @click="resetPhoneNumberForm"
      >
        Reset
      </button>
      <button
        class="btn w-24"
        :class="{
          'btn loading': isFormLoading,
        }"
        @click="handleClick"
      >
        Search
      </button>
    </div>

    <!-- <button @click="handleClick">TEST BUTTON</button> -->
  </div>
</template>

<style scoped>
.form-container {
  transition: max-height 0.2s linear;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
