<template>
  <section id="skills" class="section-shell">
    <HeadText title="EXPERTISE" />
    <div class="expertise-grid">
      <article v-for="skill in skills" :key="skill.title">
        <h3>{{ skill.title }}</h3>
        <p>{{ skill.description }}</p>
        <p class="expertise-tools">{{ skill.tools }}</p>
      </article>
    </div>
  </section>
</template>
<script>
import HeadText from "./HeadText";
export default {
  name: "SkillSets",
  components: { HeadText },
  data: () => ({
    skills: [
      {
        title: "Frontend architecture",
        description:
          "Clear state and component boundaries for complex, high-interaction operational screens.",
        tools: "React · Next.js · TypeScript · Vue.js · Zustand · React Query",
      },
      {
        title: "Payments & workflows",
        description:
          "Payment state handling, retries, onboarding, and webhook validation across customer and operational interfaces.",
        tools: "Stripe · Stripe Connect · REST APIs",
      },
      {
        title: "End-to-end delivery",
        description:
          "From requirements and database design to implementation, product iteration, and collaboration across teams.",
        tools: "Node.js · PostgreSQL · Drizzle ORM",
      },
      {
        title: "Quality & maintainability",
        description:
          "Component composition, testing, and performance improvements that keep products understandable as they grow.",
        tools: "Jest · GitHub Actions · Responsive UI",
      },
    ],
  }),
};
</script>
<style scoped>
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
}
article {
  border-top: 2px solid #c9d8ed;
  padding-top: 24px;
}
h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
}
p {
  line-height: 1.75;
}
.expertise-tools {
  margin-top: 16px;
  font-size: 0.875rem;
  color: #344f7b;
}
@media (max-width: 600px) {
  .expertise-grid {
    grid-template-columns: 1fr;
  }
}
</style>
