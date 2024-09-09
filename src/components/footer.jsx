import { useState } from 'react';
import { footer_links, footer_copyright } from '../data/footer_data.jsx'
import './footer.css'

function Footer() {
  // Toggles para las secciones colapsables
  const toggles = footer_links.map(() => useState(false))
  const [toggle_copyright, setToggleCopyRight] = useState(false)

  return (
    <>
      { /* footer para resoluciones grandes y extragrande */ }
      <footer className="bleed-bg bleed-bg-white bg-white w-full lg:block md:block sm:hidden xs:hidden">
        <div className='xl:container xl:mx-auto'>
          <div className='px-16 py-8'>
            <h6 
              className="text-center font-bold text-gray-800 text-lg pb-4 mx-auto border-b-4 border-b-gray-300">
          
              Otras webs de Unidad Editorial 
            </h6>
            <div className="grid grid-cols-4 gap-4 p-4 lg:mx-16 md:mx-4">
              {footer_links.map((link_group, index) => (
                <div key={index} className='text-left text-base'>
                  <h6 className="font-bold text-gray-800 mb-4">{link_group.title}</h6>
                  <ul className="text-gray-600">
                    {link_group.links.map((link, index) => (
                      <li key={index}><a className='cursor-pointer hover:text-red-600'>{link}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center text-gray-800 text-sm py-4">
              <p className='text-base font-bold border-t-4 border-t-gray-300 pt-8'>
                {footer_copyright.header}
              </p>
              <div className='xl:inline-block lg:mt-2 md:mt-4 grid lg:grid-cols-2 md:grid-cols-2'>
                {footer_copyright.links.map((link, index) => (
                  <a key={index} className='cursor-pointer hover:text-red-600 px-4 lg:mt-2'>{link}</a>
                ))

                }
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* footer for small and extra small resolutions (collapsible sections) */ }
      <footer>
        <div className="bg-white w-full lg:hidden md:hidden sm:block xs:block">
          <div className="xl:container xl:mx-auto">
            <div className="px-4 py-4">
              <h6 className="text-center font-bold text-gray-800 text-lg pb-4 mx-auto">
                Otras webs de Unidad Editorial
              </h6>
              {footer_links.map((link_group, index) => (
                <div key={index}>
                  <button 
                    className='text-left text-base bg-gray-100 w-full border-b-2 border-gray-300'
                    onClick={() => toggles[index][1](prev => !prev)}
                    >
                    <h6 className="font-bold text-gray-800 mb-4">{link_group.title}</h6>
                  </button>
                  <ul 
                    className={`text-gray-600 bg-white ${toggles[index][0] ? 'animation-collapse-down' : 'hidden'}`}>
                      {link_group.links.map((link, index) => (
                        <li key={index}><a className='cursor-pointer hover:text-red-600'>{link}</a></li>
                      ))}
                  </ul>
                </div>
              ))}
              <div className='text-gray-800 text-sm'>
                <button 
                  onClick={() => setToggleCopyRight(prev => !prev)}
                  className='text-center text-base font-bold py-8 bg-gray-100 border-b-2 border-gray-300 w-full'>
                  {footer_copyright.header}
                </button>
                <div className={`'xl:inline-block lg:mt-2 md:mt-4 grid lg:grid-cols-2 md:grid-cols-2' ${toggle_copyright ? 'animation-collapse-down' : 'hidden'}`}>
                  {footer_copyright.links.map((link, index) => (
                    <a key={index} className='text-left cursor-pointer hover:text-red-600 px-4 mt-2'>{link}</a>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
