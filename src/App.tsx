import { useEffect, useState } from 'react'
import { Showcase } from '@/showcase/Showcase'
import { Compositions } from '@/showcase/Compositions'
import { HomeScreen } from '@/compositions/HomeScreen'
import { AccountScreen } from '@/compositions/AccountScreen'
import { LoginScreen } from '@/compositions/LoginScreen'
import { cn } from '@/lib'

// Hash routing, no dependency: #/ showcase · #/compositions · #/screen/<home|account|login> (bare 390px frame, for screenshots)
const screens = { home: HomeScreen, account: AccountScreen, login: LoginScreen }

export function App() {
  const [hash, setHash] = useState(window.location.hash || '#/')
  useEffect(() => {
    const on = () => setHash(window.location.hash || '#/')
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const m = hash.match(/^#\/screen\/(\w+)/)
  if (m && m[1] in screens) {
    const Screen = screens[m[1] as keyof typeof screens]
    return <div className="mx-auto w-[390px]"><Screen /></div>
  }

  const tab = hash.startsWith('#/compositions') ? 'compositions' : 'showcase'
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-10 flex items-center gap-6 border-b border-black bg-white px-6 py-3">
        <span className="type-sub-2">Design Foundation</span>
        {(['showcase', 'compositions'] as const).map((t) => (
          <a key={t} href={t === 'showcase' ? '#/' : '#/compositions'}
            className={cn('type-control-2 capitalize text-fg no-underline', tab === t ? 'border-b-2 border-brand' : 'opacity-60')}>{t}</a>
        ))}
      </nav>
      {tab === 'showcase' ? <Showcase /> : <Compositions />}
    </div>
  )
}
