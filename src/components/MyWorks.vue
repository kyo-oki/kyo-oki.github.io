<template>
  <section id="works" class="section-shell">
    <HeadText title="SELECTED WORK" />
    <p class="work-intro">
      Products and interfaces I have helped build—from restaurant operations to
      an independently developed marketplace.
    </p>
    <div class="work-grid">
      <article v-for="work in works" :key="work.url" class="work-card">
        <img
          :src="require(`../assets/${work.img}`)"
          :alt="work.title + ' — project preview'"
          width="680"
          height="400"
          loading="lazy"
        />
        <div class="work-body">
          <p v-if="work.role" class="work-role">{{ work.role }}</p>
          <h3>{{ work.title }}</h3>
          <p>{{ work.description }}</p>
          <p class="work-tools">{{ work.skill }}</p>
          <div class="work-actions">
            <router-link
              v-if="work.caseStudy"
              :to="work.caseStudy"
              class="action-link action-link--primary"
              >View case study</router-link
            >
            <a
              :href="work.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="'Visit ' + work.title + ' (opens in a new tab)'"
              >Visit website ↗</a
            >
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import HeadText from "./HeadText";

export default {
  name: "MyWorks",
  components: {
    HeadText,
  },
  data() {
    return {
      show: false,
      works: [
        {
          title: "NeighCrew — Hospitality Marketplace",
          role: "Solo engineer · End-to-end ownership",
          caseStudy: "/neighcrew",
          url: "https://www.neighcrew.com/",
          skill:
            "Next.js, React, TypeScript, Node.js, Neon PostgreSQL, Stripe Connect, Expo, React Native, Tailwind CSS, Drizzle ORM",
          img: "neighcrew-logo-full.png",
          description:
            "Built a hospitality marketplace end-to-end, then iterated from staffing into hosted sessions. Owned product flows, database design, Stripe Connect onboarding, payment capture, and webhook validation.",
          show: false,
        },
        {
          title: "Wabify - Application Development",
          role: "Frontend Systems Engineer · Apr 2024–Feb 2026",
          url: "https://app.wabify.com/",
          skill:
            "React, Next.js, TypeScript, Tailwind CSS, Stripe API, REST API, Figma,",
          img: "wabify-app.png",
          description:
            "Owned frontend architecture for restaurant operations spanning POS, reservations, payments, and staff workflows. Refactored state-heavy React screens into clearer feature boundaries and implemented sequential payment submission and retry handling.",
          show: false,
        },
        {
          title: "Wabify - Landing Page",
          url: "https://wabify.com/",
          skill:
            "Next.js, TypeScript, Tailwind CSS, Framer Motion, REST API, Responsive Design, Figma, SEO, Clarity",
          img: "wabify-landing.png",
          description:
            "Designed and implemented the marketing landing page for Wabify. Focused on visual storytelling, responsive UI, and SEO optimization to improve user engagement and conversion.",
          show: false,
        },
        {
          title: "Raksul Product - Envelope",
          url: "https://raksul.com/print/envelope/naga3/traced_off/prices?size=NAGA3",
          skill:
            "Vue.js, TypeScript, Jest, E2E, Ruby on Rails, Project Management, Requirement definition",
          img: "raksul.png",
          description:
            "Responsible for everything from requirements definition to wireframe creation and development. The number of products packaged in envelopes increased approximately 10 times, contributing to sales.",
          show: false,
        },
        {
          title: "D Carshare",
          url: "https://dcarshare.docomo.ne.jp/portal/",
          skill: "AngularJS, Java, AWS Cloud Watch, Microsoft Azure",
          img: "dcarshare.png",
          description:
            "Car sharing app by Docomo. Introducing Microsoft Azure to take driver's license photos, Added automatic fill-in function. Log investigation from customer inquiries.",
          show: false,
        },
        {
          title: "はやらくHACCP",
          url: "https://www.lionhygiene.co.jp/hayaraku/haccp/",
          skill:
            "Vue.js, Vuetify, Node.js, PostgreSQL, Salesforce, Agile software development",
          img: "haccp.png",
          description:
            "はやらくHACCP（Hayaraku HACCP）is a management system that uses a hygiene management method called HACCP. I devised a design based on requirements definition. Database design. Frontend/backend development. Responsible for management progress as a project manager",
          show: false,
        },
        {
          title: "Mynaportal",
          url: "https://myna.go.jp/SCK1501_02_001/SCK1501_02_001_Init.form",
          skill: "JavaScript, PHP, Photoshop",
          img: "myna.png",
          description:
            "Mynaportal is an online service operated by the government. Citizens can perform administrative procedures such as childcare and nursing care in one place, and also check notifications from government agencies.",
          show: false,
        },
        {
          title: "Tokyo Midtown",
          url: "https://www.tokyo-midtown.com/",
          skill: "WordPress, JavaScript, jQuery",
          img: "tokyomidtown.png",
          description:
            "Site renewal of a complex facility in Tokyo. Nearly 1,000 pages were created by three coders. I also worked on creating the design.",
          show: false,
        },
        {
          title: "Cinema Classics",
          url: "https://www.cinemaclassics.jp/",
          skill: "WordPress, JavaScript, jQuery",
          img: "cinemaclassics.png",
          description:
            "Renewal of the movie site operated by Shochiku Co., Ltd. Uses WordPress and Javascript.",
          show: false,
        },
        {
          title: "男はつらいよ（It's Tough Being a Man.）",
          url: "https://www.cinemaclassics.jp/tora-san/",
          skill: "JavaScript, Photoshop, Illustrator",
          img: "otokohatsuraiyo.png",
          description:
            "Official website for " +
            "男はつらいよ（It's Tough Being a Man.）" +
            ", a popular series that represents Japan. Responsible for image retouching, loading huge amounts of photos, and production assistance using Javascript and Wordpress.",
          show: false,
        },
      ],
    };
  },
};
</script>
<style scoped>
.work-intro {
  max-width: 700px;
  line-height: 1.75;
  margin-bottom: 32px;
}
.work-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}
.work-card {
  border: 1px solid #dae2ed;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.work-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 1.7;
  object-fit: contain;
  background: #f3f6fb;
}
.work-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
h3 {
  font-size: 1.35rem;
  margin-bottom: 16px;
  line-height: 1.4;
}
p {
  line-height: 1.75;
}
.work-role {
  font-size: 0.875rem;
  font-weight: 600;
  color: #344f7b;
}
.work-tools {
  font-size: 0.875rem;
  color: #52617a;
}
.work-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: auto;
  padding-top: 8px;
}
.work-actions > a {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}
@media (max-width: 700px) {
  .work-grid {
    grid-template-columns: 1fr;
  }
}
</style>
