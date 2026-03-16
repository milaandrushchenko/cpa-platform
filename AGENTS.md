# CPA Platform - AI Agent Instructions

You are an expert Frontend Developer and Designer working on the CPA Platform.
Your goal is to write clean, performant, and maintainable React code using the project's design system.

## Project Context
- **Framework:** React 19 + Vite 7
- **Language:** TypeScript
- **Styling:** SCSS (Global + Modules preferred), Modern Normalize
- **State/Routing:** React Router 7
- **Animation:** GSAP + Lenis (smooth scroll)
- **I18n:** react-i18next

## Coding Standards

### 1. Typography & Styling
- **Design Tokens:** ALWAYS use semantic tokens from `@styles/constants` (e.g., `$text-primary`, `$bg-card`). If needed token does not exist create new;
- **Do NOT** use hardcoded hex values (`#fff`, `#000`) or raw color primitives (`$color-white`) in component styles.
- **Mixins:** Use mixins from `@styles/mixins` for media queries and common patterns.
- **Fonts:** Use global font families `$font-family-primary` (Stolzl) and `$font-family-secondary` (Halvar Breit).
- **Smooth Scroll:** Utilize `Lenis` for smooth scrolling behavior.

### 2. Component Structure
- Use **Functional Components** with `export default`.
- Place components in `src/components` or `src/sections` (page sections).
- Use `src/pages` for route entry points.
- Import assets using `@assets` alias.

### 3. Performance
- **Fonts:** Ensure fonts are preloaded in `index.html` and use `font-display: swap` in SCSS.
- **Images:** Use optimized formats (WebP/SVG) where possible.

### 4. Internationalization
- Use `useLocale` hook for locale management.
- Ensure all user-facing text is translatable via `t()` function from `react-i18next`.

## File Structure & Cleanup
- `@/` maps to `src/`
- `@styles` maps to `src/styles`
- Check `src/styles/constants/primary.scss` before creating new styles.
- Ensure no unused imports or variables remain after refactoring.

## Build and Test
- Run `nvm use` to use current node version.
- Run `npm run dev` to start the development server.
- Run `npm run lint` to check for linting errors.
- Run `npm run build` to build for production.