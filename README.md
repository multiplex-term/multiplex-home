# multiplexterm.dev

The Multiplex landing site: the App Store listing's marketing URL and privacy
policy for [Multiplex](https://github.com/multiplex-term/Multiplex), the SSH
terminal for remote tmux — or herdr — on Apple Vision Pro, iPad, and
iPhone. Astro on Cloudflare Workers (static output; the Cloudflare template
this grew from is the astro-blog-starter).

## Pages

| Route | Source | Content |
| :-- | :-- | :-- |
| `/` | `src/pages/index.astro` | The "Daylight" landing page: TALLY Frost chassis, a hero device lineup at true relative physical scale, real product screenshots, Free/Pro with the in-app purchase marked. |
| `/privacy` | `src/pages/privacy.astro` | Privacy policy matching `fastlane/metadata/en-US/privacy_url.txt` in the app repo. |

Both pages are self-contained full-document Astro pages (`is:inline` styles
and scripts, no shared layout). Product screenshots live in `public/assets/`
and derive from the app repo's `docs/` captures; the design system (colors,
the Carrier mark geometry) follows the app repo's `DESIGN.md`. The design
bake-off record and unchosen candidates stay in the app repo under
`docs/landing/`.

Content is a customer-facing claim surface: when features, pricing,
platforms, or privacy behavior change in the app, update these pages in the
same change as the app repo's `docs/store-metadata.md` and fastlane metadata.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Build, then preview through wrangler |
| `npm run check` | Build, typecheck, and dry-run the deploy |
| `npm run deploy` | Deploy to Cloudflare Workers |
