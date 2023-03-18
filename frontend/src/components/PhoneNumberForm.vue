<script setup lang="ts">
import codes from "country-calling-code";
import { usePhoneNumberForm } from "../composables/usePhoneNumberForm";

const {
  isFormLoading,
  toggleFormLoadingState,
  phoneNumberInput,
  isShowPhoneNumberInput,
  toggleShowPhoneNumberInput,
  countryCallingCode,
} = usePhoneNumberForm();

function handleClick() {
  toggleFormLoadingState();
  console.log(isFormLoading.value);
}

function handleSelectCountryCode(something: string) {
  console.log(something.replace("-", ""));
}
</script>

<template>
  <div>
    <select class="select w-full max-w-xs">
      <option disabled selected>Select a country code</option>
      <option
        v-for="{ country, countryCodes, isoCode2, isoCode3 } in codes"
        @click="handleSelectCountryCode(countryCodes[0])"
      >
        <a> {{ country }} +{{ countryCodes[0] }} </a>
      </option>
    </select>

    <div class="phone-number-input w-full max-w-xs">
      <div>
        <input
          v-model="phoneNumberInput"
          type="text"
          placeholder="eg. 5550199"
          class="input input-bordered input-primary w-full mt-2"
        />
      </div>
    </div>

    <div class="flex mt-2 justify-end gap-2">
      <button
        class="btn w-24"
        :class="{
          'btn loading': isFormLoading,
        }"
        @click="handleClick"
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
    <button @click="handleClick">TEST BUTTON</button>
  </div>
</template>

<style scoped></style>
