/**
 * Fuente única de textos del sitio.
 * Cada dato incluye su fuente para que el trabajo sea verificable.
 * Para cambiar el contenido, editá este archivo: los componentes solo leen de acá.
 */

export type Stat = {
  value: number
  suffix: string
  label: string
  source: string
}

export type BullyType = {
  id: string
  title: string
  description: string
}

export type Scenario = {
  tag: string
  title: string
  messages: { text: string; from: 'me' | 'other' }[]
  why: string
}

export type Sign = {
  title: string
  description: string
}

export type Step = {
  title: string
  description: string
}

export type ActionGroup = {
  id: string
  label: string
  intro: string
  steps: Step[]
}

export type Law = {
  number: string
  title: string
  description: string
}

export type Resource = {
  kind: string
  name: string
  contact?: string
  href: string
  description: string
  hours: string
}

export type Myth = {
  myth: string
  reality: string
}

export type QuizQuestion = {
  situation: string
  options: { text: string; correct: boolean }[]
  explanation: string
}

export type Member = {
  name: string
  role: string
  initials: string
}

export type Source = {
  label: string
  href: string
}

export const site = {
  name: 'Cortá el círculo',
  badge: 'Feria de Enseñanza Lúdica · UNAHUR · 10/11 · 13 h',
  headline: {
    lines: ['Cortá el'],
    accent: 'círculo.',
  },
  subtitle: 'Una búsqueda del tesoro para desarmar el ciberbullying.',
  description:
    'Cinco estaciones con códigos QR, un caso que se arma entre todos y un pacto de convivencia digital. Una experiencia de enseñanza lúdica para el secundario, con una guía abierta para seguir aprendiendo.',
  university: 'Universidad Nacional de Hurlingham',
  space: 'Feria de Enseñanza Lúdica',
  course: 'Diseño de la enseñanza',
  year: 2026,
  links: {
    repo: 'https://github.com/ian-parra/CB_uni',
  },
}

/**
 * Ficha de la propuesta: los datos que pide el stand de la feria.
 * Los campos vacíos no se muestran en pantalla.
 */
export const proposal = {
  title: 'Cortá el círculo',
  subtitle: 'Una búsqueda del tesoro para desarmar el ciberbullying',
  destinatarios: '3.º y 4.º año del nivel secundario (14 a 16 años)',
  espacio: 'Ciudadanía y participación · Taller de ESI',
  contenido:
    'Ciberbullying: qué es y qué no, roles, tipos, impacto, marco legal argentino y estrategias de intervención.',
  contexto:
    'El aula y el patio de la escuela. Las estaciones se distribuyen en el espacio y se recorren en grupos con un celular por grupo.',
  duracion: '80 minutos (dos módulos)',
  agrupamiento: 'Grupos de 4 o 5 estudiantes',
  objetivo:
    'Reconstruir la cadena de un caso de ciberbullying y producir un pacto de convivencia digital para el curso.',
  rolDocente:
    'Diseña y ambienta las estaciones, presenta el desafío y circula como mediador. No adelanta respuestas: pregunta, habilita la palabra y registra lo que aparece.',
  rolEstudiantes:
    'Recorren las estaciones, resuelven los desafíos, discuten en grupo, registran las palabras clave y redactan el pacto final.',
  recursos: [
    'Celulares con cámara (uno por grupo)',
    'Códigos QR impresos, uno por estación',
    'Afiche, marcadores y cinta',
    'Esta web como soporte de las pistas',
  ],
  evaluacion:
    'Observación del debate, registro de las palabras clave y el pacto producido por cada grupo.',
  integrantes: ['Oses Sol', 'Paola Solozano', 'Noelia Navarro', 'Ailen Barraza'],
  profesorado: 'Profesorado Universitario en Letras y Educación Física · Profesora: Bárbara Pánico · UNAHUR',
}

export type Stage = {
  moment: string
  title: string
  minutes: string
  description: string
  strategy: string
}

