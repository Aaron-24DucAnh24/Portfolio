# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # start dev server at localhost:3000
yarn build      # production build
yarn lint       # ESLint with auto-fix
```

No test suite is configured.

## Architecture

**Next.js 14 App Router** portfolio with TypeScript + Tailwind CSS + Redux Toolkit.

### State management

Two Redux slices in [src/store/](src/store/):
- `theme` — `THEME.LIGHT | THEME.DARK` (drives actual class-based styling)
- `mode` — `"Light" | "Dark" | "System"` (user selection, persisted to `localStorage`)

Because Redux's `Provider` must be a client component, any component that needs store access is wrapped with the `StateProvider` HOC ([src/components/general/StateProvider.tsx](src/components/general/StateProvider.tsx)):
```ts
export const MyComponent = StateProvider((props) => { /* uses useAppSelector */ });
```

### Data-driven content

Page content lives in JSON files under [src/data/](src/data/) (`experienceData.json`, `projectData.json`, `educationData.json`, `certificationData.json`). Navigation routes, skill lists, static image paths, and social links are all defined in [src/utils/constants.ts](src/utils/constants.ts).

### Experience/project detail components

`experienceData.json` references detail components by name (e.g. `"descComponent": "LabelboxDesc"`). The corresponding React components live in [src/components/experiences/](src/components/experiences/) and are rendered via a lookup in `ExperienceCard`. To add a new experience: add an entry to the JSON and create a matching `*Desc.tsx` component.

### Styling

Custom Tailwind palette (no standard color names):
- `primary` — `#e60022` (red accent)
- `secondary` — `#111111` (dark/black)
- `third` — `#898989` (muted gray)
- `fourth` — `#f1f1f1` (light gray / text in dark mode)
- `fifth` — `#151515` (near-black)

Custom animations (`slide-in`, `shake`, `flip-front/back`, `cover-out/in`, `floating`, etc.) are defined in [tailwind.config.ts](tailwind.config.ts).

Dark mode is applied manually by toggling `text-fourth` / `bg-secondary` classes based on the `theme` Redux value — not via Tailwind's `dark:` variant.

### Custom hooks ([src/utils/hooks.ts](src/utils/hooks.ts))

- `useAppSelector` / `useAppDispatch` — typed Redux hooks
- `useRunOnce` — runs an effect exactly once (ref-guarded, avoids double-fire in StrictMode)
- `useClickOutside` — closes dropdowns/modals on outside click
- `useCatchKeyPress` — binds `Ctrl/Alt/Shift/Meta + key` shortcuts
- `useHoverState` — returns `isHover` + `hoverProps` spread onto an element
