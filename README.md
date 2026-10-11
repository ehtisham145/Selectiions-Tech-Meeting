# Selections Technologies Meet

A lightweight, branded video conferencing page for Selections Technologies — start or join a secure video meeting instantly, no downloads or accounts required.

## Tech Stack

- **React 18 + Vite** — component-based UI with a fast dev server and a static production build
- **[Jitsi Meet External API](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe)** — powers the actual video/audio calling via Jitsi's free public server (`meet.jit.si`)
- Deployed as a static site on **Netlify**

## Project Structure

```
meeting_project/
├── index.html                  # Vite entry (mounts #root)
├── src/
│   ├── main.jsx                 # React entry point
│   ├── App.jsx                  # top-level layout
│   ├── index.css                # all styling (brand palette, solid colors, animations)
│   └── components/
│       ├── TopBar.jsx           # email + UK/PK phone contact bar
│       ├── Header.jsx           # logo + Team nav link
│       ├── Hero.jsx             # heading with typewriter effect + illustration
│       ├── JoinForm.jsx         # room/name fields with real-time validation
│       ├── Badges.jsx           # feature badges
│       └── Footer.jsx           # copyright + links
├── package.json
├── vite.config.js
└── README.md
```

## How It Works

1. User enters a **room name** and their **display name** on the landing page.
2. Both fields are validated **in real time** as the user types (required, length limits, allowed characters), with inline success/error states.
3. On submit, the browser is **redirected to `meet.jit.si`** with a room scoped to `SelectionsTechMeet-<room>`, so it doesn't collide with unrelated public rooms.
4. The **Team** link (header and footer) redirects to [selectionstechnologies.com/team](https://selectionstechnologies.com/team).
5. No backend, database, or account system — Jitsi's public infrastructure handles the actual video/audio.

### Why a redirect instead of an embedded iframe?

Jitsi's public server explicitly disconnects **embedded** calls (via its iframe/External API) after 5 minutes, with the message *"Embedding meet.jit.si is only meant for demo purposes."* That restriction does not apply to a normal full-page redirect, so this app hands off to `meet.jit.si` directly instead of embedding it. The trade-off: Selections Technologies branding is visible on the landing/launch page, but the call itself runs on Jitsi's own site.

**If persistent in-call branding is needed later**, the options are:
- **Jitsi as a Service (JaaS)** — 8x8's hosted product, built for embedding with your own branding; free tier available (~10,000 participant-minutes/month), needs an 8x8 account + API setup.
- **Self-hosting Jitsi** — full control (own branding, no limits), needs a VPS (e.g. Oracle Cloud's Always Free tier).

## Run Locally

```bash
npm install
npm run dev
```

Then visit the printed local URL (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
```

Outputs a static build to `dist/`. Preview it locally with `npm run preview`.

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project** → connect the repo.
3. Build command: `npm run build` — Publish directory: `dist`.
4. Click **Deploy**. Your live link will look like `https://<site-name>.netlify.app`, or connect a custom domain from the site's Domain settings.

## Notes

- This uses Jitsi's **free public server**, so there's no hosting cost and no server to maintain.
- Room names are restricted to letters, numbers, and hyphens to keep meeting URLs clean and valid.
- Brand colors (`#2563eb` blue, `#0f172a` navy) were pulled directly from `selectionstechnologies.com`'s compiled stylesheet.
- Branding (name, colors, tagline, contact details) belongs to Selections Technologies.
