import Vue from "vue";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
  duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 0
    : 600,
  easing: "ease-out",
});

export default new Vue({});
