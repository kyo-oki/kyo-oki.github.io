<template>
  <div id="about">
    <HeadText title="ABOUT" />
    <v-row justify="center">
      <div class="profile">
        <img :src="require(`../assets/kyosuke_oki.jpg`)" />
      </div>
      <p>
        Hello! My name is Kyosuke Oki. Thank you for browsing my portfolio
        Site.<br />I'm a Japanese web developer and software engineer. <br />I
        am currently staying in Melbourne, Australia on a working holiday visa
        (my visa is valid until December 2024) <br />I'm passionate about
        building user-pleasing sites that incorporate interactive design and the
        latest technology. <br />I am mainly good at front-end development, but
        I also find it rewarding to be involved in back-end development of PHP,
        Java, Ruby, etc., and bug investigation using AWS Cloud Front.
      </p>
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
.wrapper {
  width: 900px;
  margin: 0 auto;
}
</style>