/** Secuencia de la experiencia, tal como se presenta en la feria. */
export const recorrido: Stage[] = [
  {
    moment: 'Apertura',
    title: 'El caso que aparece en el grupo',
    minutes: '10 min',
    description:
      'El curso encuentra un mensaje proyectado en el aula: “Miren lo que hizo”. A partir de ahí se presenta el desafío y se arman los grupos.',
    strategy: 'Narrativa y problema abierto: se entra por la situación, no por la definición.',
  },
  {
    moment: 'Estación 1',
    title: '¿Es o no es?',
    minutes: '12 min',
    description:
      'Cada grupo recibe cuatro situaciones y tiene que decidir cuál es ciberbullying y por qué. Se ponen en juego los criterios: repetición, intencionalidad, audiencia y desequilibrio de poder.',
    strategy: 'Estudio de casos y conceptualización a partir de la comparación.',
  },
  {
    moment: 'Estación 2',
    title: 'Los roles de la escena',
    minutes: '12 min',
    description:
      'Un mismo caso con cinco personajes: quien graba, quien reenvía, quien se ríe, quien mira y quien ayuda. El grupo tiene que ubicar responsabilidades sin simplificar.',
    strategy: 'Análisis de roles y debate con toma de posición.',
  },
  {
    moment: 'Estación 3',
    title: 'El costo real',
    minutes: '12 min',
    description:
      'Los grupos leen datos y testimonios sobre el impacto del ciberbullying y responden qué cambia cuando el acoso no tiene horario de salida.',
    strategy: 'Lectura e interpretación de datos y gráficos (UNICEF, OMS, UNESCO).',
  },
  {
    moment: 'Estación 4',
    title: 'Qué hacer, en qué orden',
    minutes: '12 min',
    description:
      'Hay seis acciones posibles —guardar pruebas, bloquear, contar, denunciar, responder, borrar— y hay que ordenarlas según el rol: víctima, testigo o adulto.',
    strategy: 'Resolución de problemas y toma de decisiones con justificación.',
  },
  {
    moment: 'Estación 5',
    title: 'El pacto',
    minutes: '15 min',
    description:
      'Cada grupo escribe tres acuerdos concretos para su curso, con una condición: tienen que poder cumplirse. Se comparan y se unifican en un afiche.',
    strategy: 'Producción original y escritura colaborativa con destinatario real.',
  },
  {
    moment: 'Cierre',
    title: 'La palabra que abre el sobre',
    minutes: '7 min',
    description:
      'Con las cinco palabras clave, el curso arma la frase final y abre el sobre con el pacto. Se cierra con una ronda de una palabra por persona.',
    strategy: 'Síntesis colectiva y metacognición sobre lo aprendido.',
  },
]

export type Station = {
  n: number
  title: string
  mission: string
  question: string
  options: { text: string; correct: boolean }[]
  feedback: string
  hint: string
  word: string
}

