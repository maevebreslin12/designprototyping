import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib'

export type ButtonVariant = 'default' | 'secondary' | 'tertiary' | 'destructive' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'default' | 'lg' | 'icon-sm' | 'icon' | 'icon-lg'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap type-control-2 cursor-pointer select-none ' +
  'transition-[box-shadow,opacity,background-color] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none ' +
  'focus-visible:outline-none'

// Variants — Figma: Button (Default=black, Secondary=brand, Tertiary=outline, Destructive, Ghost, Link)
const variants: Record<ButtonVariant, string> = {
  default:
    'bg-black text-fg-inverse shadow-md hover:shadow-lg active:shadow-inset-pressed focus-visible:ring-2 focus-visible:ring-focus',
  secondary:
    'bg-brand text-fg shadow-md hover:shadow-lg active:shadow-inset-pressed focus-visible:ring-2 focus-visible:ring-black',
  tertiary:
    'bg-white text-fg border-2 border-black hover:shadow-md active:shadow-inset-pressed focus-visible:border-focus',
  destructive:
    'bg-white text-destructive-dark border-2 border-destructive shadow-md hover:shadow-lg active:shadow-inset-pressed',
  ghost: 'bg-transparent text-fg hover:bg-black/5 active:bg-black/10',
  link: 'bg-transparent text-fg underline underline-offset-4 hover:no-underline',
}

// Sizes — pill for text buttons (radius full); icon buttons use radius-md (6px) per the screens.
const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 rounded-full',
  default: 'px-4 py-2 rounded-full',
  lg: 'px-6 py-2 rounded-full',
  'icon-sm': 'size-8 rounded-md',
  icon: 'size-9 rounded-md',
  'icon-lg': 'size-11 rounded-md',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
}

export function Button({
  variant = 'default', size = 'default', loading, leftIcon, rightIcon, fullWidth, className, children, disabled, ...rest
}: ButtonProps) {
  const isIcon = size.startsWith('icon')
  return (
    <button
      className={cn(base, variants[variant], variant !== 'link' && sizes[size], fullWidth && 'w-full', isIcon && 'p-0', className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <Loader2 className="size-4 animate-spin" aria-hidden /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  )
}
