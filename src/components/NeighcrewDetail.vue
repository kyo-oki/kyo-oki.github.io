<template>
  <div class="neighcrew-detail">
    <!-- Hero Section -->
    <v-container fluid class="hero-section pa-0">
      <v-row no-gutters>
        <v-col cols="12">
          <v-img
            :src="require(`../assets/neighcrew_keyvisual.png`)"
            height="400"
            cover
            class="hero-image"
          >
            <div class="hero-overlay">
              <v-container>
                <v-row align="center" justify="center" class="fill-height">
                  <v-col cols="12" md="8" class="text-center">
                    <h1 class="display-2 font-weight-bold white--text mb-4">
                      NeighCrew
                    </h1>
                    <p class="headline white--text">
                      On-Demand Staffing Platform for Australian Hospitality
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <!-- Back Button -->
    <v-container>
      <v-btn
        color="primary"
        outlined
        @click="$router.push('/')"
        class="mt-4 mb-4"
      >
        <v-icon left>mdi-arrow-left</v-icon>
        Back to Portfolio
      </v-btn>
    </v-container>

    <!-- Service Overview -->
    <v-container class="py-8">
      <v-row>
        <v-col cols="12">
          <h2 class="display-1 mb-4 text-center">Service Overview</h2>
          <p class="body-1 text-center mb-8" style="max-width: 800px; margin: 0 auto;">
            NeighCrew is a comprehensive staffing solution designed specifically for the Australian hospitality industry. 
            The platform connects venue managers who need staff with verified workers looking for flexible shifts in roles 
            like bartending, barista work, and waiting tables.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Key Features -->
    <v-container class="py-8" style="background-color: #f5f5f5;">
      <v-row>
        <v-col cols="12">
          <h2 class="display-1 mb-8 text-center">Key Features</h2>
        </v-col>
      </v-row>

      <!-- For Venue Managers -->
      <v-row class="mb-8">
        <v-col cols="12" md="6">
          <v-card class="pa-6" height="100%">
            <v-card-title class="headline mb-4">
              <v-icon large color="primary" class="mr-2">mdi-store</v-icon>
              For Venue Managers
            </v-card-title>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Post shifts in minutes</v-list-item-title>
                  <v-list-item-subtitle>Simple interface to create and manage shifts</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Real-time applications</v-list-item-title>
                  <v-list-item-subtitle>Receive instant notifications when workers apply</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Verified workers</v-list-item-title>
                  <v-list-item-subtitle>All workers are verified with RSA certification</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Secure payments</v-list-item-title>
                  <v-list-item-subtitle>Integrated Stripe Connect for automatic payouts</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Shift management</v-list-item-title>
                  <v-list-item-subtitle>Track attendance, hours, and overtime</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Repeat hire</v-list-item-title>
                  <v-list-item-subtitle>Easily rehire trusted workers from previous shifts</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Rating system</v-list-item-title>
                  <v-list-item-subtitle>Build relationships with reliable workers</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <!-- For Workers -->
        <v-col cols="12" md="6">
          <v-card class="pa-6" height="100%">
            <v-card-title class="headline mb-4">
              <v-icon large color="primary" class="mr-2">mdi-account</v-icon>
              For Workers
            </v-card-title>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Find shifts nearby</v-list-item-title>
                  <v-list-item-subtitle>Browse available shifts filtered by role and distance</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Apply instantly</v-list-item-title>
                  <v-list-item-subtitle>One-tap application process</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>GPS clock-in/out</v-list-item-title>
                  <v-list-item-subtitle>Geofencing ensures accurate attendance (100m radius)</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Break time tracking</v-list-item-title>
                  <v-list-item-subtitle>Track break times during shifts (automatically excluded from hours)</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Fast payments</v-list-item-title>
                  <v-list-item-subtitle>Get paid directly to your bank account</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Push notifications</v-list-item-title>
                  <v-list-item-subtitle>Never miss a shift opportunity</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Build reputation</v-list-item-title>
                  <v-list-item-subtitle>Ratings help you get more shifts</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Technology Stack -->
    <v-container class="py-8">
      <v-row>
        <v-col cols="12">
          <h2 class="display-1 mb-8 text-center">Technology Stack</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" v-for="(tech, index) in techStack" :key="index">
          <v-card class="pa-4 text-center" height="100%">
            <v-icon large :color="tech.color" class="mb-2">{{ tech.icon }}</v-icon>
            <v-card-title class="justify-center">{{ tech.name }}</v-card-title>
            <v-card-text>{{ tech.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Architecture -->
    <v-container class="py-8" style="background-color: #f5f5f5;">
      <v-row>
        <v-col cols="12">
          <h2 class="display-1 mb-8 text-center">Architecture</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" v-for="(app, index) in architecture" :key="index">
          <v-card class="pa-6" height="100%">
            <v-card-title class="headline mb-2">{{ app.name }}</v-card-title>
            <v-card-text>
              <p class="body-1">{{ app.description }}</p>
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
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Project Highlights -->
    <v-container class="py-8">
      <v-row>
        <v-col cols="12">
          <h2 class="display-1 mb-8 text-center">Project Highlights</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" v-for="(highlight, index) in highlights" :key="index">
          <v-card class="pa-4 mb-4">
            <v-card-title>
              <v-icon :color="highlight.color" class="mr-2">{{ highlight.icon }}</v-icon>
              {{ highlight.title }}
            </v-card-title>
            <v-card-text>{{ highlight.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Back Button Bottom -->
    <v-container>
      <v-row justify="center" class="mb-8">
        <v-btn
          color="primary"
          outlined
          large
          @click="$router.push('/')"
        >
          <v-icon left>mdi-arrow-left</v-icon>
          Back to Portfolio
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NeighcrewDetail",
  data() {
    return {
      techStack: [
        {
          name: "Frontend",
          icon: "mdi-web",
          color: "blue",
          description: "Next.js 14, React 18, TypeScript, Tailwind CSS",
        },
        {
          name: "Mobile",
          icon: "mdi-cellphone",
          color: "green",
          description: "Expo, React Native, TypeScript",
        },
        {
          name: "Backend",
          icon: "mdi-server",
          color: "purple",
          description: "Next.js API Routes, TypeScript",
        },
        {
          name: "Database",
          icon: "mdi-database",
          color: "orange",
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
          description: "Next.js venue dashboard for managers to post shifts, review applications, and manage payments.",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          name: "apps/api",
          description: "Next.js API server with Neon PostgreSQL, self-managed authentication, and Stripe integration.",
          tech: ["Next.js", "TypeScript", "Drizzle ORM", "Stripe"],
        },
        {
          name: "apps/mobile",
          description: "Expo React Native app for workers to browse shifts, apply, clock in/out, and receive payments.",
          tech: ["Expo", "React Native", "TypeScript"],
        },
      ],
      highlights: [
        {
          title: "Full-Stack Development",
          description: "Developed a complete monorepo solution with web dashboard, API server, and mobile applications using modern technologies.",
          icon: "mdi-code-tags",
          color: "blue",
        },
        {
          title: "Payment Integration",
          description: "Integrated Stripe Connect for secure payment processing with automatic payouts, payment holds, and dispute handling.",
          icon: "mdi-cash-multiple",
          color: "green",
        },
        {
          title: "GPS Geofencing",
          description: "Implemented GPS-based clock-in/out system with 100m radius geofencing to ensure accurate attendance tracking.",
          icon: "mdi-map-marker-radius",
          color: "orange",
        },
        {
          title: "Push Notifications",
          description: "Built real-time notification system using Expo Push Notifications for instant updates on shift applications and approvals.",
          icon: "mdi-bell-ring",
          color: "purple",
        },
        {
          title: "Comprehensive Testing",
          description: "Implemented E2E testing with Playwright (web) and Maestro (mobile), covering 116+ test scenarios for critical flows.",
          icon: "mdi-test-tube",
          color: "red",
        },
        {
          title: "Monorepo Architecture",
          description: "Organized codebase using npm workspaces and Turbo for efficient development, building, and deployment workflows.",
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
}

.hero-section {
  position: relative;
}

.hero-image {
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
</style>
