<template>
  <v-app>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <HeaderContent />
    <v-main id="main-content" tabindex="-1" style="padding-top: 64px">
      <router-view></router-view>
      <footer class="footer">
        <small class="copyright">
          Copyright © Kyosuke Oki All rights reserved.
        </small>
      </footer>
    </v-main>
  </v-app>
</template>

<script>
import HeaderContent from "./components/Header";

export default {
  name: "App",

  components: {
    HeaderContent,
  },
};
</script>
<style lang="scss">
html {
  scroll-padding-top: 80px;
}
body {
  background-color: #fff;
}
.section-shell {
  max-width: 1128px;
  margin: auto;
  padding: 0 24px;
}
.action-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 20px;
  border: 1px solid #314e7a;
  border-radius: 6px;
  color: #233e68 !important;
  font-weight: 600;
  text-decoration: none;
}
.action-link--primary {
  background: #233e68;
  color: white !important;
}
:focus-visible {
  outline: 3px solid #b34d00;
  outline-offset: 4px;
}
.skip-link {
  position: fixed;
  left: 16px;
  top: -100px;
  z-index: 100;
  background: white;
  padding: 12px;
}
.skip-link:focus {
  top: 8px;
}
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
h2,
h3,
p {
  color: #36445a;
}
p {
  margin: 0;
}
footer {
  margin-top: 80px;
  background-color: #333;
  padding: 8px;
  text-align: center;
  .copyright {
    color: #fff;
    font-size: 14px;
  }
}
</style>
