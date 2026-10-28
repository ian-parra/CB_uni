import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Play, X } from 'lucide-react'
import { site } from '../content'

const GITHUB = 'https://github.com/ian-parra/CB_uni'

function linkClass(active: boolean) {
  return active
    ? 'rounded-lg px-3 py-2 text-sm bg-violet text-ink'
    : 'rounded-lg px-3 py-2 text-sm text-white/65 hover:text-white'
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const propuestaActive = location.pathname.startsWith('/propuesta')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/8 bg-ink/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-violet text-sm font-bold text-ink">
            <span aria-hidden="true">◎</span>
            <span className="sr-only">{site.name}</span>
          </span>
          <span className="font-display text-[0.95rem] font-semibold tracking-tight text-white">
            {site.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link to="/propuesta" className={linkClass(propuestaActive)}>
            Propuesta
          </Link>
          <a
            href="#juego"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-violet px-4 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-violet-soft"
          >
            <Play aria-hidden="true" className="size-3.5" />
            Jugar
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm text-white/75 transition-colors duration-200 hover:border-violet/60 hover:text-violet"
          >
            GitHub
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="grid size-10 place-items-center rounded-lg text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </nav>

      {open ? (
        <div id="menu-movil" className="border-t border-white/8 bg-ink/95 px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <Link to="/propuesta" onClick={() => setOpen(false)} className={linkClass(propuestaActive)}>
                Propuesta
              </Link>
            </li>
            <li>
              <a
                href="#juego"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-white/75 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                Jugar
              </a>
            </li>
            <li>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-2.5 text-sm text-white/75 transition-colors duration-200 hover:border-violet/60 hover:text-violet"
              >
                <span aria-hidden="true" className="size-4 shrink-0">↗</span>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
