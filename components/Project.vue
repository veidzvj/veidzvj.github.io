<template>
  <a
    :href="link"
    target="_blank"
    class="border border-solid border-primary rounded w-48 h-40 flex flex-col justify-between p-4"
  >
    <div>
      <h1 class="text-lg">{{ name }}</h1>
      <p class="opacity-40 text-sm">{{ date }}</p>
    </div>
    <div>
      <img src="~/public/icons/github.svg" alt="GitHub" />
    </div>
  </a>
</template>

<script setup>
defineProps({
  name: String,
  date: String,
  link: String,
})
</script>
