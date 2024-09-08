import './cards.css'

// Carta grande del front page
function CardFrontPage({topic, title, image}) {
  return (
    <div className='col-span-3 drop-shadow-xl h-full w-full group'>
      <img className='w-full h-full object-cover' src={image} alt={title} />
      <div className='absolute inset-0 bg-black transition ese-in-out duration-700 opacity-40 group-hover:opacity-10'></div>
      <div className='absolute z-10 bottom-20 left-10 right-10 grid grid-cols-2 gap-y-4'>
        <div className='col-span-1 absolute left-0 -top-10'>
          <span className='font-bold leading-relaxed text-xl bg-red-600 text-white px-2 py-1'>
          {topic}
          </span>
        </div>
        <h4 className='col-span-2 text-white text-left self-start text-3xl font-semibold leading-tight group-hover:text-gray-100'>
          {title}
        </h4>
      </div>
    </div>
  )
}

// Cartas pequeñas del front page
function CardType1({topic, title, image}) {
  return (
    <div className='col-span-1 row-span-1 drop-shadow-xl  h-full w-full flex group'>
      <div className='relative z-0'>
        <img className='object-fill w-full h-full' src={image} alt={title} />
        <div className='absolute inset-0 bg-black transition ese-in-out duration-700 opacity-45 group-hover:opacity-10'></div>
        <div className='absolute z-10 bottom-6 left-4 right-4 grid grid-cols-2 gap-y-4'>
          <div className='col-span-1 absolute left-0 -top-10'>
            <span 
              className='font-semibold leading-relaxed text-sm bg-red-600 text-white px-2 py-1'>
            {topic}
            </span>
          </div>
          <h4 
            className='col-span-2 text-lg text-white text-left self-start text-base font-semibold leading-tight group-hover:text-gray-100'>
            {title}
          </h4>
        </div>
      </div>
    </div>
  )
}

// Cartas medianas para la sección tipo 2
function CardType2({topic, title, image, author, n_comments}) {
  return (
    <div 
      className='col-span-1 row-span-1 shadow-lg shadow-gray-300 h-full w-full grid grid-rows-3 transition ease-in-out duration-300 group hover:scale-105 relative z-0'>
      <div className='row-span-2'>
        <img className='object-fill w-full h-full' src={image} alt={title} />
        <span 
          className='absolute z-10 top-4 left-4 font-semibold leading-relaxed text-sm bg-red-600 text-white px-2 py-1'>
          {topic}
        </span>
      </div>
      <div className='row-span-1'>
        <h4 
          className='p-2 col-span-2 text-lg text-black text-left self-start text-base font-semibold leading-tight group-hover:text-gray-600'>
          {title}
        </h4>
      </div>
      <div className='absolute z-10 bottom-4 right-4'>
        <span className='p-2 text-base text-gray-600'>
          {author}
        </span>
        {(n_comments > 0) ? (
          <span>
            <span className='p-2 text-base text-gray-600'>•</span>
            <span className='p-2 text-base text-gray-600'>
               {n_comments} {(n_comments === 1) ? 'comentario' : 'comentarios'}
            </span>
          </span>
        ) : (<></>)
        }
      </div>
    </div>
  )
}

export { CardFrontPage, CardType1, CardType2 }
