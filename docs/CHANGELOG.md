CHANGELOG

2026-08-01 — Trip Guide v2 work
- Initialized Angular workspace and installed Taiga UI.
- Implemented standalone components for main features.
- Added ConfigService to load src/assets/trip-config.json.
- Extended models.ts with TripPoint and v2 fields.
- Rewrote src/assets/trip-config.json into a v2-rich itinerary and fixed BOM/encoding issues.
- Fixed Taiga provider (provideTaiga) and app configuration for standalone providers.
- Ensured build (ng build) and dev server (ng serve) work; dev server at http://127.0.0.1:4200.
- Moved documentation into docs/ and created tour-text-plan.md extracted from reference/tour-v1.html.
- Archived session checkpoints into docs/checkpoints-archive/218a3fb6-20260801-1855.

Notes:
- Visual styling preserved as functional; not attempting to match original HTML look-and-feel.
- Next: finalize v2 config, add filters/modals/interactive map, then allow editing of the config.
