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
          name: "CSS3 / SASS",
          rate: 90,
        },
        {
          name: "Javascript",
          rate: 80,
        },
        {
          name: "Vue.js / Nuxt",
          rate: 70,
        },
        {
          name: "Typescript",
          rate: 70,
        },
        {
          name: "Linux / MacOS",
          rate: 60,
        },
        {
          name: "React / Next",
          rate: 50,
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
          name: "Wordpress",
          rate: 40,
        },
        {
          name: "AWS",
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
