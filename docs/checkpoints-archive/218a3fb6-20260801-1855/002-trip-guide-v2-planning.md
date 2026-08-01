<overview>
The user is building an Angular + Taiga UI travel planner for a Japan trip, with all content driven from a single JSON config. The goal is to evolve the app from a static notes-style page into a richer personal trip guide, while preserving the Angular/Taiga architecture and ensuring the config is the single source of truth.
</overview>
<history>
1. The user asked to continue implementation after prior setup.
   - I integrated standalone components into `App`, wired the data service, and ensured the app built successfully.
   - I found and fixed `TuiRoot` dependency issues by adding `provideTaiga()`.

2. The user reported runtime problems and build deployment issues.
   - I diagnosed the `TUI_OPTIONS` provider error and fixed `app.config.ts`.
   - I corrected asset handling in `angular.json` and `index.html` so both dev server and static build resolve `assets/trip-config.json` and bundle files correctly.
   - I moved documentation files into `docs/` and created `agents.md`.

3. The user requested not to match the original HTML styling.
   - I acknowledged that and kept the current UI without trying to mimic the original page.

4. The user wanted the interface model enriched.
   - I extended `ScheduleItem` with `googleMapsUrl` and added a day-of-week computation in `DayCardComponent`.
   - I updated `README.md` with the GitHub Pages deployment link and documented the state.

5. The user then asked to create a detailed plan of the v2 roadmap before proceeding.
   - I wrote a new `dev-plan.md` with a prioritized plan for converting the app into a Trip Guide v2.
   - I updated the session plan to reflect the new priorities and asked for permission before executing.

6. The user gave permission to proceed and asked to write a detailed plan in `dev-plan.md`.
   - I created `dev-plan.md` with an explicit v2 implementation plan.
   - I began implementing the model extensions and config overhaul.

7. During the latest step, I attempted to replace `trip-config.json` with a richer v2 version but encountered a JSON parsing failure due to a BOM/encoding issue in the generated file.
</history>
<work_done>
Files updated:
- `src/app/app.config.ts` — added `provideTaiga()`.
- `angular.json` — added `src/assets` as build assets and set `baseHref`.
- `src/index.html` — changed `<base href="./">`.
- `docs/dev-plan.md` — added v2 priority plan.
- `agents.md` — created high-level project/agent documentation.
- `README.md` — added GitHub Pages deployment link and docs references.
- `src/app/models.ts` — extended `ScheduleItem` with Google Maps and v2 fields, alias `TripPoint`.
- `src/app/components/schedule-item/*` — updated UI to show type, duration, cost, priority, booking/weather flags, status, personal notes.
- `src/assets/trip-config.json` — replaced with a richer v2 itinerary draft.

Work completed:
- [x] Fixed Taiga provider issue for runtime.
- [x] Fixed asset and static build path issues.
- [x] Created `docs/` documentation structure.
- [x] Added roadmap and v2 planning.
- [x] Extended data model for richer itinerary metadata.
- [x] Started converting `trip-config.json` to v2.

Work in progress / issue:
- `src/assets/trip-config.json` currently contains a JSON parse error due to BOM/encoding artifact after content replacement, so it needs cleanup before the app can use it.
</work_done>
<technical_details>
- Architecture: Angular standalone components, `ConfigService` loads `assets/trip-config.json`, `App` uses `async` pipe.
- Taiga UI requires `provideTaiga()` when using `TuiRoot` in a standalone app.
- Static build and GitHub Pages require `base href="./"` plus explicit asset output mapping in `angular.json`.
- `DayCardComponent` computes weekday from `day.date` in `DD-MM-YYYY` format, because Taiga does not provide date parsing by itself.
- The current config rewrite is intended to preserve `days[].schedule[]` compatibility while enabling richer guide semantics.
- Encountered encoding issue: generated JSON file began with a BOM character, causing parse failure.
</technical_details>
<important_files>
- `src/app/models.ts`
   - Central type definitions; updated to include richer trip point fields and alias `TripPoint`.
- `src/assets/trip-config.json`
   - Primary JSON source of truth; currently being rewritten to v2.
- `src/app/app.config.ts`
   - Contains Angular application providers; fixed Taiga provider issue.
- `angular.json`
   - Build config controlling assets and output paths; fixed asset copying and static deployment support.
- `src/index.html`
   - Base href settings for dev/static hosting.
- `docs/dev-plan.md`
   - Detailed v2 implementation plan and priority roadmap.
- `README.md`
   - Deployment link and docs references for future users.
- `agents.md`
   - Project overview and instructions for future AI agents.
</important_files>
<next_steps>
Remaining work:
- Fix the BOM/encoding issue in `src/assets/trip-config.json`.
- Finalize and validate the v2 itinerary JSON.
- Ensure current components still render with the expanded model.
- Possibly update `ScheduleItemComponent` to surface the new fields more clearly.

Immediate next steps:
- Clean up `trip-config.json` so it parses correctly.
- Verify `npm run build` again after the config fix.
- Continue the v2 implementation only after validating the new config and plan.
</next_steps>