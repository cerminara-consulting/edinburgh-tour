# Edinburgh Old Town — One-Day Walking Tour

A single-page guided walking tour of Edinburgh's Old Town. Nine stops from Edinburgh Castle to Armchair Books, all within a 15-minute walk.

## Run locally

No build step. Just open `index.html` in a browser, or:

```bash
python -m http.server 8000
# then visit http://localhost:8000/
```

## Files

- `index.html` — page markup. Contains **both** layouts, with the second hidden by default.
- `styles.css` — design tokens + both layout stylesheets. Layout-specific rules are scoped under `.layout--scroll` and `.layout--timeline`.
- `app.js` — layout toggle. Choice is saved to `localStorage` so reloads keep the view you picked.

## Layouts

The header has a two-button toggle that switches between:

- **Single scroll** — vertical list, time headings, color-coded chips for morning/afternoon/evening.
- **Timeline cards** — sticky left rail with colored nodes, time + number on the left, full stop card on the right.

Both render the same data; switching is a CSS toggle, not a navigation.

## Editing content

Each stop lives twice in `index.html` — once inside `#layout-scroll`, once inside `#layout-timeline`. To change a stop's text, rating, or time, update both blocks. (Future cleanup: render the stops from a single JSON array if the list grows past ~15 stops.)

## Deployment

Designed to deploy as static files to Cloudflare Pages. Connect the GitHub repo to Pages with no build command and the publish directory set to `/` (the root of this repo, since there's no build step).