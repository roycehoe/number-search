<script setup lang="ts">
import Header from "./components/Header.vue";
import PhoneNumberForm from "./components/PhoneNumberForm.vue";
import PhoneNumberResults from "./components/PhoneNumberResults.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <Header></Header>
    <PhoneNumberForm></PhoneNumberForm>
    <PhoneNumberResults></PhoneNumberResults>
  </div>
</template>

<style scoped></style>
