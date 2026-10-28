import { ArrowUpRight, Code2 } from 'lucide-react'
import { site, team } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function Team() {
  return (
    <section id="equipo" className="border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="Sobre el proyecto"
          title={
            <>
              Una propuesta de enseñanza,
              <br />
              hecha en la universidad.
            </>
          }
          description={`Diseñada para la ${site.space} de la ${site.university} (${site.year}), en el marco de ${site.course}. El contenido se apoya en fuentes públicas citadas al pie.`}
        />

        {team.length > 0 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={`${member.name}-${index}`} delay={index * 0.08}>
                <article className="card flex items-center gap-4 p-5">
                  <span
                    aria-hidden="true"
                    className="grid size-12 shrink-0 place-items-center rounded-full border border-violet/30 bg-violet/10 font-display text-sm font-semibold text-violet"
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
        ) : null}

        <Reveal className="mt-12">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-violet/25 bg-violet/5 p-7 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                El código y las fuentes son públicos.
              </h3>
              <p className="mt-1.5 max-w-md text-sm text-muted">
                El repositorio incluye el sitio completo. Si vas a citar este trabajo, revisá las
                fuentes originales que aparecen al pie de página.
              </p>
            </div>
            <a
              href={site.links.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-violet-soft"
            >
              <Code2 aria-hidden="true" className="size-4" />
              Ver repositorio
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
