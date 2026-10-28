import { Clock, GraduationCap, Layers, Target, Users } from 'lucide-react'
import type { ReactNode } from 'react'
import { proposal } from '../content'
import { Reveal, SectionTitle } from './Reveal'

function Field({
  label,
  children,
  className = '',
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`border-t border-white/8 pt-4 ${className}`}>
      <dt className="mono-label text-white/50">{label}</dt>
      <dd className="mt-2 text-sm leading-relaxed text-white/80">{children}</dd>
    </div>
  )
}

export function Ficha() {
  return (
    <section id="propuesta" className="relative border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="La propuesta"
          title={
            <>
              Un caso, cinco estaciones
              <br />y un pacto que se escribe entre todos.
            </>
          }
          description="La experiencia está diseñada para que el conocimiento circule: cada estación devuelve una pista, cada grupo aporta una parte y el curso entero arma la respuesta. El cierre no es una definición, es un acuerdo."
        />

        <Reveal className="mt-12">
          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-violet px-3 py-1 text-xs font-semibold text-ink">
                {proposal.title}
              </span>
              <span className="text-sm text-white/70">{proposal.subtitle}</span>
            </div>

            <dl className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              <Field label="Destinatarios">
                <span className="inline-flex items-start gap-2">
                  <Users aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-violet" />
                  {proposal.destinatarios}
                </span>
              </Field>
              <Field label="Espacio curricular">
                <span className="inline-flex items-start gap-2">
                  <GraduationCap aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-violet" />
                  {proposal.espacio}
                </span>
              </Field>
              <Field label="Duración y agrupamiento">
                <span className="inline-flex items-start gap-2">
                  <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-violet" />
                  {proposal.duracion} · {proposal.agrupamiento}
                </span>
              </Field>
              <Field label="Contenido a enseñar" className="sm:col-span-2">
                <span className="inline-flex items-start gap-2">
                  <Layers aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-violet" />
                  {proposal.contenido}
                </span>
              </Field>
              <Field label="Contexto de realización">{proposal.contexto}</Field>
            </dl>

            <div className="mt-8 grid gap-5 rounded-xl border border-violet/25 bg-violet/5 p-5 sm:p-6 lg:grid-cols-2">
              <div>
                <p className="mono-label flex items-center gap-2 text-violet">
                  <Target aria-hidden="true" className="size-3.5" />
                  Objetivo del juego
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{proposal.objetivo}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:border-l lg:border-white/10 lg:pl-6">
                <div>
                  <p className="mono-label text-white/50">Rol docente</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{proposal.rolDocente}</p>
                </div>
                <div>
                  <p className="mono-label text-white/50">Rol de estudiantes</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {proposal.rolEstudiantes}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mono-label border-t border-white/8 pt-4 text-white/50">Recursos</p>
                <ul className="mt-3 space-y-1.5">
                  {proposal.recursos.map((recurso) => (
                    <li key={recurso} className="flex gap-2 text-sm text-white/75">
                      <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-violet" />
                      {recurso}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                {proposal.integrantes.length > 0 ? (
                  <div>
                    <p className="mono-label text-white/50">Integrantes</p>
                    <p className="mt-2 text-sm text-white/75">{proposal.integrantes.join(' · ')}</p>
                  </div>
                ) : null}

                {proposal.profesorado ? (
                  <div>
                    <p className="mono-label text-white/50">Profesorado</p>
                    <p className="mt-2 text-sm text-white/75">{proposal.profesorado}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
