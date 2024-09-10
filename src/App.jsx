// import { useState } from 'react'
import './App.css'
import { FrontPage, FrontPageSm, FrontPageVr, CardGroup1, CardGroup2 } from './components/card_groups.jsx'
import { Separator1, Separator3 } from './components/separators.jsx'
import { NavBar } from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import ReactDOM from 'react-dom'

function App() {
  return (
    <>
      <div className="container mx-auto flex-shrink">
        <div className="pb-24">
          <div className="lg:px-8 sm:px-6 xs:px-4 ">
            <NavBar/>
            <div className='lg:block md:block sm:hidden xs:hidden'>
              <FrontPage />
            </div>
            <div className='lg:hidden md:hidden sm:block xs:hidden'>
              <FrontPageSm />
            </div>
            <div className='lg:hidden md:hidden sm:hidden xs:block'>
              <FrontPageVr />
            </div>
            <Separator1 />
            <CardGroup1 />
            {/* Separator2 se está en CardGroup2, ya que es sticky */}
            <CardGroup2 />
            <Separator3 />
            <CardGroup1 />
          </div>
        </div>
        <Footer />

      </div>
    </>
  )
}

export default App
