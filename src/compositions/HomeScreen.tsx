import { Loader, ChefHat, Truck } from 'lucide-react'
import { Alert } from '@/components/ui/Alert'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, ItemTile } from '@/components/ui/Card'
import { Separator } from '@/components/ui/Separator'
import { Stepper } from '@/components/ui/Stepper'
import { TopNav } from '@/components/layout/Nav'

const steps = [
  { label: 'Order Pending', icon: <Loader /> },
  { label: 'Order Prepared', icon: <ChefHat /> },
  { label: 'On Its Way', icon: <Truck /> },
]

/** Reference composition of "Homepage – Fresh Trialists: Single cat". Visual only. */
export function HomeScreen() {
  return (
    <div className="bg-bg">
      <TopNav />
      <section className="bg-white px-4 pb-4 pt-4">
        <h1 className="type-heading-3 m-0 text-center">
          Welcome, <span className="text-fg-accent">[First Name]</span>
        </h1>
      </section>

      {/* Horizontal promo carousel */}
      <div className="flex gap-2 overflow-hidden bg-white px-1.5 pb-3">
        <div className="flex w-[300px] shrink-0 overflow-hidden rounded-xs border border-black bg-white">
          <div className="w-[135px] bg-sand-200" aria-hidden />
          <div className="flex flex-1 flex-col items-start gap-2 p-3">
            <p className="type-body-3 m-0"><strong className="font-bold text-[14px]">The science has spoken!</strong></p>
            <p className="type-body-3 m-0 border-t border-border-muted pt-1 text-fg-muted-strong">
              KatKin’s gentle preparing reduces heat compounds (AGEs).
            </p>
            <Button variant="tertiary" size="sm">Learn More</Button>
          </div>
        </div>
        <div className="w-[300px] shrink-0 rounded-xs border border-black bg-white" aria-hidden />
      </div>
      <div className="h-px bg-black" />

      <div className="flex flex-col gap-3 px-4 py-6">
        <h2 className="type-sub-1 m-0">Your next delivery</h2>
        <Card className="flex flex-col">
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-1">
              <span className="type-eyebrow text-fg-muted-strong">Expected</span>
              <p className="type-sub-3 m-0">Saturday, June 24th.</p>
              <p className="type-body-2 m-0 text-fg-muted-strong">Frozen for freshness. Stays frozen if you’re out</p>
            </div>
            <Stepper steps={steps} current={0} />
            <Separator />

            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="type-sub-2 m-0 text-fg-accent">In your box</h3>
                <p className="type-body-2 m-0 text-fg-muted-strong">X days’ worth of food</p>
              </div>
              <Button variant="tertiary" size="sm">Edit plan</Button>
            </div>

            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-paper" aria-hidden />
              <div>
                <p className="type-sub-4 m-0">Splinky’s fresh food</p>
                <p className="type-body-2 m-0 text-fg-muted-strong">X meals, X kCal/day</p>
              </div>
            </div>

            <h3 className="type-sub-3 m-0 text-fg-accent">Recipes</h3>
            <div className="-mx-4 flex gap-2 overflow-hidden px-4">
              <ItemTile label="Cluck" count="x7" />
              <ItemTile label="Gobble" count="x4" className="bg-white" />
              <ItemTile label="Oink" count="x2" />
            </div>

            <h3 className="type-sub-3 m-0 text-fg-muted-strong">Extras</h3>
            <div className="flex gap-2">
              <ItemTile label="Sprinkles" count="x1" badge={<Badge variant="price">Free Gift</Badge>} />
            </div>

            <Alert>We text and email you before every delivery</Alert>
          </div>
        </Card>
      </div>
    </div>
  )
}
