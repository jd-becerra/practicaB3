import { useEffect, useState } from 'react'
import { CardSeparator } from './cards.jsx'
import { separator_1_data } from '../data/separators_data.jsx'
import { c_separator_data } from '../data/cards_data.jsx'

function Separator1() {
  return (
    <div className='container mx-auto inline-flex border-y-4 border-y-gray-300 py-2 my-16 overflow-hidden relative'>
      <div className='flex items-center whitespace-nowrap ease-out animate-autoscroll-x'>
        <span className="text-sm text-gray-600 font-bold">Es noticia:</span>
        <ul className='inline-flex'>
          {separator_1_data.map((item, index) => (
            <li key={index}>
             {(index !== separator_1_data.length - 1) ? (
                  <span className='text-gray-600 text-sm border-r-4 px-4 border-r-gray-200'>
                    {item}
                  </span>
                ) : (
                  <span className='text-gray-600 text-sm px-4'>
                    {item}
                  </span>
                )
              }
            </li>
          ))}
        </ul>
      </div>
      <div className='absolute right-0 h-full w-2/12 bg-gradient-to-l self-center from-gray-100 to-transparent'></div>
    </div>
  )
}

// Función para evitar que haya demasiadas llamadas a la función handleIntersect en Separator2
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function Separator2() {
  const [isSticky, setIsSticky] = useState(false)
  const [closeBanner, setCloseBanner] = useState(false)

  useEffect(() => {
    const banner = document.getElementById('sticky-banner')

    const handleIntersect = debounce(([event]) => {
      setIsSticky(event.intersectionRatio < 1)
      if (event.intersectionRatio === 1) {
        setCloseBanner(false)
      }
    }, 100)

    const observer = new IntersectionObserver(
      ([event]) =>  {
        handleIntersect([event])
      },
      { threshold: [1], rootMargin: '-100px 0px 0px 0px' }
    )
    observer.observe(banner)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      id='sticky-banner'
      className={`container z-50 mx-auto h-fit py-8 my-16 ${!closeBanner ? 'sticky top-0' : 'relative' } ${isSticky ? '' : 'border-y-4 border-y-gray-300'}`}>
      <div className='mx-auto relative w-fit flex justify-center items-center bg-white'>
        <img
          className='inline-block object-cover drop-shadow-xl mx-auto cursor-pointer'
          src='../img/banners/codere_horizontal_estrecho.gif'
          alt='banner'
        />
        {isSticky && !closeBanner ? (
          <button 
            onClick={() => setCloseBanner(true)} 
            className='absolute bg-white scale-75 right-0 z-60 top-0 self-start border-2 border-red-600'> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : (
            <></>
          )
        }
      </div>
    </div>

  )
}

// Seccion scrolleable con cartas
function Separator3() {
  return (
    <div className='container mx-auto border-y-4 border-y-gray-300 py-8 my-16 overflow-hidden relative inline-flex'> 
      <div className='flex overflow-x-auto'>
        <div className='grid grid-cols-3 gap-4 mx-auto'>
          {c_separator_data.map((card_data, index) => (
            <CardSeparator key={index} {...card_data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Separator1, Separator2, Separator3 }
