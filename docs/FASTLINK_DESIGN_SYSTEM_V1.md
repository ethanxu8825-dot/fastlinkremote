# FastLink Design System v1.0

FastLink Design System v1.0 establishes the visual foundation for FastLink Remote. It uses Tailwind CSS v4, semantic CSS variables in `app/globals.css`, and typed React primitives in `app/components/DesignSystem.tsx`.

The GPU Deployment page and Services overview are the Phase 1 adopters. Other pages retain their existing styles until a later migration phase.

## 1. Design principles

1. **Operational clarity:** Content hierarchy and calls to action must be immediately understandable.
2. **Enterprise trust:** Use restrained surfaces, borders, shadows, and motion suitable for data center operations.
3. **Fast response:** Primary actions must be prominent, concise, and easy to reach by keyboard.
4. **Technical competence:** Layouts should feel structured, precise, and documentation-oriented.
5. **Brand continuity:** Preserve FastLink's dark navy, cyan, and white visual identity.
6. **Accessible by default:** Maintain visible focus, semantic HTML, sufficient contrast, and reduced-motion support.

## 2. Brand and semantic colors

The source tokens are defined on `:root`. Tailwind aliases are defined in `@theme inline`.

| Purpose | CSS token | Tailwind utility | Value |
| --- | --- | --- | --- |
| Page background | `--ds-color-page-background` | `bg-page` | `#050816` |
| Alternate section | `--ds-color-section-background` | `bg-section` | `#081127` |
| Surface/card | `--ds-color-surface` | `bg-surface` | `#0b1229` |
| Elevated surface | `--ds-color-surface-elevated` | `bg-surface-elevated` | `#0e1730` |
| Primary text | `--ds-color-text-primary` | `text-primary-text` | `#f8fafc` |
| Secondary text | `--ds-color-text-secondary` | `text-secondary-text` | `#d1d5db` |
| Muted text | `--ds-color-text-muted` | `text-muted-text` | `#9ca3af` |
| Border | `--ds-color-border` | `border-border` | Cyan at 12% opacity |
| Primary brand | `--ds-color-brand-primary` | `bg-brand`, `text-brand` | `#22d3ee` |
| Primary hover | `--ds-color-brand-primary-hover` | `bg-brand-hover` | `#67e8f9` |
| Accent | `--ds-color-accent` | `text-accent` | `#a5f3fc` |
| Success | `--ds-color-success` | `text-success` | `#4ade80` |
| Warning | `--ds-color-warning` | `text-warning` | `#fbbf24` |
| Error | `--ds-color-error` | `text-error` | `#f87171` |
| Focus ring | `--ds-color-focus-ring` | `ring-focus` | `#67e8f9` |

Use semantic utilities in migrated code. Do not introduce new hardcoded navy or cyan values when an existing token represents the intended role.

## 3. Typography scale

Geist is the primary sans-serif font and is loaded in the root layout. Arial and Helvetica are fallbacks.

| Role | Tailwind utility | Size behavior | Weight |
| --- | --- | --- | --- |
| Display | `text-display` | `3.5rem` to `6rem` fluid | 800 |
| H1 | `text-heading-1` | `3rem` to `4.5rem` fluid | 800 |
| H2 | `text-heading-2` | `2.25rem` to `3.75rem` fluid | 800 |
| H3 | `text-heading-3` | `1.5rem` to `2rem` fluid | 800 |
| H4 | `text-heading-4` | `1.25rem` | 800 |
| Large body | `text-body-large` | `1.125rem` | 400 |
| Standard body | `text-body` | `1rem` | 400 |
| Small body | `text-body-small` | `0.875rem` | 400 |
| Eyebrow/label | `text-label` | `0.8125rem` | 700 |
| Button text | `text-button` | `0.9375rem` | 700 |

Headings use `--type-heading-letter-spacing` (`-0.025em`). Eyebrows use uppercase text and `--type-label-letter-spacing` (`0.16em`). Body text uses a `1.75` line height. Fluid heading tokens provide responsive behavior without page-specific breakpoint overrides.

## 4. Spacing and layout rules

- Horizontal page padding: `px-page`, fluid from `1.25rem` to `2rem`.
- Section vertical spacing: `py-section`, fluid from `4.5rem` to `7rem`.
- Standard grid gap: `gap-grid`, fluid from `1.25rem` to `2rem`.
- Reference spacing tokens: `--space-mobile` (`1.25rem`), `--space-tablet` (`2rem`), and `--space-desktop` (`3rem`).
- Use a consistent internal card rhythm: heading, then `mt-4`; grouped content commonly uses `mt-6` or `mt-7`.
- Avoid arbitrary spacing unless a specific composition cannot use the standard section, grid, or page tokens.

