import { useState } from 'react'
import { Actions } from './components/Actions'
import { Definition } from './components/Definition'
import { Ficha } from './components/Ficha'
import { Footer } from './components/Footer'
import { Fundamentacion } from './components/Fundamentacion'
import { Game } from './components/Game'
import { Hero } from './components/Hero'
import { Laws } from './components/Laws'
import { Myths } from './components/Myths'
import { Nav } from './components/Nav'
import { QRShare } from './components/QRShare'
import { Recorrido } from './components/Recorrido'
import { Preguntas } from './components/Preguntas'
import { Resources } from './components/Resources'
import { Scenarios } from './components/Scenarios'
import { Signs } from './components/Signs'
import { Stats } from './components/Stats'
import { Types } from './components/Types'
import { useQR } from './hooks/useQR'
import { getDefaultURL, getPageURL } from './lib/qr'

/** Separador entre la propuesta y el material de consulta. */
function GuideIntro() {
  return (
    <section aria-labelledby="guia" className="border-y border-white/8 bg-surface/30 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mono-label text-violet">Material de consulta</p>
        <h2 id="guia" className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
          La guía que sostiene la experiencia
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Lo que sigue es el contenido que se trabaja en las estaciones, ampliado y con fuentes.
          Sirve para preparar la clase, para consultar después del juego y para compartir con
          familias y docentes.
        </p>
      </div>
    </section>
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-violet focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Saltar al contenido
      </a>

      <Nav />

      <main id="contenido">
        <Hero />
        <Stats />
        <Ficha />
        <Recorrido />
        <Game />
        <Fundamentacion />
        <GuideIntro />
        <Definition />
        <Types />
        <Scenarios />
        <Preguntas />
        <Signs />
        <Actions />
        <Resources />
        <Laws />
        <Myths />
        <QRShare
          data={data}
          url={url}
          error={error}
          onChangeURL={handleChangeURL}
          onResetURL={handleResetURL}
        />
      </main>

      <Footer />
    </>
  )
}
