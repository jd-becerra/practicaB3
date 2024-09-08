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

function Separator2() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById('sticky-banner');
      const rect = banner.getBoundingClientRect();

      setSticky(rect.top <= 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className='container mx-auto border-y-4 border-y-gray-300 py-8 my-16 h-fit'>
      <img
        id='sticky-banner'
        className={`object-cover z-50 h-fit w-fit drop-shadow-xl mx-auto top-0 ${isSticky ? 'sticky' : 'static'}`}
        src='../img/banners/codere_horizontal_estrecho.gif'
        alt='banner'
      />
    </div>
  )
}

// Seccion scrolleable con cartas
function Separator3() {
  return (
    <div className='container mx-auto border-y-4 border-y-gray-300 py-8 my-16 overflow-hidden relative inline-flex'> 
      <div className='flex overflow-x-auto'>
        <div className='grid grid-cols-3 gap-4 mx-auto flex'>
          {c_separator_data.map((card_data, index) => (
            <CardSeparator key={index} {...card_data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Separator1, Separator2, Separator3 }
