import type { HTMLAttributes } from 'react'
import { cn } from '@/lib'

export type BadgeVariant = 'price' | 'count' | 'brand' | 'outline'

const variants: Record<BadgeVariant, string> = {
  price: 'bg-pink text-fg border border-black',       // "Free Gift" — color/functional/bg/price
  count: 'bg-white text-fg border border-black',      // "x7" quantity chip on item cards
  brand: 'bg-brand text-fg border border-black',
  outline: 'bg-transparent text-fg border border-black',
}

export function Badge({ variant = 'price', className, ...rest }: HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn('inline-flex items-center rounded-full px-2 py-1 type-control-3', variants[variant], className)}
      {...rest}
    />
  )
}
