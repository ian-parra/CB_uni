import { KeyRound, ScrollText, Search, Target } from 'lucide-react'
import { hunt } from '../content'
import { Reveal, SectionTitle } from './Reveal'

const icons = [Search, Target, KeyRound, ScrollText]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative border-t border-white/8 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.1),transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          kicker={hunt.kicker}
          title={
            <>
              {hunt.title.before}
              <br />
              <span className="text-coral">{hunt.title.accent}</span>
            </>
          }
          description={hunt.intro}
        />

        {/* Objetivo: lo primero que hay que poder contar en el stand */}
        <Reveal delay={0.1} className="mt-8">
          <div className="rounded-2xl border border-violet/25 bg-violet/5 p-5 sm:p-6">
            <p className="mono-label flex items-center gap-2 text-violet">
              <Target aria-hidden="true" className="size-3.5" />
              {hunt.objective.label}
            </p>
            <p className="mt-2 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
              {hunt.objective.text}
            </p>
          </div>
        </Reveal>

        {/* Los cuatro pasos de la búsqueda */}
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {hunt.steps.map((item, index) => {
            const Icon = icons[index] ?? Search
            return (
              <Reveal as="li" key={item.step} delay={0.12 + index * 0.06}>
                <article className="card flex h-full flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs tracking-widest text-violet">{item.step}</span>
                    <Icon aria-hidden="true" className="size-4 shrink-0 text-white/35" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </Reveal>
            )
          })}
        </ol>

        {/* Qué es el código: la duda concreta de la profesora */}
        <Reveal delay={0.1} className="mt-4">
          <div className="rounded-2xl border border-white/10 bg-surface p-5 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <KeyRound aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-coral" />
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{hunt.code.title}</h3>
                <div className="mt-3 space-y-3">
                  {hunt.code.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="max-w-3xl text-sm leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <p className="mt-4 border-l-2 border-coral/40 pl-4 text-sm leading-relaxed text-white/80">
                  {hunt.code.note}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
