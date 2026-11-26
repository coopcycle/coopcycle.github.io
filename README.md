# CoopCycle releases

What changed in the [CoopCycle](https://github.com/coopcycle/coopcycle-web) back office, release by release, for dispatchers and admins. Published on https://dev.coopcycle.org.

A [Hugo](https://gohugo.io) site, without a theme:

```
content/releases/<tag>/index.md   one note per release, with its screenshots next to it
layouts/                          the templates
assets/                           the stylesheet, the zoom script and the logo
```

## Preview

```bash
hugo server   # http://localhost:1313
```

Hugo 0.140 (extended) or later. Without Hugo installed:

```bash
docker run --rm -it -v "$PWD:/project" -p 1313:1313 ghcr.io/gohugoio/hugo:v0.140.2 server --bind 0.0.0.0
```

## Publishing

Every push to `main` builds the site and publishes it on GitHub Pages (`.github/workflows/pages.yml`).

A note is written in English. Its front matter gives the title, the release date, the tag, and a one-line summary for the home page:

```markdown
---
title: CoopCycle 6.26.0
date: 2026-11-25
version: v6.26.0
summary: One sentence listing the main changes.
---
```

Screenshots and videos are written the same way, `![what it shows](file.png)` or `![what it shows](file.mp4)`; the alt text is also the caption. A video plays muted on a loop (or shows its controls to readers who asked for less motion), and needs a `.png` of the same name next to it, the still shown before it plays. Screenshots and stills are taken at 2× and shown at half their size.

`> [!NOTE]` makes a callout, as on GitHub. Each note is also the body of its release on [GitHub](https://github.com/coopcycle/coopcycle-web/releases).
