import { front_page_card_data, c1_data } from '../data/cards_data.jsx'
import { CardFrontPage, CardType1, CardType2 } from './cards.jsx'

function FrontPage() {
  return (
    <div className='container mx-auto' id="frontPage">
      <div className='grid grid-cols-3 lg:grid-rows-3 gap-4'>
        <div className='col-span-3 grid grid-cols-4 gap-8'>
          <CardFrontPage {...front_page_card_data} />
          <div className='col-span-1 container '>
            <img 
              className='object-fit'
              src='../img/banners/anuncio_vertical.png' 
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
