<script setup lang="ts">
</script>

<template>

  <div class="hero-section">
    <div class="hero-content">
      <p class="intro">An aspiring Software Engineer</p>
      <h1>
        Hello, I am
        <span>Kyle</span>
        <span>Casirayan</span>
      </h1>
      <p class="description">3rd Year BSCS Student @ University of the Philippines Cebu | Philippines</p>
    </div>

    <div class="hero-image-wrapper">
      <img src="/images/me.jpg" class="hero-image">
    </div>
  </div>

</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  animation: fadeInUp 1s ease-in-out;
}

.hero-content {
  display: flex;
  flex-direction: column;
}

.hero-content h1 {
  font-size: 6rem;
  color: white;
  margin: 0 0;
}

.hero-content span {
  display: block;
  color: #C678DD;
}

.intro {
  color: white;
  font-size: 1.2rem;
  margin: 0;
}

.description {
  color: #aaa;
  font-size: 1rem;
  margin-top: 1rem;
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

@keyframes fadeInUp{
  from{
    opacity: 0;
    transform: translateY(50px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}

</style>
