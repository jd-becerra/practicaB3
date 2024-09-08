// import { useState } from 'react'
import './App.css'
import { FrontPage, CardGroup1, CardGroup2 } from './components/card_groups.jsx'
import { Separator1, Separator2, Separator3 } from './components/separators.jsx'


function App() {
  return (
    <div className="xl:container xl:mx-auto">
      <div className="xl:transform xl:scale-125 xl:origin-top lg:scale-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FrontPage />
          <Separator1 />
          <CardGroup1 />
          <Separator2 />
          <CardGroup2 />
          <Separator3 />
        </div>
      </div>
    </div>
  )
}

export default App
