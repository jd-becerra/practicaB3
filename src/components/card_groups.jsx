import { front_page_card_data, c_fp_data, c_1_data, c_2_data } from '../data/cards_data.jsx'
import { CardFrontPage, CardFrontPageSmall, CardType1, CardType2 } from './cards.jsx'

function FrontPage() {
  return (
    <div className='grid grid-cols-3 grid-rows-4 gap-4'>
      <div className='col-span-3 row-span-1 p-x-12 bg-gray-100 flex justify-center items-center bg-white'>
        <img
          className='drop-shadow-xl mx-auto scale-90 cursor-pointer'
          src='../img/banners/caliente_horizontal.gif'
        />
      </div>
      <div className='col-span-3 row-span-2 grid grid-cols-4 gap-8'>
        <div className='col-span-3 container h-full w-full'>
          <CardFrontPage {...front_page_card_data} />
        </div>
        <div className='col-span-1 container border-4 border-white'>
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
    </div>
  )
}

function CardGroup1() {
  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-4'>
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
    <div className='grid grid-cols-3 grid-rows-2 gap-4'>
      <CardType1 {...small_cards[0]} />
      <CardType1 {...small_cards[1]} />
      <CardType2 {...large_card} />
      <CardType1 {...small_cards[2]} />
      <CardType1 {...small_cards[3]} />
    </div>
  )
}

export { FrontPage, CardGroup1, CardGroup2 }
