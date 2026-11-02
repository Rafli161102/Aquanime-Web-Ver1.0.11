# AquaNime Websites

This repository contains the legacy AquaNime community website and the new dual-site foundation.

## New website roots
| Website | Directory | Purpose |
|---|---|---|
| AquaNime Ordinary Weebs | `community/` | Public community website |
| PT AquaNime Kreatif Indonesia | `corporate/` | Corporate and business information |
| Legacy website | `frontend/` | Existing implementation retained during migration |

## Local preview
Run a static server from the repository root, then open:
- `/community/`
- `/corporate/`

For example, with Node.js installed:
```bash
npx serve .
```

## Vercel deployment
Create two Vercel projects linked to this repository:
1. Community project — Root Directory: `community`
2. Corporate project — Root Directory: `corporate`

Attach the approved domain to each project after reviewing preview deployments. Do not replace an existing production project until the migration is approved.

## Agent workflow
Read `AGENTS.md` and `DESIGN.md` before making changes. The Anti-Slop skills are installed under `.agents/skills/`. Read the core skill and relevant specialist skills before implementation. See `WEBSITE-ARCHITECTURE.md` for source-of-truth and content rules.
