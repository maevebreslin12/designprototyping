import type { ReactNode } from 'react'
import { Gift, Menu, House, FileHeart, Cat, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Wordmark } from './Wordmark'
import { cn } from '@/lib'

/** Mobile top nav: 64px, white, gift (left) · logo (centre) · menu (right). Figma: NavigationMenu/TopNav */
export function TopNav() {
  return (
    <header className="flex h-16 items-center justify-between bg-surface px-4 shadow-xs">
      <Button variant="ghost" size="icon-lg" aria-label="Rewards"><Gift className="size-6" /></Button>
      <Wordmark />
      <Button variant="ghost" size="icon-lg" aria-label="Menu"><Menu className="size-6" /></Button>
    </header>
  )
}

export interface TabItem { id: string; label: string; icon: ReactNode }
export const defaultTabs: TabItem[] = [
  { id: 'home', label: 'Home', icon: <House /> },
  { id: 'plan', label: 'My plan', icon: <FileHeart /> },
  { id: 'cat', label: 'My cat', icon: <Cat /> },
  { id: 'community', label: 'Community', icon: <Users /> },
  { id: 'rewards', label: 'Rewards', icon: <Gift /> },
]

/** Bottom tab bar. Active = black label + brand-filled icon tile; inactive = graphite. Figma: NavigationMenu/Bottom */
export function BottomNav({ tabs = defaultTabs, active, onSelect }: {
  tabs?: TabItem[]; active: string; onSelect?: (id: string) => void
}) {
  return (
    <nav aria-label="Primary" className="flex items-end border-t border-border-muted bg-surface-subtle pb-2 shadow-md">
      {tabs.map((t) => {
        const on = t.id === active
        return (
          <button
            key={t.id}
            onClick={() => onSelect?.(t.id)}
            aria-current={on ? 'page' : undefined}
            className="flex flex-1 cursor-pointer flex-col items-center gap-1 rounded-full bg-transparent p-0 focus-visible:outline-2"
          >
            <span className={cn('flex size-11 items-center justify-center rounded-full [&>svg]:size-6', on ? '[&>svg]:fill-brand' : 'text-fg-muted-strong')}>
              {t.icon}
            </span>
            <span className={cn('type-control-2', on ? 'text-fg' : 'text-fg-muted-strong')}>{t.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