/** Las cinco estaciones jugables. Cada una revela una palabra del código final. */
export const stations: Station[] = [
  {
    n: 1,
    title: '¿Es o no es?',
    mission: 'Un mensaje aparece en el grupo de 4.º. Antes de opinar, hay que mirar los criterios.',
    question: '¿Cuál de estas situaciones es ciberbullying?',
    options: [
      {
        text: 'Dos compañeros discuten una vez por chat, se piden disculpas y sigue todo igual.',
        correct: false,
      },
      {
        text: 'Durante tres semanas circulan capturas burlonas de un compañero y cada vez se suman más personas.',
        correct: true,
      },
      {
        text: 'Una compañera publica una opinión política y alguien le responde una sola vez.',
        correct: false,
      },
    ],
    feedback:
      'Hay repetición, audiencia y desequilibrio: la persona no puede frenar la circulación. Eso lo convierte en ciberbullying.',
    hint: 'Buscá la situación en la que el daño se sostiene en el tiempo y hay otras personas mirando.',
    word: 'CORTAR',
  },
  {
    n: 2,
    title: 'Los roles de la escena',
    mission: 'En el grupo hay cinco personas. Ninguna es “solo una espectadora”.',
    question: '¿Quién puede cortar la cadena?',
    options: [
      { text: 'Solo quien recibe el acoso, pidiendo que paren.', correct: false },
      { text: 'Solo un docente, cuando se entera por un adulto.', correct: false },
      {
        text: 'Cualquiera que decide no reenviar, mostrar apoyo y avisar a un adulto.',
        correct: true,
      },
    ],
    feedback:
      'El testigo tiene poder real: no reenviar corta la circulación y un mensaje de apoyo cambia el clima del grupo.',
    hint: 'Pensá en la persona que recibe el contenido y decide qué hacer con él.',
    word: 'LA',
  },
  {
    n: 3,
    title: 'El costo real',
    mission: 'Un dato para mirar el problema a escala.',
    question:
      'En Argentina, 1 de cada 5 chicas y chicos de 9 a 17 años dijo haber sufrido ciberacoso en 2024. ¿Qué muestra ese dato?',
    options: [
      { text: 'Que es un problema de casos aislados y poco frecuentes.', correct: false },
      {
        text: 'Que le pasa a muchísimas personas: no es algo “raro” ni una vergüenza individual.',
        correct: true,
      },
      { text: 'Que solo afecta a quienes usan mucho el celular.', correct: false },
    ],
    feedback:
      'El 21% de UNICEF y UNESCO (Kids Online Argentina 2025) muestra que es un problema colectivo. Nombrarlo ayuda a salir del silencio.',
    hint: '1 de cada 5 es mucha gente: ¿qué implica para quien lo vive?',
    word: 'CADENA',
  },
  {
    n: 4,
    title: 'Qué hacer, en qué orden',
    mission: 'Seis acciones, un orden posible. Elegí la secuencia que más cuida a la persona.',
    question: 'Si te está pasando, ¿cuál es el orden más útil?',
    options: [
      {
        text: 'Responder para defenderse, borrar todo y después contarlo.',
        correct: false,
      },
      {
        text: 'Guardar pruebas, bloquear y reportar, contarle a alguien de confianza y denunciar si hay delito.',
        correct: true,
      },
      {
        text: 'Esperar a que se le pase, no decir nada y salir de las redes.',
        correct: false,
      },
    ],
    feedback:
      'Las pruebas permiten reportar y denunciar; contarlo activa el acompañamiento. El silencio protege a quien agrede.',
    hint: '¿Qué acción permite que después puedas demostrar lo que pasó?',
    word: 'ES',
  },
  {
    n: 5,
    title: 'El pacto',
    mission: 'Última estación: convertir lo aprendido en algo que el curso pueda sostener.',
    question: '¿Qué acción concreta sirve más para prevenir el ciberbullying en tu curso?',
    options: [
      { text: 'Prohibir los celulares en la escuela.', correct: false },
      {
        text: 'Acordar entre todos qué hacemos cuando vemos violencia digital: a quién avisamos y qué no reenviamos.',
        correct: true,
      },
      { text: 'Hacer una campaña con afiches una vez al año.', correct: false },
    ],
    feedback:
      'Un acuerdo colectivo, con acciones claras y sostenido en el tiempo, transforma la cultura del grupo. Eso es el pacto.',
    hint: 'Buscá la opción que implique un compromiso del grupo, no una medida aislada.',
    word: 'CUIDAR',
  },
]

export const finalCode = 'cortar la cadena es cuidar'

export type Principle = {
  author: string
  concept: string
  description: string
}

/** Ejes de la fundamentación pedagógica (versión breve para el stand). */
export const principles: Principle[] = [
  {
    author: 'Maggio (2023)',
    concept: 'Inclusión genuina',
    description:
      'La tecnología no está para motivar ni para decorar: entra al diseño porque agrega algo que sin ella no sería posible. El QR no es un adorno, es el soporte que distribuye las pistas y hace circular el caso entre grupos.',
  },
  {
    author: 'Libedinsky (2020)',
    concept: 'Repertorio de estrategias',
    description:
      'La experiencia combina estrategias con énfasis en el juego, en el análisis de datos y en la producción de un acuerdo. La variedad no es azar: cada momento de la secuencia pide una tarea distinta.',
  },
  {
    author: 'Lion (2020)',
    concept: 'Enseñar en contextos algorítmicos',
    description:
      'No alcanza con decir “no compartas”. El desafío es entender por qué circula el contenido, qué decide cada rol y cómo se construyen habilidades para habitar las plataformas de forma crítica.',
  },
]

export const stats: Stat[] = [
  {
    value: 21,
    suffix: '%',
    label:
      'de las chicas y chicos de 9 a 17 años de Argentina dijo haber sufrido ciberacoso durante 2024.',
    source: 'UNICEF y UNESCO, Kids Online Argentina 2025',
  },
  {
    value: 15,
    suffix: '%',
    label:
      'de los adolescentes de 11 a 15 años de Europa y Canadá sufrió ciberacoso: 1 de cada 6.',
    source: 'OMS Europa, estudio HBSC 2024',
  },
  {
    value: 32,
    suffix: '%',
    label:
      'de los estudiantes de 13 a 15 años sufrió acoso escolar al menos una vez en el último mes.',
    source: 'UNESCO, Behind the numbers (2019)',
  },
]

