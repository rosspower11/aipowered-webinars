# AI Powered Webinars

Landing pages for live webinars and masterclasses. **Production:** [webinar.aipowered.xyz](https://webinar.aipowered.xyz) (Vercel, auto-deploys from `main`).

## Edit the live site

1. Open **`lib/webinar.ts`** — all copy, dates, CTAs, and form IDs live here.
2. Preview locally:

   ```bash
   npm install
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. Push to GitHub `main` — Vercel rebuilds production (usually under 2 minutes).

```bash
git add lib/webinar.ts   # and any component changes
git commit -m "Update masterclass copy and event date"
git push origin main
```

## Before each event

In `lib/webinar.ts`, update:

| Field | Purpose |
|-------|---------|
| `event.dateLine` | e.g. `Thursday 12 June · 5pm UK` |
| `cta.label` / `cta.navLabel` | Button text |
| `form.formId` | New GoHighLevel form ID when you create one |
| `form.formName` | Label for your CRM |
| `meta.title` / `meta.description` | SEO & social previews |

## Registration form

Sign-up uses a GoHighLevel embed in `components/webinar/WebinarForm.tsx`. Form settings are in `webinar.form` inside `lib/webinar.ts`.

Create a new form in GHL, paste its ID into `form.formId`, and adjust `inlineHeight` if the form is clipped.

## Repo & deploy

- GitHub: [rosspower11/aipowered-webinars](https://github.com/rosspower11/aipowered-webinars)
- Vercel project should use root directory `.`, framework Next.js, production domain `webinar.aipowered.xyz`

To link Vercel CLI locally (optional):

```bash
npx vercel link
npx vercel env pull   # if you add env vars later
```

## Current event

**Build With Me — 90 min live landing page session · 22 June 12:30pm BST**

Free done-with-me session. Prep: Claude Desktop (paid), Cursor, GitHub.
