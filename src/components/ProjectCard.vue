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
        <li v-for="tag in project.tags" :key="tag.name" class="tag">
          <i :class="tag.icon"></i>
        </li>
      </div>
    </div>
  </article>
</template>

<style scoped>
.projects-card {
  border: 1px solid #C678DD;
  border-radius: 16px;
  min-height: 25rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.tag{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border-color: gray;
  border-style: solid;
  border-width: 1px;
  background: black;
}

.tag + .tag {
  margin-left: -0.5rem;
}

.tag i{
  font-size: 1.5rem;
}

.project-title {
  font-size: 3rem;
  margin: 0;
}

.project-description {
  font-size: 1.5rem;
  color: #9ea1ba;
}

.project-body {
  color: white;
  padding: 1rem;
}

.project-tags {
  display: flex;
  list-style: none;
  margin: 0;
}

.project-image{
  width: 100%;
  min-height: 15rem;
  border-radius: 16px;
  display: block;
}
</style>
