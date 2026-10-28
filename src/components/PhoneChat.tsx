import { motion, useReducedMotion } from 'motion/react'

/**
 * Ilustración editorial: dos teléfonos con mensajes que escalan.
 * Es SVG puro (sin imágenes externas), así que pesa poco y escala perfecto.
 */
export function PhoneChat({ className }: { className?: string }) {
  const reduce = useReducedMotion()

  const bubbles = [
    { text: '¿Viste lo que publicó?', align: 'left', tone: 'neutral' },
    { text: 'Todos lo están compartiendo', align: 'right', tone: 'neutral' },
    { text: 'Qué vergüenza da', align: 'left', tone: 'bad' },
    { text: 'Borra eso, por favor', align: 'right', tone: 'sad' },
  ] as const

  return (
    <div className={className}>
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-surface-2 to-ink p-5">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 size-56 rounded-full bg-violet/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-16 size-56 rounded-full bg-coral/15 blur-3xl"
        />

        <div className="relative flex h-full flex-col">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="grid size-9 place-items-center rounded-full bg-white/10 text-xs font-semibold text-white/70">
              <span aria-hidden="true">···</span>
            </div>
            <div className="h-2 w-24 rounded-full bg-white/15" aria-hidden="true" />
          </div>

          <div className="mt-4 flex-1 space-y-2.5">
            {bubbles.map((bubble, index) => (
              <motion.div
                key={bubble.text}
                initial={reduce ? false : { opacity: 0, y: 10, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15 * index }}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[0.78rem] leading-snug ${
                  bubble.align === 'right'
                    ? 'ml-auto rounded-br-md bg-violet/90 text-ink'
                    : 'rounded-bl-md bg-white/10 text-white/85'
                } ${bubble.tone === 'bad' ? 'bg-coral/20 text-coral-soft' : ''} ${
                  bubble.tone === 'sad' ? 'bg-white/5 text-white/60' : ''
                }`}
              >
                {bubble.text}
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
            <span className="text-xs text-white/60">Escribí un mensaje…</span>
            <span className="ml-auto size-1.5 rounded-full bg-coral" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
}