export const definition = {
  title: 'Es violencia, aunque no haya un golpe.',
  intro:
    'El ciberbullying es el acoso entre pares que ocurre a través de tecnologías: mensajes, redes sociales, grupos de chat o videojuegos. No es un hecho aislado ni una pelea común: se repite en el tiempo y busca dañar a alguien frente a otros.',
  quote:
    'El ciberbullying no termina cuando se apaga la pantalla. Sigue en el grupo, en el comentario que queda publicado y en la cabeza de quien lo recibe.',
  quoteSource: 'Definición de trabajo del proyecto, basada en UNESCO y UNICEF',
  criteria: [
    {
      title: 'Intencionalidad',
      description:
        'Hay una búsqueda de dañar, humillar o excluir. Que se haga “en joda” no cambia el efecto sobre la otra persona.',
    },
    {
      title: 'Repetición',
      description:
        'No es un comentario suelto: se sostiene en el tiempo, se replica en distintos espacios o se revive cada vez que alguien lo comparte.',
    },
    {
      title: 'Desequilibrio de poder',
      description:
        'Quien agrede tiene más herramientas: popularidad, información, cantidad de personas o el anonimato que da la pantalla.',
    },
    {
      title: 'Audiencia',
      description:
        'El daño se amplifica porque hay otros mirando, dando “me gusta” o compartiendo. La viralización es parte del acoso.',
    },
  ],
  notAJoke:
    'La intención de quien agrede no define el daño. Si una persona pide que paren, si se repite y si hay una diferencia de poder, es violencia. Y como toda violencia, requiere una respuesta de la institución y de los adultos, no solo de la persona que la sufre.',
}

export const types: BullyType[] = [
  {
    id: 'hostigamiento',
    title: 'Hostigamiento',
    description:
      'Mensajes ofensivos, burlas o amenazas repetidas por chat, comentarios, stories o juegos en línea.',
  },
  {
    id: 'suplantacion',
    title: 'Suplantación de identidad',
    description:
      'Alguien crea una cuenta falsa con tu nombre o tus fotos para hablar por vos y dañar tu imagen.',
  },
  {
    id: 'exclusion',
    title: 'Exclusión social',
    description:
      'Te sacan de los grupos, te dejan afuera de los planes o te ignoran a propósito en espacios digitales.',
  },
  {
    id: 'imagenes',
    title: 'Difusión de imágenes',
    description:
      'Comparten fotos o videos tuyos sin permiso, incluidos contenidos íntimos. Es violencia digital y está penada.',
  },
  {
    id: 'doxxing',
    title: 'Doxxing',
    description:
      'Publican datos personales —dirección, teléfono, escuela— para que otras personas te hostiguen.',
  },
  {
    id: 'acoso',
    title: 'Acoso sexual digital',
    description:
      'Pedidos de fotos, comentarios sobre el cuerpo, insistencia sexual no deseada o contacto de adultos con menores (grooming).',
  },
  {
    id: 'odio',
    title: 'Discurso de odio',
    description:
      'Ataques por identidad: género, orientación sexual, origen, discapacidad, religión o aspecto físico.',
  },
  {
    id: 'flaming',
    title: 'Flaming',
    description:
      'Peleas virtuales que escalan en público: insultos, provocaciones y amenazas frente a una audiencia que alienta.',
  },
]

export const scenarios: Scenario[] = [
  {
    tag: 'Grupo de WhatsApp',
    title: 'El meme que todos comparten',
    messages: [
      { text: 'Miren lo que hizo en clase 😂', from: 'other' },
      { text: 'No puede ser tan raro', from: 'other' },
      { text: 'Mandalo al grupo de tercero', from: 'other' },
      { text: 'Basta, no me hace gracia', from: 'me' },
      { text: 'Ufa, no te enojes', from: 'other' },
    ],
    why: 'hay burla repetida, una audiencia que se suma y una persona que no puede frenar la circulación. Que sea “un meme” no lo hace menos violento.',
  },
  {
    tag: 'Cuenta falsa',
    title: 'Alguien está hablando por mí',
    messages: [
      { text: 'Hola, soy yo, aceptame en el grupo', from: 'other' },
      { text: '¿Viste lo que escribió? Qué asco', from: 'other' },
      { text: 'Esa cuenta no soy yo', from: 'me' },
      { text: 'Ya sé, pero todos le creen', from: 'other' },
    ],
    why: 'la suplantación daña tu reputación y puede escalar a pedidos o amenazas hechas en tu nombre.',
  },
  {
    tag: 'Imagen compartida',
    title: 'La foto que no era para todos',
    messages: [
      { text: 'Te paso algo de ella', from: 'other' },
      { text: 'No lo mandes a nadie', from: 'other' },
      { text: '[imagen reenviada]', from: 'other' },
      { text: 'Bórrenlo, por favor', from: 'me' },
      { text: 'Ya lo vieron todos', from: 'other' },
    ],
    why: 'difundir una imagen íntima sin consentimiento es violencia digital. En Argentina está contemplada por la Ley 27.736 y el Código Penal.',
  },
]

