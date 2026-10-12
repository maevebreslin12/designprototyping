import type { InputHTMLAttributes, ReactNode } from 'react'
import { useId } from 'react'
import { cn } from '@/lib'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

// Figma: Input — bg #f4f4f4, 1px black border, radius 4, px12/py8, shadow-xs, placeholder #888
export function Input({ invalid, className, ...rest }: InputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn(
        'w-full rounded-sm border bg-input px-3 py-2 type-body-2 text-fg shadow-xs placeholder:text-fg-muted',
        'focus-visible:outline-none focus-visible:border-2 focus-visible:border-black focus-visible:bg-white',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        invalid ? 'border-destructive bg-white' : 'border-strong',
        className,
      )}
      {...rest}
    />
  )
}

export function Label({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return <label htmlFor={htmlFor} className="type-control-2 text-fg">{children}</label>
}

/** Label + control + optional description / error (Figma: Field, vertical orientation). */
export function Field({
  label, description, error, ...inputProps
}: InputProps & { label: string; description?: string; error?: string }) {
  const id = useId()
  return (
    <div className="flex w-full flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} invalid={!!error} aria-describedby={`${id}-hint`} {...inputProps} />
      {(error || description) && (
        <p id={`${id}-hint`} className={cn('type-body-3', error ? 'text-destructive-dark' : 'text-fg-muted-strong')}>
          {error ?? description}
        </p>
      )}
    </div>
  )
}
