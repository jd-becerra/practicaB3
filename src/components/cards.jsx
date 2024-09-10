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
    <div className='col-span-1 row-span-1 drop-shadow-xl h-full w-full flex group cursor-pointer'>
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
      className='bg-white col-span-1 row-span-1 shadow-lg shadow-gray-300 h-full grid grid-rows-3 transition ease-in-out duration-300 group hover:scale-105 relative z-0 cursor-pointer flex-shrink'>
      <div className='row-span-2'>
        <img className='object-fill w-full h-full' src={image} alt={title} />
        <span 
          className='lg:block md:block sm:hidden xs:hidden absolute z-10 top-4 left-4 font-semibold leading-relaxed text-sm bg-red-600 text-white px-2 py-1'>
          {topic}
        </span>
      </div>
      <div className='row-span-1'>
        <h4 
          className='lg:block md:hidden sm:hidden xs:hidden p-2 col-span-2 text-lg text-black text-left self-start text-base font-semibold leading-tight group-hover:text-gray-600'>
          {title}
        </h4>

        <h4 
          className='lg:hidden md:block sm:hidden xs:hidden p-2 col-span-2 text-base text-black text-left self-start text-base font-semibold leading-tight group-hover:text-gray-600'>
          {title}
        </h4>

        <h4 
          className='lg:hidden md:hidden sm:block xs:hidden p-2 col-span-2 text-xl text-black text-left self-start text-base font-semibold leading-tight group-hover:text-gray-600'>
          {title}
        </h4>

        <h4 
          className='lg:hidden md:hidden sm:hidden xs:block p-2 col-span-2 text-xs text-black text-left self-start text-base font-semibold leading-tight group-hover:text-gray-600'>
          {title}
        </h4>
      </div>
      <div className='absolute z-10 bottom-4 right-4 lg:block md:block sm:block xs:hidden'>
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

      <div className='absolute z-10 bottom-4 right-4 lg:hidden md:hidden sm:hidden xs:block'>
        <span className='p-2 text-xs text-gray-600'>
          {author}
        </span>
        {(n_comments > 0) ? (
          <span>
            <span className='p-2 text-xs text-gray-600'>•</span>
            <span className='p-2 text-xs text-gray-600'>
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
      className='bg-white shadow-lg shadow-gray-300 h-full w-full transition ease-in-out duration-300 group hover:scale-105 relative z-0 cursor-pointer lg:col-span-1 lg:row-span-2 md:col-span-2 md:row-span-1 sm:col-span-1 sm:row-span-1'>
      <div className='flex flex-col h-full'>
        <div className='relative flex-grow'>
          <img className='object-cover w-full h-full' src={image} alt={title} />
          <span 
            className='absolute z-10 top-4 left-4 font-semibold leading-relaxed text-base bg-red-600 text-white px-2 py-1'>
            {topic}
          </span>
        </div>
        <div className='p-6 flex flex-col justify-between flex-grow'>
          <h4 
            className='text-3xl text-black text-left font-bold leading-tight group-hover:text-gray-600 mb-4'>
            {title}
          </h4>
          <div className='text-lg text-right'>
            <span className='text-gray-600'>
              {author}
            </span>
            {n_comments > 0 && (
              <>
                <span className='p-2 text-gray-600'>•</span>
                <span className='text-gray-600'>
                  {n_comments} {n_comments === 1 ? 'comentario' : 'comentarios'}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Cartas para el separador 3
function CardSeparator({topic, title, image, n_comments}) {
  return (
    <div className='drop-shadow-xl group cursor-pointer lg:w-96 md:w-72'>
      <div className='relative z-0'>
        <img className='object-fill w-full h-full' src={image} alt={title} />
        <div className='absolute inset-0 bg-black transition ese-in-out duration-700 opacity-45 group-hover:opacity-10'></div>
        <div className='absolute z-10 bottom-14 left-4 gap-y-4'>
          <h4 
            className='text-white text-left self-start text-base font-bold leading-tight group-hover:text-gray-100'>
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
