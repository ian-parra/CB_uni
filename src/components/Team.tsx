import { Code2, Globe } from 'lucide-react'
import { site, team } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function Team() {
  return (
    <section id="equipo" className="border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="Quiénes lo hicimos"
          title="El equipo"
          description={`Trabajo desarrollado para ${site.course}, ${site.university}, ${site.year}.`}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={`${member.name}-${index}`} delay={index * 0.08}>
              <article className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-surface p-5 transition-colors duration-300 hover:border-white/20">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent/10 font-display text-sm font-semibold text-accent"
                >
                  {member.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-white">{member.name}</h3>
                  <p className="truncate text-xs text-muted">{member.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-accent/20 bg-accent/5 p-7 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                ¿Quieres ver el código?
              </h3>
              <p className="mt-1.5 max-w-md text-sm text-muted">
                El repositorio es público: incluye documentación, memoria del proyecto y el
                historial de commits.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={site.links.repo}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-accent-soft"
              >
                <Code2 aria-hidden="true" className="size-4" />
                Repositorio
              </a>
              <a
                href={site.links.docs}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/5"
              >
                <Globe aria-hidden="true" className="size-4" />
                Memoria
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
