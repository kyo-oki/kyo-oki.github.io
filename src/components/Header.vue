<template>
  <v-card id="header">
    <!-- Show back button on detail pages -->
    <div v-if="isDetailPage" class="back-nav">
      <v-btn
        text
        color="primary"
        @click="$router.push('/')"
        class="back-button"
      >
        <v-icon left>mdi-arrow-left</v-icon>
        Back to Portfolio
      </v-btn>
    </div>
    <!-- Show normal navigation on home page -->
    <v-tabs
      v-else
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
  computed: {
    isDetailPage() {
      return this.$route.path !== "/";
    },
  },
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
.back-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  min-height: 48px;
}
.back-button {
  text-transform: none;
}
</style>
