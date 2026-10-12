/** PLACEHOLDER for the KatKin brush logo. The real SVG lives on the Figma asset host, which this
 *  environment cannot reach. Drop the exported logo into src/assets and swap this component's body. */
export function Wordmark({ className = '', inverse = false }: { className?: string; inverse?: boolean }) {
  return (
    <span
      aria-label="KatKin"
      className={`inline-block -rotate-3 font-heading [font-stretch:100%] text-[40px] font-bold italic leading-none tracking-tight ${inverse ? 'text-paper' : 'text-fg'} ${className}`}
    >
      KatKin
    </span>
  )
}
