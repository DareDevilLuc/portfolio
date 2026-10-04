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

    <div class="hero-image-wrapper">
      <img src="/images/me.jpg" class="hero-image">
    </div>
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

.hero-image-wrapper {
  position: relative;
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  object-fit: cover;
}

  .hero-image-wrapper::before {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 50%;

  border: 3px solid transparent;
  border-top-color: #C678DD;

  box-shadow: 0 0 15px #8c549d;

  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

</style>
