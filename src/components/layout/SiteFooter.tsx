import { Mail, Camera, Play, ThumbsUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Field'
import { Wordmark } from './Wordmark'

const groups = [
  { title: 'Try Fresh', links: ['Start my Trial', 'Why Fresh', 'Refer a Friend', 'Reviews'] },
  { title: 'About KatKin', links: ['About Us', 'Our Products', 'Blog', 'Careers'] },
  { title: 'Articles', links: ['The secret lives of cats', 'Science behind fresh cat food', 'What’s wrong with cat food', 'Understanding fussy cats'] },
  { title: 'Help', links: ['My Account', 'FAQs', 'Contact Us', 'Breeders’ Club'] },
]

/** Inverse (#090c08) footer: newsletter signup, two-column link groups, socials, legal. Figma: footer-current-mobile */
export function SiteFooter() {
  return (
    <footer className="bg-ink-inverse text-fg-inverse">
      <div className="flex flex-col gap-4 px-3 pb-4 pt-8">
        <div className="flex flex-col gap-1">
          <p className="type-sub-3 text-brand">Join KatKin</p>
          <p className="type-sub-2 text-white">Sign up for hardcore news, cat education and exclusive offers.</p>
        </div>
        <Input placeholder="Email address" type="email" aria-label="Email address" />
        <Button variant="secondary" size="lg" className="self-start">Sign up</Button>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-2">
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="type-sub-2 px-2 py-3 text-white">{g.title}</h4>
              <ul className="m-0 list-none p-0">
                {g.links.map((l) => <li key={l} className="px-4 py-1 type-body-2 text-fg-subtle">{l}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 py-2 text-white [&>svg]:size-8">
          {/* Generic stand-ins for the brand social glyphs (lucide dropped brand icons); swap for the Figma illustrations */}
          <Mail /><ThumbsUp /><Camera /><Play />
        </div>
      </div>
      <div className="flex h-[147px] items-center justify-center overflow-hidden"><Wordmark inverse className="h-[140px] w-auto" /></div>
      <div className="px-3 pb-4 pt-8 type-body-2 text-fg-subtle">
        <p className="m-0 flex gap-6"><span>© KatKin 2026</span><span>Terms &amp; Conditions</span></p>
        <p className="m-0 mt-3 flex gap-6"><span>Privacy</span><span>Sitemap</span><span>Cookie Settings</span></p>
      </div>
    </footer>
  )
}
