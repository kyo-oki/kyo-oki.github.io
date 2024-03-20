<template>
  <div cols="2" style="text-align: center">
    <v-card elevation="0" class="mt-2 mb-6 mx-1">
      <v-progress-circular
        :rotate="-90"
        :size="140"
        :width="11"
        :value="this.rate"
        :color="getColorCode(this.rate)"
      >
        <div class="d-flex flex-column black--text">
          <p
            class="pb-0 ma-0 text-h7 black--text text-center text--secondary font-weight-bold"
          >
            {{ this.name }}
          </p>
          <div class="d-flex justify-center">
            <p class="text-h5 mb-0 text--primary">
              {{ this.rate }}
            </p>
          </div>
        </div>
      </v-progress-circular>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CircleStorage",
  props: ["name", "rate"],
  methods: {
    getColorCode(rate) {
      if (rate >= 70) {
        return "#3f51b5";
      } else if (rate >= 45) {
        return "#3d7ee3";
      } else {
        return "#8dbaff";
      }
    },
  },
};
</script>
