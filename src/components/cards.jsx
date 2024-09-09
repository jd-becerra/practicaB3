import './cards.css'

// Carta grande del front page
function CardFrontPage({topic, title, image}) {
  return (
    <div className='col-span-3 drop-shadow-xl h-full w-full group cursor-pointer'>
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
function CardFrontPageSmall({topic, title, image}) {
  return (
    <div className='col-span-1 row-span-1 drop-shadow-xl  h-full w-full flex group cursor-pointer'>
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

// Cartas pequeñas para la sección 1 y 2
function CardType1({topic, title, image, author, n_comments}) {
  return (
    <div 
      className='bg-white col-span-1 row-span-1 shadow-lg shadow-gray-300 h-full w-full grid grid-rows-3 transition ease-in-out duration-300 group hover:scale-105 relative z-0 cursor-pointer'>
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

// Cartas medianas para la sección 2
function CardType2({topic, title, image, author, n_comments}) {
  return (
    <div 
      className='bg-white col-span-1 row-span-2 shadow-lg shadow-gray-300 h-full w-full grid grid-rows-5 transition ease-in-out duration-300 group hover:scale-105 relative z-0 cursor-pointer'>
      <div className='row-span-3'>
        <img className='object-fill w-full h-full' src={image} alt={title} />
        <span 
          className='absolute z-10 top-4 left-4 font-semibold leading-relaxed text-base bg-red-600 text-white px-2 py-1'>
          {topic}
        </span>
      </div>
      <div className='row-span-2'>
        <h4 
          className='p-6 mt-4 col-span-2 text-3xl text-black text-left self-start text-2xl font-bold leading-tight group-hover:text-gray-600'>
          {title}
        </h4>
      </div>
      <div className='absolute z-10 bottom-6 right-6 text-lg'>
        <span className='p-2 text-gray-600'>
          {author}
        </span>
        {(n_comments > 0) ? (
          <span>
            <span className='p-2 text-gray-600'>•</span>
            <span className='p-2 text-gray-600'>
               {n_comments} {(n_comments === 1) ? 'comentario' : 'comentarios'}
            </span>
          </span>
        ) : (<></>)
        }
      </div>
    </div>
  )
}

// Cartas para el separador 3
function CardSeparator({topic, title, image, n_comments}) {
  return (
    <div className='col-span-1 drop-shadow-xl flex group cursor-pointer'>
      <div className='relative z-0'>
        <img className='object-fill w-full h-full' src={image} alt={title} />
        <div className='absolute inset-0 bg-black transition ese-in-out duration-700 opacity-45 group-hover:opacity-0'></div>
        <div className='absolute z-10 bottom-14 left-4 gap-y-4'>
          <h4 
            className='text-lg text-white text-left self-start text-base font-bold leading-tight group-hover:text-gray-100'>
            {title}
          </h4>
        </div>
        <span 
          className='absolute left-4 bottom-4 font-semibold leading-tight text-xs bg-red-600 text-white px-2 py-1'>
          {topic}
        </span>
        <div className='absolute z-10 bottom-4 right-4'>
          {(n_comments > 0) ? (
            <span className='p-2 text-base text-right font-bold text-gray-100'>
              <img
                className='inline-block scale-90 mr-1'
                src='../img/icons/chat_bubble.svg' alt='icono de comentarios' 
              /> 
              {n_comments}
            </span>
          ) : (<></>)}  
        </div>
      </div>
    </div>
  )
}


export { CardFrontPage, CardFrontPageSmall, CardType1, CardType2, CardSeparator }
