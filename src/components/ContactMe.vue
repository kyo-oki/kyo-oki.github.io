<template>
  <div>
    <!-- <a href="mailto:linyashamei@gmail.com" class="c_btn-mail mailtoui"
      ><span class="material-symbols-outlined"> mail </span></a
    > -->
    <v-btn
      class="mx-2 mailFixed"
      @click="opentoMail"
      large
      fab
      dark
      color="indigo"
    >
      <v-icon color="teal-darken-2">mdi-email</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
  components: {},
  methods: {
    opentoMail() {
      window.open("mailto:kyosuke.oki.33@gmail.com", "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
.material-symbols-outlined {
  font-size: 4rem;
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
}
.mailFixed {
  position: fixed;
  right: 50px;
  bottom: 50px;
}
</style>
