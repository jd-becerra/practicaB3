// import { useState } from 'react'
import './App.css'
import { FrontPageLg, FrontPage, FrontPageSm, FrontPageVr, CardGroup1, CardGroup2 } from './components/card_groups.jsx'
import { Header, Separator1, Separator2, Separator3, Separator4 } from './components/separators.jsx'
import { NavBar } from './components/navbar.jsx'
import { SocialMedia } from './components/social_media.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <>
      <div style={{ margin: 0, padding: 0 }}>
        <div className="pb-12">
          
          <div className="">
            <NavBar/>
            <Separator1/>
            <div className=' lg:block md:hidden sm:hidden xs:hidden'>
              <FrontPageLg />
            </div>
            <div className='lg:hidden md:block sm:hidden xs:hidden'>
              <FrontPage />
            </div>
            <div className='lg:hidden md:hidden sm:block xs:hidden'>
              <FrontPageSm />
            </div>
            <div className='lg:hidden md:hidden sm:hidden xs:block'>
              <FrontPageVr />
            </div>
            <Header />
            <CardGroup1 />
            <Separator4 />
            <CardGroup2 />
            <Separator3 />
            <CardGroup1 />
            <Separator4 />
            <CardGroup2 />
          </div>
        </div>
        <Footer />
        <SocialMedia/>
      </div>
    </>
  )
}

export default App
