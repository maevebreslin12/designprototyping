import { CircleUserRound, MapPin, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardBody, CardHeader } from '@/components/ui/Card'
import { Separator } from '@/components/ui/Separator'
import { BottomNav, TopNav } from '@/components/layout/Nav'

const edit = (label: string) => (
  <Button variant="tertiary" size="icon-sm" aria-label={label}><Pencil className="size-4" /></Button>
)

/** Reference composition of "Account • Mobile". Content is placeholder data, not real customer data. */
export function AccountScreen() {
  return (
    <div className="flex min-h-[844px] flex-col bg-bg">
      <TopNav />
      <main className="flex flex-1 flex-col gap-6 px-4 pb-8 pt-4">
        <h1 className="type-heading-4 m-0">Account settings</h1>

        <Card>
          <CardHeader icon={<CircleUserRound />}>Personal information</CardHeader>
          <CardBody className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <p className="type-sub-3 m-0">Alex Example</p>
              <p className="type-body-3 m-0 text-fg-muted-strong">alex@example.com</p>
              <p className="type-body-3 m-0 text-fg-muted-strong">01234 567 890</p>
            </div>
            {edit('Edit personal information')}
          </CardBody>
        </Card>

        <Card>
          <CardHeader icon={<MapPin />}>Delivery address</CardHeader>
          <CardBody className="flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <p className="type-sub-3 m-0 flex flex-col gap-1"><span>1 Example Street</span><span>Sampletown</span></p>
                <p className="type-body-3 m-0 flex gap-4 text-fg-muted-strong"><span>AB1 2CD</span><span>Exampleshire</span></p>
              </div>
              {edit('Edit delivery address')}
            </div>
            <Separator />
            <div className="flex flex-col gap-2 type-body-3 text-fg-muted-strong">
              <p className="m-0">Alex Example</p>
              <p className="m-0">01234 567 890</p>
            </div>
          </CardBody>
        </Card>

        <Button variant="destructive" size="lg" fullWidth>Cancel subscription</Button>
      </main>
      <BottomNav active="home" />
    </div>
  )
}
