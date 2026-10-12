import type { HTMLAttributes, ReactNode } from 'react'
import { CheckCircle2, Info, AlertCircle } from 'lucide-react'
import { cn } from '@/lib'

export type AlertVariant = 'reassurance' | 'success' | 'destructive'

// "reassurance" is taken directly from Figma (bg #e8f0f6, border/icon #45afe2).
// success / destructive tints are INFERRED from the Alert page + palette — see DESIGN_FOUNDATION.md → deviations.
const variants: Record<AlertVariant, { box: string; icon: ReactNode }> = {
  reassurance: { box: 'bg-reassurance-bg border-reassurance-border', icon: <Info className="text-blue" /> },
  success: { box: 'bg-green-light border-green', icon: <CheckCircle2 className="text-green-dark" /> },
  destructive: { box: 'bg-white border-destructive text-destructive-dark', icon: <AlertCircle className="text-destructive" /> },
}

export function Alert({ variant = 'reassurance', title, children, className, ...rest }:
  HTMLAttributes<HTMLDivElement> & { variant?: AlertVariant; title?: string }) {
  const v = variants[variant]
  return (
    <div role="alert" className={cn('flex gap-3 rounded-sm border p-3 type-body-2', v.box, className)} {...rest}>
      <span className="mt-0.5 size-5 shrink-0 [&>svg]:size-5" aria-hidden>{v.icon}</span>
      <div className="flex flex-col gap-1">
        {title && <p className="type-sub-4">{title}</p>}
        <p>{children}</p>
      </div>
    </div>
  )
}
