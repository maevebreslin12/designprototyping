import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Field } from '@/components/ui/Field'
import { TopNav } from '@/components/layout/Nav'
import { SiteFooter } from '@/components/layout/SiteFooter'

/** Reference composition of "Login screen" (card with neo-brutal offset shadow + inverse footer). */
export function LoginScreen() {
  return (
    <div className="bg-bg">
      <TopNav />
      <div className="flex flex-col items-center gap-6 p-6">
        <Card brutal className="flex w-full max-w-[384px] flex-col gap-6 p-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="type-heading-4 m-0">Welcome back</h1>
            <p className="type-sub-3 m-0 text-fg-muted-strong">Log into your KatKin account</p>
          </div>
          <div className="flex flex-col gap-6">
            <Field label="Email" type="email" placeholder="you@example.com" />
            <Button variant="secondary" fullWidth disabled>Send login code</Button>
          </div>
          <p className="type-body-3 m-0 text-center underline">Or log in with your password</p>
        </Card>
        <p className="type-sub-3 m-0 text-center text-fg-muted-strong">
          Don’t have an account? <span className="underline">Join now</span>
        </p>
      </div>
      <SiteFooter />
    </div>
  )
}
