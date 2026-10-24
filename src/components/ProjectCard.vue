<script setup lang="ts">
import type { Project } from '@/composables/projects'

defineProps<{
  project: Project
}>()

</script>

<template>
  <article class="projects-card">
    <img :src="project.image" class="project-image">
    <div class="project-body">
      <h3 class="project-title">{{project.title}}</h3>
      <p class="project-description">{{project.description}}</p>
      <div class="project-tags">
      </div>
    </div>
  </article>
</template>

<style scoped>
.projects-card {
  border: 1px solid #C678DD;
  border-radius: 16px;
  min-height: 50rem;
}

.project-body {
  color: white;
}

.project-image{
  width: 100%;
  max-height: 13rem;
  border-radius: 16px;
  display: block;
}
</style>
