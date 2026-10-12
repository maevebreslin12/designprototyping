import type { ReactNode } from 'react'

/** 390px-wide mobile viewport — the reference width for every sample screen. */
export function PhoneFrame({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <figure className="m-0 flex flex-col gap-2">
      {label && <figcaption className="type-body-3 text-fg-muted-strong">{label}</figcaption>}
      <div className="w-[390px] max-w-full overflow-hidden bg-bg ring-1 ring-black/10">{children}</div>
    </figure>
  )
}
