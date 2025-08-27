import { front_page_card_data, c_fp_data, c_1_data, c_2_data } from '../data/cards_data.jsx'
import { CardFrontPage, CardFrontPageSmall, CardFrontPageVerySmall, CardType1, CardType2 } from './cards.jsx'

function FrontPageLg() {
 return (
  <>
    <div className="xl:px-20 lg:px-8 md:px-8 sm:px-6 xs:px-4 grid lg:grid-cols-3 gap-4 md:grid-cols-2 flex-shrink">
      <div className='lg:col-span-3 row-span-2 grid grid-cols-4 gap-8 md:col-span-2'>
        <div className=' w-full lg:col-span-3 md:col-span-4'>
        <CardFrontPage {...front_page_card_data} />
        </div>
        <div className='col-span-1 container border-4 border-white lg:block md:hidden sm:hidden'>
        <img 
          className='object-cover  w-full drop-shadow-xl cursor-pointer'
          src='../img/banners/caliente_vertical.gif' 
          alt='banner' 
        />
        </div>
      </div>
      <div className='col-span-3 grid grid-cols-4 gap-4 '>
        {c_fp_data.map((card_data, index) => (
        <CardFrontPageSmall key={index} {...card_data} />
        ))}
      </div>
    </div>
  </>
  )
}

function FrontPage() {
  return (
    <>
      <div className='xl:px-20 lg:px-8 md:px-8 sm:px-6 xs:px-4 grid lg:grid-cols-3 grid-rows-3 gap-4 md:grid-cols-2 flex-shrink'>
        <div className='lg:col-span-3 row-span-2 grid grid-cols-4 gap-8 md:col-span-2'>
          <div className=' w-full lg:col-span-3 md:col-span-4'>
            <CardFrontPage {...front_page_card_data} />
          </div>
          <div className='col-span-1 container border-4 border-white lg:block md:hidden sm:hidden'>
            <img 
              className='object-cover  w-full drop-shadow-xl cursor-pointer'
              src='../img/banners/caliente_vertical.gif' 
              alt='banner' 
            />
          </div>
        </div>
        {c_fp_data.slice(0, 3).map((card_data, index) => (
          <CardFrontPageSmall key={index} {...card_data} />
        ))}
        <img 
          className='col-span-1 row-span-1  w-full border-4 border-white drop-shadow-xl cursor-pointer lg:hidden md:block' 
          src='../img/banners/caliente_cuadrado.gif' 
        />
      </div>
    </>
  )
}

function FrontPageSm() {
  return (
    <div className='xl:px-20 lg:px-8 md:px-8 sm:px-6 xs:px-4 grid grid-cols-1 gap-2' >
      <CardFrontPageSmall {...front_page_card_data} />
      {c_fp_data.map((card_data, index) => (
        <CardFrontPageSmall key={index} {...card_data} />
      ))}
      <img 
        className='col-span-1 row-span-1  w-full border-4 border-white drop-shadow-xl cursor-pointer lg:hidden md:block' 
        src='../img/banners/caliente_cuadrado.gif' 
      />
    </div>
  )
}

function FrontPageVr() {
  return (
    <div className='xl:px-20 lg:px-8 md:px-8 sm:px-6 xs:px-4 grid grid-cols-1 gap-2' >
      <CardFrontPageVerySmall {...front_page_card_data} />
      {c_fp_data.map((card_data, index) => (
        <CardFrontPageVerySmall key={index} {...card_data} />
      ))}
      <img 
        className='col-span-1 row-span-1  w-full border-4 border-white drop-shadow-xl cursor-pointer lg:hidden md:block' 
        src='../img/banners/codere_cuadrado.gif' 
      />
    </div>
  )
}

function CardGroup1() {
  return (
    <div className='xl:px-20 lg:px-8 md:px-8 sm:px-6 xs:px-4 grid gap-4 lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 flex-shrink'>
      {c_1_data.map((card_data, index) => (
        <CardType1 key={index} {...card_data} />
      ))}
    </div>
  )
}

function CardGroup2() {
  // Las cartas tipo 2 son iguales a las tipo 1, pero son cinco en vez de seis y una tiene una imagen mas grande

  const large_card = c_2_data[0]
  const small_cards = c_2_data.slice(1) // Se necesitan 4 cartas pequeñas

  return (
    <div>

      {/* Resoluciones grandes y extra grandes */}
      <div className='xl:px-20 lg:px-8 md:px-8 sm:px-6 xs:px-4 grid grid-cols-4 grid-rows-2 gap-4 lg:block md:hidden sm:hidden xs:hidden'>
        <div className='col-span-3 grid grid-cols-4 gap-4'>
          <CardType1 {...small_cards[0]} />
          <CardType1 {...small_cards[1]} />
          <CardType1 {...small_cards[4]} />
          <CardType2 {...large_card} />
          <CardType1 {...small_cards[2]} />
          <CardType1 {...small_cards[3]} />
          <CardType1 {...small_cards[3]} />
        </div>
      </div>

      {/* Resoluciones medianas */}
      <div className='xl:px-20 lg:px-8 md:px-8 sm:px-6 xs:px-4 grid md:grid-cols-2 md:grid-rows-3 gap-4 lg:hidden md:block sm:block xs:block sm:grid-cols-1'>
        <div className='md:col-span-2 row-span-3 grid md:grid-cols-2 gap-4 sm:col-span-1 sm:grid-cols-1'>
          <CardType2 {...large_card} />
          {small_cards.map((card_data, index) => (
            <CardType1 key={index} {...card_data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { FrontPageLg, FrontPage, FrontPageSm, FrontPageVr, CardGroup1, CardGroup2 }
