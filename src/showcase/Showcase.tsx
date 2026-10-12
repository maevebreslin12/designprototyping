import type { ReactNode } from 'react'
import { Cat, ChefHat, Loader, Truck, Plus, ArrowRight } from 'lucide-react'
import { Alert } from '@/components/ui/Alert'
import { Badge } from '@/components/ui/Badge'
import { Button, type ButtonVariant } from '@/components/ui/Button'
import { Card, CardBody, CardHeader, ItemTile } from '@/components/ui/Card'
import { Field, Input } from '@/components/ui/Field'
import { Separator } from '@/components/ui/Separator'
import { Stepper } from '@/components/ui/Stepper'
import { BottomNav, TopNav } from '@/components/layout/Nav'
import { PhoneFrame } from '@/components/layout/PhoneFrame'

const palette: Array<[string, string, string]> = [
  ['Primary', 'black', '#231F20'], ['Primary', 'white', '#FFFFFF'], ['Primary', 'brand', '#D5E709'], ['Primary', 'chartreuse-100', '#E7F170'],
  ['Neutral', 'paper (bg)', '#EEEFE4'], ['Neutral', 'paper-elevated', '#F6F7EE'], ['Neutral', 'paper-75', '#F8F8F4'], ['Neutral', 'surface-subtle', '#FCFCFA'],
  ['Neutral', 'sand-200', '#DCD5C1'], ['Neutral', 'grey-40', '#E2E2E2'], ['Neutral', 'outline-grey', '#C8C7C7'], ['Neutral', 'grey-dark', '#A3A1A1'],
  ['Neutral', 'grey-mid', '#888888'], ['Neutral', 'graphite', '#565353'], ['Neutral', 'charcoal', '#4B4748'], ['Neutral', 'input', '#F4F4F4'],
  ['Neutral', 'ink-inverse', '#090C08'],
  ['Functional', 'green', '#3EB16A'], ['Functional', 'green-dark', '#256C41'], ['Functional', 'green-light', '#ECF7F0'],
  ['Functional', 'blue', '#45AFE2'], ['Functional', 'blue-mid', '#B3DEF3'], ['Functional', 'blue-light', '#E8F0F6'],
  ['Functional', 'pink (price)', '#EA8BED'], ['Functional', 'destructive', '#F2542D'], ['Functional', 'destructive-dark', '#843118'],
]
const semantic: Array<[string, string]> = [
  ['bg', '#EEEFE4'], ['surface', '#FFFFFF'], ['surface-elevated', '#F6F7EE'], ['fg', '#231F20'], ['fg-muted-strong', '#565353'],
  ['fg-muted', '#888888'], ['fg-accent', '#256C41'], ['border-strong', '#000000'], ['border-muted', '#C8C7C7'], ['focus', '#D5E709'],
  ['reassurance-bg', '#E8F0F6'], ['reassurance-border', '#45AFE2'],
]
const type: Array<[string, string, string]> = [
  ['type-hero', '80 / 0.9', 'Fresh'], ['type-heading-2', '48 / 0.9', 'Heading two'], ['type-heading-3', '40 / 0.95', 'Heading three'],
  ['type-heading-4', '32 / 1.15', 'Account settings'], ['type-sub-1', '24 / 1', 'Your next delivery'], ['type-sub-2', '20 / 1', 'Personal information'],
  ['type-sub-3', '18 / 1', 'Saturday, June 24th.'], ['type-sub-4', '16 / 1', 'Splinky’s fresh food'],
  ['type-body-1', '18 / 1.2', 'Frozen for freshness. Stays frozen if you’re out'], ['type-body-2', '16 / 1.3', 'We text and email you before every delivery'],
  ['type-body-3', '14 / 1.3', 'Secondary detail text'], ['type-body-4', '12 / 1.3', 'Captions and counts'],
  ['type-control-2', '16 / 1', 'Button label'], ['type-control-3', '14 / 1', 'Compact control'], ['type-eyebrow', '14 / 1', 'Expected'],
]

function Section({ id, title, note, children }: { id: string; title: string; note?: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-black py-10">
      <h2 className="type-heading-4 m-0">{title}</h2>
      {note && <p className="type-body-2 mb-6 mt-2 max-w-[70ch] text-fg-muted-strong">{note}</p>}
      <div className={note ? '' : 'mt-6'}>{children}</div>
    </section>
  )
}
const Cap = ({ children }: { children: ReactNode }) => <p className="type-body-4 m-0 mb-2 text-fg-muted-strong">{children}</p>

