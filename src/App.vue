<script setup lang="ts">
import About from './components/About.vue';
import HeroSection from './components/HeroSection.vue';
import Navbar from './components/Navbar.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';


</script>

<template>
  <div class="app">
    <Navbar />
    <HeroSection/>
    <About/>
    <Projects/>
    <Contact/>
  </div>
</template>

<style>

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Trebuchet MS", sans-serif;
}

.app{
  background-color: #16181d;
  min-height: 100vh;
}

</style>
