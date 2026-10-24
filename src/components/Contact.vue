<template>
  <section class="contact-section">
    <div class="contact-content">
      <div class="contact-title">
        Let's Talk
      </div>

      <div class="contact-btn">
          Contact me!
      </div>

    </div>

  </section>

</template>

<style scoped>
.contact-content{
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}

.contact-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #7c3aed;
  color: #ffffff;
  border: 2px solid #7c3aed;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.contact-btn:hover {
  background: #6d28d9;
  border-color: #6d28d9;
  transform: translateY(-2px);
}

.contact-btn:focus-visible {
  outline: 3px solid #c4b5fd;
  outline-offset: 3px;
}


.contact-title {
  color: #C678DD;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-section{
  padding-bottom: 3rem;
}
</style>
