<template>
  <div>
    <Header />
    <Profile />
    <Companies />
    <Project />
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
import Companies from '~/components/Companies.vue'
import Project from '~/components/Project.vue'
</script>
