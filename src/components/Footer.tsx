import { ArrowUpRight } from 'lucide-react'
import { site, sources } from '../content'

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div>
            <h2 className="mono-label text-violet">Aviso importante</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
              Esta guía es educativa y no reemplaza la atención psicológica, médica ni el
              asesoramiento legal. Si hay riesgo de vida o una agresión en curso, llamá al{' '}
              <a
                href="tel:911"
                className="font-semibold text-coral-soft underline underline-offset-4 hover:text-coral"
              >
                911
              </a>
              .
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Si lo estás viviendo, no tenés que resolverlo solo: la{' '}
              <a
                href="tel:137"
                className="font-semibold text-white underline underline-offset-4 hover:text-violet"
              >
                línea 137
              </a>{' '}
              atiende las 24 horas.
            </p>
          </div>

          <div id="fuentes">
            <h2 className="mono-label text-violet">Fuentes</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-start gap-1.5 text-xs leading-relaxed text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    <span>{source.label}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-0.5 size-3 shrink-0 text-white/30 transition-colors group-hover:text-violet"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {site.year} · {site.university}
          </p>
          <p className="text-xs text-white/55">
            Proyecto de extensión · Contenido educativo de acceso libre
          </p>
        </div>
      </div>
    </footer>
  )
}
