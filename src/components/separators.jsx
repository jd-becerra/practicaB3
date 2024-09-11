import { useEffect, useState } from 'react'
import { CardSeparator } from './cards.jsx'
import { separator_1_data } from '../data/separators_data.jsx'
import { c_separator_data } from '../data/cards_data.jsx'
import { resultado_partidos } from '../data/navbar_data.jsx'

function Header() {
  // use timeout to change the index of the array
  const maxIndex = resultado_partidos.length - 1
  const [indexLo, setIndexLo] = useState(0)
  const [indexHi, setIndexHi] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexLo(prevIndexLo => (prevIndexLo + 1) % maxIndex);
      setIndexHi(prevIndexHi => (prevIndexHi + 1) % maxIndex);

      if (indexHi === maxIndex - 1) {
        setIndexLo(0);
        setIndexHi(3);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex, indexHi]); // Add dependencies here

  return (
    <div className='w-full border-y-4 border-y-gray-300 overflow-hidden relative py-2 mb-4'>
      <div className='flex items-center whitespace-nowrap justify-center w-full'>
        <span className="xl:text-sm lg:text-xs text-gray-600 font-bold">RESULTADOS:</span>
        <ul className='inline-flex'>
          {resultado_partidos.slice(indexLo, indexHi).map((item, index) => (
            <li key={index}>
             {(index < indexHi - 1) ? (
                  <span className='text-gray-600 xl:text-sm lg:text-xs xl:px-4 lg:px-3'>
                    {item}
                  </span>
                ) : (
                  <span className='text-gray-600 xl:text-sm lg:text-xs px-1'>
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

function Separator1() {
  return (
    <div className='container border-y-4 border-y-gray-300 overflow-hidden relative py-2 my-16'>
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
      { threshold: [1], rootMargin: '-200px 0px 600px 0px' }
    )
    observer.observe(banner)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      id='sticky-banner'
      className={`z-50 mx-auto h-fit py-8 my-16 ${!closeBanner ? 'sticky top-10' : 'relative' } ${isSticky && !closeBanner ? '' : 'border-y-4 border-y-gray-300'}`}>
      <div className='mx-auto relative w-fit flex justify-center items-center bg-white'>
        <img
          className='inline-block object-cover drop-shadow-xl mx-auto cursor-pointer'
          src='../img/banners/codere_horizontal_estrecho.gif'
          alt='banner'
        />
        {isSticky && !closeBanner ? (
          <button 
            onClick={() => setCloseBanner(true)} 
            className='absolute bg-white scale-75 right-0 z-60 top-0 self-start border-4 border-red-600'> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                strokeWidth={3}
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
    <>
      <div className='container border-y-4 border-y-gray-300 overflow-x-scroll relative py-4 my-16 scroll-p-4 xl:block lg:block md:block sm:hidden xs:hidden'>
        <ul className='flex items-center whitespace-wrap gap-2 animate-autoscroll-x'>
          {c_separator_data.map((card_data, index) => (
            <li key={index} className='inline-fex'>
              <CardSeparator {...card_data} />
            </li>
          ))}
        </ul>
      </div>
      {/* Instead of showing, the cards, we'll make a scrollable-y list of text with formta: {topic}: {title} */}
      <div className='container border-y-4 border-y-gray-300 py-6 my-16 scroll-p-4 hidden xl:hidden lg:hidden md:hidden sm:block xs:block'>
        <ul className='text-left whitespace-wrap gap-2 overflow-y-scroll h-48 py-2'>
          {c_separator_data.map((card_data, index) => (
              <li key={index} className={`cursor-pointer group line-clamp-2 pb-2 border-b-2 border-gray-300 ${index < c_separator_data.length - 1 ? 'mb-4' : ''}`}>
                <span className='text-red-600 sm:text-lg xs:text-xs font-semibold'>
                  {card_data.topic}:
                <span className='text-gray-950 sm:text-lg xs:text-xs px-4 font-normal group-hover:text-gray-600'>
                  {card_data.title}
                </span>
                </span>
              </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export { Header, Separator1, Separator2, Separator3 }
