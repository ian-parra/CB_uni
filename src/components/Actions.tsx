import { useRef, useState } from 'react'
import { actions } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function Actions() {
  const [active, setActive] = useState(0)
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([])
  const current = actions[active]

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const next =
      event.key === 'ArrowRight'
        ? (active + 1) % actions.length
        : (active - 1 + actions.length) % actions.length
    setActive(next)
    tabsRef.current[next]?.focus()
  }

  return (
    <section id="que-hacer" className="relative border-t border-white/8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="Qué hacer"
          title={
            <>
              Hay cosas concretas
              <br />
              que sí sirven.
            </>
          }
          description="No alcanza con “no mires”. Estos pasos están ordenados para que puedas actuar sin empeorar la situación y sin exponerte."
        />

        <Reveal className="mt-10">
          <div
            role="tablist"
            aria-label="Qué hacer según tu situación"
            className="flex flex-wrap gap-2"
          >
            {actions.map((action, index) => (
              <button
                key={action.id}
                ref={(node) => {
                  tabsRef.current[index] = node
                }}
                type="button"
                role="tab"
                id={`tab-${action.id}`}
                aria-selected={index === active}
                aria-controls={`panel-${action.id}`}
                tabIndex={index === active ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={handleKeyDown}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  index === active
                    ? 'bg-violet text-ink'
                    : 'border border-white/12 text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mt-8"
        >
          <div className="rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">{current.intro}</p>

            <ol className="mt-7 grid gap-5 sm:grid-cols-2">
              {current.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mono-label mt-0.5 shrink-0 text-mint">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