export const signs: Sign[] = [
  {
    title: 'Cambios bruscos de ánimo',
    description:
      'Irritabilidad, tristeza o enojo justo después de usar el celular o de mirar notificaciones.',
  },
  {
    title: 'Evita la pantalla',
    description:
      'Deja de usar redes, apaga las notificaciones, esconde el teléfono o cambia de cuenta sin explicar por qué.',
  },
  {
    title: 'Se aísla',
    description:
      'Deja de juntarse con amistades, falta a clases o evita los espacios donde podría encontrarse con ciertas personas.',
  },
  {
    title: 'Baja el rendimiento',
    description:
      'Le cuesta concentrarse, entrega tarde o pierde interés por actividades que antes disfrutaba.',
  },
  {
    title: 'Duerme mal',
    description:
      'Se queda despierto revisando el teléfono, tiene pesadillas o se levanta cansado todos los días.',
  },
  {
    title: 'Esquiva el tema',
    description:
      'Cambia de conversación, minimiza (“no pasa nada”) o se pone nervioso cuando se le pregunta qué le pasa.',
  },
  {
    title: 'Somatiza',
    description:
      'Dolores de cabeza o de panza, náuseas o cansancio que aparecen antes de ir a la escuela o a clases.',
  },
  {
    title: 'Pide ayuda de forma indirecta',
    description:
      'Dice “quisiera desaparecer”, habla de borrar sus redes o pregunta cómo denunciar algo “de un amigo”.',
  },
]

export const actions: ActionGroup[] = [
  {
    id: 'victima',
    label: 'Si te está pasando',
    intro:
      'No tenés la culpa de lo que te hacen. Estos pasos buscan cortar la situación, conservar pruebas y que no tengas que atravesarlo en soledad.',
    steps: [
      {
        title: 'No respondas en el momento',
        description:
          'Contestar suele alimentar la escalada. No necesitás “ganar” la discusión ni demostrar nada.',
      },
      {
        title: 'Guardá las pruebas',
        description:
          'Capturas de pantalla donde se vean usuario, fecha y contenido. No borres los mensajes: son evidencia.',
      },
      {
        title: 'Bloqueá y reportá',
        description:
          'Usá las herramientas de la plataforma. Reportar no es lo mismo que denunciar: es pedir que retiren el contenido.',
      },
      {
        title: 'Contale a alguien de confianza',
        description:
          'Un amigo, una amiga, un docente, tu familia. Contarlo no es exagerar ni “hacer lío”: es pedir acompañamiento.',
      },
      {
        title: 'Pedí ayuda profesional',
        description:
          'Si hay angustia intensa, aislamiento o ideas de lastimarte, buscá apoyo psicológico y llamá a una línea de ayuda.',
      },
      {
        title: 'Denunciá si hay delito',
        description:
          'Amenazas, difusión de imágenes íntimas o suplantación de identidad: fiscalía, línea 137 o 102 si hay menores.',
      },
    ],
  },
  {
    id: 'testigo',
    label: 'Si lo ves pasar',
    intro:
      'Quien mira también decide qué pasa después. No hace falta enfrentar a nadie: alcanza con no amplificar y mostrar apoyo.',
    steps: [
      {
        title: 'No compartas',
        description:
          'Cortar la cadena es la acción más rápida y la de mayor impacto. Reenviar “para preguntar” también es difundir.',
      },
      {
        title: 'Mostrá apoyo en público',
        description:
          'Un comentario de apoyo cambia el clima del grupo más que veinte mensajes privados. Y le muestra a la persona que no está sola.',
      },
      {
        title: 'Hablá con la persona',
        description:
          'Preguntá cómo está, sin presionar y sin convertirlo en un interrogatorio. Escuchar ya es una intervención.',
      },
      {
        title: 'Reportá el contenido',
        description:
          'Denunciá la publicación o el perfil desde la plataforma. Los reportes acumulados hacen que las moderaciones actúen.',
      },
      {
        title: 'Avisá a un adulto o referente',
        description:
          'No es “buchonear”: es cuidar. Si hay violencia o riesgo, un docente o una persona adulta tiene que saberlo.',
      },
      {
        title: 'No confrontes al agresor en el chat',
        description:
          'Escala el conflicto y te expone. Es mejor actuar por los canales de la institución.',
      },
    ],
  },
  {
    id: 'adultos',
    label: 'Si sos familia o docente',
    intro:
      'La respuesta adulta puede abrir una puerta o cerrarla para siempre. Escuchar primero y actuar después, con la institución.',
    steps: [
      {
        title: 'Escuchá sin minimizar',
        description:
          'Evitá “es una broma”, “algo habrás hecho” o “ignoralo”. Validar lo que siente es la condición para que siga contando.',
      },
      {
        title: 'No le quites el celular como castigo',
        description:
          'Aísla y corta el canal donde ocurre el acoso. Además, dificulta ver lo que está pasando.',
      },
      {
        title: 'Documentá y avisá a la institución',
        description:
          'Guardá pruebas y activá el protocolo de convivencia escolar (Ley 26.892). La escuela tiene obligación de intervenir.',
      },
      {
        title: 'Trabajá el tema en el aula',
        description:
          'La ESI y la ciudadanía digital son contenidos curriculares: prevención, no solo reacción.',
      },
      {
        title: 'Acompañá con profesionales',
        description:
          'Gabinete escolar, orientación o salud mental. El daño psicológico necesita atención, no solo una sanción.',
      },
      {
        title: 'Denunciá si hay delito',
        description:
          'Línea 137, fiscalía de turno o línea 102 cuando hay niñas, niños o adolescentes involucrados.',
      },
    ],
  },
]

