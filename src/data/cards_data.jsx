const front_page_card_data = {
  topic: 'SELECCIÓN NACIONAL DE MÉXICO',
  title: 'Ancelotti: "Jugar ante los equipos de Javier Aguirre es como ir al dentista... ¡terrible y no la pasas bien!"',
  image: '/img/cards/card_front_page.webp',
}

/* Las cartas tipo 1 sólo tienen un tópico, título y una imagen */
const c1_data = [
  {
    topic: 'FÓRMULA 1',
    title: 'Haas firma a piloto de Ferrari para sustituir a Magnussen en Azerbaiyán',
    image: '/img/cards/card_t1_1.jpg',
  },
  {
    topic: 'FÓRMULA 1',
    title: 'Salario de Adrian Newey con Aston Martin: Casi el triple del sueldo de Checo Pérez',
    image: '/img/cards/card_t1_2.webp',
  },
  {
    topic: 'FÚTBOL FEMENIL',
    title: 'México vs Colombia Femenil Sub-20: dónde ver en vivo, horario y transmisión Copa Mundial de Fútbol Femenina Sub-20',
    image: '/img/cards/card_t1_3.jpg',
  },
]


/* Las cartas tipo 2 tienen un tópico, título, imagen, autor y número de comentarios */
const c2_data = [
  {
    topic: 'SELECCIÓN NACIONAL DE MÉXICO',
    title: 'Henry Martín confiesa que la "mano dura" de Javier Aguirre es lo que le hacía falta a la Selección Mexicana',
    image: '/img/cards/card_t2_1.webp',
    author: 'ISRAEL M. ZÚÑIGA',
    n_comments: 12,
  },
  {
    topic: 'TELEVISÓN MX',
    title: 'Perro Bermúdez insulta a usuario que difundió muerte falsa de André Marín',
    image: '/img/cards/card_t2_2.webp',
    author: 'LW',
    n_comments: 100,
  },
  {
    topic: 'FÓRMULA 1',
    title: 'Horner lo tiene claro: "Tendríamos todos estos problemas igualmente si siguiera Newey porque ya existían"',
    image: '/img/cards/card_t2_3.webp',
    author: 'JAVIER PAZOS',
    n_comments: 1,
  },
  {
    topic: 'Green Bay 29 - 34 Philadelphia',
    title: 'NFL: Eagles vencen a Packers deleitan a la afición de Sao Paulo con juegazo histórico en Brasil',
    image: '/img/cards/card_t2_4.webp',
    author: 'LW',
    n_comments: 16,
  },
  {
    topic: 'CELEBRITIES',
    title: 'Adrián Marcelo apunta a ser directivo de un equipo de fútbol tras salida de La Casa de los Famosos',
    image: '/img/cards/card_t2_5.webp',
    author: 'LW',
    n_comments: 50,
  },
  {
    topic: 'TELEVISIÓN MX',
    title: 'David Faitelson revela que André Marín recibió un trasplante de pulmones',
    image: '/img/cards/card_t2_6.webp',
    author: 'ISRAEL M. ZÚÑIGA',
    n_comments: 0,
  },
]

/*

  topic: "LOTERÍA NACIONAL",
  title: "Resultados Lotería Nacional hoy viernes 6 de septiembre 2024: Lista Sorteo Superior 2820",
  image: "/img/cards/card_t3_1.webp",
  author: "LW",
  n_comments: 12,
*/
export { front_page_card_data, c1_data, c2_data }
