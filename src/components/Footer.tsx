import { site } from '../content'

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <p className="text-sm text-white/55">
          © {site.year} {site.name} · {site.university}
        </p>
        <p className="mono-label text-white/50">
          Sitio estático · 0&nbsp;€ de hosting
        </p>
      </div>
    </footer>
  )
}
