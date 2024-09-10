import React, { useState, useEffect } from 'react'
import { Team_Icons_Data } from "../data/Team_Icons_data.jsx"

function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function NavBar() {
  // toggles para las secciones de la navbar
  const [radioMarca, setRadioMarca] = useState(false)
  const [cuidatePlus, setCuidatePlus] = useState(false)
  const [loMasTrending, setLoMasTrending] = useState(false)
  const [futbol, setFutbol] = useState(false)
  const [motor, setMotor] = useState(false)
  const [boxeo, setBoxeo] = useState(false)
  const [nfl, setNfl] = useState(false)
  const [otrosDeportes, setOtrosDeportes] = useState(false)
  const [mas, setMas] = useState(false)

  const [isSticky, setIsSticky] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {

    const banner = document.getElementById('sticky-navbar')

    const totalHeight = document.body.scrollHeight - globalThis.innerHeight

    function handleScroll() {
      const windowHeight = globalThis.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = globalThis.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      
      if (scrollableHeight > 0) {
        const percentage = Math.round((scrollTop / scrollableHeight) * 100);
        setScrollPercentage(Math.min(percentage, 100));
      } else {
        setScrollPercentage(100);
      }
    }

    globalThis.addEventListener('scroll', () => handleScroll())

    const handleIntersect = debounce(([event]) => {
      setIsSticky(event.intersectionRatio < 1)
    }, 100)

    const observer = new IntersectionObserver(
      ([event]) =>  {
        handleIntersect([event])
      },
      { threshold: [1], rootMargin: '-30px 0px 600px 0px' }
    )
    observer.observe(banner)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    console.log('Updated scroll percentage:', scrollPercentage);
  }, [scrollPercentage]);

  return (
    <div 
      id='sticky-navbar'
      className="mb-12 sticky top-0 z-50">
      { !isSticky ? (
        <>
        <div className='grid grid-cols-8 bg-white'>
            <div className='bg-white items-center'>
                <img
                    className='drop-shadow-xl mx-auto pl-10 pt-3'
                    src='../img/marca-logo-2.png'
                />
            </div> 

            <div className="grid grid-cols-3 col-start-3 col-span-4 whitespace-nowrap">
                <div className="grid grid-cols-3 container mx-auto bg-white items-center ml-2 transform scale-75 border-r-4 border-r-gray-200 pr-16">
                    <img
                        className='object-contain drop-shadow-xl mx-auto'
                        src='../img/icons/svg-0.svg'
                        alt='Radio Marca Icon'
                    />
                    <span className="ml-2 col-span-2 text-base font-bold text-black">Radio MARCA</span>
                </div>

                <div className="grid grid-cols-3 container mx-auto bg-white items-center ml-2 transform scale-75 border-r-4 border-r-gray-2000 pr-16">
                    <img
                        className='object-contain drop-shadow-xl mx-auto'
                        src='../img/icons/svg-3.svg'
                        alt='CuidatePlus Icon'
                    />
                    <span className="ml-2 col-span-2 text-base font-bold text-black">Cuidate Plus</span>
                </div>

                <div className="grid grid-cols-3 container mx-auto bg-white items-center ml-2 transform scale-75 pr-16">
                    <img
                        className='object-contain drop-shadow-xl mx-auto'
                        src='../img/icons/svg-4.svg'
                        alt='Lo + trending Icon'
                    />
                    <span className="ml-2 col-span-2 text-base font-bold text-black">Lo + trending</span>
                </div>
            </div>

            <div className="grid grid-cols-2 col-start-8">
                <div className="inline-flex items-center border-4 dark:border-gray-300 shadow-sm bg-white">
                    <img
                        src="../img/icons/svg-5.svg"  
                        alt="Mexico Flag"
                        className="w-5 h-5 mr-2"
                    />
                    <span className="text-sm font-medium text-gray-800">MX</span>
                    <img
                        src='../img/icons/svg-21.svg'
                        alt='Flechita'
                        className="ml-1"
                    />
                </div>

                <div className="container mx-auto flex bg-white transform">
                    <img
                        className='object-contain drop-shadow-xl mx-auto w-fit h-fit'
                        src='../img/icons/user-icon.png'
                        alt='Radio Marca Icon'
                    />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-8 bg-red-600 items-center justify-center">
            <button className="flex items-center justify-center font-bold">
                <span className="text-white">Fútbol</span>
            </button>
            <button className="flex items-center justify-center font-bold">
                <span className="text-white">Motor</span>
            </button>
            <button className="flex items-center justify-center font-bold">
                <span className="text-white">Boxeo</span>
            </button>
            <button className="flex items-center justify-center font-bold">
                <span className="text-white">NFL</span>
            </button>
            <button className="flex items-center justify-center font-bold">
                <span className="text-white">Otros deportes</span>
            </button>
            <button
                className="flex items-center justify-center font-bold">
                <span className="text-white">Más+</span>
            </button>

            <div className="col-span-2 flex items-center justify-center bg-red-600">
                <form className="max-w-md mx-auto mt-2 mb-2">   
                    <label htmlFor="default-search" className="text-sm font-medium text-black sr-only dark:text-black">Search</label>
                    <div className="relative">
                        <input type="search" id="default-search" className="block w-full p-4 text-sm text-black border border-gray-300 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none border dark:border-gray-600 ps-4 pe-4">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg> 
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div className='relative bg-gray-100 lg:block md:hidden sm:hidden xs:hidden shadow-xl'>
                <ul className='inline-flex'>
                {Team_Icons_Data.map(
                      (image, index) =>    
                    <div className="py-4 xl:scale-125 2xl:px-8 xl:px-4 lg:px-4 md:px-4 flex flex-shrink cursor-pointer" key={index}>
                      <img key={index} 
                      src={`../img/icons/equipos_deportes/small/${image}`} 
                      alt="info">
                      </img>
                    </div>
                )} 
                </ul>
        </div>
        </>
      ) : (
        <div className='bg-white relative sticky top-0 z-50 inline-flex h-12 w-full'>
            <img 
              className='ml-10 cursor-pointer z-20'
              src='../img/icons/marca_fondo_blanco.jpg'
            />
            <div
              style={{ width: `${scrollPercentage}%` }}
              className='z-10 bg-red-600 h-12 w-${scrollPercentage} absolute top-0 left-0'
            ></div>
          </div>
      )}
    </div>
  )
}

export { NavBar }
