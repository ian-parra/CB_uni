import { Hero } from '../components/Hero'
import { Stats } from '../components/Stats'
import { Game } from '../components/Game'
import { Preguntas } from '../components/Preguntas'
import { GuideIntro } from '../components/GuideIntro'
import { Definition } from '../components/Definition'
import { Types } from '../components/Types'
import { Scenarios } from '../components/Scenarios'
import { Signs } from '../components/Signs'
import { Actions } from '../components/Actions'
import { Resources } from '../components/Resources'
import { Laws } from '../components/Laws'
import { Myths } from '../components/Myths'
import { Footer } from '../components/Footer'

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Game />
      <Preguntas />
      <GuideIntro />
      <Definition />
      <Types />
      <Scenarios />
      <Signs />
      <Actions />
      <Resources />
      <Laws />
      <Myths />
      <Footer />
    </>
  )
}
