<template>
  <div>
    <Header />
    <Profile />
    <Companies />
    <div class="flex justify-center items-center mt-16">
      <Projects />
    </div>
    <Footer />
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
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
</script>
