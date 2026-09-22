<template>
  <section id="about" class="section-shell">
    <HeadText title="ABOUT" />
    <div class="about-layout">
      <img
        class="portrait"
        :src="require('../assets/kyosuke_oki.jpg')"
        alt="Kyosuke Oki"
        width="200"
        height="200"
        loading="lazy"
      />
      <div>
        <h3>Product-minded engineering, from interface to operations.</h3>
        <p>
          I'm Kyosuke, a Melbourne-based engineer with around 10 years of
          experience across frontend development, full-stack delivery, and web
          design.
        </p>
        <p>
          At Wabify (April 2024–February 2026), I owned frontend architecture
          for restaurant operations, including POS, reservations, payments, and
          staff workflows. Previously at Raksul, I built Vue.js product features
          and progressed into an epic leadership role, coordinating delivery
          across frontend, backend, and product.
        </p>
        <p>
          As the solo engineer behind NeighCrew, I have also worked across
          product discovery, database design, Stripe Connect, and marketplace
          operations. I enjoy making complex workflows understandable—for the
          people using them and the engineers maintaining them.
        </p>
        <div class="about-links">
          <a href="mailto:kyosuke.oki.33@gmail.com">Email me</a>
          <a
            href="https://www.linkedin.com/in/kyosuke-oki-b020032a8/"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn ↗</a
          >
          <a
            href="https://github.com/kyo-oki"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub ↗</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HeadText from "./HeadText";
export default { name: "AboutMe", components: { HeadText } };
</script>
<style scoped>
.about-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
}
.portrait {
  border-radius: 50%;
  object-fit: cover;
}
h3 {
  font-size: 1.4rem;
  margin-bottom: 20px;
}
p {
  line-height: 1.8;
}
.about-links {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
.about-links a {
  padding: 12px 0;
  font-weight: 600;
}
@media (max-width: 650px) {
  .about-layout {
    grid-template-columns: 1fr;
  }
}
</style>
