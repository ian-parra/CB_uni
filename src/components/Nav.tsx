import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../content'

const links = [
  { href: '#proyecto', label: 'Proyecto' },
  { href: '#qr', label: 'QR' },
  { href: '#equipo', label: 'Equipo' },
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
        scrolled ? 'border-b border-white/8 bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-accent text-sm font-bold text-ink">
            {site.name.slice(0, 1)}
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-white">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-white/60 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.links.repo}
            className="ml-3 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:border-accent/60 hover:text-accent"
          >
            Ver repositorio
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="grid size-10 place-items-center rounded-lg text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div id="menu-movil" className="border-t border-white/8 bg-ink/95 px-6 py-4 md:hidden">
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
                href={site.links.repo}
                className="mt-2 block rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-semibold text-ink"
              >
                Ver repositorio
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
