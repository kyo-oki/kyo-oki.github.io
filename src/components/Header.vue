<template>
  <header class="site-header">
    <nav aria-label="Main navigation">
      <router-link v-if="$route.path !== '/'" to="/"
        >← Back to portfolio</router-link
      >
      <template v-else>
        <a
          v-for="item in items"
          :key="item.id"
          :href="'#' + item.id"
          v-scroll-to="{ el: '#' + item.id, offset: -72 }"
          >{{ item.label }}</a
        >
      </template>
    </nav>
  </header>
</template>
<script>
export default {
  name: "HeaderContent",
  data: () => ({
    items: [
      { id: "home", label: "Home" },
      { id: "works", label: "Work" },
      { id: "skills", label: "Expertise" },
      { id: "about", label: "About" },
      { id: "creative", label: "Creative" },
    ],
  }),
};
</script>
<style scoped>
.site-header {
  position: fixed;
  width: 100%;
  z-index: 10;
  background: #fffffffa;
  border-bottom: 1px solid #e4e9f0;
}
nav {
  min-height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
a {
  padding: 14px 12px;
  color: #233e68;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
}
a:hover {
  text-decoration: underline;
}
@media (max-width: 480px) {
  nav {
    gap: 0;
  }
  a {
    padding: 14px 7px;
    font-size: 0.875rem;
  }
}
</style>
