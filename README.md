# Edinburgh — Two Walking Loops

A self-contained single-page itinerary for Edinburgh. Two days on foot, all stops geocoded and pinned on an interactive Leaflet map.

- **Day 1 — Old Town:** Edinburgh Castle → Camera Obscura → The Witchery → Writers' Museum → Victoria Street → Greyfriars Kirkyard → National Museum of Scotland → The Vennel Viewpoint → Armchair Books.
- **Day 2 — North & East:** Dean Village → Circus Lane → The Pantry (brunch) → Scottish National Portrait Gallery → Scott Monument → 1820 Rooftop Bar at Johnnie Walker → The Chocolatarium → Calton Hill.

## Files

- `index.html` — the whole page (HTML, CSS, JS, and Leaflet map). No build step, no extra files.
- `README.md` — this file.

## Run locally

No build. Just open `index.html` in a browser, or:

```bash
python -m http.server 8000
# visit http://localhost:8000/
```

The page pulls in two CDN resources at runtime: Google Fonts (Fraunces, IBM Plex Sans/Mono) and Leaflet 1.9.4. Both are pinned by SRI hash.

## Deployment

Static files. Designed to deploy to Cloudflare Workers/Pages with no build command and the publish directory set to the repo root.