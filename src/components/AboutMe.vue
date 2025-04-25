<template>
  <div id="about">
    <HeadText title="ABOUT" />
    <v-row justify="center">
      <div class="profile">
        <img :src="require(`../assets/kyosuke_oki.jpg`)" />
      </div>
      <div class="description_wrapper">
        <p>
          Hello! My name is Kyosuke Oki. Thank you for browsing my portfolio
          Site.<br />I am a software engineer with 10 years of experience,
          specializing in frontend and full-stack development. I have a strong
          background in React, Next.js, and TypeScript, with experience in
          backend development using Node.js and REST APIs. <br />
          Currently, at Wabify, I am developing and optimizing an all-in-one
          restaurant management platform, working on POS systems, inventory and
          team management, online store functionality, and invoice processing. I
          focus on scalability, performance, and usability, contributing across
          both frontend and backend development.<br />
          Previously, at Raksul, I worked as a frontend engineer, primarily
          using Vue.js to develop and maintain large-scale web applications. I
          focused on UI performance optimization, component-based architecture,
          and improving the overall user experience.
        </p>
        <ul class="aboutIcons">
          <li>
            <a
              href="https://www.linkedin.com/in/kyosuke-oki-b020032a8/"
              target="_blank"
              ><img :src="require(`../assets/lnkdin.png`)"
            /></a>
          </li>
          <li>
            <a href="https://github.com/kyo-oki" target="_blank"
              ><img :src="require(`../assets/github-mark.png`)"
            /></a>
          </li>
          <li>
            <v-btn
              class="mx-2 mailIcon"
              @click="opentoMail"
              small
              fab
              dark
              color="light"
            >
              <v-icon color="teal-darken-2">mdi-email</v-icon>
            </v-btn>
          </li>
        </ul>
      </div>
    </v-row>
  </div>
</template>

<script>
import HeadText from "./HeadText";

export default {
  name: "AboutMe",
  components: {
    HeadText,
  },
  methods: {
    opentoMail() {
      window.open("mailto:kyosuke.oki.33@gmail.com", "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
.profile {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 400px;
  border: 1px solid #e6fafd;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 400px;
  }
}
.description_wrapper {
  width: 560px;
  font-weight: bold;
  margin-left: 20px;
  @media (max-width: 600px) {
    width: calc(100% - 32px);
    margin-left: 0;
  }
}
.mailIcon {
  position: relative;
  top: -3px;
}
.aboutIcons {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 0;
  li {
    width: 40px;
    transition: 0.3s;
    &:hover {
      opacity: 0.6;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
