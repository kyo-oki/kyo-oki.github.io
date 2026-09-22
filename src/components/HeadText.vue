<template>
  <v-container>
    <h2>
      <span>{{ title }}</span>
    </h2>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  width: 100px;
  height: 200px;
}
h2 {
  padding-top: 72px;
  margin-bottom: 32px;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
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