export const laws = {
  intro:
    'En Argentina el ciberbullying no tiene una figura penal con ese nombre. Según lo que ocurra, se aplican distintas normas: desde la convivencia escolar hasta el Código Penal. Conocerlas ayuda a distinguir cuándo algo deja de ser un conflicto y pasa a ser un delito.',
  items: [
    {
      number: 'Ley 26.904',
      title: 'Grooming',
      description:
        'Incorporó al Código Penal el delito de contactar a una persona menor de edad por medios digitales con fines sexuales. Aplica cuando hay un adulto involucrado.',
    },
    {
      number: 'Ley 27.736',
      title: 'Ley Olimpia',
      description:
        'Incorporó la violencia digital como modalidad de violencia de género en la Ley 26.485: difusión no consentida de imágenes íntimas, acoso, hostigamiento y amenazas en entornos digitales.',
    },
    {
      number: 'Ley 26.388',
      title: 'Delitos informáticos',
      description:
        'Actualizó el Código Penal para los delitos cometidos con tecnología: acceso indebido a sistemas, daño informático y violación de comunicaciones.',
    },
    {
      number: 'Ley 27.590',
      title: 'Ley Mica Ortega',
      description:
        'Creó el Programa Nacional de Prevención y Concienciación sobre Grooming, con capacitaciones y campañas en todo el país.',
    },
    {
      number: 'Ley 26.892',
      title: 'Convivencia escolar',
      description:
        'Obliga a las instituciones educativas a construir acuerdos de convivencia y protocolos de actuación frente a conflictos y violencia entre estudiantes.',
    },
    {
      number: 'Código Penal',
      title: 'Amenazas, calumnias e injurias',
      description:
        'Las figuras de amenazas (art. 149 bis), calumnias e injurias (arts. 109 y 110) y violación de comunicaciones también se aplican cuando ocurren en entornos digitales.',
    },
  ],
  note: 'Esta guía es informativa y no reemplaza asesoramiento legal. Si estás evaluando una denuncia, una fiscalía o un abogado puede orientarte sobre cómo encuadrar el caso.',
}

