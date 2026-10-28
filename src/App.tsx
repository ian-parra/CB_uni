import { useState } from 'react'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { QRGuide } from './components/QRGuide'
import { Team } from './components/Team'
import { useQR } from './hooks/useQR'
import { getDefaultURL, getPageURL } from './lib/qr'

const marqueeItems = [
  'Proyecto de grado',
  'Acceso por QR',
  'Código abierto',
  'Sin instalaciones',
  'Hosting gratuito',
]

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div
      aria-hidden="true"
      className="relative flex overflow-hidden border-y border-white/8 bg-surface/60 py-3"
    >
      <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="mono-label flex items-center gap-10 text-white/50">
            {item}
            <span className="size-1 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
      <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
        {items.map((item, index) => (
          <span key={`${item}-b-${index}`} className="mono-label flex items-center gap-10 text-white/50">
            {item}
            <span className="size-1 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [url, setURL] = useState(getDefaultURL)
  const { data, error } = useQR(url)

  function handleChangeURL(next: string) {
    setURL(next)
    if (next) localStorage.setItem('qr-target-url', next)
  }

  function handleResetURL() {
    localStorage.removeItem('qr-target-url')
    setURL(getPageURL())
  }

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Saltar al contenido
      </a>

      <Nav />

      <main id="contenido">
        <Hero data={data} url={url} error={error} />
        <Marquee />
        <Features />
        <QRGuide
          data={data}
          url={url}
          error={error}
          onChangeURL={handleChangeURL}
          onResetURL={handleResetURL}
        />
        <Team />
      </main>

      <Footer />
    </>
  )
}
