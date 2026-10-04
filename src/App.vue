<script setup lang="ts">
import HeroSection from './components/HeroSection.vue';
import Navbar from './components/Navbar.vue';



</script>

<template>
  <div class="app">
    <Navbar />
    <HeroSection/>
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
