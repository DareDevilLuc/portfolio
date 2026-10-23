<script setup>
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section class="projects-section">
    <div class="projects-content">
      <div class="projects-title">
        Projects
      </div>

      <div class="projects-grid">
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  </section>
</template>

<style scoped>

.projects-section{
  padding: 4rem 8rem;
}

.projects-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}


.projects-title {
  color: #C678DD;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.projects-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 55%;
  align-self: center;
}


</style>
