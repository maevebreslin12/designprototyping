# Design Foundation

Frontend-only prototyping foundation (React + TypeScript + Vite + Tailwind CSS v4) rebuilt from the KatKin design system and sample screens. Mobile-first (390px reference width).

## Sources
- Design system: https://www.figma.com/design/2lXPfWYksJVi4YpTGaqriE/KatKin-Product-Design-System-2026--Copy-?node-id=580-9181
  - Pages used: Colour (24036:3433), Typography (22:1400), Button (34:6), Input (65:520), Alert (21:322), Navigation Components (209:1883)
- Sample screens: https://www.figma.com/design/AIVQ5DYYLy5ZghFmUb4SyE/Onboarding---Acc-Portal-Revamp-Q1-2026?node-id=7553-44094
  - Frames recreated: Homepage – Fresh Trialists (7553:45662), Account • Mobile (7553:61943), Login screen (7553:62945)
  - Inspected but not recreated: My cats, community, rewards, billing, past orders

## Run
```
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build
```
Routes (hash-based): `#/` showcase · `#/compositions` all sample screens · `#/screen/home|account|login` bare 390px frame (for screenshots).

## Visual principles (from the Figma references)
1. **Warm paper canvas, flat white containers.** Page bg `#EEEFE4`; cards are white with a 1px black border and 2px radius. No soft elevation on containers.
2. **Neo-brutalism used sparingly.** Only the focal login card gets the hard offset shadow (`1px 3px 0 #000`).
3. **Pill buttons, square-ish everything else.** Text buttons are fully rounded; icon buttons 6px; inputs 4px; cards 2px.
4. **Black = primary action, chartreuse = brand/secondary action.** Chartreuse (`#D5E709`) is a fill (button, active-tab icon, footer accents), never body text on light backgrounds. Brand green `#256C41` is for emphasis text (name, "In your box", "Recipes").
5. **Two type voices.** Bold condensed heading face (tight −2% tracking) for titles, labels and controls; regular grotesque for body. Sizes are small and dense on mobile (14–18px body, 16px controls).
6. **Consistent mobile rhythm.** 16px page gutter, 24px between sections, 16px card padding, 8–12px inside groups. Section cards = tinted header (`#F6F7EE`, bottom border) + body.
7. **Inverse footer.** `#090C08` with chartreuse eyebrow, white headings, light-grey links.
8. **Illustration carries personality.** Line-art cats and brush logo sit on the page edges (see deviations).
9. **Destructive is outlined, not filled** (white fill, `#F2542D` border, `#843118` text).

## Tokens
All in `src/styles/tokens.css` (Tailwind v4 `@theme`). Use semantic utilities, not hex.

| Group | Tokens |
|---|---|
| Palette | `black #231F20`, `white`, `brand #D5E709`, `chartreuse-100 #E7F170`, `paper #EEEFE4`, `paper-elevated #F6F7EE`, `paper-75 #F8F8F4`, `surface-subtle #FCFCFA`, `sand-200 #DCD5C1`, `grey-40 #E2E2E2`, `outline-grey #C8C7C7`, `grey-dark #A3A1A1`, `grey-mid #888`, `graphite #565353`, `charcoal #4B4748`, `input #F4F4F4`, `ink-inverse #090C08`, `green #3EB16A`, `green-dark #256C41`, `green-light #ECF7F0`, `blue #45AFE2`, `blue-mid #B3DEF3`, `blue-light #E8F0F6`, `pink #EA8BED`, `destructive #F2542D`, `destructive-dark #843118` |
| Semantic | `bg`, `surface`, `surface-elevated`, `fg`, `fg-muted`, `fg-muted-strong`, `fg-inverse`, `fg-subtle`, `fg-accent`, `border-strong`, `border-muted`, `focus`, `reassurance-bg/border` (e.g. `bg-bg`, `text-fg-muted-strong`, `border-border-strong`) |
| Radii | `xs 2`, `sm 4`, `md 6`, `lg 8`, `full` |
| Spacing | 4px Tailwind scale; gutter 16, section 24 |
| Shadows | `xs`, `sm`, `md`, `lg`, `brutal`, `inset-pressed` |
| Type classes | `type-hero 80`, `type-heading-2 48`, `-3 40`, `-4 32`, `type-sub-1…4 24/20/18/16`, `type-body-1…4 18/16/14/12`, `type-control-1…4`, `type-eyebrow` |

