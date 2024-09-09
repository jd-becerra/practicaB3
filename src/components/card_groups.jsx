import { front_page_card_data, c_fp_data, c_1_data, c_2_data } from '../data/cards_data.jsx'
import { CardFrontPage, CardFrontPageSmall, CardType1, CardType2 } from './cards.jsx'
import { Separator2 } from './separators.jsx'

function FrontPage() {
  return (
    <div className='grid lg:grid-cols-3 grid-rows-4 gap-4 md:grid-cols-2'>
      <div className='row-span-1 p-x-12 bg-gray-100 flex justify-center items-center bg-white lg:col-span-3 md:col-span-2'>
        <img
          className='drop-shadow-xl mx-auto scale-90 cursor-pointer'
          src='../img/banners/caliente_horizontal.gif'
        />
      </div>
      <div className='lg:col-span-3 row-span-2 grid grid-cols-4 gap-8 md:col-span-2'>
        <div className='h-full w-full lg:col-span-3 md:col-span-4'>
          <CardFrontPage {...front_page_card_data} />
        </div>
        <div className='col-span-1 container border-4 border-white lg:block md:hidden sm:hidden'>
          <img 
            className='object-cover h-full w-full drop-shadow-xl cursor-pointer'
            src='../img/banners/codere_vertical.gif' 
            alt='banner' 
          />
        </div>
      </div>
      {c_fp_data.map((card_data, index) => (
        <CardFrontPageSmall key={index} {...card_data} />
      ))}
      <img 
        className='col-span-1 row-span-1 h-full w-full border-4 border-white drop-shadow-xl cursor-pointer lg:hidden md:block' 
        src='../img/banners/codere_cuadrado.gif' 
      />
    </div>
  )
}

function CardGroup1() {
  return (
    <div className='grid gap-4 lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3'>
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
      < Separator2 />
      {/* Resoluciones grandes y extra grandes */}
      <div className='grid grid-cols-3 grid-rows-2 gap-4 lg:block md:hidden'>
        <div className='col-span-3 grid grid-cols-3 gap-4'>
          <CardType1 {...small_cards[0]} />
          <CardType1 {...small_cards[1]} />
          <CardType2 {...large_card} />
          <CardType1 {...small_cards[2]} />
          <CardType1 {...small_cards[3]} />
        </div>
      </div>

      {/* Resoluciones medianas */}
      <div className='grid grid-cols-2 grid-rows-3 gap-4 lg:hidden md:block'>
        <div className='col-span-2 row-span-3 grid grid-cols-2 gap-4'>
          <CardType2 {...large_card} />
          {small_cards.map((card_data, index) => (
            <CardType1 key={index} {...card_data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { FrontPage, CardGroup1, CardGroup2 }
