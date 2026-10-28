import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Play, X } from 'lucide-react'
import { site } from '../content'

function linkClass(active: boolean) {
  return active
    ? 'rounded-lg px-3 py-2 text-sm bg-violet text-ink'
    : 'rounded-lg px-3 py-2 text-sm text-white/65 hover:text-white'
}

const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_0_8px_rgba(167,139,250,0.6)]"
  >
    <circle cx="16" cy="16" r="14" stroke="url(#grad)" strokeWidth="3" />
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="100%" stopColor="#fb7185" />
      </linearGradient>
    </defs>
    <path
      d="M 6 6 L 26 26 M 26 6 L 6 26"
      stroke="url(#grad)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="16" cy="16" r="2" fill="#ffffff" />
  </svg>
)

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Vuelve al inicio al cambiar de ruta
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const goHome = () => {
    navigate('/')
    window.scrollTo(0, 0)
  }

  const propuestaActive = location.pathname.startsWith('/propuesta')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/8 bg-ink/90 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          onClick={goHome}
          className="flex items-center gap-2.5 bg-transparent hover:bg-transparent active:opacity-80"
        >
          <Logo />
          <span className="font-display text-[0.95rem] font-semibold tracking-tight text-white">
            {site.name}
          </span>
        </button>

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
          </ul>
        </div>
      ) : null}
    </header>
  )
}
