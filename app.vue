<template>
  <div>
    <Header />
    <Profile />
  </div>
</template>

<style global>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script setup>
import Header from '~/components/Header.vue'
import Profile from '~/components/Profile.vue'
</script>
