import { HelpCircle } from 'lucide-react'
import { questions } from '../content'
import { Reveal, SectionTitle } from './Reveal'

export function Preguntas() {
  return (
    <section id='preguntas' className='border-t border-white/8 py-24 sm:py-32'>
      <div className='mx-auto max-w-6xl px-6'>
        <SectionTitle
          kicker='Material de consulta'
          title={
            <span className='flex items-center gap-2'>
              <HelpCircle aria-hidden='true' className='size-5 text-violet' />
              Preguntas para el aula
            </span>
          }
          description='Usalas para abrir el debate antes de jugar, para reflexionar después de cada estación o como guía para una charla con familias y docentes.'
        />

        <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {questions.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.06}>
              <article className='card rounded-2xl border border-white/10 bg-surface p-6'>
                <p className='mono-label text-violet'>{category.title}</p>
                <ul className='mt-4 space-y-3 text-sm leading-relaxed text-muted'>
                  {category.questions.map((question) => (
                    <li key={question} className='flex gap-3'>
                      <span aria-hidden='true' className='mt-2 size-1 shrink-0 rounded-full bg-violet' />
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className='mt-10'>
          <p className='text-xs leading-relaxed text-white/50'>
            Las preguntas están organizadas por eje: comprensión, debate, soluciones y situaciones concretas. Elegí las que mejor se ajusten al nivel y al tiempo de tu clase.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
