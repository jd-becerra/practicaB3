import { useEffect, useState } from 'react'
import { CardSeparator } from './cards.jsx'
import { separator_1_data } from '../data/separators_data.jsx'
import { c_separator_data } from '../data/cards_data.jsx'
import { resultado_partidos } from '../data/navbar_data.jsx'

function Header() {
  const maxIndex = resultado_partidos.length - 1
  const [indexLo, setIndexLo] = useState(0)
  const [indexHi, setIndexHi] = useState(2)

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
    <div className='w-full border-y-4 border-y-gray-300 overflow-hidden flex justify-center items-center relative py-2 my-12'>
      <div className='container  xl:text-sm lg:text-1 md:text-0.5 whitespace-nowrap w-full'>
        <span className=" text-gray-600 font-bold">RESULTADOS:</span>
        <ul className='inline-flex'>
          {resultado_partidos.slice(indexLo, indexHi).map((item, index) => (
            <li key={index} className='ml-6'>
             {(index < indexHi - 1) ? (
                  <span className='text-gray-600 xl:px-4 lg:px-3'>
                    {item}
                  </span>
                ) : (
                  <span className='text-gray-600 px-1'>
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

function Separator1({scrollSpeed = '60s'}) {
  const scrollStyle = {
    animationDuration: scrollSpeed,
  };

  return (
    <div className='w-full max-w-none border-y-4 border-y-gray-300 overflow-hidden py-2 px-4 mb-4'>
      <div className="container flex items-center whitespace-nowrap ease-out animate-autoscroll-x" style={scrollStyle}>
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
     
    </div>
  )
}

function Separator2() {
  return (
    <div
      id='sticky-banner'
      className='z-50 mx-auto h-fit py-8 my-16 border-y-4 border-y-gray-300'>
      <div className='mx-auto relative w-fit flex justify-center items-center bg-white'>
        <img
          className='inline-block object-cover drop-shadow-xl mx-auto cursor-pointer'
          src='../img/banners/codere_horizontal_estrecho.gif'
          alt='banner'
        />
      </div>
    </div>
  )
}

// Seccion scrolleable con cartas
function Separator3({ scrollSpeed = '60s' }) {
  const scrollStyle = {
    animationDuration: scrollSpeed,
  };

  return (
    <>
      <div className='w-full max-w-none overflow-x-scroll xl:block lg:block md:block sm:hidden xs:hidden my-20'>
        <div className='container relative scroll-p-4'>
          <ul
            className='flex items-center whitespace-wrap gap-2 animate-autoscroll-x'
            style={scrollStyle}
          >
            {c_separator_data.map((card_data, index) => (
              <li key={index} className='inline-fex'>
                <CardSeparator {...card_data} />
              </li>
            ))}
          </ul>
        </div>
        {/* Instead of showing, the cards, we'll make a scrollable-y list of text with format: {topic}: {title} */}
        <div className='container border-y-4 border-y-gray-300 py-6 my-16 scroll-p-4 hidden xl:hidden lg:hidden md:hidden sm:block xs:block'>
          <ul className='text-left whitespace-wrap gap-2 overflow-y-scroll h-48 py-2'>
            {c_separator_data.map((card_data, index) => (
              <li
                key={index}
                className={`cursor-pointer group line-clamp-2 pb-2 border-b-2 border-gray-300 ${
                  index < c_separator_data.length - 1 ? 'mb-4' : ''
                }`}
              >
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
      </div>
    </>
  );
}

function Separator4() {
  return (
    <>
      <div className='w-full px-12 flex justify-center items-center my-16 py-4'>
        <img
          className='drop-shadow-xl mx-auto w-11/12 cursor-pointer'
          src='../img/banners/codere_horizontal_estrecho.gif'
        />
      </div>
    </>
  )
}

export { Header, Separator1, Separator2, Separator3, Separator4 }
