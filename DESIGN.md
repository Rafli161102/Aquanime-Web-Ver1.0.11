# AquaNime Dual Website — Design Direction

## Product architecture
One repository, two independently deployable static websites:
- `corporate/`: PT AquaNime Kreatif Indonesia. Audience: business partners, clients, institutions, media, prospective collaborators.
- `community/`: AquaNime Ordinary Weebs. Audience: members, prospective members, Japanese-pop-culture enthusiasts, event visitors, creators.

The legacy implementation in `frontend/` remains untouched during this first iteration.

## Corporate visual direction
A restrained editorial identity. Warm paper background (#F7F8F6), ink/navy (#12243A), AquaNime aqua (#27AFC1), muted slate (#5C6C78), fine rules, generous whitespace, strong typographic hierarchy. Use the aqua accent as a precise navigational cue, not as a page-wide gradient. Mostly square or subtly rounded surfaces; no wall of floating cards. The corporate site should feel like a contemporary Indonesian creative company with a clear point of view, not a generic SaaS landing page.

Voice: measured, direct, human, specific. Describe PT AquaNime Kreatif Indonesia as the legal company and AquaNime as the brand/community identity. Distinguish current activity from long-term direction. The seven ecosystem pillars are Community, Creative, Media, Event & Experience, Talent & Opportunity, Partnership, and Digital Platform. Aria Labs is a creative digital studio/brand within the ecosystem; Asteria is an original character and talent universe direction. Do not present planned areas as fully operational services.

## Community visual direction
A more expressive, welcoming identity: light aqua, deep ocean blue, warm coral/yellow accents, photographic/illustrative editorial blocks, community-first language, visible routes to join, explore projects, and view activity. Use the existing official AquaNime logo and Aria assets where appropriate; do not redraw or distort them. Do not let the mascot replace real community information.

Voice: friendly, inclusive, energetic but not exaggerated. The community is rooted in Japanese pop culture and grew from L-Army Ordinary Weebs (2017), rebranded to AquaNime Ordinary Weebs on 29 May 2022. Do not imply that all regional chapters or programs are currently active unless verified.

## Shared rules
- Mobile-first; mobile navigation is a real reflow, not a squeezed desktop menu.
- Keyboard-accessible navigation, visible focus, semantic landmarks, skip link, descriptive links, reduced-motion support.
- Avoid generic blue-purple gradients, fake dashboards, invented statistics, fake testimonials, decorative grids, excessive glass, pill-shaped everything, and animation without a reason.
- Prefer real content and existing assets. If an image is unavailable, use a purposeful typographic/shape composition rather than an unrelated stock photo.
- No fake "live" data or dead links. Mark unavailable channels as configuration items, not clickable placeholders.
- Keep performance high: system fonts, small CSS/JS, lazy-load below-the-fold imagery, no heavy animation library.