const variants: ButtonVariant[] = ['default', 'secondary', 'tertiary', 'destructive', 'ghost', 'link']

export function Showcase() {
  return (
    <main className="mx-auto max-w-[1100px] px-6 pb-20">
      <header className="py-10">
        <p className="type-eyebrow m-0 text-fg-muted-strong">KatKin Product Design System 2026</p>
        <h1 className="type-heading-2 m-0 mt-2">Design foundation showcase</h1>
        <p className="type-body-1 mt-3 max-w-[60ch] text-fg-muted-strong">
          Coded tokens and components, rebuilt from the Figma design system. Compare against Figma to judge fidelity.
        </p>
      </header>

      <Section id="colour" title="Colour" note="Raw palette (top) and the semantic roles components should use (bottom).">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3">
          {palette.map(([g, n, hex]) => (
            <div key={n} className="overflow-hidden rounded-xs border border-black bg-white">
              <div className="h-14 border-b border-black" style={{ background: hex }} />
              <div className="p-2"><p className="type-control-3 m-0">{n}</p><p className="type-body-4 m-0 text-fg-muted-strong">{g} · {hex}</p></div>
            </div>
          ))}
        </div>
        <h3 className="type-sub-2 mb-3 mt-8">Semantic roles</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
          {semantic.map(([n, hex]) => (
            <div key={n} className="flex items-center gap-2">
              <span className="size-8 shrink-0 rounded-xs border border-black" style={{ background: hex }} />
              <div><p className="type-control-3 m-0">{n}</p><p className="type-body-4 m-0 text-fg-muted-strong">{hex}</p></div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="type" title="Typography" note="Mobile scale. Headings use the heading face (Greed in Figma) with −2% tracking; body uses the body face. Stand-in fonts are loaded — see DESIGN_FOUNDATION.md.">
        <div className="flex flex-col divide-y divide-border-muted rounded-xs border border-black bg-white">
          {type.map(([cls, spec, sample]) => (
            <div key={cls} className="grid grid-cols-[170px_1fr] items-baseline gap-4 px-4 py-3">
              <div><p className="type-control-3 m-0">{cls}</p><p className="type-body-4 m-0 text-fg-muted-strong">{spec}</p></div>
              <p className={`${cls} m-0 ${cls === 'type-hero' ? 'overflow-hidden' : ''}`}>{sample}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="layout" title="Spacing, radii, borders & shadows" note="4px base unit. Page gutter 16px; section rhythm 24px. Containers are flat: 1px black border, 2px radius.">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Cap>Spacing scale (Tailwind 4px steps used in Figma: 0, 1, 1.5, 2, 3, 4, 6)</Cap>
            <div className="flex items-end gap-3">
              {[1, 2, 3, 4, 6].map((n) => (
                <div key={n} className="text-center"><div className="bg-brand border border-black" style={{ width: n * 4, height: n * 4 }} /><p className="type-body-4 m-0 mt-1">{n * 4}</p></div>
              ))}
            </div>
          </div>
          <div>
            <Cap>Radii: xs 2 (cards) · sm 4 (inputs) · md 6 (icon buttons) · full (pills)</Cap>
            <div className="flex gap-3">
              {['rounded-xs', 'rounded-sm', 'rounded-md', 'rounded-full'].map((r) => <div key={r} className={`size-14 border border-black bg-white ${r}`} />)}
            </div>
          </div>
          <div className="md:col-span-2">
            <Cap>Shadows: xs · sm · md · lg · brutal (login card) · inset-pressed</Cap>
            <div className="flex flex-wrap gap-5">
              {['shadow-xs', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-brutal', 'shadow-inset-pressed'].map((s) => (
                <div key={s} className={`flex h-16 w-28 items-center justify-center rounded-xs border border-black bg-white type-body-4 ${s}`}>{s.replace('shadow-', '')}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="buttons" title="Buttons" note="Pills for text buttons, 6px-radius squares for icon buttons. States: default · hover · focus · pressed · loading · disabled (hover/focus/pressed are live — try them; forced states shown for reference).">
        <div className="flex flex-col gap-5">
          {variants.map((v) => (
            <div key={v} className="flex flex-wrap items-center gap-4">
              <span className="type-control-3 w-24 capitalize">{v}</span>
              <Button variant={v}>Default</Button>
              <Button variant={v} className={v === 'tertiary' ? 'border-brand' : v === 'default' ? 'ring-2 ring-brand' : 'ring-2 ring-black'}>Focus</Button>
              <Button variant={v} className="shadow-inset-pressed">Pressed</Button>
              <Button variant={v} loading>Loading</Button>
              <Button variant={v} disabled>Disabled</Button>
            </div>
          ))}
          <div className="flex flex-wrap items-center gap-4">
            <span className="type-control-3 w-24">Sizes</span>
            <Button size="sm">Small</Button><Button>Default</Button><Button size="lg">Large</Button>
            <Button size="icon-sm" variant="tertiary" aria-label="add"><Plus className="size-4" /></Button>
            <Button size="icon" variant="tertiary" aria-label="add"><Plus className="size-4" /></Button>
            <Button size="icon-lg" variant="tertiary" aria-label="add"><Plus className="size-5" /></Button>
            <Button leftIcon={<Plus className="size-4" />}>Left icon</Button>
            <Button variant="tertiary" rightIcon={<ArrowRight className="size-4" />}>Right icon</Button>
          </div>
        </div>
      </Section>

      <Section id="forms" title="Form controls" note="Input: #F4F4F4 fill, 1px black border, 4px radius. Focus thickens the border and turns the fill white. Checkbox, radio and select exist in Figma but are not used in the sample screens and are not yet implemented.">
        <div className="grid max-w-[640px] gap-6 md:grid-cols-2">
          <Field label="Default" placeholder="Placeholder" />
          <Field label="With description" placeholder="you@example.com" description="We’ll send a login code." />
          <Field label="Error" defaultValue="not-an-email" error="Enter a valid email address." />
          <Field label="Disabled" placeholder="Disabled" disabled />
          <div className="flex flex-col gap-2"><span className="type-control-2">Filled</span><Input defaultValue="amazingcatparent@example.com" /></div>
        </div>
      </Section>

      <Section id="nav" title="Navigation" note="Mobile top nav (64px) and bottom tab bar (active tab: brand-filled icon, black label).">
        <div className="flex flex-wrap items-start gap-8">
          <PhoneFrame label="TopNav"><TopNav /></PhoneFrame>
          <PhoneFrame label="BottomNav (active: My cat)"><BottomNav active="cat" /></PhoneFrame>
        </div>
      </Section>

      <Section id="cards" title="Cards & containers" note="Flat 1px black border, 2px radius. Optional neo-brutal offset shadow for focal cards (login).">
        <div className="grid gap-6 md:grid-cols-3">
          <Card><CardHeader icon={<Cat />}>Section card</CardHeader><CardBody><p className="type-sub-3 m-0">Card body</p><p className="type-body-3 m-0 mt-2 text-fg-muted-strong">Supporting detail, graphite.</p></CardBody></Card>
          <Card brutal><CardBody><p className="type-heading-4 m-0">Brutal</p><p className="type-body-3 m-0 mt-2 text-fg-muted-strong">shadow 1px 3px 0 #000</p></CardBody></Card>
          <div className="flex gap-2"><ItemTile label="Cluck" count="x7" /><ItemTile label="Sprinkles" count="x1" badge={<Badge>Free Gift</Badge>} /></div>
        </div>
      </Section>

      <Section id="feedback" title="Feedback & status" note="Reassurance alert is taken from Figma; success and destructive tints are inferred (see docs).">
        <div className="grid max-w-[640px] gap-4">
          <Alert title="Reassurance">We text and email you before every delivery.</Alert>
          <Alert variant="success" title="Success">Your changes have been saved.</Alert>
          <Alert variant="destructive" title="Something went wrong">Your request has expired. Please try again.</Alert>
          <div className="flex flex-wrap gap-3">
            <Badge variant="price">Free Gift</Badge><Badge variant="count">x7</Badge><Badge variant="brand">New</Badge><Badge variant="outline">Outline</Badge>
          </div>
          <div className="max-w-[360px]"><Stepper current={1} steps={[{ label: 'Order Pending', icon: <Loader /> }, { label: 'Order Prepared', icon: <ChefHat /> }, { label: 'On Its Way', icon: <Truck /> }]} /></div>
          <Separator />
        </div>
      </Section>
    </main>
  )
}
