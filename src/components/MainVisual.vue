<template>
  <ContentsContainer class="gr__box" id="home">
    <template v-slot:headText>
      <h2 class="mainTitle text-h2 justify-center d-flex">KYOSUKE OKI</h2>
    </template>
    <template v-slot:contents> </template>
  </ContentsContainer>
</template>

<script>
import ContentsContainer from "./ContentsContainer";

export default {
  name: "MainVisual",
  data() {
    return {
      items: [
        { src: "image1.jpg", alt: "Image 1" },
        { src: "image2.jpg", alt: "Image 2" },
        { src: "image3.jpg", alt: "Image 3" },
      ],
    };
  },
  components: {
    ContentsContainer,
  },
};
</script>
<style lang="scss" scoped>
.mainTitle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.gr__box {
  width: 100%;
  height: 100vh;
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
