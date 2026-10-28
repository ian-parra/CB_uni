import { useEffect, useState } from 'react'
import { Menu, Play, X } from 'lucide-react'
import { site } from '../content'

const links = [
  { href: '#propuesta', label: 'Propuesta' },
  { href: '#recorrido', label: 'Recorrido' },
  { href: '#juego', label: 'Juego' },
  { href: '#que-es', label: 'Guía' },
  { href: '#ayuda', label: 'Ayuda' },
  { href: '#qr', label: 'QR' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/8 bg-ink/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-violet text-sm font-bold text-ink">
            <span aria-hidden="true">◎</span>
            <span className="sr-only">{site.name}</span>
          </span>
          <span className="font-display text-[0.95rem] font-semibold tracking-tight text-white">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-white/65 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
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
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-white/75 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#juego"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-violet px-3 py-2.5 text-sm font-semibold text-ink"
              >
                <Play aria-hidden="true" className="size-4" />
                Jugar la experiencia
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
