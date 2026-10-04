# bradcbennett.com

Portfolio site for Brad Bennett: music, art and writing.

Built with [Astro](https://astro.build) and Tailwind CSS. Deployed by Netlify, which rebuilds the site automatically on every push to `main`.

## Structure

```text
src/
  content/projects/   one Markdown file per project → /projects/<slug>
  content.config.ts   fields each project must have
  pages/              home (project grid), about, contact, project template
  layouts/            shared page shell (header, nav, footer)
  styles/global.css   colours and base styles
public/
  images/             project images (loose, or a folder per project)
  audio/              MP3s used on project pages
```

## Adding a project

Create `src/content/projects/<slug>.md`:

```markdown
---
title: "Project Title"
category: art              # music | art | writing
order: 1                   # home page position, lowest first
year: "2026"               # text, so "2020–2023" works too
thumbnail: "/images/<slug>/<slug>-1.jpg"
images:                    # optional gallery
  - "/images/<slug>/<slug>-1.jpg"
externalUrl: "https://..."  # optional: link the card off-site instead
description: "One-line summary"
---

<div style="margin: 2rem 0;">

Body text in Markdown. Wrap each paragraph or block in a div like this one.

</div>
```

Put the images in `public/images/`. Newest work goes at `order: 1`; renumber the others, or use a decimal (e.g. `10.5`) to slot something between two items.

## Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Local dev server at `localhost:4321`    |
| `npm run build`   | Build the site to `./dist/`             |
| `npm run preview` | Preview the built site locally          |
