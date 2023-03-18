<script setup lang="ts">
import codes from "country-calling-code";
import {
  phoneNumberInput,
  usePhoneNumberForm,
} from "../composables/usePhoneNumberForm";

const { isPhoneNumberFormLoading, toggleLoadingState } = usePhoneNumberForm();

function handleClick() {
  usePhoneNumberForm().toggleLoadingState();
  console.log(usePhoneNumberForm().isPhoneNumberFormLoading.value);
}

function handleSelectCountryCode(event) {
  console.log(event);
}
</script>

<template>
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
          'btn loading': isPhoneNumberFormLoading,
        }"
        @click="handleClick"
      >
        Reset
      </button>
      <button
        class="btn w-24"
        :class="{
          'btn loading': isPhoneNumberFormLoading,
        }"
        @click="handleClick"
      >
        Search
      </button>
    </div>
  </div>
</template>

<style scoped></style>