## Component inventory (`src/components`)
| Component | File | Variants / states |
|---|---|---|
| `Button` | ui/Button.tsx | `default` `secondary` `tertiary` `destructive` `ghost` `link`; sizes `sm` `default` `lg` `icon-sm` `icon` `icon-lg`; hover, focus, pressed, `loading`, `disabled`; `leftIcon`/`rightIcon`, `fullWidth` |
| `Input`, `Label`, `Field` | ui/Field.tsx | default, focus, filled, `invalid`, disabled; description/error text |
| `Badge` | ui/Badge.tsx | `price` (pink "Free Gift"), `count`, `brand`, `outline` |
| `Card`, `CardHeader`, `CardBody`, `ItemTile` | ui/Card.tsx | `brutal` shadow option; tile with badge + count chip |
| `Alert` | ui/Alert.tsx | `reassurance` (from Figma), `success`, `destructive` (inferred) |
| `Stepper` | ui/Stepper.tsx | complete/current/upcoming |
| `Separator` | ui/Separator.tsx | — |
| `TopNav`, `BottomNav` | layout/Nav.tsx | active tab |
| `SiteFooter` | layout/SiteFooter.tsx | — |
| `Wordmark` | layout/Wordmark.tsx | **placeholder logo** |
| `PhoneFrame` | layout/PhoneFrame.tsx | 390px viewport wrapper |

Compositions (visual references only): `src/compositions/{HomeScreen,AccountScreen,LoginScreen}.tsx`.

## Usage guidelines
- One black or chartreuse primary action per view; secondary actions use `tertiary`; irreversible actions use `destructive`.
- Group related info in `Card` + `CardHeader` (icon + title). Muted supporting text is `text-fg-muted-strong`, never lighter than that for readable content.
- Icons are `lucide-react` (the Figma icon set is lucide-based): 24px nav/header, 16px inside buttons.
- Build screens at 390px first. Respect the 16px gutter and 24px section gap.
- Disabled = 50% opacity. Focus = chartreuse 2px ring/border (black ring on chartreuse fills for contrast).

## Known deviations & unresolved inconsistencies
1. **Fonts.** Greed (heading) and Scto Grotesk A (body) are licensed and not in the repo. Stand-ins: Archivo Variable (width-condensed to 80%) and Inter. Widths are close for headings, but Inter is wider than Scto so some body lines wrap earlier than in Figma. To swap: add `@font-face` for `Greed` / `Scto Grotesk A` in `tokens.css` (they are already first in the `--font-*` stacks) and remove the `@fontsource*` imports in `src/main.tsx`. Remove `font-stretch` from the `type-*` heading utilities if Greed is not width-adjusted.
2. **Logo, cat illustrations, photography and brand social glyphs** are SVG/raster assets on the Figma asset host, which this sandbox's network policy blocks. Placeholders are used (text wordmark, sand-coloured tiles, generic lucide icons). Export and drop them into `src/assets` to finish fidelity.
3. **Device chrome** (iOS status bar/notch) in the Figma frames is intentionally omitted.
4. **Alert success/destructive tints** are inferred from the palette; only the reassurance alert was read from the screens.
5. **Button hover/pressed specifics**: hover lifts shadow to `lg`, pressed uses the inset shadow (matches Figma effect styles); default-variant hover colour was not distinguishable in Figma.
6. **Home stepper** shows only three icon states; no completed-state styling was found in the references.
7. **Variable/token naming in Figma is inconsistent**: duplicate colour names (`color/foreground/*` vs `Mode/*`), a few mobile text variables resolve to different sizes in different frames (e.g. `subheading-3` is 16 in one, 18 in another; `control-2` 14 vs 16). We used the sizes visible on the sample screens.
8. **Heading-4 vs heading-3 on screens**: Home greeting renders at ~40px, Account/Login titles at 32px. Both implemented from the same scale.
9. **Not implemented** (exist in Figma, absent from the sample screens): checkbox, radio, select, tabs, dialog, drawer, accordion, table, calendar, toast. Add when a prototype needs them.
10. **Sample data**: the Account screen reference contains personal-looking details; compositions use obviously fake placeholders. Don't paste real customer data into prototypes.

## Extending the system
1. Inspect the Figma node first (Figma MCP: `get_design_context`, `get_variable_defs`, `get_screenshot`).
2. New token → add to `@theme` in `src/styles/tokens.css` (raw palette, then a semantic alias if it carries meaning).
3. New component → `src/components/ui/<Name>.tsx`, variants as a `Record<Variant, string>` of Tailwind classes using semantic utilities only; export props typed; add every state to the showcase (`src/showcase/Showcase.tsx`).
4. New screen → compose existing components in `src/compositions/` and register in `src/App.tsx` (`screens` map) and `Compositions.tsx`.
5. Validate: `npm run build`, then screenshot `#/screen/<name>` at 390px and compare with the Figma render.
