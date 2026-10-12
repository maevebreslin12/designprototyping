import { PhoneFrame } from '@/components/layout/PhoneFrame'
import { HomeScreen } from '@/compositions/HomeScreen'
import { AccountScreen } from '@/compositions/AccountScreen'
import { LoginScreen } from '@/compositions/LoginScreen'

export function Compositions() {
  return (
    <main className="mx-auto max-w-[1400px] px-6 py-10">
      <h1 className="type-heading-4 m-0">Sample compositions</h1>
      <p className="type-body-2 mb-8 mt-2 max-w-[60ch] text-fg-muted-strong">
        Visual reference implementations of three key mobile screens (390px). Not functional prototypes; copy is placeholder.
      </p>
      <div className="flex flex-wrap items-start gap-10">
        <PhoneFrame label="Home — Fresh Trialist"><HomeScreen /></PhoneFrame>
        <PhoneFrame label="Account settings"><AccountScreen /></PhoneFrame>
        <PhoneFrame label="Login"><LoginScreen /></PhoneFrame>
      </div>
    </main>
  )
}
