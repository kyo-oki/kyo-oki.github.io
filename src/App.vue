<template>
  <v-app>
    <HeaderContent />
    <v-main style="padding-top: 48px">
      <MainVisual />
      <About />
      <Skills />
      <Works />
      <ContactMe />
      <footer class="footer">
        <small class="copyright">
          Copyright © Kyosuke Oki All rights reserved.
        </small>
      </footer>
    </v-main>
  </v-app>
</template>

<script>
import HeaderContent from "./components/Header";
import MainVisual from "./components/MainVisual";
import About from "./components/AboutMe.vue";
import Skills from "./components/SkillSets.vue";
import Works from "./components/MyWorks.vue";
import ContactMe from "./components/ContactMe.vue";

export default {
  name: "App",

  components: {
    HeaderContent,
    MainVisual,
    About,
    Skills,
    Works,
    ContactMe,
  },
};
</script>
<style lang="scss">
body {
  background-color: #def6ff;
}
h2,
h3,
p {
  color: #5d5d5d;
}
p {
  margin: 0;
}
footer {
  margin-top: 160px;
  background-color: #333;
  padding: 8px;
  text-align: center;
  .copyright {
    color: #fff;
    font-size: 10px;
  }
}
</style>
