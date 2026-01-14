import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import NeighcrewDetail from "../components/NeighcrewDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/neighcrew",
    name: "NeighcrewDetail",
    component: NeighcrewDetail,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
