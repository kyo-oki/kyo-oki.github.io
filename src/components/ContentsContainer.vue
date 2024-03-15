<template>
  <div v-resize="onResize" :style="style">
    <transition name="contentsContainer">
      <slot name="headText"></slot>
    </transition>
    <slot name="contents"></slot>
  </div>
</template>

<script>
export default {
  name: "ContentsContainer",
  data: () => ({
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  computed: {
    style() {
      return "height: " + (this.windowSize.y - 48) + "px;position:relative";
    },
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
</script>
<style lang="scss" scoped></style>
