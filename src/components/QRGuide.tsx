import { Check, Copy, Download, Link2, RotateCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { steps } from '../content'
import { download, isLocalPreview, svgDataURL, type QRCodeData } from '../lib/qr'
import { Reveal, SectionTitle } from './Reveal'

type QRGuideProps = {
  data: QRCodeData | null
  url: string
  error: boolean
  onChangeURL: (next: string) => void
  onResetURL: () => void
}

function isValidURL(value: string) {
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:'
  } catch {
    return false
  }
}

export function QRGuide({ data, url, error, onChangeURL, onResetURL }: QRGuideProps) {
  const [copied, setCopied] = useState(false)
  const valid = isValidURL(url)
  const local = isLocalPreview()

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="qr" className="relative overflow-hidden border-t border-white/8 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,255,62,0.1),transparent_65%)] blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="Acceso con QR"
          title={
            <>
              Un código.
              <br />
              Cero instalaciones.
            </>
          }
          description="El QR apunta a la URL publicada del proyecto. Descárgalo y colócalo en el póster, la presentación o el tríptico: cualquiera puede abrir la web con la cámara del móvil."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="space-y-8">
            <ol className="space-y-6">
              {steps.map((step) => (
                <li key={step.number}>
                  <Reveal delay={Number(step.number) * 0.05} className="flex gap-5">
                    <span className="mono-label mt-1 shrink-0 text-accent">{step.number}</span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal>
              <div className="rounded-2xl border border-white/8 bg-surface p-5">
                <label htmlFor="qr-url" className="mono-label block text-white/60">
                  URL que abrirá el QR
                </label>
                <div className="mt-3 flex gap-2">
                  <div className="relative flex-1">
                    <Link2
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/30"
                    />
                    <input
                      id="qr-url"
                      name="qr-url"
                      type="url"
                      inputMode="url"
                      autoComplete="off"
                      spellCheck={false}
                      placeholder="https://tu-proyecto.pages.dev"
                      value={url}
                      onChange={(event) => onChangeURL(event.target.value)}
                      aria-invalid={!valid}
                      aria-describedby="qr-url-hint"
                      className="w-full rounded-xl border border-white/10 bg-ink py-3 pl-10 pr-3 font-mono text-base text-white placeholder:text-white/50 hover:border-white/20 focus:border-accent/60 sm:text-xs"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={copyLink}
                    aria-label="Copiar enlace"
                    className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 text-white/70 transition-colors duration-200 hover:border-accent/50 hover:text-accent"
                  >
                    {copied ? (
                      <Check aria-hidden="true" className="size-4 text-accent" />
                    ) : (
                      <Copy aria-hidden="true" className="size-4" />
                    )}
                  </button>
                </div>
                <p id="qr-url-hint" className="mt-2.5 text-xs text-white/55" aria-live="polite">
                  {!valid
                    ? 'Escribe una URL completa, por ejemplo https://mi-proyecto.pages.dev'
                    : copied
                      ? 'Enlace copiado al portapapeles.'
                      : local
                        ? 'Estás en local: para que funcione en el móvil, pega aquí la URL publicada.'
                        : 'Se rellena sola con la dirección de esta página; puedes cambiarla.'}
                </p>
                <button
                  type="button"
                  onClick={onResetURL}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/60 transition-colors duration-200 hover:text-white"
                >
                  <RotateCcw aria-hidden="true" className="size-3.5" />
                  Usar la URL de esta página
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="glass rounded-[28px] p-6 sm:p-8">
              <div className="mx-auto max-w-[19rem] rounded-2xl bg-white p-4">
                {data ? (
                  <img
                    src={svgDataURL(data.svg)}
                    alt={`Código QR que abre ${url}`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full"
                  />
                ) : (
                  <p className="grid aspect-square place-items-center px-6 text-center text-sm text-neutral-600">
                    {error ? 'No se pudo generar el QR.' : 'Generando…'}
                  </p>
                )}
              </div>

              <p className="mt-5 truncate text-center font-mono text-xs text-white/60">{url}</p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => data && download(data.png, 'qr-proyecto.png')}
                  disabled={!data || !valid}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-accent-soft disabled:opacity-40"
                >
                  <Download aria-hidden="true" className="size-4" />
                  Descargar PNG
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!data) return
                    const blob = new Blob([data.svg], { type: 'image/svg+xml' })
                    download(URL.createObjectURL(blob), 'qr-proyecto.svg')
                  }}
                  disabled={!data || !valid}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-accent/60 hover:text-accent disabled:opacity-40"
                >
                  <Download aria-hidden="true" className="size-4" />
                  Descargar SVG
                </button>
              </div>

              <p className="mt-4 text-center text-xs leading-relaxed text-white/55">
                Consejo de impresión: mínimo 4&nbsp;cm de lado. El SVG escala sin pixelarse; el PNG
                ya viene a 1024&nbsp;px.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
