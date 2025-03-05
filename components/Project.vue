<template>
  <div
    class="border border-solid border-primary rounded w-48 h-40 flex flex-col justify-between p-4"
  >
    <div>
      <h1 class="text-lg">{{ name }}</h1>
      <p class="opacity-40 text-sm">{{ date }}</p>
    </div>
    <a :href="link" target="_blank" class="cursor-pointer">
      <img src="~/assets/icons/github.svg" alt="GitHub" />
    </a>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  date: String,
  link: String,
})
</script>
