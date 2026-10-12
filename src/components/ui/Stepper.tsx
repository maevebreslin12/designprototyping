import type { ReactNode } from 'react'
import { cn } from '@/lib'

export interface Step { label: string; icon: ReactNode }

/** Order-progress stepper: circular icon nodes (centred over wrapped labels) joined by a track. Figma: Stepper / Progress. */
export function Stepper({ steps, current }: { steps: Step[]; current: number }) {
  return (
    <ol className="relative m-0 flex list-none justify-between p-0">
      <span aria-hidden className="absolute left-8 right-8 top-[16px] h-2 bg-paper-75" />
      {steps.map((s, i) => (
        <li key={s.label} className="relative z-10 flex w-16 flex-col items-center gap-2">
          <span
            className={cn(
              'flex size-10 items-center justify-center rounded-full border-2 bg-white [&>svg]:size-5',
              i <= current ? 'border-black' : 'border-fg-muted text-fg-muted',
            )}
            aria-current={i === current ? 'step' : undefined}
          >{s.icon}</span>
          <span className={cn('type-body-4 text-center', i > current ? 'text-fg-muted' : 'text-fg')}>{s.label}</span>
        </li>
      ))}
    </ol>
  )
}
