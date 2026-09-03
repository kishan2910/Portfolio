import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../../../data/profile'
import { LinkButton } from '../../ui/Button'
import { RevealOnScroll } from '../../ui/RevealOnScroll'
import { SectionHeading } from '../../ui/SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Open to AI/MLOps engineering roles and interesting collaborations."
      />

      <RevealOnScroll className="glass p-7 sm:p-9">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-3">
            <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
              <Mail size={15} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-[var(--text-tertiary)]">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="block break-all text-sm font-medium hover:text-gradient"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
              <Phone size={15} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-[var(--text-tertiary)]">Phone</p>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-sm font-medium hover:text-gradient">
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
              <MapPin size={15} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-[var(--text-tertiary)]">Location</p>
              <p className="text-sm font-medium">{profile.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3 border-t border-[var(--glass-border)] pt-6">
          {profile.socials
            .filter((s) => s.href.startsWith('http'))
            .map((social) => (
              <LinkButton key={social.label} href={social.href} target="_blank" rel="noreferrer" variant="ghost">
                {social.label}
              </LinkButton>
            ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}
