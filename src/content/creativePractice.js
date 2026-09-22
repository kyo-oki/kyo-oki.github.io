// Put media in public/creative/ and use paths relative to public/ below.
// Array order is display order. Keep a small selection (roughly 3–4 of each).
// Use stable, unique IDs containing letters, numbers, and hyphens.
export const artworks = [
  // {
  //   id: "artwork-slug",
  //   title: "Artwork title",
  //   image: "creative/artwork-slug.jpg",
  //   alt: "Describe the actual composition for someone who cannot see it.",
  //   year: "2026", // optional
  //   note: "A short note about this piece.", // optional
  //   trackId: "track-slug", // optional; matches a track below
  // },
];

export const tracks = [
  // {
  //   id: "track-slug",
  //   title: "Track title",
  //   src: "creative/track-slug.mp3", // omit for an external-link-only track
  //   url: "https://your-music-page.example/track", // optional listening link
  //   note: "Made with the SP-404 MKII.", // optional
  // },
];

// Supports GitHub Pages' relative base path and absolute HTTPS media URLs.
export function mediaUrl(path) {
  if (/^https:\/\//.test(path)) return path;
  return process.env.BASE_URL + path.replace(/^\/+/, "");
}