## 5. Container widths

Use the `Container` component:

- `standard`: `80rem` (`max-w-content`) for normal page sections.
- `wide`: `87.5rem` (`max-w-wide`) for broad compositions and CTA presentation.
- `narrow`: `48rem` (`max-w-reading`) for FAQs and text-heavy content.

All variants center content, use full available width, and apply `px-page`.

## 6. Section spacing

Use `Section` for standard page bands. It applies:

- A semantic page or alternate background.
- A bottom semantic border.
- A `Container`.
- Standard `py-section` spacing.

Use `tone="alternate"` to separate adjacent content groups. Use `width="narrow"` for reading-focused sections. Do not alternate backgrounds without a content-hierarchy reason.

## 7. Button variants

Use `ButtonLink` for internal call-to-action links.

- `primary`: cyan brand background, dark text, restrained cyan shadow.
- `secondary`: transparent background, semantic border, white text.

Both variants use a minimum 48px target height, `rounded-control`, a maximum 200ms transition, keyboard focus rings, and reduced-motion behavior. Use the `disabled` prop only when a non-interactive disabled state is required; it renders an `aria-disabled` element without navigation.

Use one primary action per action group. Secondary actions must not visually compete with the primary action.

## 8. Card styling

Use `ContentCard` for service and content cards. The base card includes:

- `rounded-card` (`1.5rem`).
- Semantic border and surface.
- Standard `p-7` padding.
- The restrained `shadow-card` token.

Set `interactive` only when hover feedback helps communicate that the card or content has an action. Interactive cards use a small upward movement, semantic border change, and elevated surface. Do not use oversized rounding, neon glow, or movement on static informational cards.

## 9. CTA styling

Use `CtaSection` for the final page conversion block. It accepts page-specific `title`, `description`, optional `eyebrow`, optional `supplemental` content, and `actions`.

The component provides a wide container, centered content, semantic elevated surface, restrained radial cyan emphasis, feature radius, and standard section spacing. CTA copy remains in the page; the generic component contains no marketing copy.

## 10. Responsive behavior

- Start with a single-column mobile layout.
- Add columns only when content remains readable: commonly `md:grid-cols-2` and `lg:grid-cols-3` or `lg:grid-cols-4`.
- Use fluid typography, page padding, section spacing, and grid gaps before adding custom breakpoint values.
- Keep body copy within the narrow reading width where practical.
- Buttons may stack on mobile and align horizontally from `sm` upward.
- Avoid fixed heights for text content. Minimum heights are acceptable only for alignment in repeated card grids.

## 11. Accessibility rules

- Use semantic `main`, `section`, heading, list, `article`, and `details` elements.
- Preserve a logical heading order with one H1 per page.
- All links, buttons, form controls, and FAQ summaries must have visible focus.
- Interactive targets should be at least 48px high when practical.
- Decorative SVGs must use `aria-hidden="true"`.
- Disabled controls must expose a disabled or `aria-disabled` state.
- Do not rely on color alone to communicate status.
- Global `prefers-reduced-motion` rules reduce animations and transitions to effectively instant behavior.
- Maintain readable contrast between text, surfaces, and page backgrounds.

## 12. Rules for future service landing pages

1. Start from the established semantic content structure, not from copied page-specific class strings.
2. Preserve complete metadata: title, description, keywords, canonical, Open Graph, and Twitter.
3. Use `Container`, `Section`, `SectionHeading`, `Eyebrow`, `ButtonLink`, `ContentCard`, and `CtaSection` where their concepts apply.
4. Keep pages as Server Components unless state, event handlers, or browser-only APIs are required.
5. Keep page-specific data and marketing copy in the page module.
6. Use semantic color and typography utilities instead of raw color or font-size values.
7. Keep content grids responsive and avoid fixed content heights.
8. Validate the page with page-level ESLint, TypeScript, and a production build before migration is considered complete.
9. Migrate pages incrementally; do not combine design-system adoption with copy or SEO rewrites.

## 13. Patterns to avoid

- New hardcoded brand colors where semantic tokens exist.
- Duplicate local implementations of shared headings, buttons, containers, cards, or CTAs.
- Client Components used only for styling.
- Excessive gradients, neon effects, glow, blur, or animation.
- Oversized rounded cards and pill shapes for large content areas.
- Long transitions or motion that ignores reduced-motion preferences.
- Generic components containing service-specific copy.
- Full-page redesigns during component migration.
- Decorative UI that reduces readability or operational clarity.
