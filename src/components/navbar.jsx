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

  const [showMenuSm, setShowMenuSm] = useState(false)

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
      setShowMenuSm(isSticky)
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

  return (
    <div 
      id='sticky-navbar'
      className="mb-12 sticky top-0 z-50">
      <div className='lg:block md:hidden sm:hidden xs:hidden'>
        { !isSticky ? (
          <>
          <div className='grid grid-cols-8 bg-white'>
              <div className='bg-white items-center'>
                  <img
                      className='drop-shadow-xl mx-auto pl-10 pt-3'
                      src='../img/marca-logo-2.png'
                  />
              </div> 

              <div className="grid grid-cols-3 col-start-3 col-span-4 whitespace-nowrap text-xl">
                  <div className="grid grid-cols-3 container mx-auto bg-white items-center ml-2 transform scale-75 border-r-4 border-r-gray-200 pr-16">
                      <img
                          className='object-contain drop-shadow-xl mx-auto'
                          src='../img/icons/svg-0.svg'
                          alt='Radio Marca Icon'
                      />
                      <span className="ml-2 col-span-2 font-bold text-black">Radio MARCA</span>
                  </div>

                  <div className="grid grid-cols-3 container mx-auto bg-white items-center ml-2 transform scale-75 border-r-4 border-r-gray-2000 pr-16">
                      <img
                          className='object-contain drop-shadow-xl mx-auto'
                          src='../img/icons/svg-3.svg'
                          alt='CuidatePlus Icon'
                      />
                      <span className="ml-2 col-span-2 font-bold text-black">Cuidate Plus</span>
                  </div>

                  <div className="grid grid-cols-3 container mx-auto bg-white items-center ml-2 transform scale-75 pr-16">
                      <img
                          className='object-contain drop-shadow-xl mx-auto'
                          src='../img/icons/svg-4.svg'
                          alt='Lo + trending Icon'
                      />
                      <span className="ml-2 col-span-2 font-bold text-black">Lo + trending</span>
                  </div>
              </div>

              <div className="grid grid-cols-2 col-start-8">
                  <button className="inline-flex items-center border-2 border-gray-600 shadow-sm bg-white self-start mt-4">
                      <img
                          src="../img/icons/svg-5.svg"  
                          alt="Mexico Flag"
                          className="w-10 h-7 mr-2"
                      />
                      <span className="text-sm font-medium text-gray-800">MX</span>
                      <img
                          src='../img/icons/svg-21.svg'
                          alt='Flechita'
                          className="ml-1"
                      />
                  </button>

                  <div className="container mx-auto flex bg-white transform mt-2 cursor-pointer active:scale-75">
                      <img
                          className='object-contain drop-shadow-xl mx-auto w-10 h-10'
                          src='../img/icons/user_red_icon.png'
                          alt='Radio Marca Icon'
                      />
                  </div>
              </div>
          </div>

          <div className="grid grid-cols-8 bg-red-600 items-center justify-center text-xl h-20">
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

              <div className="col-span-2 flex items-center justify-center h-4 border-red-600">
                  <form className="max-w-md mx-auto xl:w-72 lg:w-56">   
                      <label htmlFor="default-search" className="text-xl font-medium text-red-600 sr-only">Search</label>
                      <div className="relative">
                          <input type="search" id="default-search" className="block w-full p-4 text-base text-red-600 border border-red-300 bg-white focus:ring-gray-300 focus:border-gray-300 placeholder-red-600" placeholder="Buscar" required />
                          <button className="absolute inset-y-0 right-0 flex items-center border ps-4 pe-4 border-red-600">
                              <svg className="w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                              </svg> 
                          </button>
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

      <div className='lg:hidden md:block sm:block xs:block -mb-4'>
        { !isSticky ? (
        <div className='sticky top-0 z-50'>
          <div className='relative h-16 w-full bg-red-600'>
          <button className='absolute left-10 z-20 h-16'>
            <img 
              className='w-16'
              src='../img/icons/marca_fondo_blanco.jpg'
            />
          </button>
          <div className='absolute right-0 mt-2'>
            { !showMenuSm ? (
              <div className='inline-flex'>
                <button
                  className='text-white mx-4 self-start h-12 w-12'
                >
                  <img
                    className='drop-shadow-xl'
                    src='../img/icons/svg-0.svg'
                    alt='Radio Marca Icon'
                  />
                </button>
                <button 
                  onClick={() => setShowMenuSm(true)}
                  className='text-white mx-4 mt-3 self-start h-10 w-10'>
                  <svg
                    viewBox='0 0 100 100' width={40} height={40}>
                    <rect  y={0} width={100} height={20}></rect>
                    <rect y={30} width={100} height={20}></rect>
                    <rect y={60} width={100} height={20}></rect>
                  </svg>
                </button> 
              </div>
              ) : (
                <button
                  className='h-16 w-16'
                  onClick={() => setShowMenuSm(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-fit text-red-300"
                    strokeWidth={16}
                    fill="none"
                    viewBox="0 0 100 100"
                    stroke="currentColor">
                    <path d="M25 75L75 25M25 25l50 50" />
                  </svg>
                </button> )}
              </div>
            </div>
          {showMenuSm ? (
            <div className={`sm:w-96 xs:w-56 bg-red-950 absolute right-0 p-8 shadow-xl ${showMenuSm ? 'animate-collapse-left' : '' } `}>
              <div>   
                <button className="my-4 border-b-4 pb-2 border-white flex text-left sm:text-2xl xs:text-xl font-bold w-full">
                    <span className="ml-4 text-white">Fútbol</span>
                </button>
                <button className="my-4 border-b-4 pb-2 border-white flex text-left sm:text-2xl xs:text-xl font-bold w-full">
                    <span className="ml-4 text-white">Motor</span>
                </button>
                <button className="my-4 border-b-4 pb-2 border-white flex text-left sm:text-2xl xs:text-xl font-bold w-full">
                    <span className="ml-4 text-white">Boxeo</span>
                </button>
                <button className="my-4 border-b-4 pb-2 border-white flex text-left sm:text-2xl xs:text-xl font-bold w-full">
                    <span className="ml-4 text-white">NFL</span>
                </button>
                <button className="my-4 border-b-4 pb-2 border-white flex text-left sm:text-2xl xs:text-xl font-bold w-full overflow-hidden whitespace-nowrap">
                    <span className="ml-4 text-white">Otros deportes</span>
                </button>
                <button className="my-4 border-b-4 pb-2 border-white flex text-left sm:text-2xl xs:text-xl font-bold w-full">
                    <span className="ml-4 text-white">Más+</span>
                </button>
              </div>
            </div> ) : (<></>)
          }
        </div>
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
    </div>
  )
}

export { NavBar }
