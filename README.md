# Kyosuke Oki Portfolio

Personal portfolio for a Melbourne-based frontend systems engineer. Built with Vue 2, Vue Router, and Vuetify, and served from the committed `docs/` directory on GitHub Pages.

## Content and structure

- `src/components/MainVisual.vue`: introduction and primary links
- `src/components/MyWorks.vue`: project descriptions and website links
- `src/components/SkillSets.vue`: practical engineering expertise
- `src/components/AboutMe.vue`: biography and contact details
- `src/components/NeighcrewDetail.vue`: case study at `/#/neighcrew`

Historical results in the case study are dated; update them only with verified figures. The public biography uses Wabify employment dates from the supplied March 2026 CV.

## Maintenance notes

### Creative Practice

The Creative Practice section follows the engineering work, expertise, and biography. Edit only `src/content/creativePractice.js` to curate it; examples for every field are included there. Both lists start empty because no artwork images or audio recordings were supplied. The site displays brief empty-selection notes instead of invented examples or broken players.

1. Put selected images and MP3 recordings in `public/creative/`. Use web-sized images (around 1200px on the long edge) and descriptive filenames without spaces.
2. Add an artwork to `artworks` with a unique `id`, `title`, `image` path such as `creative/my-collage.jpg`, and meaningful `alt` text. `year` and `note` are optional. Full-size images open in a new tab; the gallery preserves each composition without cropping.
3. Add a track to `tracks` with a unique `id`, `title`, and either an audio `src` such as `creative/my-track.mp3`, an external HTTPS listening `url`, or both. `note` is optional. Use a direct playable audio file for `src`, not a SoundCloud/YouTube webpage.
4. To pair a collage with music, set its optional `trackId` to a track's `id`. This creates a link to that player's position. Several artworks can reference the same track. Removing a track also hides any links to it.
5. Reorder array entries to change the display order; remove entries to hide work. Keep roughly 3–4 items in each category. The arrays are not artificially capped.

Use IDs containing letters, numbers, and hyphens. Local paths are relative to `public/`; absolute HTTPS media URLs are also supported. Do not include `public/` in a media path. Audio does not autoplay or preload recordings; starting one player pauses any other playing track in this section. Upload only media you intend to publish with the public repository. Rebuild `docs/` after content or media changes.

Vue 2 is a legacy dependency. A framework migration is separate from this content and accessibility refresh; the existing lockfile is retained.

Use `npm ci` for reproducible installation. Run `npx eslint src --ext .js,.vue` for a read-only lint check. `npm run lint` can apply fixes.

`npm run build` regenerates `docs/`, including hashed assets. Review and commit source and generated output together before publishing via the repository's existing GitHub Pages configuration. Building locally does not publish the site.

Google Analytics and Tag Manager configuration is preserved. Check the actual GTM container for duplicate GA page-view tags before changing tracking.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### How to build

```
npm run build
```
