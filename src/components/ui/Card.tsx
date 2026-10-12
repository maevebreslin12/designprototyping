import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib'

/** Figma: "Content stack" — white, 1px black border, 2px radius, no soft shadow. */
export function Card({ className, brutal, ...rest }: HTMLAttributes<HTMLDivElement> & { brutal?: boolean }) {
  return (
    <div
      className={cn('overflow-hidden rounded-xs border border-black bg-surface', brutal && 'shadow-brutal', className)}
      {...rest}
    />
  )
}

/** Section header: elevated paper tint, bottom border, icon + subheading-2. */
export function CardHeader({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-black bg-surface-elevated px-4 py-2.5">
      {icon && <span className="size-6 shrink-0 [&>svg]:size-6" aria-hidden>{icon}</span>}
      <h3 className="type-sub-2 text-fg">{children}</h3>
    </div>
  )
}

export function CardBody({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4', className)} {...rest} />
}

/** Tile used for recipes / extras: media on top, bold label below, quantity chip overlaid on the media. */
export function ItemTile({ label, count, badge, media, className }: {
  label: string; count?: string; badge?: ReactNode; media?: ReactNode; className?: string
}) {
  return (
    <div className={cn('w-[122px] shrink-0 overflow-hidden rounded-sm border border-black bg-white', className)}>
      <div className="relative h-[92px] bg-sand-200">
        {media}
        {badge && <div className="absolute left-1 top-1">{badge}</div>}
        {count && <span className="absolute bottom-0 right-0 rounded-tl-sm bg-white px-2 py-0.5 type-control-3 text-fg">{count}</span>}
      </div>
      <p className="type-sub-4 m-0 px-2 py-2.5 text-fg">{label}</p>
    </div>
  )
}
