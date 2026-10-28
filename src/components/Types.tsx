import {
  Flame,
  ImageOff,
  MessageSquareWarning,
  Search,
  ShieldAlert,
  UserMinus,
  UserX,
  type LucideIcon,
} from 'lucide-react'
import { types } from '../content'
import { Reveal, SectionTitle } from './Reveal'

const icons: Record<string, LucideIcon> = {
  hostigamiento: MessageSquareWarning,
  suplantacion: UserX,
  exclusion: UserMinus,
  imagenes: ImageOff,
  doxxing: Search,
  acoso: ShieldAlert,
  odio: Flame,
}

export function Types() {
  return (
    <section id="tipos" className="relative border-t border-white/8 py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          kicker="Cómo se manifiesta"
          title={
            <>
              No hay una sola forma
              <br />
              de acosar en internet.
            </>
          }
          description="El ciberbullying cambia de plataforma y de formato, pero la lógica es la misma: sostener el daño en el tiempo y frente a una audiencia."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((type, index) => {
            const Icon = icons[type.id] ?? MessageSquareWarning
            return (
              <Reveal key={type.title} delay={index * 0.05}>
                <article className="group card relative h-full overflow-hidden p-6 transition-colors duration-300 hover:border-violet/35">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-14 -top-14 size-36 rounded-full bg-violet/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <Icon aria-hidden="true" className="size-5 text-violet" />
                  <h3 className="mt-5 text-base font-semibold text-white">{type.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{type.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
