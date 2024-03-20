<template>
  <v-row id="works">
    <HeadText title="WORKS" />
    <v-row justify="center">
      <div v-for="(work, index) in works" :key="index">
        <v-card class="mx-auto cardWrapper" max-width="344">
          <div class="imageWrapper" @click="transition(work.url)">
            <v-img
              height="200px"
              :src="require(`../assets/${work.img}`)"
              cover
              class="coverImg"
            ></v-img>
          </div>
          <v-card-title>{{ work.title }}</v-card-title>
          <v-card-subtitle>{{ work.skill }}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              variant="text"
              @click="transition(work.url)"
            >
              Explore
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              class="mx-2"
              @click="work.show = !work.show"
              small
              fab
              dark
              color="indigo"
            >
              <v-icon dark v-if="!work.show"> mdi-plus </v-icon>
              <v-icon dark v-if="work.show"> mdi-minus </v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="work.show">
              <v-divider></v-divider>
              <v-card-text>
                {{ work.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </v-row>
  </v-row>
</template>

<script>
import HeadText from "./HeadText";

export default {
  name: "MyWorks",
  components: {
    HeadText,
  },
  data() {
    return {
      show: false,
      works: [
        {
          title: "Raksul Product - Envelope",
          url: "https://raksul.com/print/envelope/naga3/traced_off/prices?size=NAGA3",
          skill:
            "Vue.js, TypeScript, Jest, E2E, Ruby on Rails, Project Management, Requirement definition",
          img: "raksul.png",
          description:
            "Responsible for everything from requirements definition to wireframe creation and development. The number of products packaged in envelopes increased approximately 10 times, contributing to sales.",
          show: false,
        },
        {
          title: "D Carshare",
          url: "https://dcarshare.docomo.ne.jp/portal/",
          skill: "AngularJS, Java, AWS Cloud Watch, Microsoft Azure",
          img: "dcarshare.png",
          description:
            "Car sharing app by Docomo. Introducing Microsoft Azure to take driver's license photos, Added automatic fill-in function. Log investigation from customer inquiries.",
          show: false,
        },
        {
          title: "はやらくHACCP（Hayaraku HACCP）",
          url: "https://www.lionhygiene.co.jp/hayaraku/haccp/",
          skill:
            "Vue.js, Vuetify, Node.js, PostgreSQL, Salesforce, Agile software development",
          img: "haccp.png",
          description:
            "A management system that uses a hygiene management method called HACCP. I devised a design based on requirements definition. Database design. Frontend/backend development. Responsible for management progress as a project manager",
          show: false,
        },
        {
          title: "Mynaportal",
          url: "https://myna.go.jp/SCK1501_02_001/SCK1501_02_001_Init.form",
          skill: "JavaScript, PHP, Photoshop",
          img: "myna.png",
          description:
            "Mynaportal is an online service operated by the government. Citizens can perform administrative procedures such as childcare and nursing care in one place, and also check notifications from government agencies.",
          show: false,
        },
        {
          title: "Tokyo Midtown",
          url: "https://www.tokyo-midtown.com/",
          skill: "WordPress, JavaScript, jQuery",
          img: "tokyomidtown.png",
          description:
            "Site renewal of a complex facility in Tokyo. Nearly 1,000 pages were created by three coders. I also worked on creating the design.",
          show: false,
        },
        {
          title: "Cinema Classics",
          url: "https://www.cinemaclassics.jp/",
          skill: "WordPress, JavaScript, jQuery",
          img: "cinemaclassics.png",
          description:
            "Renewal of the movie site operated by Shochiku Co., Ltd. Uses WordPress and Javascript.",
          show: false,
        },
        {
          title: "男はつらいよ（It's Tough Being a Man.）",
          url: "https://www.cinemaclassics.jp/tora-san/",
          skill: "JavaScript, Photoshop, Illustrator",
          img: "otokohatsuraiyo.png",
          description:
            "Official website for " +
            "男はつらいよ（It's Tough Being a Man.）" +
            ", a popular series that represents Japan. Responsible for image retouching, loading huge amounts of photos, and production assistance using Javascript and Wordpress.",
          show: false,
        },
      ],
    };
  },
  methods: {
    transition(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style lang="scss">
.imageWrapper {
  overflow: hidden;
  cursor: pointer;
}
.coverImg {
  transition: 0.4s;
  &:hover {
    transform: scale(1.3);
    opacity: 0.6;
  }
}
.row,
.row + .row {
  margin: 0;
  gap: 16px;
}
</style>
