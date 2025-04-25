<template>
  <div id="skills">
    <HeadText title="SKILLS" />
    <v-row justify="center" class="cardRow">
      <CircleStorage
        v-for="(circleStorage, index) in circleStorages"
        :key="index"
        :name="circleStorage.name"
        :rate="circleStorage.rate"
        :limit="circleStorage.limit"
      />
    </v-row>
  </div>
</template>

<script>
import HeadText from "./HeadText";
import CircleStorage from "./CircleStorage";

export default {
  name: "SkillSets",
  components: {
    CircleStorage,
    HeadText,
  },
  data() {
    return {
      circleStorages: [
        {
          name: "HTML5",
          rate: 90,
        },
        {
          name: "CSS3 / Sass",
          rate: 90,
        },
        {
          name: "JavaScript",
          rate: 80,
        },
        {
          name: "React.js / Next",
          rate: 80,
        },
        {
          name: "Vue.js / Nuxt",
          rate: 70,
        },
        {
          name: "TypeScript",
          rate: 70,
        },
        {
          name: "Linux / MacOS",
          rate: 60,
        },
        {
          name: "Node.js",
          rate: 50,
        },
        {
          name: "SQL / MySQL",
          rate: 50,
        },
        {
          name: "PHP",
          rate: 40,
        },
        {
          name: "WordPress",
          rate: 40,
        },
        {
          name: "AWS",
          rate: 40,
        },
        {
          name: "Swift",
          rate: 40,
        },
        {
          name: "Photoshop / Illustrator",
          rate: 30,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.cardRow {
  margin: 0 !important;
}
</style>
