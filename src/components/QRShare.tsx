import { Check, Copy, Download, Link2, MessageCircle, RotateCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { stations } from '../content'
import { download, getPageURL, isLocalPreview, svgDataURL, type QRCodeData } from '../lib/qr'
import { Reveal, SectionTitle } from './Reveal'

type QRShareProps = {
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

export function QRShare({ data, url, error, onChangeURL, onResetURL }: QRShareProps) {
  const [copied, setCopied] = useState(false)
  const valid = isValidURL(url)
  const local = isLocalPreview()
  const base = getPageURL()

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
        className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.14),transparent_65%)] blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <SectionTitle
              kicker="Kit de estaciones"
              title={
                <>
                  Un QR por estación,
                  <br />
                  listo para imprimir.
                </>
              }
              description="Elegí el destino y descargá el código. La portada abre esta página; cada estación abre su desafío. En la feria se imprimen, se pegan en el aula y se recorren en grupo."
            />

            <Reveal className="mt-8">
              <div className="rounded-2xl border border-white/8 bg-surface p-5">
                <div role="group" aria-label="Destino del código QR">
                  <p className="mono-label text-white/55">Destino</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      aria-pressed={url === base}
                      onClick={() => onChangeURL(base)}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                        url === base
                          ? 'border-violet bg-violet text-ink'
                          : 'border-white/12 text-white/70 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      Portada
                    </button>
                    {stations.map((station) => {
                      const target = `${base}#estacion-${station.n}`
                      const active = url === target
                      return (
                        <button
                          key={station.n}
                          type="button"
                          aria-pressed={active}
                          onClick={() => onChangeURL(target)}
                          className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                            active
                              ? 'border-violet bg-violet text-ink'
                              : 'border-white/12 text-white/70 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          Estación {station.n}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <label htmlFor="qr-url" className="mono-label mt-5 block border-t border-white/8 pt-5 text-white/55">
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
                      placeholder="https://ciberbullying-unahur.pages.dev"
                      value={url}
                      onChange={(event) => onChangeURL(event.target.value)}
                      aria-invalid={!valid}
                      aria-describedby="qr-url-hint"
                      className="w-full rounded-xl border border-white/10 bg-ink py-3 pl-10 pr-3 font-mono text-base text-white placeholder:text-white/50 hover:border-white/20 focus:border-violet/60 sm:text-xs"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={copyLink}
                    aria-label="Copiar enlace"
                    className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 text-white/70 transition-colors duration-200 hover:border-violet/50 hover:text-violet"
                  >
                    {copied ? (
                      <Check aria-hidden="true" className="size-4 text-mint" />
                    ) : (
                      <Copy aria-hidden="true" className="size-4" />
                    )}
                  </button>
                </div>
                <p id="qr-url-hint" className="mt-2.5 text-xs text-white/55" aria-live="polite">
                  {!valid
                    ? 'Escribí una URL completa, por ejemplo https://ciberbullying-unahur.pages.dev'
                    : copied
                      ? 'Enlace copiado al portapapeles.'
                      : local
                        ? 'Estás en local: para que funcione en el celular, pegá acá la URL publicada.'
                        : 'Se completa sola con la dirección de esta página; podés cambiarla.'}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={onResetURL}
                    className="inline-flex items-center gap-1.5 text-xs text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    <RotateCcw aria-hidden="true" className="size-3.5" />
                    Usar la URL de esta página
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Guía sobre ciberbullying: ${url}`)}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs text-white/55 transition-colors duration-200 hover:text-mint"
                  >
                    <MessageCircle aria-hidden="true" className="size-3.5" />
                    Compartir por WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-6">
              <p className="text-xs leading-relaxed text-white/55">
                Impresión: mínimo 4&nbsp;cm de lado, fondo blanco y buen contraste. El SVG escala sin
                pixelarse; el PNG viene a 1024&nbsp;px. Probá cada QR con el celular antes de pegarlo.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="glass rounded-[26px] p-6">
              <div className="mx-auto max-w-[17rem] rounded-2xl bg-white p-4">
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

              <p className="mt-4 truncate text-center font-mono text-xs text-white/55">{url}</p>

              <div className="mt-5 grid gap-2">
                <button
                  type="button"
                  onClick={() => data && download(data.png, 'qr-ciberbullying.png')}
                  disabled={!data || !valid}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet px-4 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-violet-soft disabled:opacity-40"
                >
                  <Download aria-hidden="true" className="size-4" />
                  Descargar PNG
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!data) return
                    const blob = new Blob([data.svg], { type: 'image/svg+xml' })
                    download(URL.createObjectURL(blob), 'qr-ciberbullying.svg')
                  }}
                  disabled={!data || !valid}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-violet/60 hover:text-violet disabled:opacity-40"
                >
                  <Download aria-hidden="true" className="size-4" />
                  Descargar SVG
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
