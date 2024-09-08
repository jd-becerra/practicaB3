import { front_page_card_data, c1_data, c2_data } from '../data/cards_data.jsx'
import { CardFrontPage, CardType1, CardType2 } from './cards.jsx'

function FrontPage() {
  return (
      <div className='grid grid-cols-3 grid-rows-4 gap-4'>
        <div className='col-span-3 row-span-1 p-x-12 bg-gray-100 flex justify-center items-center border-4 border-white'>
          <img
            className='drop-shadow-xl mx-auto scale-90'
            src='../img/banners/caliente_horizontal.gif'
          />
        </div>
        <div className='col-span-3 row-span-2 grid grid-cols-4 gap-8'>
          <div className='col-span-3 container border-4 border-white h-full w-full'>
            <CardFrontPage {...front_page_card_data} />
          </div>
          <div className='col-span-1 container border-4 border-white'>
            <img 
              className='object-cover h-full w-full drop-shadow-xl'
              src='../img/banners/codere_vertical.gif' 
              alt='banner' 
            />
          </div>
        </div>
        {c1_data.map((card_data, index) => (
          <CardType1 key={index} {...card_data} />
        ))}
      </div>
  )
}

function CardGroup1() {
  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-4'>
      {c2_data.map((card_data, index) => (
        <CardType2 key={index} {...card_data} />
      ))}
    </div>
  )
}

export { FrontPage, CardGroup1 }
