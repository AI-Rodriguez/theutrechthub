# The Utrecht Hub

**The go-to resource for internationals living, working, and connecting in Utrecht and surrounding area.**

🌐 **Live site:** [theutrechthub.netlify.app](https://theutrechthub.netlify.app) — 🚧 Under development

---

## About

The Utrecht Hub is a community platform serving 43,000+ internationals in Utrecht, Netherlands. Built on a decade of organic community growth, the platform connects a thriving Facebook community, Meetup group, and registered business (eenmanszaak) into a unified web experience.

### What it offers

- **Jobs Board** — Curated positions for internationals in Utrecht
- **Housing Board** — Verified listings to navigate the Dutch rental market
- **Events** — Community meetups, workshops, and cultural gatherings
- **New in Utrecht Guide** — Practical info on BSN, healthcare, taxes, banking
- **Trusted Services Directory** — Vetted local businesses serving internationals
- **Community** — Gateway to the largest international community in Utrecht

## Tech Stack

- **React 18** with React Router
- **Vite** for build tooling
- **CSS** (custom, mobile-first)
- **Deployed on** [Netlify](https://www.netlify.com) via GitHub auto-deploy

## Project Structure

```
src/
├── components/     # Reusable UI components (Navbar, Hero, Footer, etc.)
├── pages/          # Page-level components (Home, future: Jobs, Housing...)
├── styles/         # Global CSS and design tokens
├── App.jsx         # React Router configuration
└── main.jsx        # Entry point
```

## Deployment

Pushes to `main` auto-deploy to Netlify. Build settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Domain

- **Current:** theutrechthub.netlify.app
- **Future:** theutrechthub.com (domain owned, DNS switch pending)

## License

All rights reserved. © 2026 The Utrecht Hub.

---

*Built by the community, for the community — since 2015.*
