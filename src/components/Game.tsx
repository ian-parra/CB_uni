import { Link } from 'react-router-dom'
import { Check, Lock, RotateCcw, Sparkles, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { finalCode, stations } from '../content'
import { Reveal, SectionTitle } from './Reveal'

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function Game() {
  const [step, setStep] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [wrong, setWrong] = useState<number | null>(null)
  const [solved, setSolved] = useState<string[]>([])
  const [finished, setFinished] = useState(false)
  const [code, setCode] = useState('')
  const [codeError, setCodeError] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const station = stations[step]
  const answered = choice !== null && station.options[choice].correct
  const isLast = step === stations.length - 1

  // Permite que cada QR abra directamente su estación: #estacion-3
  useEffect(() => {
    function syncFromHash() {
      const match = /^#estacion-(\d+)$/.exec(window.location.hash)
      if (!match) return
      const target = Number(match[1])
      if (target < 1 || target > stations.length) return
      setStep(target - 1)
      setChoice(null)
      setWrong(null)
      document.getElementById('juego')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  function pick(index: number) {
    if (answered) return
    setChoice(index)
    if (station.options[index].correct) {
      setWrong(null)
      setSolved((prev) => (prev.includes(station.word) ? prev : [...prev, station.word]))
    } else {
      setWrong(index)
    }
  }

  function next() {
    if (isLast) {
      setFinished(true)
      return
    }
    const nextStep = step + 1
    setStep(nextStep)
    setChoice(null)
    setWrong(null)
    window.history.replaceState(null, '', `#estacion-${nextStep + 1}`)
  }

  function reset() {
    setStep(0)
    setChoice(null)
    setWrong(null)
    setSolved([])
    setFinished(false)
    setCode('')
    setCodeError(false)
    setUnlocked(false)
    window.history.replaceState(null, '', '#juego')
  }

  function checkCode(event: FormEvent) {
    event.preventDefault()
    if (normalize(code) === normalize(finalCode)) {
      setUnlocked(true)
      setCodeError(false)
      return
    }
    setCodeError(true)
  }

  return (
    <section id="juego" className="relative border-t border-white/8 py-16 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.12),transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <SectionTitle
              kicker="La experiencia"
              title={
                <>
                  Cinco estaciones.
                  <br />
                  Una cadena que se corta.
                </>
              }
              description="En la feria, cada estación se abre con su propio QR. Acá podés recorrerlas en orden: al resolver cada desafío se desbloquea una palabra y, al final, el código que abre el sobre."
            />

            <Reveal delay={0.1} className="mt-6 sm:mt-8">
              <div className="rounded-2xl border border-white/8 bg-surface p-5">
                <p className="mono-label text-white/50">Palabras desbloqueadas</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {stations.map((item, index) => {
                    const open = solved.includes(item.word)
                    return (
                      <li
                        key={item.word}
                        className={`rounded-lg border px-2.5 py-1.5 font-mono text-[0.7rem] tracking-wider transition-colors duration-300 ${
                          open
                            ? 'border-violet/40 bg-violet/15 text-violet-soft'
                            : 'border-white/10 text-white/30'
                        }`}
                      >
                        {open ? item.word : `···${index + 1}`}
                      </li>
                    )
                  })}
                </ul>
                <p className="mt-3 text-xs leading-relaxed text-white/55" aria-live="polite">
                  {solved.length === 0
                    ? 'Todavía no hay palabras. Empezá por la estación 1.'
                    : `${solved.length} de ${stations.length} palabras encontradas.`}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-4">
              <p className="text-xs leading-relaxed text-white/45">
                ¿Sos docente y querés llevarlo al aula? La ficha completa, la secuencia y los
                criterios están en{' '}
                <Link
                  to="/propuesta"
                  className="text-violet underline underline-offset-4 hover:text-violet-soft"
                >
                  la propuesta
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div
              id={`estacion-${station.n}`}
              className="rounded-2xl border border-white/10 bg-surface p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] sm:p-8"
            >
              {!finished ? (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <p className="mono-label text-violet">
                      Estación {station.n} de {stations.length}
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-1.5 text-xs text-white/50 transition-colors duration-200 hover:text-white"
                    >
                      <RotateCcw aria-hidden="true" className="size-3.5" />
                      Reiniciar
                    </button>
                  </div>

                  <div
                    aria-hidden="true"
                    className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10"
                  >
                    <div
                      className="h-full rounded-full bg-violet transition-[width] duration-500"
                      style={{ width: `${(solved.length / stations.length) * 100}%` }}
                    />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-white sm:mt-6 sm:text-2xl">
                    {station.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{station.mission}</p>

                  <p className="mt-6 border-l-2 border-violet/40 pl-4 font-display text-base text-white">
                    {station.question}
                  </p>

                  <div role="group" aria-label="Opciones" className="mt-6 space-y-2">
                    {station.options.map((option, index) => {
                      const isWrong = wrong === index
                      const showCorrect = answered && option.correct

                      return (
                        <button
                          key={option.text}
                          type="button"
                          onClick={() => pick(index)}
                          disabled={answered || isWrong}
                          className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-colors duration-200 sm:py-3 ${
                            showCorrect
                              ? 'border-mint/50 bg-mint/10 text-white'
                              : isWrong
                                ? 'border-coral/50 bg-coral/10 text-white/70'
                                : 'border-white/10 text-white/75 hover:border-white/25 hover:text-white'
                          }`}
                        >
                          <span aria-hidden="true" className="mt-0.5 shrink-0">
                            {showCorrect ? (
                              <Check className="size-4 text-mint" />
                            ) : isWrong ? (
                              <X className="size-4 text-coral" />
                            ) : (
                              <span className="block size-4 rounded-full border border-white/25" />
                            )}
                          </span>
                          {option.text}
                        </button>
                      )
                    })}
                  </div>

                  <div aria-live="polite" className="min-h-[4.5rem]">
                    {answered ? (
                      <div className="mt-5 rounded-xl border border-mint/25 bg-mint/8 p-4">
                        <p className="flex items-center gap-2 text-xs font-semibold text-mint">
                          <Sparkles aria-hidden="true" className="size-3.5" />
                          Palabra desbloqueada: {station.word}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/80">
                          {station.feedback}
                        </p>
                      </div>
                    ) : wrong !== null ? (
                      <p className="mt-5 rounded-xl border border-coral/25 bg-coral/8 p-4 text-sm leading-relaxed text-white/80">
                        <span className="font-semibold text-coral-soft">Todavía no. </span>
                        {station.hint}
                      </p>
                    ) : null}
                  </div>

                  {answered ? (
                    <button
                      type="button"
                      onClick={next}
                      className="mt-1 inline-flex items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-violet-soft"
                    >
                      {isLast ? 'Abrir el sobre' : 'Siguiente estación'}
                    </button>
                  ) : null}
                </>
              ) : (
                <div>
                  <p className="mono-label text-violet">Cierre</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                    El sobre está cerrado con una frase.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Con las cinco palabras que desbloqueaste, escribí la frase que abre el pacto.
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {stations.map((item) => (
                      <li
                        key={item.word}
                        className="rounded-lg border border-violet/30 bg-violet/10 px-2.5 py-1.5 font-mono text-[0.7rem] tracking-wider text-violet-soft"
                      >
                        {item.word}
                      </li>
                    ))}
                  </ul>

                  {!unlocked ? (
                    <form onSubmit={checkCode} className="mt-6">
                      <label htmlFor="codigo" className="mono-label block text-white/50">
                        Frase del sobre
                      </label>
                      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                        <input
                          id="codigo"
                          name="codigo"
                          value={code}
                          onChange={(event) => {
                            setCode(event.target.value)
                            setCodeError(false)
                          }}
                          placeholder="Escribí las cinco palabras en orden"
                          autoComplete="off"
                          aria-invalid={codeError}
                          aria-describedby="codigo-error"
                          className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-base text-white placeholder:text-white/40 hover:border-white/20 focus:border-violet/60"
                        />
                        <button
                          type="submit"
                          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-violet px-5 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-violet-soft"
                        >
                          <Lock aria-hidden="true" className="size-4" />
                          Abrir
                        </button>
                      </div>
                      <p id="codigo-error" aria-live="polite" className="mt-2 text-xs text-coral-soft">
                        {codeError ? 'Esa no es la frase. Revisá el orden de las palabras.' : ''}
                      </p>
                    </form>
                  ) : (
                    <div className="mt-6 rounded-xl border border-mint/30 bg-mint/10 p-5">
                      <p className="flex items-center gap-2 font-display text-base font-semibold text-mint">
                        <Check aria-hidden="true" className="size-4" />
                        Código correcto
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/85">
                        El pacto dice: <strong className="text-white">cortar la cadena es cuidar</strong>.
                        Escriban en el afiche tres acuerdos que el curso pueda sostener.
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-white/75">
                        <li>1. No reenviamos contenido que humilla a alguien.</li>
                        <li>2. Si vemos violencia digital, avisamos y acompañamos.</li>
                        <li>3. Revisamos el acuerdo de convivencia todos los años.</li>
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-violet/60 hover:text-violet"
                    >
                      <RotateCcw aria-hidden="true" className="size-4" />
                      Volver a jugar
                    </button>
                    <a
                      href="#ayuda"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-coral-soft transition-colors duration-200 hover:text-coral"
                    >
                      Necesito ayuda
                    </a>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
