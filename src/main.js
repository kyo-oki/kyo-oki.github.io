import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import vuescrollto from "./plugins/vue-scrollto";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  vuescrollto,
  render: (h) => h(App),
}).$mount("#app");
