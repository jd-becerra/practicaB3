import { front_page_card_data, c1_data } from '../data/cards_data.jsx'
import { CardFrontPage, CardType1, CardType2 } from './cards.jsx'

function FrontPage() {
  return (
    <div className='container mx-auto p-4' id="frontPage">
      <div className='grid grid-cols-3 lg:grid-rows-3 gap-4'>
        <div className='col-span-3 grid grid-cols-4 gap-8'>
          <CardFrontPage {...front_page_card_data} />
          <div className='col-span-1 container h-[590px] w-full'>
            <img 
              className='object-fit w-full h-full'
              src='../img/banners/banner_vertical.jpg' 
              alt='banner' 
            />
          </div>
        </div>
        <CardType1 {...front_page_card_data}  />
        <CardType1 {...front_page_card_data} />
        <CardType1 {...front_page_card_data} />
      </div>
    </div>
  )
}

export { FrontPage }
