import { Bot, FileCode2, ListChecks } from 'lucide-react'
import { aiUse } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function UsoIA() {
  return (
    <section id="uso-ia" className="border-t border-white/8 py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle kicker={aiUse.kicker} title={aiUse.title} description={aiUse.intro} />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {aiUse.sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.08}>
              <article className="card flex h-full flex-col p-6">
                <div className="flex items-center gap-2">
                  {index === 0 ? (
                    <FileCode2 aria-hidden="true" className="size-4 text-violet" />
                  ) : (
                    <Bot aria-hidden="true" className="size-4 text-violet" />
                  )}
                  <h3 className="font-display text-base font-semibold text-white">
                    {section.title}
                  </h3>
                </div>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-white/10 bg-surface p-5 sm:p-7">
            <h3 className="mono-label flex items-center gap-2 text-violet">
              <ListChecks aria-hidden="true" className="size-3.5" />
              {aiUse.logTitle}
            </h3>

            <ol className="mt-4 divide-y divide-white/8">
              {aiUse.log.map((item) => (
                <li
                  key={item.request}
                  className="flex flex-col gap-1 py-3 sm:flex-row sm:items-start sm:gap-6"
                >
                  <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-wider text-white/45 sm:w-48">
                    {item.scope}
                  </span>
                  <span className="text-sm leading-relaxed text-white/80">{item.request}</span>
                </li>
              ))}
            </ol>

            <p className="mt-4 border-t border-white/8 pt-4 text-xs leading-relaxed text-white/50">
              {aiUse.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
