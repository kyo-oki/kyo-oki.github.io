<template>
  <div>
    <v-btn
      class="mx-2 mailFixed"
      href="mailto:kyosuke.oki.33@gmail.com"
      aria-label="Email Kyosuke Oki"
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
  @media (max-width: 768px) {
    right: 8px;
    bottom: 16px;
  }
}
</style>
