<template>
  <v-card id="header">
    <v-tabs
      id="nav"
      v-model="tab"
      align-tabs="center"
      color="deep-purple-accent-4"
    >
      <v-tab
        v-for="(info, index) in tabInfo"
        :key="index"
        v-scroll-to="{ el: `#${info.to_id}`, offset: 0 }"
        >{{ info.subtitle }}</v-tab
      >
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "HeaderContent",

  data: () => ({
    tab: "tab",
    tabInfo: [
      {
        to_id: "home",
        subtitle: "HOME",
      },
      {
        to_id: "about",
        subtitle: "ABOUT",
      },
      {
        to_id: "skills",
        subtitle: "SKILLS",
      },
      {
        to_id: "works",
        subtitle: "WORKS",
      },
    ],
  }),
};
</script>
<style lang="scss">
#header {
  position: fixed;
  width: 100%;
  z-index: 10;
  box-shadow: none;
}
#nav {
  display: flex;
  justify-content: center;
}
.v-tabs-slider {
  background-color: #e0e0e0;
}
</style>
