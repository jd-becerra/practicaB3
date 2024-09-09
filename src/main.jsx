import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Footer from './components/footer.jsx'
import './index.css'

globalThis.resizeTo(200, 1080)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <body>
      <App />
    </body>
  </StrictMode>,
)

const footer = document.getElementsById('react-footer')
if (footer) {
  createRoot(footer).render(
    <StrictMode>
      <Footer />
    </StrictMode>,
  )
}
