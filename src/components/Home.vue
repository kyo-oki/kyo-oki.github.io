<template>
  <div>
    <MainVisual />
    <Works />
    <Skills />
    <About />
    <CreativePractice />
    <ContactMe />
  </div>
</template>

<script>
import MainVisual from "./MainVisual";
import About from "./AboutMe.vue";
import Skills from "./SkillSets.vue";
import Works from "./MyWorks.vue";
import ContactMe from "./ContactMe.vue";
import CreativePractice from "./CreativePractice.vue";

export default {
  name: "HomePage",
  components: {
    MainVisual,
    About,
    Skills,
    Works,
    ContactMe,
    CreativePractice,
  },
};
</script>
