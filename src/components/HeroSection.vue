<script setup lang="ts">
</script>

<template>

  <div class="hero-section">
    <div class="hero-content">
      <p>An aspiring Software Engineer</p>
      <h1> 
        Hello, I am 
        <span>Kyle Casirayan</span> 
      </h1>
      <p>A 3rd-year Computer Science student at University of the Philippines Cebu</p>
    </div>

    <img src="/images/me.jpg" class="hero-image">
  </div>

</template>

<style scoped>

.hero-section{
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.hero-content{
  display: flex;
  flex-direction: column;
}

.hero-content h1{
  font-size: 4rem;
  color: white;
  margin: 0 0;
}

.hero-content p{
  color: white;
  align-self: flex-start;
}

.hero-content span{
  display: block;
  color: #C678DD;
}

.hero-image{
  border-radius: 50%;
  object-fit: cover;
  width: 30rem;
  height: 30rem;
}

</style>
