# Henil Parmar — Orbit to Apex

An original portfolio built from an empty Next.js project. No portfolio source, template, starter portfolio, team livery, or existing website layout was used. The older local portfolio is untouched.

## Run

Node.js 20.9+ (24 recommended):

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production: `npm run build`, then `npm start`. Validation: `npm run typecheck` and `npm run lint`.

Next.js 16.3.8, React, TypeScript, Three.js, React Three Fiber and GSAP. Styling uses original CSS tokens rather than a component theme. The Windows sandbox used during authoring requires worker threads and the TypeScript API; those supported Next.js settings are in `next.config.ts`.

## Content

- `data/projects.ts`: titles, methods, evidence, limitations, tags, repository names, optional `report` and `doi` links. Add a project object to create its project route automatically. The RLV study uses its dedicated research route.
- `components/experience.tsx`: dated research and industry experience.
- `app/about/page.tsx`: education, biography and skills.
- `components/footer.tsx`: contact and social links.
- `public/henil-parmar-cv.pdf`: replace with the latest approved CV at the same filename. Current source is the supplied local `Masters_Resume.pdf` (13 September 2026), selected because it includes the master's/controls portfolio. The newer general two-page résumé was inspected for experience verification but omits the core controls project coverage.
- `public/project-media/`: actual repository plots converted to WebP. Replace an image and update its caption/source in the project record. Never treat the conceptual interactive charts or 3D models as measured results.
- `app/globals.css`: colours, spacing, typography, responsive layouts and motion preferences.
- `components/three/scene.tsx`: original illustrative satellite and generic Formula car geometry.
- `components/cinematic.tsx`: scroll narrative and trajectory morph.

## Deployment on Vercel Hobby

1. Push this clean repository to the intended GitHub repository. Do not force-push over earlier portfolio history.
2. In Vercel, select Add New → Project and import that repository.
3. Select Next.js, root directory `./`, build `npm run build`, install `npm ci`. No paid service is required.
4. Set `NEXT_PUBLIC_SITE_URL` to the assigned production `https://…vercel.app` URL, then redeploy so sitemap and canonical metadata use it. Vercel's project production URL is used automatically when available.
5. Keep `main` as production. Other branches receive preview deployments once the Git integration is connected.
6. Verify the homepage, all case studies, CV download, contact links and social metadata on the public URL.

To add a domain later, open the Vercel project's Settings → Domains, add the domain, and apply exactly the DNS records Vercel displays at your registrar. Update `NEXT_PUBLIC_SITE_URL` to the canonical domain and redeploy. Vercel provisions HTTPS after domain verification. Buying a domain is optional.

## Architecture and performance

Most pages are statically rendered. The 3D module is split from the main page; it uses procedural geometry, demand-based rendering, and a capped pixel ratio rather than an always-running animation loop. The cinematic scene mounts near the viewport. Reduced motion removes the long pinned scroll. Fonts are self-hosted. No analytics or trackers are included.

## Evidence and licensing

See `ATTRIBUTION.md` and `CONTENT-SOURCES.md`. Research pages intentionally avoid confidential institutional material and unsupported quantitative claims. Actual repository results include their limitations. No claim of real-time NMPC, latest FIA compliance or global optimality is made.

The public master’s CV includes its existing phone contact; the site itself does not reproduce that number. Review the CV before public deployment if you want a phone-free version.

## Known scope

The site is a portfolio, not a live numerical solver. The engineering sketch uses illustrative signals. Satellite and car geometry are stylized engineering illustrations. RLV, satellite LQR and MEMS pages are résumé/brief-grounded summaries, because no public result dataset/report was supplied for those studies. Add public reports/DOIs to the data records when available.