export const resources: Resource[] = [
  {
    kind: 'Línea nacional · 24 h',
    name: 'Línea 137',
    contact: '137',
    href: 'tel:137',
    description:
      'Contención, asistencia y acompañamiento a víctimas de violencia familiar y sexual, y grooming.',
    hours: 'Las 24 horas, todos los días. WhatsApp: +54 9 11 3133-1000.',
  },
  {
    kind: 'Niñez y adolescencia',
    name: 'Línea 102',
    contact: '102',
    href: 'tel:102',
    description:
      'Atención gratuita y confidencial sobre los derechos de niñas, niños y adolescentes.',
    hours: 'Servicio gratuito y confidencial.',
  },
  {
    kind: 'Emergencias',
    name: 'Emergencias 911',
    contact: '911',
    href: 'tel:911',
    description: 'Si hay riesgo de vida, una amenaza en curso o una agresión en este momento.',
    hours: 'Las 24 horas, todos los días.',
  },
  {
    kind: 'Guía oficial',
    name: 'Violencia familiar y sexual',
    href: 'https://www.argentina.gob.ar/justicia/violencia-familiar-sexual',
    description:
      'Información del Ministerio de Justicia sobre cómo denunciar y qué hacer ante una situación de violencia.',
    hours: 'Portal público de argentina.gob.ar',
  },
  {
    kind: 'Informe',
    name: 'Kids Online Argentina 2025',
    href: 'https://www.unicef.org/argentina/media/24916/file/NI%C3%91AS,%20NI%C3%91OS%20Y%20ADOLESCENTES%20CONECTADOS%20%20KIDS%20ONLINE%20ARGENTINA%20Informe%20de%20resultados.pdf',
    description:
      'Encuesta de UNICEF y UNESCO a 5.910 chicas y chicos de 9 a 17 años sobre sus experiencias en internet.',
    hours: 'Informe completo en PDF',
  },
]

export const myths: Myth[] = [
  {
    myth: 'Es una broma, no lo hace con maldad.',
    reality:
      'La intención de quien agrede no define el daño. Si se repite, hay una audiencia y la otra persona no puede frenarlo, es violencia.',
  },
  {
    myth: 'Si lo ignorás, se termina.',
    reality:
      'Ignorar puede evitar que la situación escale, pero no hace que el contenido desaparezca. Hay que reportar, guardar pruebas y pedir ayuda.',
  },
  {
    myth: 'Pasa solo en la escuela.',
    reality:
      'Sigue en el grupo de WhatsApp, en el chat del juego y en los comentarios. No hay horario de salida ni lugar donde quedarse a salvo.',
  },
  {
    myth: 'Si no hay golpes, no es grave.',
    reality:
      'El daño psicológico es real: ansiedad, aislamiento, caída del rendimiento y, en casos extremos, riesgo de vida.',
  },
  {
    myth: 'El que lo sufre es porque se expone.',
    reality:
      'Nadie elige ser acosado. La responsabilidad es de quien agrede y de quienes amplifican el contenido.',
  },
  {
    myth: 'Contarlo es buchonear.',
    reality:
      'Contar es cuidar. El silencio protege a quien agrede, nunca a quien recibe el daño.',
  },
]

export const quiz: QuizQuestion[] = [
  {
    situation:
      'En el grupo de la facultad empiezan a circular capturas de un compañero con comentarios burlones. Vos no participás, pero estás en el grupo.',
    options: [
      { text: 'Salir del grupo sin decir nada.', correct: false },
      { text: 'Escribir que no da gracia y avisarle a la persona.', correct: true },
      { text: 'Reenviarlo a otro grupo para preguntar qué opinan.', correct: false },
    ],
    explanation:
      'Salir del grupo no corta la circulación. Un mensaje de apoyo público y avisarle a la persona cambia el clima y reduce el daño.',
  },
  {
    situation:
      'Una amiga te muestra que alguien creó una cuenta falsa con sus fotos. Está angustiada y quiere borrar todo para no verlo más.',
    options: [
      { text: 'Que borre las capturas y no le dé importancia.', correct: false },
      { text: 'Guardar pruebas, reportar la cuenta y acompañarla a contarlo.', correct: true },
      { text: 'Responderle al impostor con insultos.', correct: false },
    ],
    explanation:
      'Las pruebas son lo que permite reportar y denunciar. Borrar todo deja el caso sin evidencia y sin salida institucional.',
  },
  {
    situation:
      'Tu hijo de 15 años dejó de usar el celular y no quiere ir a la escuela. Si le preguntás, dice que “no pasa nada”.',
    options: [
      { text: 'Sacarle el celular hasta que cuente qué pasa.', correct: false },
      { text: 'Preguntar sin interrogar, estar disponible y consultar en la escuela.', correct: true },
      { text: 'Esperar a que se le pase solo.', correct: false },
    ],
    explanation:
      'Quitarle el celular corta el canal y aumenta el aislamiento. Escuchar sin minimizar y coordinar con la escuela es el primer paso.',
  },
]

export type QuestionCategory = {
  title: string
  questions: string[]
}

