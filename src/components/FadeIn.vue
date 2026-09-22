<template>
  <div>
    <transition name="fade">
      <slot v-if="show"></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FadeIn",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleScroll() {
      if (this.show) return;
      var top = this.$el.getBoundingClientRect().top;
      this.show = top < window.innerHeight + 100;
    },
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
