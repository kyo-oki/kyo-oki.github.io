<template>
  <section id="creative" class="section-shell creative-practice">
    <HeadText title="CREATIVE PRACTICE" />
    <p class="creative-intro">
      Outside software, I make hand-cut collages and electronic music. I’m
      interested in combining visual forms, found materials and sound to create
      slightly unfamiliar characters and environments.
    </p>

    <div class="creative-category">
      <h3>Collage</h3>
      <p class="category-note">Selected hand-cut works.</p>
      <div v-if="artworks.length" class="collage-gallery">
        <figure v-for="artwork in artworks" :key="artwork.id">
          <a
            class="artwork-image"
            :href="mediaUrl(artwork.image)"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="
              'View ' + artwork.title + ' full size (opens in a new tab)'
            "
          >
            <img
              :src="mediaUrl(artwork.image)"
              :alt="artwork.alt"
              loading="lazy"
              decoding="async"
              @error="imageFailed(artwork.id)"
              v-show="!failedImages[artwork.id]"
            />
            <span v-if="failedImages[artwork.id]" class="media-unavailable"
              >Image currently unavailable</span
            >
          </a>
          <figcaption>
            <h4>{{ artwork.title }}</h4>
            <p class="artwork-meta">
              Hand-cut collage<span v-if="artwork.year">
                · {{ artwork.year }}</span
              >
            </p>
            <p v-if="artwork.note">{{ artwork.note }}</p>
            <a
              v-if="companionTrack(artwork)"
              class="companion-link"
              :href="'#creative-track-' + artwork.trackId"
              v-scroll-to="{
                el: '#creative-track-' + artwork.trackId,
                offset: -80,
              }"
              @click="focusTrack(artwork.trackId)"
              >Companion track: {{ companionTrack(artwork).title }}</a
            >
          </figcaption>
        </figure>
      </div>
      <p v-else class="selection-note">Selected collages will be added here.</p>
    </div>

    <div class="creative-category music-category">
      <h3>Music</h3>
      <p class="category-note">
        Electronic music, made mainly with the SP-404 MKII.
      </p>
      <div v-if="tracks.length" class="track-list">
        <article
          v-for="track in tracks"
          :key="track.id"
          :id="'creative-track-' + track.id"
          class="track"
          tabindex="-1"
          :aria-labelledby="'creative-track-title-' + track.id"
        >
          <div>
            <h4 :id="'creative-track-title-' + track.id">{{ track.title }}</h4>
            <p v-if="track.note">{{ track.note }}</p>
          </div>
          <div class="track-playback">
            <audio
              v-if="track.src"
              controls
              preload="none"
              :src="mediaUrl(track.src)"
              :aria-label="'Play ' + track.title"
              @play="pauseOtherTracks"
              @error="audioFailed(track.id)"
            >
              Your browser does not support audio playback.
            </audio>
            <p v-if="failedTracks[track.id]" role="status" class="media-error">
              This track could not be loaded. Please try again later.
            </p>
            <a
              v-if="track.url"
              :href="track.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="'Listen to ' + track.title + ' (opens in a new tab)'"
              >Listen externally ↗</a
            >
          </div>
        </article>
      </div>
      <p v-else class="selection-note">
        Selected recordings will be added here.
      </p>
    </div>
  </section>
</template>

<script>
import HeadText from "./HeadText";
import { artworks, tracks, mediaUrl } from "../content/creativePractice";

export default {
  name: "CreativePractice",
  components: { HeadText },
  data: () => ({ artworks, tracks, failedImages: {}, failedTracks: {} }),
  methods: {
    mediaUrl,
    companionTrack(artwork) {
      return this.tracks.find((track) => track.id === artwork.trackId);
    },
    focusTrack(id) {
      const track = document.getElementById("creative-track-" + id);
      if (track) track.focus({ preventScroll: true });
    },
    pauseOtherTracks(event) {
      this.$el.querySelectorAll("audio").forEach((audio) => {
        if (audio !== event.target) audio.pause();
      });
    },
    imageFailed(id) {
      this.$set(this.failedImages, id, true);
    },
    audioFailed(id) {
      this.$set(this.failedTracks, id, true);
    },
  },
};
</script>

<style scoped>
.creative-practice {
  padding-bottom: 16px;
}
.creative-intro {
  max-width: 720px;
  line-height: 1.8;
}
.creative-category {
  margin-top: 36px;
}
h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}
h4 {
  color: #233e68;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  overflow-wrap: anywhere;
}
p {
  line-height: 1.7;
}
.category-note,
.artwork-meta {
  font-size: 0.875rem;
  color: #52617a;
}
.collage-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  margin-top: 24px;
}
figure {
  margin: 0;
  min-width: 0;
}
.artwork-image {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 4 / 5;
  background: #f3f6fb;
  padding: 16px;
  border: 1px solid #e4e9f0;
  border-radius: 6px;
}
.artwork-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
figcaption {
  padding-top: 16px;
}
figcaption p {
  margin-top: 6px;
  margin-bottom: 8px;
}
.companion-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: 0.875rem;
  overflow-wrap: anywhere;
}
.music-category {
  margin-top: 40px;
}
.track {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 1fr);
  gap: 24px;
  align-items: center;
  padding: 24px 0;
  border-top: 1px solid #dae2ed;
  scroll-margin-top: 80px;
}
.track p {
  margin-top: 6px;
  margin-bottom: 0;
  font-size: 0.875rem;
}
.track-playback {
  min-width: 0;
}
audio {
  display: block;
  width: 100%;
  min-width: 0;
}
.track-playback a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
}
.selection-note {
  font-size: 0.875rem;
  color: #52617a;
  padding: 16px 0;
  border-top: 1px solid #dae2ed;
}
.media-unavailable {
  color: #52617a;
  font-size: 0.875rem;
  text-align: center;
}
.media-error {
  color: #884115;
}
@media (max-width: 800px) {
  .collage-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 550px) {
  .collage-gallery {
    grid-template-columns: 1fr;
  }
  .track {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
