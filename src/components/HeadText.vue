<template>
  <v-container>
    <h2 class="text-h2 justify-center d-flex">
      <span>{{ title }}</span>
    </h2>
  </v-container>
</template>

<script>
// import FadeIn from "@/components/FadeIn";

export default {
  props: {
    title: {
      require: true,
      type: String,
    },
  },
  components: {
    // FadeIn,
  },
};
</script>

<style lang="scss" scoped>
p {
  width: 100px;
  height: 200px;
}
h2 {
  padding-top: 150px;
  margin-bottom: 40px;
  font-family: "Montserrat", "Zen Kaku Gothic New", sans-serif;
  span {
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 8px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