/** Preguntas para trabajar en el aula antes o después del juego. */
export const questions: QuestionCategory[] = [
  {
    title: 'Para comprender el tema',
    questions: [
      '¿Qué es el ciberbullying?',
      '¿Cuál es la diferencia entre bullying y ciberbullying?',
      '¿En qué redes sociales o plataformas suele ocurrir?',
      '¿Qué formas puede adoptar el ciberbullying?',
      '¿Por qué algunas personas agreden a otras a través de internet?',
      '¿Cómo podemos reconocer si alguien está sufriendo ciberbullying?',
    ],
  },
  {
    title: 'Para reflexionar y debatir',
    questions: [
      '¿Una broma por internet puede convertirse en ciberbullying? ¿Por qué?',
      '¿Qué consecuencias puede tener el ciberbullying en la salud emocional de una persona?',
      '¿Compartir una foto humillante de alguien sin su permiso también es una forma de violencia?',
      '¿Las personas que observan una agresión y no intervienen tienen alguna responsabilidad?',
      '¿Por qué algunas personas se animan a insultar por internet cosas que no dirían cara a cara?',
      '¿Borrar una publicación significa que el daño ya está reparado?',
      '¿Los comentarios negativos en redes sociales pueden afectar la autoestima?',
    ],
  },
  {
    title: 'Para pensar en posibles soluciones',
    questions: [
      '¿Qué deberíamos hacer si somos víctimas de ciberbullying?',
      '¿Cómo podemos ayudar a un compañero que está sufriendo acoso virtual?',
      '¿A quién podemos recurrir si el problema ocurre en un grupo escolar?',
      '¿Qué medidas pueden tomar las escuelas para prevenirlo?',
      '¿Por qué es importante guardar pruebas y denunciar las agresiones?',
      '¿Cómo podemos usar las redes sociales de manera responsable?',
      '¿Qué podemos hacer para evitar convertirnos en cómplices de una agresión?',
    ],
  },
  {
    title: 'Preguntas con situaciones concretas',
    questions: [
      'Si en un grupo de WhatsApp todos se burlan de un compañero, ¿qué harías?',
      'Si alguien publica una foto tuya sin permiso para ridiculizarte, ¿cómo reaccionarías?',
      'Si recibís un mensaje ofensivo, ¿responderías, bloquearías a la persona o pedirías ayuda? ¿Por qué?',
      'Si tu mejor amigo participa en una agresión virtual, ¿lo enfrentarías?',
      'Si ves que todos comparten un meme que humilla a un compañero, ¿lo compartirías para no quedar afuera del grupo?',
      '¿Qué diferencia hay entre defender a alguien y empeorar el conflicto?',
    ],
  },
]

/** Completar con los nombres reales del equipo cuando estén definidos. */
export const team: Member[] = []

export const sources: Source[] = [
  {
    label: 'UNESCO — Violencia y acoso escolar: los datos globales',
    href: 'https://www.unesco.org/es/articles/la-violencia-y-el-acoso-escolares-son-un-problema-mundial-segun-un-nuevo-informe-de-la-unesco',
  },
  {
    label: 'OMS Europa — 1 de cada 6 adolescentes sufre ciberacoso (HBSC 2024)',
    href: 'https://www.who.int/europe/news/item/27-03-2024-one-in-six-school-aged-children-experiences-cyberbullying--finds-new-who-europe-study',
  },
  {
    label: 'UNICEF y UNESCO — Kids Online Argentina 2025',
    href: 'https://www.unicef.org/argentina/media/24916/file/NI%C3%91AS,%20NI%C3%91OS%20Y%20ADOLESCENTES%20CONECTADOS%20%20KIDS%20ONLINE%20ARGENTINA%20Informe%20de%20resultados.pdf',
  },
  {
    label: 'argentina.gob.ar — Línea 137, violencia familiar y sexual',
    href: 'https://www.argentina.gob.ar/justicia/violencia-familiar-sexual',
  },
  {
    label: 'argentina.gob.ar — Línea 102, niñez y adolescencia',
    href: 'https://www.argentina.gob.ar/capital-humano/familia/ninez-y-familia/linea-102',
  },
  {
    label: 'argentina.gob.ar — Ley Olimpia (Ley 27.736)',
    href: 'https://www.argentina.gob.ar/noticias/ley-olimpia-el-gobierno-promulgo-la-legislacion-que-incorpora-la-violencia-digital-como-una',
  },
]
