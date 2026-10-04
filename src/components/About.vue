<template>

  <section class="about-section">
    <div class="about-content">
      <div class="about-title">
        About Me
      </div>

      <div class="about-paragraph">
        <p>
          I'm a Computer Science student passionate about software development
          and building useful applications. I enjoy learning new technologies
          and turning ideas into working projects. I enjoy solving problems and
          applying it into my projects. I am passionate about programming and Computer
          Science as a whole.
        </p>

        <p>
          I'm a Computer Science student passionate about software development
          and building useful applications. I enjoy learning new technologies
          and turning ideas into working projects. I enjoy solving problems and
          applying it into my projects. I am passionate about programming and Computer
          Science as a whole.
        </p>

        <p>
          I'm a Computer Science student passionate about software development
          and building useful applications. I enjoy learning new technologies
          and turning ideas into working projects. I enjoy solving problems and
          applying it into my projects. I am passionate about programming and Computer
          Science as a whole.
        </p>
      </div>

    </div>
  </section>

</template>

<style scoped>
.about-section{
  padding: 4rem 8rem;
}

.about-content {
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 3rem;
}


.about-title {
  color: #C678DD;
  font-size: 5rem;
  display: flex;
  align-items: flex-start;
}

.about-paragraph {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.5rem;
  color: white;
  gap: 3rem;
}

.about-paragraph p{
  margin: 0 0;
}
</style>
