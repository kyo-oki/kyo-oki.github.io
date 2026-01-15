<template>
  <div class="neighcrew-detail">
    <!-- HERO -->
    <v-container fluid class="hero pa-0">
      <v-img
        :src="require(`../assets/neighcrew_keyvisual.png`)"
        height="420"
        cover
        class="hero__image"
      >
        <div class="hero__overlay" />
        <div class="hero__content">
          <v-container class="hero__container">
            <v-row align="center" justify="center" class="fill-height">
              <v-col cols="12" md="9" lg="8" class="text-center">
                <div class="hero__badge-row">
                  <v-chip class="hero__chip" small outlined color="white">
                    Australia
                  </v-chip>
                  <v-chip class="hero__chip" small outlined color="white">
                    Hospitality
                  </v-chip>
                  <v-chip class="hero__chip" small outlined color="white">
                    On-demand
                  </v-chip>
                </div>

                <h1 class="hero__title">NeighCrew</h1>
                <p class="hero__subtitle">
                  On-Demand Staffing Platform for Australian Hospitality
                </p>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-img>
    </v-container>

    <!-- PAGE BODY -->
    <v-container class="page">
      <!-- Back Button -->
      <div class="page__topbar">
        <v-btn
          color="primary"
          class="back-btn"
          depressed
          @click="$router.push('/')"
        >
          <v-icon left>mdi-arrow-left</v-icon>
          Back to Portfolio
        </v-btn>
      </div>

      <!-- Service Overview -->
      <section class="section">
        <div class="section__header">
          <h2 class="section__title">Service Overview</h2>
          <p class="section__lead">
            NeighCrew is a comprehensive staffing solution designed specifically
            for the Australian hospitality industry. The platform connects venue
            managers who need staff with verified workers looking for flexible
            shifts in roles like bartending, barista work, and waiting tables.
          </p>
        </div>
      </section>

      <!-- Key Features -->
      <section class="section section--soft">
        <div class="section__header">
          <h2 class="section__title">Key Features</h2>
        </div>

        <v-row class="mt-2" dense>
          <!-- For Venue Managers -->
          <v-col cols="12" md="6">
            <v-card class="panel" outlined>
              <div class="panel__head">
                <div class="panel__icon">
                  <v-icon color="primary">mdi-store</v-icon>
                </div>
                <div>
                  <div class="panel__title">For Venue Managers</div>
                  <div class="panel__subtitle">
                    Post shifts, review applicants, and manage payments.
                  </div>
                </div>
              </div>

              <div class="panel__list">
                <div
                  class="feature"
                  v-for="(item, i) in venueFeatures"
                  :key="i"
                >
                  <div class="feature__icon">
                    <v-icon color="success" small>mdi-check-circle</v-icon>
                  </div>
                  <div class="feature__text">
                    <div class="feature__title">{{ item.title }}</div>
                    <div class="feature__subtitle">{{ item.subtitle }}</div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- For Workers -->
          <v-col cols="12" md="6">
            <v-card class="panel" outlined>
              <div class="panel__head">
                <div class="panel__icon">
                  <v-icon color="primary">mdi-account</v-icon>
                </div>
                <div>
                  <div class="panel__title">For Workers</div>
                  <div class="panel__subtitle">
                    Browse shifts, clock in/out, and get paid fast.
                  </div>
                </div>
              </div>

              <div class="panel__list">
                <div
                  class="feature"
                  v-for="(item, i) in workerFeatures"
                  :key="i"
                >
                  <div class="feature__icon">
                    <v-icon color="success" small>mdi-check-circle</v-icon>
                  </div>
                  <div class="feature__text">
                    <div class="feature__title">{{ item.title }}</div>
                    <div class="feature__subtitle">{{ item.subtitle }}</div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <!-- Technology Stack -->
      <section class="section">
        <div class="section__header">
          <h2 class="section__title">Technology Stack</h2>
        </div>

        <v-row dense>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(tech, index) in techStack"
            :key="index"
          >
            <v-card class="tile" outlined>
              <div class="tile__icon">
                <v-icon :color="tech.color">{{ tech.icon }}</v-icon>
              </div>
              <div class="tile__body">
                <div class="tile__title">{{ tech.name }}</div>
                <div class="tile__text">{{ tech.description }}</div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <!-- Architecture -->
      <section class="section section--soft">
        <div class="section__header">
          <h2 class="section__title">Architecture</h2>
        </div>

        <v-row dense>
          <v-col
            cols="12"
            md="4"
            v-for="(app, index) in architecture"
            :key="index"
          >
            <v-card class="panel" outlined>
              <div class="panel__head panel__head--compact">
                <div>
                  <div class="panel__title">{{ app.name }}</div>
                  <div class="panel__subtitle">{{ app.description }}</div>
                </div>
              </div>

              <div class="chip-row">
                <v-chip
                  v-for="(tech, techIndex) in app.tech"
                  :key="techIndex"
                  small
                  class="mr-2 mb-2"
                  color="primary"
                  outlined
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <!-- Project Highlights -->
      <section class="section">
        <div class="section__header">
          <h2 class="section__title">Project Highlights</h2>
        </div>

        <v-row dense>
          <v-col
            cols="12"
            md="6"
            v-for="(highlight, index) in highlights"
            :key="index"
          >
            <v-card class="highlight" outlined>
              <div class="highlight__head">
                <div class="highlight__icon">
                  <v-icon :color="highlight.color">{{ highlight.icon }}</v-icon>
                </div>
                <div class="highlight__title">{{ highlight.title }}</div>
              </div>
              <div class="highlight__text">{{ highlight.description }}</div>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <!-- Bottom Back Button -->
      <div class="page__bottom">
        <v-btn
          color="primary"
          class="back-btn"
          depressed
          large
          @click="$router.push('/')"
        >
          <v-icon left>mdi-arrow-left</v-icon>
          Back to Portfolio
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NeighcrewDetail",
  data() {
    return {
      venueFeatures: [
        {
          title: "Post shifts in minutes",
          subtitle: "Simple interface to create and manage shifts",
        },
        {
          title: "Real-time applications",
          subtitle: "Receive instant notifications when workers apply",
        },
        {
          title: "Verified workers",
          subtitle: "All workers are verified with RSA certification",
        },
        {
          title: "Secure payments",
          subtitle: "Integrated Stripe Connect for automatic payouts",
        },
        {
          title: "Shift management",
          subtitle: "Track attendance, hours, and overtime",
        },
        {
          title: "Repeat hire",
          subtitle: "Easily rehire trusted workers from previous shifts",
        },
        {
          title: "Rating system",
          subtitle: "Build relationships with reliable workers",
        },
      ],
      workerFeatures: [
        {
          title: "Find shifts nearby",
          subtitle: "Browse available shifts filtered by role and distance",
        },
        {
          title: "Apply instantly",
          subtitle: "One-tap application process",
        },
        {
          title: "GPS clock-in/out",
          subtitle: "Geofencing ensures accurate attendance (100m radius)",
        },
        {
          title: "Break time tracking",
          subtitle: "Track break times during shifts (excluded from hours)",
        },
        {
          title: "Fast payments",
          subtitle: "Get paid directly to your bank account",
        },
        {
          title: "Push notifications",
          subtitle: "Never miss a shift opportunity",
        },
        {
          title: "Build reputation",
          subtitle: "Ratings help you get more shifts",
        },
      ],
      techStack: [
        {
          name: "Frontend",
          icon: "mdi-web",
          color: "primary",
          description: "Next.js 14, React 18, TypeScript, Tailwind CSS",
        },
        {
          name: "Mobile",
          icon: "mdi-cellphone",
          color: "success",
          description: "Expo, React Native, TypeScript",
        },
        {
          name: "Backend",
          icon: "mdi-server",
          color: "deep-purple",
          description: "Next.js API Routes, TypeScript",
        },
        {
          name: "Database",
          icon: "mdi-database",
          color: "amber",
          description: "Neon PostgreSQL (serverless PostgreSQL)",
        },
        {
          name: "Authentication",
          icon: "mdi-shield-lock",
          color: "red",
          description: "Self-managed JWT authentication with OAuth support",
        },
        {
          name: "Payments",
          icon: "mdi-credit-card",
          color: "indigo",
          description: "Stripe Connect (manual capture)",
        },
      ],
      architecture: [
        {
          name: "apps/web",
          description:
            "Next.js venue dashboard for managers to post shifts, review applications, and manage payments.",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          name: "apps/api",
          description:
            "Next.js API server with Neon PostgreSQL, self-managed authentication, and Stripe integration.",
          tech: ["Next.js", "TypeScript", "Drizzle ORM", "Stripe"],
        },
        {
          name: "apps/mobile",
          description:
            "Expo React Native app for workers to browse shifts, apply, clock in/out, and receive payments.",
          tech: ["Expo", "React Native", "TypeScript"],
        },
      ],
      highlights: [
        {
          title: "Full-Stack Development",
          description:
            "Developed a complete monorepo solution with web dashboard, API server, and mobile applications using modern technologies.",
          icon: "mdi-code-tags",
          color: "blue",
        },
        {
          title: "Payment Integration",
          description:
            "Integrated Stripe Connect for secure payment processing with automatic payouts, payment holds, and dispute handling.",
          icon: "mdi-cash-multiple",
          color: "green",
        },
        {
          title: "GPS Geofencing",
          description:
            "Implemented GPS-based clock-in/out system with 100m radius geofencing to ensure accurate attendance tracking.",
          icon: "mdi-map-marker-radius",
          color: "orange",
        },
        {
          title: "Push Notifications",
          description:
            "Built real-time notification system using Expo Push Notifications for instant updates on shift applications and approvals.",
          icon: "mdi-bell-ring",
          color: "purple",
        },
        {
          title: "Comprehensive Testing",
          description:
            "Implemented E2E testing with Playwright (web) and Maestro (mobile), covering 116+ test scenarios for critical flows.",
          icon: "mdi-test-tube",
          color: "red",
        },
        {
          title: "Monorepo Architecture",
          description:
            "Organized codebase using npm workspaces and Turbo for efficient development, building, and deployment workflows.",
          icon: "mdi-folder-multiple",
          color: "indigo",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.neighcrew-detail {
  min-height: 100vh;
  background: radial-gradient(
      1200px 500px at 20% -10%,
      rgba(72, 93, 249, 0.18),
      transparent 60%
    ),
    radial-gradient(
      900px 450px at 90% 20%,
      rgba(255, 183, 177, 0.18),
      transparent 55%
    ),
    linear-gradient(
      180deg,
      #0b0f1a 0%,
      #0b0f1a 420px,
      #f7f8fb 420px,
      #f7f8fb 100%
    );
}

/* HERO */
.hero {
  position: relative;
}

.hero__image {
  position: relative;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
      180deg,
      rgba(11, 15, 26, 0.25) 0%,
      rgba(11, 15, 26, 0.75) 70%
    ),
    radial-gradient(
      800px 320px at 20% 10%,
      rgba(72, 93, 249, 0.45),
      transparent 60%
    ),
    radial-gradient(
      700px 300px at 85% 20%,
      rgba(255, 183, 177, 0.38),
      transparent 55%
    );
}

.hero__content {
  position: absolute;
  inset: 0;
  display: flex;
}

.hero__container {
  max-width: 1100px;
}

.hero__badge-row {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}

.hero__chip {
  border-color: rgba(255, 255, 255, 0.45) !important;
  color: rgba(255, 255, 255, 0.92) !important;
  background: rgba(255, 255, 255, 0.06) !important;
  backdrop-filter: blur(10px);
}

.hero__title {
  color: #fff;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 0 0 10px;
  font-size: clamp(42px, 6vw, 64px);
}

.hero__subtitle {
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  font-size: clamp(16px, 2.2vw, 20px);
}

/* PAGE */
.page {
  max-width: 1100px;
  padding-top: 22px;
  padding-bottom: 64px;
}

.page__topbar {
  display: flex;
  justify-content: flex-start;
  margin-top: -28px;
  margin-bottom: 18px;
}

.page__bottom {
  display: flex;
  justify-content: center;
  padding: 18px 0 0;
}

.back-btn {
  border-radius: 14px;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 600;
}

/* SECTIONS */
.section {
  padding: 34px 0;
}

.section--soft {
  margin: 10px 0;
  padding: 28px 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(10px);
}

.section__header {
  text-align: center;
  margin: 0 auto 18px;
  max-width: 860px;
}

.section__title {
  margin: 0 0 10px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0f172a;
  font-size: clamp(22px, 2.8vw, 34px);
}

.section__lead {
  margin: 0 auto;
  color: rgba(15, 23, 42, 0.72);
  font-size: 16px;
  line-height: 1.7;
}

/* CARDS */
.panel {
  border-radius: 18px;
  border-color: rgba(15, 23, 42, 0.1) !important;
  overflow: hidden;
}

.panel__head {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 18px 18px 12px;
}

.panel__head--compact {
  padding-bottom: 10px;
}

.panel__icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(72, 93, 249, 0.1);
  border: 1px solid rgba(72, 93, 249, 0.18);
}

.panel__title {
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.01em;
  font-size: 18px;
}

.panel__subtitle {
  margin-top: 4px;
  color: rgba(15, 23, 42, 0.68);
  font-size: 13px;
  line-height: 1.5;
}

.panel__list {
  padding: 8px 18px 18px;
}

.feature {
  display: flex;
  gap: 10px;
  padding: 10px 0;
}

.feature + .feature {
  border-top: 1px solid rgba(15, 23, 42, 0.06);
}

.feature__icon {
  width: 22px;
  flex: 0 0 22px;
  margin-top: 2px;
}

.feature__title {
  font-weight: 700;
  color: #0f172a;
  font-size: 14px;
}

.feature__subtitle {
  margin-top: 2px;
  color: rgba(15, 23, 42, 0.64);
  font-size: 12.5px;
  line-height: 1.5;
}

.tile {
  border-radius: 18px;
  border-color: rgba(15, 23, 42, 0.1) !important;
  padding: 16px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.tile__icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(15, 23, 42, 0.06);
}

.tile__body {
  min-width: 0;
}

.tile__title {
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.01em;
  font-size: 16px;
  margin-bottom: 4px;
}

.tile__text {
  color: rgba(15, 23, 42, 0.68);
  font-size: 13px;
  line-height: 1.55;
}

.chip-row {
  padding: 0 18px 18px;
}

.highlight {
  border-radius: 18px;
  border-color: rgba(15, 23, 42, 0.1) !important;
  padding: 16px 16px 14px;
}

.highlight__head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.highlight__icon {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(15, 23, 42, 0.04);
  border: 1px solid rgba(15, 23, 42, 0.06);
}

.highlight__title {
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #0f172a;
  font-size: 16px;
}

.highlight__text {
  color: rgba(15, 23, 42, 0.7);
  font-size: 13.5px;
  line-height: 1.65;
}

@media (max-width: 600px) {
  .page__topbar {
    margin-top: -18px;
  }

  .section--soft {
    padding: 22px 14px;
  }
}
</style>
