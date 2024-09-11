import React, { useState, useEffect } from 'react'
import { Team_Icons_Data } from "../data/Team_Icons_data.jsx"
import { RadioMarcaSvg } from '../components/navbar_icons.jsx'
import navbar_data from '../data/navbar_data.jsx'

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

  const [sectionActiveId, setSectionActiveId] = useState(-1)

  const [isSticky, setIsSticky] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const [showMenuSm, setShowMenuSm] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [currentLang, setCurrentLang] = useState('MX')

  function activateLangMenu() {
    setShowLangMenu(!showLangMenu)
    setSectionActiveId(-1)
  }

  function changeLang(lang) {
    setCurrentLang(lang)
    setShowLangMenu(false)
  }

  function showSection(section) {
    setSectionActiveId(section)
    setShowLangMenu(false)
  }

  useEffect(() => {

    const banner = document.getElementById('sticky-navbar')


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
      setShowLangMenu(isSticky)
      setSectionActiveId(-1)
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
      className="mb-12 sticky top-0 z-50 -mx-4">
      <div className='lg:block md:hidden sm:hidden xs:hidden'>
        { !isSticky ? (
          <>
          <div className='grid grid-cols-8 bg-white'>
              <div className='bg-white items-center'>
                  <img
                      className='drop-shadow-xl mx-auto h-16 xl:w-96 pl-10 pt-3 pb-3'
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
                  <div className='mt-4 relative'>
                    <button 
                        onClick={() => activateLangMenu()}
                        className="inline-flex items-center border-2 border-gray-300 shadow-sm bg-white self-start xl:p-1 lg:p-0 -ml-6">
                        <img
                          src={`../img/icons/lang/${currentLang}.svg`}
                          alt="Mexico Flag"
                          className="w-10 h-7 mr-2"
                        />
                        <span className="xl:text-sm lg:text-xs font-medium text-gray-800">{currentLang}</span>
                        <img
                            src='../img/icons/svg-21.svg'
                            alt='Flechita'
                            className="ml-1"
                        />
                    </button>
                  <div className={`${showLangMenu ? 'block' : 'hidden'} absolute items-center right-0 w-48 bg-white border border-gray-300 shadow-lg mt-2 z-50`}>
                      <option 
                        onClick={() => changeLang('MX')}
                        className={`px-4 py-2 flex items-center border-b-2 border-gray-300 cursor-pointer ${currentLang === 'MX' ? 'bg-red-600 text-white' : 'hover:bg-gray-200'}`}>
                        <img src='../img/icons/lang/MX.svg' alt='Mexico Flag' className="w-10 h-7 mr-2"/>
                        <span> México </span>
                      </option>
                      <option 
                        onClick={() => changeLang('ES')}
                        className={`px-4 py-2 flex items-center border-b-2 border-gray-300 cursor-pointer ${currentLang === 'ES' ? 'bg-red-600 text-white' : 'hover:bg-gray-200'}`}>
                        <img src='../img/icons/lang/ES.svg' alt='Spain Flag' className="w-10 h-7 mr-2"/>
                        <span> España </span>
                      </option>
                      <option 
                        onClick={() => changeLang('EN')}
                        className={`px-4 py-2 flex items-center border-b-2 border-gray-300 cursor-pointer ${currentLang === 'EN' ? 'bg-red-600 text-white' : 'hover:bg-gray-200'}`}>
                        <img src='../img/icons/lang/EN.svg' alt='World Flag' className="w-10 h-7 mr-2"/>
                        <span> English </span>
                      </option>
                      <option 
                        onClick={() => changeLang('US')}
                        className={`px-4 py-2 flex items-center cursor-pointer ${currentLang === 'US' ? 'bg-red-600 text-white' : 'hover:bg-gray-200'}`}>
                        <img src='../img/icons/lang/US.svg' alt='USA Flag' className="w-10 h-7 mr-2"/>
                        <span> USA </span>
                      </option>
                    </div>
                  </div>
                  <button className="container mx-auto flex bg-white transform mt-3 cursor-pointer active:scale-75">
                      <img
                          className='object-contain drop-shadow-xl mx-auto w-10 h-10'
                          src='../img/icons/user_red_icon.png'
                          alt='Iniciar sesión'
                      />
                  </button>
              </div>
          </div>

          <div className="grid grid-cols-8 bg-red-600 items-center justify-center text-lg h-16">
              <button 
                onMouseEnter={() => showSection(0)}
                onMouseLeave={() => showSection(-1)}
                className="flex items-center justify-center font-bold h-full border-red-300 hover:bg-gray-800">
                  <span className="text-white">Fútbol</span>
              </button>
              <button 
                onMouseEnter={() => showSection(1)}
                className="flex items-center justify-center font-bold h-full hover:bg-gray-800">
                  <span className="text-white">Motor</span>
              </button>
              <button 
                onMouseEnter={() => showSection(-1)}
                className="flex items-center justify-center font-bold h-full hover:bg-gray-800">
                  <span className="text-white">Boxeo</span>
              </button>
              <button 
                onMouseEnter={() => showSection(2)}
                className="flex items-center justify-center font-bold h-full hover:bg-gray-800">
                  <span className="text-white">NFL</span>
              </button>
              <button 
                onMouseEnter={() => showSection(3)}  
                className="flex items-center justify-center font-bold h-full hover:bg-gray-800">
                  <span className="text-white">Otros deportes</span>
              </button>
              <button
                onMouseEnter={() => showSection(4)}
                onMouseLeave={() => showSection(-1)}
                className="flex items-center justify-center font-bold h-full hover:bg-gray-800">
                  <span className="text-white">Más+</span>
              </button>

              <div className="col-span-2 flex items-center justify-center h-4 border-red-600">
                  <form className="max-w-md mx-auto xl:w-72 lg:w-56">   
                      <label htmlFor="default-search" className="text-xl font-medium text-red-600 sr-only">Search</label>
                      <div className="relative">
                          <button className="absolute inset-y-0 right-0 flex items-center border ps-4 pe-4 border-red-600">
                              <svg className="w-4 h-4 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                              </svg> 
                          </button>
                      </div>
                  </form>
              </div>
          </div>
            { sectionActiveId !== -1 ? (
                <div 
                  onMouseLeave={() => showSection(-1)}
                  className='absolute bg-gray-800 z-50 xl:p-10 lg:p-4 top-30 text-left w-full'>
                  <ul className='inline-flex gap-10'>
                    {navbar_data[sectionActiveId].categories.map(
                      (section, index) => (
                        <ul key={index} className='mx-4 text-left'>
                          <button className='text-white font-bold'>{section.title}</button>
                          { section.subcategories.map(
                            (subcategory, index) => (
                              <li key={index} className='text-white'>{subcategory}</li>
                            ))}
                        </ul>
                      )
                    )}
                  </ul>
                </div>
              ) : (
                <div className='relative bg-gray-100 lg:block md:hidden sm:hidden xs:hidden shadow-xl'>
                  <ul className='inline-flex'>
                  {Team_Icons_Data.map(
                        (image, index) =>    
                      <div className="py-4 2xl:px-6 xl:px-4 lg:px-4 md:px-4 flex flex-shrink cursor-pointer" key={index}>
                        <img key={index} 
                        src={`../img/icons/equipos_deportes/small/${image}`} 
                        alt="info">
                        </img>
                      </div>
                  )} 
                  </ul>
              </div>
              )}
          </>
        ) : (
          <div className='bg-white relative sticky top-0 z-50 inline-flex xl:h-10 sm:h-6 w-full'>
              <img 
                className='ml-20 sm:ml-10 xs:ml-10 cursor-pointer z-20 h-full'
                src='../img/icons/Marca.png'
              />
              <div
                style={{ width: `${scrollPercentage}%` }}
                className='z-10 bg-red-600 xl:h-10 sm:h-6 w-${scrollPercentage} absolute top-0 left-0'
              ></div>
            </div>
        )}
      </div>

      <div className='lg:hidden md:block sm:block xs:block -mb-4'>
        { !isSticky ? (
        <div className='sticky top-0 z-50'>
          <div className={`relative h-16 w-full ${showMenuSm ? 'animate-red-white' : 'animate-white-red'}`}>
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
                  className='text-white mx-4 self-start h-12 w-12 sm:block xs:hidden'
                >
                  <RadioMarcaSvg />
                </button>
                <button className="container mx-auto flex transform mt-1 cursor-pointer active:scale-75">
                  <img
                    className='object-contain drop-shadow-xl mx-auto w-10 h-10'
                    src='../img/icons/user_white_icon.png'
                    alt='Iniciar sesión'
                  />
                </button>
                <button 
                  onClick={() => setShowMenuSm(true)}
                  className='text-white mx-4 mt-3 self-start h-10 w-10'>
                  <svg
                    viewBox='0 0 100 100' width={40} height={40}>
                    <rect y={0} width={100} height={10} fill="white"></rect>
                    <rect y={30} width={100} height={10} fill="white"></rect>
                    <rect y={60} width={100} height={10} fill="white"></rect>
                  </svg>
                </button>
              </div>
              ) : (
                <button
                  className='h-16 w-16 -mt-2'
                  onClick={() => setShowMenuSm(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-fit text-red-600"
                    strokeWidth={12}
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
                <div className='inline-flex text-white'>
                  <span className='text-left sm:block xs:hidden' >Edición</span>
                  <button className='text-left inline-flex mr-2 active:border-b-2 active:border-white'>
                    <img src='../img/icons/lang/MX.svg' alt='Mexico Flag' className="-mt-2 w-10 h-10"/>
                    <span className='text-left sm:block xs:hidden'>MX</span>
                  </button>
                  <button className='text-left inline-flex mr-2'>
                    <img src='../img/icons/lang/ES.svg' alt='España Flag' className="-mt-2 w-10 h-10"/>
                    <span className='text-left sm:block xs:hidden'>ES</span>
                  </button>
                  <button className='text-left inline-flex mr-2'>
                    <img src='../img/icons/lang/EN.svg' alt='World Flag' className="-mt-2 w-10 h-10"/>
                    <span className='text-left sm:block xs:hidden'>EN</span>
                  </button>
                  <button className='text-left inline-flex mr-2'>
                    <img src='../img/icons/lang/US.svg' alt='USA Flag' className="-mt-2 w-10 h-10"/>
                    <span className='text-left sm:block xs:hidden'>US</span>
                  </button>
                </div>
                
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
