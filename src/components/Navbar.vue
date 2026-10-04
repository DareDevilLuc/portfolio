<script setup lang="ts">

</script>

<template>
  <div class="nav">
    <div class="nav-links">
      <a>Home</a>
      <a>About</a>
      <a>Projects</a>
      <a>Contact</a>
    </div>
  </div>
</template>

<style scoped>

.nav{
  position: fixed; 
  top: 0;
  left: 0;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  background-color: #333743;
  box-sizing: border-box;
}

.nav-links{
  display: flex;
  gap: 30px;
  color: white;
}

</style>
