import './cards.css'

// Carta grande del front page
function CardFrontPage({topic, title, image}) {
  return (
    <div className='lg:col-span-3 drop-shadow-xl h-full w-full'>
      <div className='relative z-0'>
        <div>
          <img className='w-full h-full' src={image} alt={title} />
          <div className='absolute inset-0 bg-black opacity-40'></div>
      </div>
        <div className='absolute z-10 bottom-20 left-10 right-10 grid grid-cols-2 gap-y-4'>
          <h5 className='col-span-1 flex flex-col'>
            <span className='font-bold leading-relaxed text-center text-xl bg-red-600 text-white px-2 py-1'>
            {topic}
            </span>
          </h5>
          <h4 className='col-span-2 text-white text-left self-start text-3xl font-semibold leading-tight'>
            {title}
          </h4>
        </div>
      </div>
    </div>
  )
}

// Cartas pequeñas del front page
function CardType1({topic, title, image}) {
  return (
    <div className='col-span-1 row-span-1 drop-shadow-xl'>
      <div className='relative z-0'>
        <div>
          <img className='object-contain' src={image} alt={title} />
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>
        <div className='absolute z-10 bottom-4 left-4 right-4 grid grid-cols-2 gap-y-4'>
          <p className='col-span-1'>
            <span className='bg-red-600 font-semibold text-white px-2 py-1'>
              {topic}
            </span>
          </p>
          <div> </div>
          <h4 className='col-span-2 text-white text-left self-start text-base font-semibold leading-tight'>
            {title}
          </h4>
        </div>
      </div>
    </div>
  )
}

// Cartas pequeñas de la seccion tipo 1
function CardType2({topic, title, image, author, comments_number}) {
  return (
    <div className='bg-red-600 text-white'>
      <h5>{topic}</h5>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Author: {author}</p>
      <p>Likes: {comments_number}</p>
    </div>
  )
}

export { CardFrontPage, CardType1, CardType2 }
