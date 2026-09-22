<template>
  <ContentsContainer class="gr__box" id="home">
    <template v-slot:headText>
      <div class="intro">
        <p class="eyebrow">KYOSUKE OKI · MELBOURNE, AUSTRALIA</p>
        <h1>Frontend<br />Systems Engineer.</h1>
        <p class="summary">
          I build state-heavy products across payments, operations, and
          marketplaces—with a focus on clear architecture and reliable user
          experiences.
        </p>
        <div class="actions">
          <a
            class="action-link action-link--primary"
            href="#works"
            v-scroll-to="{ el: '#works', offset: -72 }"
            >View my work</a
          >
          <a class="action-link" href="mailto:kyosuke.oki.33@gmail.com"
            >Get in touch</a
          >
        </div>
        <p>
          Around 10 years of experience · React / Next.js / TypeScript / Vue.js
        </p>
      </div>
    </template>
    <template v-slot:contents> </template>
  </ContentsContainer>
</template>

<script>
import ContentsContainer from "./ContentsContainer";

export default {
  name: "MainVisual",
  components: {
    ContentsContainer,
  },
};
</script>
<style lang="scss" scoped>
.intro {
  max-width: 1128px;
  margin: auto;
  padding: 80px 24px;
}
.eyebrow {
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  font-weight: 700;
}
h1 {
  font-size: clamp(2.75rem, 7vw, 5.8rem);
  line-height: 1.08;
  letter-spacing: -0.045em;
  color: #172946;
  margin: 24px 0;
}
.summary {
  max-width: 660px;
  font-size: 1.25rem;
  line-height: 1.7;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 32px 0;
}
p {
  line-height: 1.7;
}
.gr__box {
  width: 100%;
  background: linear-gradient(
    90deg,
    rgb(255, 233, 238) 0%,
    rgba(245, 234, 255, 1) 20%,
    rgb(229, 247, 255) 40%,
    rgba(234, 255, 248, 1) 60%,
    rgba(244, 255, 236, 1) 80%,
    rgb(241, 241, 241) 100%
  );
  background-size: 200% 200%;
  animation: grmove 20s ease infinite;
}
@keyframes grmove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
