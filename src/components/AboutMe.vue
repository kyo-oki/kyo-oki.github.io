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
          Site.<br />I'm a Japanese web developer and software engineer. <br />I
          am currently staying in Melbourne, Australia on a working holiday visa
          (My visa is valid until December 2024) <br />I'm passionate about
          building user-pleasing sites that incorporate interactive design and
          the latest technology. <br />I am mainly good at front-end
          development, but I also find it rewarding to be involved in back-end
          development of PHP, Java, Ruby, etc., and bug investigation using AWS
          Cloud Front.
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
p {
  width: 560px;
  font-weight: bold;
  margin-left: 20px;
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
