<script setup lang="ts">
</script>

<template>
  <div>
    <div class="grid grid-rows-6 w-96">
      <div class="phone-number-input bg-blue-800 row-span-1">
        <div class="flex m-2">
          <div>
            <input type="text" placeholder="Phone number..." class="input input-bordered input-primary w-full h-full" />
          </div>
          <div class="ml-4">
            <button>Search</button>
          </div>
        </div>
      </div>
      <div class="phone-number-result bg-green-800 row-span-5">
        <p>PHONE NUMBER RESULT</p>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
