<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <Project
      v-for="project in projects"
      :key="project.id"
      :name="project.name"
      :date="project.pushed_at"
      :link="project.html_url"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Project from './Project.vue'

const projects = ref([])

onMounted(async () => {
  const response = await fetch(
    `https://api.github.com/users/evrwaq/repos?per_page=100`
  )
  const data = await response.json()
  console.log(data)
  projects.value = data
})
</script>
